import {tuck} from '../data/tuck.mjs';
import {getCollection} from 'astro:content';
import {releasedProducts,publicCatalog,hasMacApps} from './catalog.mjs';
import {published,categories,validateArchive,validateRoutes} from './archive.mjs';
import {contentIndex} from './content-language.mjs';
export async function siteData(){
 const journalIndex=contentIndex(await getCollection('journal'));
 const musicIndex=contentIndex(await getCollection('music'));
 const journal=published(journalIndex.originals),music=published(musicIndex.originals);
 validateArchive([...journal,...music],publicCatalog,music);validateRoutes(journalIndex.all,musicIndex.all);
 const fixed=['music','journal','journal/series','software','software/audio-plugins','software/downloads','software/manuals','software/release-notes','software/beta-testing',tuck.path,'support','about',...Object.keys(categories).map(k=>'journal/category/'+k)];
 if(hasMacApps)fixed.push('software/macos-apps');
 const listing=[...fixed,...[...new Set(journal.flatMap(e=>e.data.tags))].map(t=>'journal/tag/'+encodeURIComponent(t)),...[...new Set(journal.map(e=>e.data.series).filter(Boolean))].map(s=>'journal/series/'+s)];
 const routes=listing.flatMap(path=>['en','ko'].map(locale=>({path:(locale==='ko'?'ko/':'')+path,logicalPath:path,locale,alternates:{en:path+'/',ko:'ko/'+path+'/'}})));
 for(const [index,prefix] of [[journalIndex,'journal'],[musicIndex,'music']])for(const entry of index.all){
  const source=index.originals.find(e=>e.id===(entry.data.translation_of||entry.id));
  const matches=[source,...index.translations.filter(e=>e.data.translation_of===source.id)];
  const alternates=Object.fromEntries(matches.map(e=>[e.data.language,prefix+'/'+e.id+'/']));
  routes.push({path:prefix+'/'+entry.id,logicalPath:prefix+'/'+entry.id,locale:entry.data.language,alternates});
 }
 for(const p of releasedProducts)for(const suffix of ['',...(p.localizations.en.manual&&p.localizations.ko.manual?['/manual']:[]),...(p.localizations.en.release&&p.localizations.ko.release?['/release-notes']:[])]){
  const path='software/'+p.id+suffix;
  for(const locale of ['en','ko'])routes.push({path:(locale==='ko'?'ko/':'')+path,logicalPath:path,locale,alternates:{en:path+'/',ko:'ko/'+path+'/'}});
 }
 const ids=routes.map(r=>r.path);if(new Set(ids).size!==ids.length)throw Error('Localized route collision');
 return {journal,music,journalIndex,musicIndex,routes};
}

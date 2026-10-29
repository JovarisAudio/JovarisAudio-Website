export function contentIndex(entries){
 const published=entries.filter(e=>!e.data.draft);
 const originals=published.filter(e=>!e.data.translation_of).map(e=>({...e,data:{...e.data,original_language:e.data.original_language||e.data.language}}));
 for(const e of originals)if(e.data.original_language!==e.data.language)throw Error('Original language must match the original text');
 const ids=new Set(originals.map(e=>e.id));
 const translations=published.filter(e=>e.data.translation_of&&e.data.translation_reviewed);
 const pairs=new Set();
 for(const e of translations){
  if(!ids.has(e.data.translation_of))throw Error('Translation needs a published original');
  const original=originals.find(o=>o.id===e.data.translation_of);
  if(e.data.language===original.data.language)throw Error('Translation must use a different language');
  if(e.data.original_language!==original.data.language)throw Error('Translation original_language must match source');
  const key=e.data.translation_of+':'+e.data.language;
  if(pairs.has(key))throw Error('Duplicate reviewed translation');pairs.add(key);
 }
 return {originals,translations,all:[...originals,...translations]};
}
export function sourceEntry(entry,index){return entry.data.translation_of?index.originals.find(e=>e.id===entry.data.translation_of):entry;}
export function entryInLanguage(entry,index,locale){
 const source=sourceEntry(entry,index);
 if(source.data.language===locale)return source;
 const translated=index.translations.find(e=>e.data.translation_of===source.id&&e.data.language===locale);
 if(!translated)return source;
 return {...translated,data:{...source.data,...translated.data,title:source.data.type?source.data.title:translated.data.title,category:source.data.category,series:source.data.series,series_number:source.data.series_number,series_title:source.data.series_title,related_products:source.data.related_products,related_music:source.data.related_music}};
}
export function hasTranslation(entry,index,locale){return entryInLanguage(entry,index,locale).data.language===locale;}
export function contentAlternates(entry,index,prefix){
 return Object.fromEntries(['en','ko'].filter(l=>hasTranslation(entry,index,l)).map(l=>[l,prefix+'/'+entryInLanguage(entry,index,l).id+'/']));
}
export function localizeReleasedProduct(product,locale){
 const copy=product.localizations?.[locale];
 if(!copy||!product.localizations_reviewed)throw Error('Released product requires reviewed EN and KO copy');
 return {...product,...copy,id:product.id,title:product.title,kind:product.kind,publication:product.publication,download:product.download,platforms:product.platforms,price:product.price,version:product.version};
}

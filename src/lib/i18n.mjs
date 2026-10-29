import {parse,serialize} from 'parse5';
import translations from '../data/translations.json' with {type:'json'};
const pairs=Object.entries(translations).sort((a,b)=>b[0].length-a[0].length);
export function t(value,locale='en'){
 if(locale==='ko')return value;
 let result=String(value??'');
 for(const [ko,en] of pairs)result=result.split(ko).join(en);
 return result.replace(/(\d+)편/g,'$1 entries');
}
export function localizedPath(path='',locale='en',base='/'){
 return base.replace(/\/?$/,'/')+(locale==='ko'?'ko/':'')+path.replace(/^\/+|\/+$/g,'')+(path?'/' : '');
}
export function localizeHTML(html,locale){
 if(locale==='ko')return html;
 const tree=parse(html);
 function walk(node,protectedContent=false){
  const attrs=node.attrs||[];
  const protectedHere=protectedContent||attrs.some(a=>['data-content','data-official-name'].includes(a.name))||['script','style','code','pre'].includes(node.tagName);
  if(!protectedHere){
   if(node.nodeName==='#text')node.value=t(node.value,locale);
   for(const attr of attrs)if(['alt','aria-label','placeholder','content'].includes(attr.name))attr.value=t(attr.value,locale);
  }
  for(const child of node.childNodes||[])walk(child,protectedHere);
 }
 walk(tree);return serialize(tree);
}

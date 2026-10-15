import {validateCatalog} from './catalog.mjs';
export const categories={'studio-journal':'Studio Journal','study-notes':'Study Notes','listening-notes':'Listening Notes','development-log':'Development Log'};
export function published(entries){return entries.filter(e=>!e.data.draft).sort((a,b)=>b.data.date-a.data.date);}
export function seriesEntries(entries,id){return entries.filter(e=>e.data.series===id).sort((a,b)=>a.data.series_number-b.data.series_number);}
export function validateArchive(entries,products,music){const seen=new Set();for(const e of entries){if(e.data.series){const key=e.data.series+':'+e.data.series_number;if(seen.has(key))throw Error('Duplicate series number: '+key);seen.add(key);}for(const id of e.data.related_products)if(!products.some(p=>p.id===id))throw Error('Unknown product '+id);for(const id of e.data.related_music)if(!music.some(m=>m.id===id))throw Error('Unknown music '+id);}}
export function related(entries,current){return entries.filter(e=>e.id!==current.id).map(e=>({e,score:(e.data.category===current.data.category?1:0)+e.data.tags.filter(t=>current.data.tags.includes(t)).length*2})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||b.e.data.date-a.e.data.date).slice(0,3).map(x=>x.e);}

export function validateProducts(products){return validateCatalog(products);}

export function validateRoutes(journal,music){const reserved=new Set(['category','series','tag']);for(const e of [...journal,...music]){if(!/^[a-z0-9-]+$/.test(e.id))throw Error('Use a flat, lowercase slug: '+e.id);}for(const e of journal)if(reserved.has(e.id))throw Error('Reserved Journal slug: '+e.id);}

import products from '../data/products.json' with {type:'json'};
export function validateCatalog(items){
 const ids=new Set();let previews=0;
 for(const p of items){
  if(!p.id||!p.title||ids.has(p.id))throw Error('Invalid or duplicate catalog identity');ids.add(p.id);
  if(!['internal','preview','released'].includes(p.publication))throw Error('Invalid publication state');
  if(p.publication==='internal')throw Error('Internal product data must stay outside the public repository');
  if(p.publication==='preview'){
   previews++;
   if(p.kind!=='audio-plugins')throw Error('Preview is reserved for audio plugins');
   if(Object.keys(p).some(k=>!['id','title','kind','publication','icon'].includes(k)))throw Error('Preview may contain only name and official symbol');
  }
  if(p.publication==='released'){
   if(!['audio-plugins','macos-apps'].includes(p.kind))throw Error('Invalid product kind');
   if(!p.description||!p.version||!p.platforms?.length||!p.screenshots?.length||p.price!==0)throw Error('Released product needs verified release metadata and free pricing');
   if(p.platforms.some(x=>!x.verified||!x.os||!x.formats?.length))throw Error('Only verified platforms and formats may be listed');
   if(!p.download?.approved||p.download.visibility!=='public')throw Error('Released product needs approved public download');
   const url=new URL(p.download.url);
   if(url.protocol!=='https:'||!['github.com','www.dropbox.com','dropbox.com','dl.dropboxusercontent.com'].includes(url.hostname))throw Error('Unsupported download provider');
   if(!/^[a-f0-9]{64}$/.test(p.download.sha256))throw Error('Download needs SHA-256');
   if(p.screenshots.some(s=>!s.src.startsWith('/images/')||!s.alt))throw Error('Release image requires local path and alt text');
  }
 }
 if(previews>3)throw Error('At most three previews may be public');
 return items;
}
validateCatalog(products);
export const releasedProducts=products.filter(p=>p.publication==='released');
export const previewProducts=products.filter(p=>p.publication==='preview');
export const hasMacApps=releasedProducts.some(p=>p.kind==='macos-apps');
export const publicCatalog=products;

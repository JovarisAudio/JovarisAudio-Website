import site from '../data/site.json' with {type:'json'};
export function supportURL(override){
 const candidate=override?.trim()||site.supportURL;
 if(!candidate)return undefined;
 const url=new URL(candidate);
 if(url.protocol!=='https:'||!['buymeacoffee.com','www.buymeacoffee.com'].includes(url.hostname)||url.username||url.password||!/^\/[a-zA-Z0-9_.-]+\/?$/.test(url.pathname))throw Error('Support URL must be a public Buy Me a Coffee profile');
 return url.href;
}

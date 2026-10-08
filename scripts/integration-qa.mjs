import fs from 'node:fs';import {spawn,spawnSync} from 'node:child_process';
const files=[];let server;
const env={...process.env,ASTRO_TELEMETRY_DISABLED:'1',PUBLIC_SITE_URL:'https://qa.github.io',PUBLIC_BASE_PATH:'/qa/'};
const run=(args,e=env)=>{const r=spawnSync(process.execPath,args,{env:e,stdio:'inherit'});if(r.status!==0)throw Error('Failed: '+args.join(' '));};
try{
 for(const n of [10,2,1]){const file=`content/journal/qa-${n}.md`;if(fs.existsSync(file))throw Error('Fixture file exists: '+file);fs.writeFileSync(file,`---\ntitle: "검증 기록 ${n}"\ndate: 2026-10-08\ndescription: "검증 전용"\ndraft: false\ncategory: study-notes\nseries: qa-book\nseries_title: QA Book\nseries_number: ${n}\ntags: [piano]\nrelated_products: [orange-lift]\nrelated_music: [qa-song]\n---\n본문검색토큰 harmonic 연구 검증 원고\n`);files.push(file);}
 for(const [file,text] of [['content/journal/qa-draft.md','---\ntitle: 비공개초안검증토큰\ndate: 2026-10-08\ndescription: 검증\ndraft: true\ncategory: studio-journal\n---\n비공개'],['content/music/qa-song.md','---\ntitle: 검증 음악\ndate: 2026-10-08\ndescription: 검증 전용\ndraft: false\ntype: original\ntags: [music]\n---\n검증 음악']]){if(fs.existsSync(file))throw Error('Fixture file exists: '+file);fs.writeFileSync(file,text);files.push(file);}
 run(['node_modules/astro/astro.js','build']);run(['scripts/qa.mjs']);
 server=spawn(process.execPath,['node_modules/astro/astro.js','preview','--host','127.0.0.1','--port','4322'],{env,stdio:['ignore','pipe','inherit']});
 await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Preview timed out')),15000);server.stdout.on('data',d=>{if(d.toString().includes('Local')){clearTimeout(timer);resolve();}});server.on('error',reject);});
 run(['scripts/browser-qa.mjs'],{...env,QA_ORIGIN:'http://127.0.0.1:4322',QA_BASE:'/qa/',QA_FIXTURES:'1'});
}finally{server?.kill();for(const f of files)fs.unlinkSync(f);run(['node_modules/astro/astro.js','build'],{...process.env,ASTRO_TELEMETRY_DISABLED:'1',PUBLIC_SITE_URL:'',PUBLIC_BASE_PATH:'/'});}

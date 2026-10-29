import fs from 'node:fs';import assert from 'node:assert/strict';import {spawn,spawnSync} from 'node:child_process';import {chromium} from '@playwright/test';
const env={...process.env,ASTRO_TELEMETRY_DISABLED:'1',PUBLIC_SITE_URL:'https://qa.github.io',PUBLIC_BASE_PATH:'/qa/'};
const productFile='src/data/products.json',originalProducts=fs.readFileSync(productFile,'utf8');const created=[];let server,browser;
const before=new Map(['content/journal','content/music'].flatMap(dir=>fs.readdirSync(dir).filter(n=>n.endsWith('.md')).map(n=>[dir+'/'+n,fs.readFileSync(dir+'/'+n,'utf8')])));
const build=environment=>{const run=spawnSync(process.execPath,['node_modules/astro/astro.js','build'],{env:environment,encoding:'utf8'});if(run.status)throw Error(run.stderr||run.stdout)};
const write=(path,text)=>{if(fs.existsSync(path))throw Error('Fixture exists: '+path);fs.writeFileSync(path,text);created.push(path)};
const article=(title,extra,body,type='journal')=>`---\ntitle: "${title}"\ndescription: "${title} description"\ndate: 2026-10-15\ndraft: false\n${type==='journal'?'category: study-notes':'type: original'}\nlanguage: ${extra.includes('language: en')?'en':'ko'}\noriginal_language: ko\n${extra.replace('language: en\n','')}\n---\n${body}\n`;
try{
 write('content/journal/qa-global-origin.md',article('오늘도, 계속하는 일에 관하여.','','원문 고유문장 — 전체, 음악, 감상의 문체를 보존합니다.'));
 write('content/journal/qa-global-reviewed.md',article('Reviewed English title','language: en\ntranslation_of: qa-global-origin\ntranslation_reviewed: true','Reviewed English prose.'));
 write('content/journal/qa-global-korean.md',article('검증 전용 한국어 원문','','이 원문에는 영어 번역이 없습니다.'));
 write('content/journal/qa-global-unreviewed.md',article('UNREVIEWED_SECRET_TRANSLATION','language: en\ntranslation_of: qa-global-korean\ntranslation_reviewed: false','UNREVIEWED_SECRET_BODY'));
 write('content/journal/qa-global-native-en.md','---\ntitle: Native English original\ndescription: Original English description\ndate: 2026-10-15\ndraft: false\ncategory: listening-notes\nlanguage: en\n---\nOriginal English essay.\n');
 write('content/music/qa-global-song.md',article('오늘도, 계속하는 일에 관하여.','','음악 원문 소개.', 'music'));
 write('content/music/qa-global-song-en.md',article('DO NOT REPLACE OFFICIAL MUSIC TITLE','language: en\ntranslation_of: qa-global-song\ntranslation_reviewed: true','Reviewed music description.', 'music'));
 const catalog=JSON.parse(originalProducts);catalog.push({id:'qa-global-release',title:'QA Bilingual Release',kind:'audio-plugins',publication:'released',price:0,version:'0.0-test',description:'Test fixture',platforms:[{os:'Test OS',formats:['AU'],verified:true}],screenshots:[{src:'/images/ja-symbol.webp',alt:'Test release artwork'}],localizations_reviewed:true,localizations:{en:{description:'Reviewed English product description',manual:'Reviewed English installation instructions',release:'Reviewed English release notes',faq:[{question:'Fixture question?',answer:'English fixture answer.'}]},ko:{description:'검수된 한국어 제품 소개',manual:'검수된 한국어 설치 안내',release:'검수된 한국어 업데이트 내역',faq:[{question:'검증 질문?',answer:'한국어 검증 답변.'}]}},download:{url:'https://github.com/example/fixture/releases/download/v0/test.zip',sha256:'a'.repeat(64),approved:true,visibility:'public'}});fs.writeFileSync(productFile,JSON.stringify(catalog));
 build(env);
 assert(!fs.existsSync('dist/journal/qa-global-unreviewed'));assert(!fs.existsSync('dist/ko/journal/qa-global-korean'));
 const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');assert(sitemap.includes('/journal/qa-global-reviewed/'));assert(!sitemap.includes('qa-global-unreviewed'));assert(sitemap.includes('/ko/software/qa-global-release/'));
 server=spawn(process.execPath,['node_modules/astro/astro.js','preview','--host','127.0.0.1','--port','4325'],{env,stdio:['ignore','pipe','inherit']});
 await new Promise((resolve,reject)=>{const timeout=setTimeout(()=>reject(Error('Preview timeout')),15000);server.stdout.on('data',b=>{if(b.toString().includes('Local')){clearTimeout(timeout);resolve()}});server.on('error',reject)});
 browser=await chromium.launch({headless:true});const page=await browser.newPage({javaScriptEnabled:false});const goto=p=>page.goto('http://127.0.0.1:4325/qa/'+p);
 await goto('journal/qa-global-origin/');assert.equal(await page.locator('html').getAttribute('lang'),'ko');assert.match(await page.locator('[data-content]').allTextContents().then(x=>x.join(' ')),/원문 고유문장/);assert.equal(await page.locator('[data-language="en"]').getAttribute('href'),'/qa/journal/qa-global-reviewed/');
 await page.locator('[data-language="en"]').click();assert.equal(await page.locator('html').getAttribute('lang'),'en');assert.match(await page.locator('article').innerText(),/Reviewed English prose/);assert.equal(await page.locator('link[hreflang="ko"]').getAttribute('href'),'https://qa.github.io/qa/journal/qa-global-origin/');
 await goto('journal/qa-global-korean/');assert.equal(await page.locator('link[hreflang="en"]').count(),0);assert.equal(await page.locator('[data-language="en"]').getAttribute('href'),'/qa/journal/');
 await goto('journal/qa-global-native-en/');assert.equal(await page.locator('html').getAttribute('lang'),'en');assert.equal(await page.locator('[data-language="ko"]').getAttribute('href'),'/qa/ko/journal/');
 await goto('journal/');assert.match(await page.locator('#results').innerText(),/Original language: Korean/);assert(!/UNREVIEWED_SECRET/.test(await page.locator('body').innerText()));assert.equal(await page.locator('a[href="/qa/journal/qa-global-reviewed/"]').count(),1);
 await goto('music/');assert(!/DO NOT REPLACE/.test((await page.locator('main h3').allTextContents()).join(' ')));assert.match(await page.locator('main').innerText(),/오늘도, 계속하는 일에 관하여/);
 await goto('music/qa-global-song-en/');assert.equal(await page.locator('h1').innerText(),'오늘도, 계속하는 일에 관하여.');
 await goto('software/qa-global-release/');assert.match(await page.locator('main').innerText(),/Reviewed English product description/);assert.equal(await page.locator('link[hreflang="ko"]').getAttribute('href'),'https://qa.github.io/qa/ko/software/qa-global-release/');assert.match(await page.locator('main').innerText(),/English fixture answer/);
 await goto('ko/software/qa-global-release/manual/');assert.match(await page.locator('main').innerText(),/검수된 한국어 설치 안내/);
 await goto('software/qa-global-release/manual/');assert.match(await page.locator('main').innerText(),/Reviewed English installation/);
 for(const file of fs.readdirSync('dist/_astro').filter(f=>f.endsWith('.js'))){const data=fs.readFileSync('dist/_astro/'+file,'utf8');assert(!data.includes('UNREVIEWED_SECRET'));assert(!data.includes('MutationObserver'));}
 console.log('PASS: original URL/prose preserved; reviewed translations only; real hreflang; original-language labels; official music names; bilingual released product, FAQ and manuals');
}finally{
 await browser?.close();server?.kill();for(const path of created)fs.unlinkSync(path);fs.writeFileSync(productFile,originalProducts);
 for(const [path,text] of before)assert.equal(fs.readFileSync(path,'utf8'),text,'Content changed: '+path);
 build({...process.env,ASTRO_TELEMETRY_DISABLED:'1',PUBLIC_SITE_URL:'https://jovarisaudio.github.io',PUBLIC_BASE_PATH:'/JovarisAudio-Website/'});
 assert(!fs.existsSync('dist/journal/qa-global-origin'));assert(!fs.existsSync('dist/software/qa-global-release'));console.log('PASS: fixtures removed, existing content preserved, final project-base build restored');
}

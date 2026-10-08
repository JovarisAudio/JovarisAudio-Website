import {test} from 'node:test';import assert from 'node:assert/strict';import {seriesEntries,published,validateArchive,related} from '../src/lib/archive.mjs';
const entry=(id,n,series='book',draft=false)=>({id,data:{series,series_number:n,category:'study-notes',date:new Date('2026-10-08'),draft,tags:['piano'],related_products:[],related_music:[]}});
test('series numeric order and independent numbering',()=>{const a=[entry('ten',10),entry('two',2),entry('one',1),entry('other',1,'another')];assert.deepEqual(seriesEntries(a,'book').map(e=>e.id),['one','two','ten']);validateArchive(a,[],[])});
test('draft does not enter archive',()=>assert.deepEqual(published([entry('draft',1,'book',true),entry('live',2)]).map(e=>e.id),['live']));
test('duplicates fail',()=>assert.throws(()=>validateArchive([entry('a',1),entry('b',1)],[],[]),/Duplicate/));
test('unresolved private music and product references fail',()=>{let a=entry('a',1);a.data.related_music=['private'];assert.throws(()=>validateArchive([a],[],[]),/Unknown music/);a.data.related_music=[];a.data.related_products=['unknown'];assert.throws(()=>validateArchive([a],[],[]),/Unknown product/)});
test('related entries exclude current article',()=>{const a=entry('a',1),b=entry('b',2);assert.deepEqual(related([a,b],a).map(e=>e.id),['b'])});

import {validateProducts} from '../src/lib/archive.mjs';
test('private or unapproved download cannot reach a build',()=>{assert.throws(()=>validateProducts([{kind:'audio-plugins',status:'클로즈 테스트',screenshots:[],download:{url:'https://github.com/x/y',approved:true,visibility:'public',sha256:'a'.repeat(64)}}]),/Only approved/)});
test('public download needs trusted HTTPS provider, hash and alt',()=>{const p={kind:'audio-plugins',status:'공개 릴리스',screenshots:[],download:{url:'https://github.com/x/y/releases/download/v1/x.zip',approved:true,visibility:'public',sha256:'a'.repeat(64)}};validateProducts([p]);p.download.url='https://example.org/a';assert.throws(()=>validateProducts([p]),/Unsupported/);p.download=null;p.screenshots=[{src:'/images/a.png',alt:''}];assert.throws(()=>validateProducts([p]),/alt/)});

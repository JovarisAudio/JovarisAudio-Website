# Jovaris Audio — Globalization & Brand Architecture

## 1. 기존 구조와 이번 범위

- Astro 5.18.2, Node/pnpm, 정적 GitHub Pages 사이트. 기존 프레임워크와 배포 호스트를 유지한다.
- 기존 주 경로 `/`, `/music/`, `/journal/`, `/software/`와 Journal의 4개 카테고리·시리즈·태그 구조를 유지한다.
- 기존 언어 구현은 클라이언트 DOM 치환·브라우저 언어 자동 선택이었다. 이를 정적 HTML 현지화와 명시적 언어 링크로 교체했다.
- 현재 실제 Music/Journal Markdown 원고는 등록되어 있지 않다. 원고를 새로 쓰거나 실제 작품·스트리밍 링크를 만들어 채우지 않았다.
- 기존 제품 카탈로그는 Available 0개, In the Works 3개다. 이 공개 정책은 그대로 유지한다.

## 2. 브랜드와 Home 정보 구조

Music / Journal / Software는 동등한 브랜드 진입점이다. 메인 이미지·색상·로고·슬로건 `Every day, we push the stone again.`은 유지한다.

Hero에서 세 영역으로 직접 이동한다. Music은 실제 작품 중 `featured: true`를 우선하고, Journal은 `curated: true`를 우선한 뒤 최신순을 유지한다. 실제 작품이나 글이 없으면 가짜 카드나 대표작을 만들지 않는다. Software는 창작 과정에서 만든 도구로 소개하며, 실제 출시 제품만 Home 카드로 표시한다. 기존의 Software 업데이트 전용 Home 섹션은 제거했다.

Footer와 About의 브랜드 설명은 음악·청취·연구·창작 과정에서 만든 도구를 함께 다룬다. Software가 다른 영역의 상위 브랜드가 되지 않도록 한다. 외부 채널 URL은 확인된 설정이 없어 새로 만들지 않았다.

## 3. 언어와 URL 설계

프로젝트의 `BASE_URL`은 유지하며 아래 경로는 그 뒤에 붙는다. 현재 Pages 기준 base는 `/JovarisAudio-Website/`다.

| 화면 | English | 한국어 |
|---|---|---|
| Home | `/` | `/ko/` |
| Music | `/music/` | `/ko/music/` |
| Journal 목록·카테고리·시리즈 | 기존 root 경로 | `/ko/` + 기존 경로 |
| Software·제품 상세·설치 안내 | 기존 root 경로 | `/ko/` + 기존 경로 |
| About / Support | 기존 root 경로 | `/ko/` + 기존 경로 |

첫 방문은 브라우저 언어와 관계없이 영어다. `EN / 한국어`는 실제 링크이므로 JavaScript 없이도 동작한다. 선택은 localStorage에 저장한다. 이후 Home 방문에 한해 사용자가 직접 저장한 한국어 선호를 적용한다. 명시적으로 연 다른 언어의 목록·제품·원고 URL을 강제로 변경하지 않는다. 저장소 접근이 제한되어도 언어 링크는 동작한다.

UI 문자열은 `src/data/translations.json`, 빌드 시 HTML 현지화는 `src/middleware.ts`와 `src/lib/i18n.mjs`가 담당한다. HTML 파서로 텍스트·접근성 속성을 처리하며, `data-content`·`data-official-name`·script·style·code·pre는 보호한다. 런타임 번역 API나 본문 MutationObserver를 사용하지 않는다. 영어 HTML은 처음부터 영어이고 언어 전환 때문에 본문을 다시 그리지 않는다.

## 4. Journal / Music 원문·번역 운영

기존 원고 URL을 보존하기 위해 원고 상세는 목록의 `/ko/` 규칙과 구분한다.

- 예: 기존 한국어 원문 `journal/my-note.md`는 계속 `/journal/my-note/`에 있으며 `lang="ko"`다.
- 영어 목록에도 번역이 없는 글을 원문 제목·언어 표시와 함께 노출한다. 존재하지 않는 `/ko/journal/my-note/`나 가짜 영어 상세 페이지는 생성하지 않는다.
- 검수된 번역은 별도 Markdown 파일의 고유 slug로 실제 상세 페이지를 생성한다. 예: `/journal/my-note-en/`.
- 원문·번역이 모두 있으면 실제 두 URL 사이에 EN / 한국어 링크와 hreflang을 연결한다.
- 요청한 번역이 없으면 해당 언어의 Journal 또는 Music 목록으로 이동한다. 없는 번역을 완성본처럼 보여주지 않는다.
- Music도 같은 원칙을 사용하며 공식 곡·앨범 제목은 번역본에서도 원문 공식 표기를 유지한다. 소개·본문만 검수 번역을 사용한다.
- Album / Single / Project 유형도 스키마에서 지원하되, 실제 항목이 있을 때만 해당 필터를 표시한다.

원문 기본 메타데이터:

```yaml
language: ko
original_language: ko
# featured: true  # Music 대표 항목으로 우선
# curated: true   # Home Journal 우선 항목
```

기존 파일은 `language`가 없으면 한국어로 취급한다. 원문의 `original_language`가 없으면 작성 언어에서 추론한다. 원문 텍스트는 수정하지 않는다.

선별한 번역본의 예:

```yaml
language: en
original_language: ko
translation_of: my-note
translation_reviewed: true
```

번역도 기존 title/date/description/draft/category 또는 type 등의 필수 메타데이터를 갖춘 별도 콘텐츠 파일이다. `translation_reviewed` 기본값은 false이며, 미검수·초안 번역은 페이지·목록·sitemap에 들어가지 않는다. 원문이 미공개이거나 같은 언어의 검수 번역이 중복되면 검증에서 차단한다. 시리즈 번호·분류·관련 작품 관계는 원문에서 유지한다. 공식 제목과 SEO 제목은 분리했다.

## 5. Software 공개와 이중언어

공개 상태·무료 정책은 `docs/PUBLICATION.md`를 따른다. 내부 로드맵은 저장소 밖에 유지한다.

- preview는 최대 3개, 이름·기존 심벌만. 현재 Common Ground / JA_OrangeLift / Phase Check.
- 실제 공개 다운로드가 없어 현재 Available은 0개다. 검증되지 않은 빌드·포맷·버전을 출시 제품으로 승격하지 않았다.
- released만 상세 경로와 양 언어 sitemap 항목을 생성한다.
- released에는 `localizations_reviewed: true`, `localizations.en`과 `.ko`의 description/manual이 필요하다. release/features/issues/faq가 있으면 양쪽 모두 제공한다.
- 실제 출시 제품의 공식 이름·버전·검증된 OS/포맷·다운로드와 해시는 언어 간 공유하며, 사용자 설명·설치·업데이트·FAQ만 검수된 언어별 원고를 사용한다.
- 공개 가능한 macOS 앱이 있을 때만 별도 컬렉션을 표시한다. 실제 제품이 없는 카테고리를 새 메뉴로 강조하지 않으며, 기존 Audio Plugins 경로는 호환성을 위해 유지한다.

초기 제품은 무료·기능 제한 없음·구독 없음·시간 제한 없음·강제 후원 없음이다. Buy Me a Coffee는 사용자가 제공한 `https://buymeacoffee.com/Jovarisaudio`를 `src/data/site.json`에 등록해 재사용한다. `PUBLIC_SUPPORT_URL`은 선택적 override이며, CI 변수가 비어 있어도 제공받은 주소가 유지된다. 다운로드를 후원보다 먼저 배치하며, 팝업은 없다. Home에서 반복 안내를 줄였고 Footer는 실제 URL이 있을 때만 간결한 후원 링크를 표시한다.

## 6. SEO와 URL 호환성

- 각 페이지의 정적 lang, 현지화한 title/description 및 Open Graph locale을 제공한다.
- canonical은 실제 언어별 로컬 URL을 가리킨다. 콘텐츠의 기존 외부 canonical 값은 citation_url 메타데이터로 보존하며, 별도의 실제 영문 번역 URL처럼 취급하지 않는다.
- hreflang과 x-default는 실제 대응 페이지가 있을 때만 제공한다. 미번역 한국어 원문에는 en hreflang을 만들지 않는다.
- sitemap은 페이지와 동일한 경로 매니페스트에서 생성하고 실제 언어별 대체 경로를 포함한다.
- 404는 noindex이며 존재하지 않는 canonical/언어 대체 경로를 만들지 않는다.
- internal/preview 상세 경로는 두 언어 모두 생성하지 않는다.
- 기존 GitHub Pages base·기존 Music/Journal 상세 URL은 변경하지 않았다. 저장소 이름이나 도메인을 바꾸지 않았다.

## 7. 실제 검증 결과

2026-10-15 로컬 검증:

- 단위 테스트 21개 통과: 기존 archive 규칙, 공개 상태·무료 배포·이중언어 제품 게이트, 정적 UI 번역과 원문 보호, 검수 번역만 공개, 원문 언어 추론, 음악 공식 제목 보존.
- 최종 정적 빌드 33 HTML 페이지. 하위 경로 링크·이미지 경로·기본 메타데이터 검사 통과.
- 전 페이지 SEO 검사: 실제 canonical, 상호 연결되는 hreflang, 언어별 OG, 실제 경로 32개 sitemap 항목, 404 noindex, 미공개 경로 제외 통과.
- 375 / 430 / 768 / 1440 / 1920px × EN/KO × Home/Music/Journal/Software/About/Support = 60개 화면 검사 통과. 가로 넘침·이미지 누락·콘솔 예외 없음.
- 한국어 브라우저의 영어 첫 방문, 명시적 언어 선택 유지, 직접 연 언어 URL 존중, JavaScript 없는 EN/한국어 탐색 통과.
- 임시 콘텐츠 통합 검사: 한국어 원문 URL·본문 유지, 검수 번역만 공개, 번역 없는 글의 원문 표시/언어별 목록 연결, 실제 hreflang, 음악 공식 제목, 양 언어 제품 상세·FAQ·설치 안내 통과. fixture는 정리 후 실제 카탈로그로 복구.
- 기존 Music/Journal 검색·시리즈 숫자 정렬·이전/다음·관련 글·초안 제외 fixture 통합 검사 통과.

재현 명령:

```text
pnpm test
PUBLIC_SITE_URL=https://jovarisaudio.github.io PUBLIC_BASE_PATH=/JovarisAudio-Website/ pnpm build
PUBLIC_BASE_PATH=/JovarisAudio-Website/ pnpm qa
pnpm globalization:seo:qa
# 별도 터미널에서 동일 base로 astro preview --host 127.0.0.1 --port 4324
pnpm globalization:qa
pnpm globalization:content:qa
pnpm integration:qa
```

스크린샷은 `qa/globalization/`에 보관하며 Git에서 제외한다. 원고 검증 fixture는 기존 콘텐츠가 있는 파일을 덮어쓰지 않고 고유 임시 파일만 만들며 finally에서 제거한다.

## 8. 배포 전 확인 및 남은 수동 검증

- [x] Music/Journal 원문·URL·공개 상태 처리 구현 및 fixture 검증
- [x] EN/KO 정적 HTML, 언어 전환, 모바일 화면, SEO·sitemap·링크 검증
- [x] 초기 무료·선택적 후원·미공개 상세 비노출 확인
- [x] DSP·앱 소스 및 다른 콘텐츠 플랫폼 정책 변경 없음
- [ ] 실제 영어·한국어 원고와 작품 소개가 등록되면 작성자가 문체·번역 검수
- [ ] 실제 제품 출시 자료·호환성·이미지·다운로드·해시·이중언어 설치 안내 승인
- [x] 사용자가 제공한 Buy Me a Coffee URL 연결
- [ ] 공개 프로필·정산 상태 및 외부 채널 URL 수동 확인
- [ ] Safari/Firefox 실기기 및 iPhone VoiceOver 등의 수동 접근성 확인
- [x] 2026-10-29 사용자 배포 승인
- [ ] 승인된 수정본 commit/push/배포 및 공개 사이트 동작 확인

2026-10-29 사용자가 전체 배포와 공개 링크 확인을 승인했다. 기존 on-push GitHub Pages 워크플로를 사용해 검증된 수정본을 배포한다. 배포 성공은 공개 사이트의 영어/한국어 페이지와 실제 후원 링크로 확인한다.

## 9. 변경 파일 목록

- `docs/GLOBALIZATION.md`
- `docs/PUBLICATION.md`
- `package.json`
- `pnpm-lock.yaml`
- `scripts/globalization-content-qa.mjs`
- `scripts/globalization-qa.mjs`
- `scripts/globalization-seo-qa.mjs`
- `scripts/publication-qa.mjs`
- `scripts/qa.mjs`
- `src/components/HomePage.astro`
- `src/components/ProductCards.astro`
- `src/components/SoftwareCatalog.astro`
- `src/components/SupportNote.astro`
- `src/content.config.ts`
- `src/data/translations.json`
- `src/layouts/Layout.astro`
- `src/lib/catalog.mjs`
- `src/lib/content-language.mjs`
- `src/lib/i18n.mjs`
- `src/lib/site-routes.mjs`
- `src/middleware.ts`
- `src/pages/404.astro`
- `src/pages/[...path].astro`
- `src/pages/index.astro`
- `src/pages/ko/index.astro`
- `src/pages/sitemap.xml.ts`
- `src/styles/ui-refresh.css`
- `templates/journal.md`
- `templates/music.md`
- `tests/catalog.test.mjs`
- `tests/i18n.test.mjs`

## 10. 2026-10-29 후원 연결

사용자가 제공한 `https://buymeacoffee.com/Jovarisaudio`를 Home 하단, Footer, Software, Support 및 출시 제품 상세의 공통 안내에 연결했다. 영어/한국어 문구와 선택적 후원 정책을 유지한다. 계정 정보·실명·정산 정보는 사이트에 추가하지 않는다. 공개 사이트 배포는 사용자 승인 후 기존 GitHub Pages 워크플로로 수행한다.

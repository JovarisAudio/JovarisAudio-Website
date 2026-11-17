---
title: "Sisyphus Almanac 1.1.0"
date: 2026-11-17
description: "Sisyphus Almanac의 빠른 기록과 하루 회고를 소개하는 macOS 개발 업데이트입니다. 현재 비공개 시험 중입니다."
draft: false
language: ko
original_language: ko
category: development-log
---

버전 날짜 · 2026-11-17

Sisyphus Almanac은 Mac에서 일정, 할 일, 메모와 관련 자료를 모아 보는 일일 작업 공간입니다. 1.1.0은 일정을 확인한 뒤 바로 기록하고, 남은 할 일을 다음 날짜로 이어가는 흐름을 추가합니다.

## 오늘 화면과 빠른 기록

- 산 배경의 오늘 화면에 일정, 미리 알림, 다가오는 일정, 받은 편지함을 배치했습니다.
- Daily Log에서 `*` 할 일, `@` 일정 초안, `-` 메모, `+` 아이디어, `!` 중요 표시를 여러 줄로 입력하고 저장 전에 미리 볼 수 있습니다.
- Daily Review에서 완료한 일과 남은 일을 확인하고 회고를 저장할 수 있습니다. 날짜를 직접 골라 할 일을 이월하거나 예약하면 이전 날짜에 이동 이력이 남습니다.
- 빠른 입력에서는 저장할 캘린더나 미리 알림 목록을 선택할 수 있습니다.

## 일정과 자료

- 일·주·월 캘린더와 일정 상세에서 관련 자료를 찾을 수 있습니다.
- Apple Notes의 메모와 Obsidian 볼트의 Markdown을 보고 원본을 열 수 있습니다.
- 일정과 미리 알림에 Apple Mail 원본 링크를 연결할 수 있습니다.

## Mail, Finance와 메뉴바

- Apple Mail에 설정된 활성 계정의 받은 편지함에서 계정당 최대 12건을 조회합니다. 제목, 발신자, 날짜와 읽음 상태를 확인할 수 있고, 오늘 화면에 최신 3건을 표시합니다.
- Finance에서 선택한 Excel 가계부를 연결합니다. OneDrive에 저장된 파일은 해당 폴더에서 선택하면 됩니다.
- 메뉴바의 시지프스 아이콘에서 일정과 할 일 요약을 열 수 있습니다.

## 요구 사항

macOS Sequoia 15.0 이상. Apple Mail, 캘린더, 미리 알림, Apple Notes 및 파일 접근은 해당 기능의 macOS 권한과 사용자 설정을 따릅니다.

<figure class="journal-screenshot">
<a href="../../images/almanac-1-1-0/almanac-today.png"><img src="../../images/almanac-1-1-0/almanac-today.png" alt="Sisyphus Almanac의 오늘 대시보드와 여러 줄 빠른 기록 미리보기" width="2200" height="1696" loading="lazy" /></a>
<figcaption>오늘 대시보드 · 샘플 데이터 사용</figcaption>
</figure>

<figure class="journal-screenshot">
<a href="../../images/almanac-1-1-0/almanac-calendar.png"><img src="../../images/almanac-1-1-0/almanac-calendar.png" alt="샘플 일정이 담긴 Sisyphus Almanac 주간 캘린더" width="1858" height="1502" loading="lazy" /></a>
<figcaption>주간 캘린더 · 샘플 데이터 사용</figcaption>
</figure>

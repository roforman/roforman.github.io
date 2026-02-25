# ROFORMAN Web

ROFORMAN 소개용 정적 웹사이트 프로젝트입니다.  
커스텀 Web Component + 경량 SPA 라우터 기반으로 동작하며, `i18n(ko/en)`과 JSON 기반 채용공고 렌더링을 포함합니다.

## 주요 기능

- 경량 SPA 라우팅 (`assets/js/components/app-router.js`)
- 공통 레이아웃 Web Component (`app-layout`, `site-header`, `site-footer`)
- 다국어 지원 (`ko`, `en`)
  - 번역 파일: `assets/i18n/ko.json`, `assets/i18n/en.json`
  - 헤더 우측 언어 전환 버튼
- FAQ 아코디언 (behavior + 공용 스타일 분리)
- 채용 공고 페이지
  - 공고 데이터: `assets/data/jobs.json`
  - 동적 렌더링: `assets/js/behaviors/careers-jobs.js`

## 페이지 구성

- `/` : Home
- `/company/` : Company (기술 섹션 포함)
- `/product/` : Products
- `/contact/` : Contact (FAQ 포함)
- `/careers/` : Careers

## 실행 방법 (로컬)

VS Code 확장 프로그램 `Live Server`로 실행합니다. (`file://` 직접 열기 비권장)

1. VS Code에서 프로젝트 폴더를 엽니다.
2. `index.html` 파일을 엽니다.
3. 우클릭 -> `Open with Live Server`를 선택합니다.

## 프로젝트 구조

```text
assets/
  css/
    components/      # Web Component 전용 스타일
    behaviors/       # behavior 전용 스타일 (예: accordion)
    pages/           # 페이지/패턴 스타일
  data/
    jobs.json        # 채용공고 데이터
  i18n/
    ko.json
    en.json
  js/
    components/      # Web Components
    behaviors/       # DOM behavior (accordion, i18n, careers-jobs)

company/
contact/
careers/
product/
index.html
```

## 텍스트/콘텐츠 수정 가이드

### 1) 일반 페이지 텍스트

- HTML의 `data-i18n`, `data-i18n-html`, `data-i18n-attr` 속성으로 연결됨
- 번역 값은 아래 파일에서 수정
  - `assets/i18n/ko.json`
  - `assets/i18n/en.json`

### 2) 채용 공고 목록

- 공고 데이터는 `assets/data/jobs.json`에서 수정
- 현재는 원문 데이터 그대로 렌더링되며 i18n 토글과 별도로 유지됨
- `Apply` 버튼은 공고별 `applyUrl`이 있으면 해당 URL 사용, 없으면 Google Forms 홈으로 이동

예시:

```json
{
  "title": "로보틱스 제어 엔지니어",
  "employmentType": "정규직",
  "team": "R&D 팀",
  "location": "서울",
  "experience": "경력 3년 이상",
  "description": "..."
}
```

선택적으로 실제 지원 링크 추가:

```json
{
  "...": "...",
  "applyUrl": "https://forms.gle/..."
}
```

## 스타일 구조 원칙

- `assets/css/components`: Web Component 전용 스타일
- `assets/css/behaviors`: behavior와 결합된 재사용 스타일
- `assets/css/pages`: 페이지별 스타일 + 공용 페이지 패턴 (`section-page.css`, `media.css`)

## 라우팅/동작 관련 메모

- `app-router`는 `<app-layout>` 내부를 교체하는 SPA 방식
- 라우팅 후 `page:navigated` 이벤트를 발생시키며, behaviors가 이를 구독해 재초기화
- 페이지별 CSS는 `<head>`의 `data-route-style="true"` 링크를 라우터가 동기화

## 배포 메모

- 현재: `GitHub Pages`로 배포 중
- 추후 가능성: 블로그 기능 또는 서버리스 기능이 필요해지면 `Cloudflare Pages`로 이전 가능
- 현재 시점에서는 Cloudflare Pages 이전 계획 없음

# UI Style Gallery

다양한 UI 디자인 스타일을 한눈에 비교하고 학습할 수 있는 인터랙티브 갤러리입니다.

## 🌐 Live Demo

- **GitHub Pages:** https://woairi.github.io/ui-guide/
- **Cloudflare Pages:** https://ui-guide.pages.dev/

## 포함된 UI 스타일

1. **Fluent Design** - Microsoft의 아크릴 효과와 깊이감
2. **iOS Human Interface** - Apple의 프리미엄 디자인 언어
3. **Material Design** - Google의 종이 질감과 고도(Elevation) 시스템
4. **Ant Design** - 엔터프라이즈급 B2B 인터페이스
5. **Tailwind System** - 유틸리티 기반 토큰 시스템
6. **Modern Minimalism** - 여백과 타이포그래피 중심의 깔끔한 UI
7. **Neumorphism** - 부드러운 음각/양각 그림자 효과
8. **Swiss / Editorial** - 타이포그래피와 그리드 중심 디자인
9. **Glassmorphism** - 반투명 유리 질감과 블러 효과
10. **Neo-Brutalism** - 고대비, 굵은 선, 하드 섀도우
11. **Bento Grid** - 격자형 정보 배치 레이아웃

## 기술 스택

- **React** 18.3.1
- **Vite** 6.0.3
- **Tailwind CSS** 3.4.17
- **Lucide React** (아이콘)

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

서버는 `http://localhost:10000` 에서 실행됩니다.

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 프로젝트 구조

```
UI/
├── src/
│   ├── App.jsx          # 메인 컴포넌트 (11가지 UI 스타일 포함)
│   ├── main.jsx         # 앱 진입점
│   └── index.css        # Tailwind 설정
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 학습 포인트

각 UI 스타일은 실제 사용 가능한 컴포넌트로 구현되어 있으며, 다음을 학습할 수 있습니다:

- 다양한 디자인 시스템의 특징과 사용 사례
- Tailwind CSS를 활용한 스타일링 기법
- 색상, 그림자, 간격 등의 디자인 토큰 활용
- 반응형 레이아웃과 인터랙션 패턴

## 라이선스

MIT

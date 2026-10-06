# 뉴스레터 메일 시안 (2026-10-06)

사이트에 올라가지 않는 디자인 자료. 구독자 명단·발송 서비스 키는 이 폴더에 넣지 않는다.

- `header.html` → 표지 이미지(`header.jpg`, 600×800 @2x). 호마다 호수·날짜·제목·숫자 색(`--issue-color`)·사진·한 줄 요약을 바꾼다.
- `email.html` → 메일 본문. 표 레이아웃·인라인 스타일·시스템 글꼴만 쓴다(지메일·아웃룩 대응). [자리] 표시는 실제 내용으로 채운다.
- `preview.png` → PC·휴대폰 미리보기.
- 표지 다시 만들기: `env -u NODE_OPTIONS node shot.js` (설치된 Chrome과 playwright-core 사용)

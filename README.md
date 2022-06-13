# 리액트 미니 프로젝트용 기초 셋팅

### CRA
### Typescript
### Eslint - Airbnb / Prettier
### Redux, Redux-toolkit, Recoil, React-query
### Testing-library/react

---

## 접근 방법에 관한 고민
- styled-component는 개발이 편리해지지만, 렌더링 성능이 떨어질 수 있다 고도 생각이 된다. scope단위의 css...흠...

## 프로젝트 구성


    ├── components      # atomic design을 위한 atoms, molecules, organisms
    │   ├── atoms		# atoms 컴포넌트
    │   │   ├── Button
    │   │   ├── Input
    │   │   ├── Image
    │   │   ├── Title
    │   │   ├── Text
    │   │   └── TextArea
    │   ├── molecules		# molecules 컴포넌트
    │   │   ├── TopBar
    │   │   ├── LabelWithInput
    │   │   ├── LinkToButton
    │   │   ├── SubmitButton
    │   │   ├── LikeButton
    │   │   ├── LoginButton
    │   │   ├── LinkToButton
    │   │   ├── AddImgInput
    │   │   └── UserThumb
    │   └── organisms		# organisms 컴포넌트
    │   │   ├── LoginForm
    │   │   ├── Navigation
    │   │   ├── PostLikeBar
    │   │   ├── PostInfoBar
    │   │   ├── PostContent
    │   │   └── PostWriteForm
	└── templates
    │   ├── ListTemplate
    │   ├── ListTemplate
    │   └── ListTemplate
    └── pages     
        ├── Login
        ├── Register
        ├── PostList
        ├── Write
        └── Mypage

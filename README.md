# 블로그 페이지 성능 최적화 실습

---

## Lighthouse (개선 전)

 <img src="https://images.velog.io/images/hyunjoong/post/78e0b4db-695e-4d96-85c9-6c3649af46bb/image.png" width="70%" height="70%">

## ✅ 개선 작업 목록

### 로딩성능 최적화

1. 이미지 사이즈 최적화
2. Code Split
3. 텍스트 압축

### 렌더링 성능 최적화

1. Bottleneck 코드 최적화

---

### Step1. 이미지 사이즈 최적화

Opportunities에서 경고한 image파일의 속성을 확인

 <img src="https://images.velog.io/images/hyunjoong/post/fb5f541f-1415-4b16-9264-aaa1f328256a/image.png" width="50%" height="50%">
 
 render size가 120 x 120px 임을 확인하고 2배 정도 큰 이미지를 사용해서 기존 1200 x 1200px 로 되어있던 코드를 240px x 240px로 수정하였습니다.

step1 적용 후 Lighthouse

  <img src="https://images.velog.io/images/hyunjoong/post/9848d167-39ac-4460-8e6e-591a2191eb24/image.png" width="70%" height="70%">

<br>
<br>
<br>

### ✔step2. bottleneck코드 최적화

Article 컴포넌트에 있는 removeSpecialCharacter함수의 문제 발견

<img src="https://images.velog.io/images/hyunjoong/post/d9f3ebe1-8806-4f1b-afc2-f23562ae9d09/image.png" width="100%" height="100%">
 
 
 2중 for문을 코드를 replace함수를 사용해서 변경

step2 적용 후 Lighthouse

<img src="https://images.velog.io/images/hyunjoong/post/7de4d7f0-4e50-475f-8019-4a60d9d14295/image.png" width="70%" height="70%">

<br>
<br>
<br>

### ✔step3. Code Splitting

불 필요한 코드 or 중복되는 코드가 없이 적절한 사이즈의 코드가 적절한 타이밍에 로드되게 하자

React.lazy로 동적 import를 사용해서 컴포넌트를 렌더링

#### 참고

https://ko.reactjs.org/docs/code-splitting.html

step3 적용 후 Lighthouse

<img src="https://images.velog.io/images/hyunjoong/post/345f34e9-487c-4cba-a638-437ab473f57b/image.png" width="70%" height="70%">

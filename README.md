### Blog

- NextJS pages dir 구조로 만든 blog 입니다.
- 이전에 contentLayer 를 사용해서 만들어봤는데, 요렇게 구현해보긴 처음입니다.
- getStaticPaths 와 getStaticProps 를 app dir로 넘어온 후 사용할 일이 없었는데, 경험해볼 수 있었습니다.
- 처음에는 급한 마음에 복붙해가면서 진행했는데, 제 구조와 다른 부분이 있다보니 붙이고 지우고 반복을 하다가 찬찬히 흐름을 따라가면서 구현해봤는데 더 빠른 시간 안에 구현할 수 있었습니다. 반성 반성 ..
- `getStaticPaths` 로 경로를 만들어주고 `getStaticProps` 는 해당 경로의 `params` 정보를 통해 전체 파일들의 slug를 이용해 해당하는 포스팅을 보여주도록 하였습니다.

- 배포(vercel) : https://blog-wjdgotn77.vercel.app/

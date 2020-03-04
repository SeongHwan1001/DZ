/*
checkLoggedIn 이라는 미들웨어를 만들어서 로그인해야만 글쓰기, 수정, 삭제를 할 수 있도록 구현
이 미들웨어를 lib 디렉터리에 저장하는 이유는 다른 라우트에서도 사용될 가능성이 있기 때문
 */

const checkLoggedIn = (ctx, next) => {
   if (!ctx.state.user) {
      ctx.status = 401; // Unauthorized
      return;
   }
   return next();
};

export default checkLoggedIn;

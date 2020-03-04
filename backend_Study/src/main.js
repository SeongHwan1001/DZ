require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api';

import jwtMiddleware from './lib/jwtMiddleware';

// 비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
// 환경변수는 procsee.env를 통해 조회 할 수 있다.
const { PORT, MONGO_URI } = process.env;

mongoose
   .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
   .then(() => {
      console.log('Connected to MongoDB');
   })
   .catch(e => {
      console.log(e);
   });

const app = new Koa();
const router = new Router();

// 라우터 설정
router.get('/', ctx => {
   ctx.body = '홈';
});

router.get('/about', ctx => {
   ctx.body = '소개';
});

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// 라우터 적용 전에 bodyParser 적용해야 한다.
app.use(bodyParser());
// jwtMiddleware를 적용하는 작업은 app 인스턴스에 router 미들웨어에 적용하기 전에 이루어져야 한다.
// 이 미들웨어는 post는 app-api-post 까지 물려 있기 때문에 모든 라우터가 호출 될 때마다 실행이 될 것이다.
app.use(jwtMiddleware);

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// app.listen(4000, () => {
//    console.log('Listening to port 4000');
// });

// PORT가 지정되어 있지 않다면 4000을 사용
const port = PORT || 4000;
app.listen(port, () => {
   console.log('Listening to port %d', port);
});

// // 컨트롤러 : 라우트 처리함수만 모아 놓은 파일

// let postId = 1; // id의 초기값

// // posts 배열 초기 데이터
// const posts = [
//    {
//       id: 1,
//       title: 'title1',
//       body: 'body1',
//    },
// ];

// /* 포스트 작성
// POST /api/posts
// { title, body }
//  */
// exports.write = ctx => {
//    // REST API의 Request Body는 ctx.request.body에서 조회할 수 있다.
//    const { title, body } = ctx.request.body;
//    postId += 1;
//    const post = { id: postId, title, body };
//    posts.push(post);
//    ctx.body = post;
// };

// /* 포스트 목록 조회
// GET /api/posts
//  */
// exports.list = ctx => {
//    ctx.body = posts;
// };

// /* 특정 포스트 조회
// GET /api/posts/:id
//  */
// exports.read = ctx => {
//    const { id } = ctx.params;
//    // 주어진 id 값으로 포스트를 찾는다.
//    // 파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
//    // 비교할 p.id 값을 문자열로 변경해야 한다.
//    const post = posts.find(p => p.id.toString() === id);
//    // 포스트가 없으면 오류를 반환한다.
//    if (!post) {
//       ctx.status = 404;
//       ctx.body = {
//          message: '포스트가 존재하지 않습니다.',
//       };
//       return;
//    }
//    ctx.body = post;
// };

// /* 특정 포스트 제거
// DELETE /api/posts/:id
//  */
// exports.remove = ctx => {
//    const { id } = ctx.params;
//    // 해당 id를 가진 post가 몇 번째인지 확인한다.(있으면 해당 id반환, 없으면 -1 반환)
//    const index = posts.findIndex(p => p.id.toString() === id);
//    // 포스트가 없으면 오류를 반환한다.
//    if (index === -1) {
//       ctx.status = 404;
//       ctx.body = {
//          message: '포스트가 존재하지 않습니다.',
//       };
//       return;
//    }
//    // index번째 아이템을 제거한다.
//    // slice : 기존배열은 변하지 않고, 잘려진 배열을 반환
//    // splice : 기존 배열 변하고, 잘려진 배열 반환
//    // split : (string 메서드) delimeter를 기준으로 잘라서 배열을 만든 후 배열을 반환
//    posts.splice(index, 1);
//    ctx.status = 204; // No Content
// };

// /* 포스트 수정(교체)
// PUT /api/posts/:id
// {title, body}
//  */
// exports.replace = ctx => {
//    // PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체 할 때 사용한다.
//    const { id } = ctx.params;
//    // 해당 id를 가진 post가 몇 번째인지 확인한다.
//    const index = posts.findIndex(p => p.id.toString() === id);
//    // 포스트가 없으면 오류를 반환한다.
//    if (index === -1) {
//       ctx.status = 404;
//       ctx.body = {
//          message: '포스트가 존재하지 않습니다.',
//       };
//       return;
//    }
//    // 전체 객체를 덮어 씌운다.
//    // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만든다.
//    posts[index] = {
//       id,
//       ...ctx.request.body,
//    };
//    ctx.body = posts[index];
// };

// /* 포스트 수정(특정 필드 변경)
// PATCH /api/posts/:id
// {title, body}
//  */
// exports.update = ctx => {
//    // PATCH 메서드는 주어진 필드만 교체한다.
//    const { id } = ctx.params;
//    // 해당 id를 가진 post가 몇 번째 인지 확인한다.
//    const index = posts.findIndex(p => p.id.toString() === id);
//    // 포스트가 없으면 오류를 반환
//    if (index === -1) {
//       ctx.status = 404;
//       ctx.body = {
//          message: '포스트가 존재하지 않습니다.',
//       };
//       return;
//    }
//    // 기존 값에 정보를 덮어 씌운다.
//    posts[index] = {
//       ...posts[index],
//       ...ctx.request.body,
//    };
//    ctx.body = posts[index];
// };

//=================================================================================

// // ES모듈 import/export 문법 사용하기
// /*
// Node.js에서 import/export 문법을 꼭 사용해야 할 필요는 없지만, 이 문법을 사용하면
// vscode에서 자동완성을 통해 모듈을 자동으로 쉽게 불러올 수 있고 코드도 더욱 깔끔해진다.
//  */

// // 컨트롤러 : 라우트 처리함수만 모아 놓은 파일

// let postId = 1; // id의 초기값

// // posts 배열 초기 데이터
// const posts = [
//    {
//       id: 1,
//       title: 'title1',
//       body: 'body1',
//    },
// ];

// /* 포스트 작성
// POST /api/posts
// { title, body }
//  */
// export const write = ctx => {
//    // REST API의 Request Body는 ctx.request.body에서 조회할 수 있다.
//    const { title, body } = ctx.request.body;
//    postId += 1;
//    const post = { id: postId, title, body };
//    posts.push(post);
//    ctx.body = post;
// };

// /* 포스트 목록 조회
// GET /api/posts
//  */
// export const list = ctx => {
//    ctx.body = posts;
// };

// /* 특정 포스트 조회
// GET /api/posts/:id
//  */
// export const read = ctx => {
//    const { id } = ctx.params;
//    // 주어진 id 값으로 포스트를 찾는다.
//    // 파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
//    // 비교할 p.id 값을 문자열로 변경해야 한다.
//    const post = posts.find(p => p.id.toString() === id);
//    // 포스트가 없으면 오류를 반환한다.
//    if (!post) {
//       ctx.status = 404;
//       ctx.body = {
//          message: '포스트가 존재하지 않습니다.',
//       };
//       return;
//    }
//    ctx.body = post;
// };

// /* 특정 포스트 제거
// DELETE /api/posts/:id
//  */
// export const remove = ctx => {
//    const { id } = ctx.params;
//    // 해당 id를 가진 post가 몇 번째인지 확인한다.(있으면 해당 id반환, 없으면 -1 반환)
//    const index = posts.findIndex(p => p.id.toString() === id);
//    // 포스트가 없으면 오류를 반환한다.
//    if (index === -1) {
//       ctx.status = 404;
//       ctx.body = {
//          message: '포스트가 존재하지 않습니다.',
//       };
//       return;
//    }
//    // index번째 아이템을 제거한다.
//    // slice : 기존배열은 변하지 않고, 잘려진 배열을 반환
//    // splice : 기존 배열 변하고, 잘려진 배열 반환
//    // split : (string 메서드) delimeter를 기준으로 잘라서 배열을 만든 후 배열을 반환
//    posts.splice(index, 1);
//    ctx.status = 204; // No Content
// };

// /* 포스트 수정(교체)
// PUT /api/posts/:id
// {title, body}
//  */
// export const replace = ctx => {
//    // PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체 할 때 사용한다.
//    const { id } = ctx.params;
//    // 해당 id를 가진 post가 몇 번째인지 확인한다.
//    const index = posts.findIndex(p => p.id.toString() === id);
//    // 포스트가 없으면 오류를 반환한다.
//    if (index === -1) {
//       ctx.status = 404;
//       ctx.body = {
//          message: '포스트가 존재하지 않습니다.',
//       };
//       return;
//    }
//    // 전체 객체를 덮어 씌운다.
//    // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만든다.
//    posts[index] = {
//       id,
//       ...ctx.request.body,
//    };
//    ctx.body = posts[index];
// };

// /* 포스트 수정(특정 필드 변경)
// PATCH /api/posts/:id
// {title, body}
//  */
// export const update = ctx => {
//    // PATCH 메서드는 주어진 필드만 교체한다.
//    const { id } = ctx.params;
//    // 해당 id를 가진 post가 몇 번째 인지 확인한다.
//    const index = posts.findIndex(p => p.id.toString() === id);
//    // 포스트가 없으면 오류를 반환
//    if (index === -1) {
//       ctx.status = 404;
//       ctx.body = {
//          message: '포스트가 존재하지 않습니다.',
//       };
//       return;
//    }
//    // 기존 값에 정보를 덮어 씌운다.
//    posts[index] = {
//       ...posts[index],
//       ...ctx.request.body,
//    };
//    ctx.body = posts[index];
// };

// ==========================================================

import Post from '../../models/post';
import Joi from 'joi'; // Request Body 검증을 위한 라이브러리

/* 요청 검증 */
//--------------------------------
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
   const { id } = ctx.params;
   if (!ObjectId.isValid(id)) {
      ctx.status = 400; // Bad Request
      return;
   }
   return next();
};
//--------------------------------

/*
POST /api/posts
{
   title: '제목',
   body: '내용',
   tags: ['태그', '태그2']
}
 */
export const write = async ctx => {
   /* 
   Request Body 검증 
   - 데이터를 받는 것 write, update이기 때문에
   두개만 검증하면 된다.
   */
   //--------------------------------
   const schema = Joi.object().keys({
      // 객체가 다음 필드를 가지고 있음을 검증
      title: Joi.string().required(), // required() 가 있으면 필수 항목
      body: Joi.string().required(),
      tags: Joi.array()
         .items(Joi.string())
         .required(), // 문자열로 이루어진 배열
   });

   // 검증하고 나서 검증 실패인 경우 에러 처리
   const result = Joi.validate(ctx.request.body, schema);
   if (result.error) {
      ctx.status = 400; // Bad Request
      ctx.body = result.error;
      return;
   }
   //--------------------------------

   const { title, body, tags } = ctx.request.body;
   const post = new Post({
      title,
      body,
      tags,
   });
   try {
      // save를 통해 실제 db에 저장
      // save의 반환값이 Promise이므로 async/await 문법 사용으로 저장 요청 완료까지 대기
      await post.save();
      ctx.body = post;
   } catch (e) {
      ctx.throw(500, e);
   }
};

/* 
데이터 조회
GET /api/posts
 */
export const list = async ctx => {
   // query는 문자열이기 때문에 숫자로 변환해 주어야 한다.
   // 값이 주어지지 않는다면 1을 기본으로 사용한다.
   const page = parseInt(ctx.query.page || '1', 10);

   if (page < 1) {
      ctx.status = 400;
      return;
   }

   try {
      // find() 함수를 호출 한 후에는 exec()를 붙여 주어야 서버에 쿼리를 요청한다.
      const posts = await Post.find()
         // sort 함수의 파라미터 {key:1} 형식
         // 1로 설정하면 오름차순, -1로 설정하면 내림차순으로 정렬한다.
         .sort({ _id: -1 })
         // 보이는 갯수를 제한 할 때 사용(10개만 보이도록 설정)
         .limit(10)
         // 넘긴다는 의미로, 파라미터로 10 이 들어갔다고 치면 처음 10개를 제외(넘기고)하고 그 다음 데이터를 불러옴
         // 즉, page가 1이라면 0이기 때문에 처음부터 10개를 가지고 올 수 있는 것이다.
         .skip((page - 1) * 10)
         // lean() 함수를 사용하면 데이터를 처음부터 JSON 형태로 조회 할 수 있다.
         // 만약 find() 함수만을 사용하게 되면 toJSON 함수를 실행하여 JSON 형탸로 변환한 뒤 필요한 변환을 또 한다.
         .lean()
         .exec();

      /* 마지막 page 번호 알려주기 */
      // countDocuments()는 문서의 합을 구해주는 함수이다.
      // ========================================================
      const postCount = await Post.countDocuments().exec();
      ctx.set('Last-Page', Math.ceil(postCount / 10));
      // ========================================================

      /* 내용길이 제한 */
      // ========================================================
      ctx.body = posts.map(post => ({
         ...post,
         body:
            post.body.length < 200
               ? post.body
               : `${post.body.slice(0, 200)}...`,
      }));
      // ========================================================
   } catch (e) {
      ctx.throw(500, e);
   }
};

/*
특정 포스트 조회
GET /api/posts/:id
 */
export const read = async ctx => {
   const { id } = ctx.params;
   try {
      const posts = await Post.findById(id).exec();
      ctx.body = posts;
   } catch (e) {
      ctx.throw(500, e);
   }
};

/*
데이터 삭제
DELETE /api/posts/:id
 */
export const remove = async ctx => {
   const { id } = ctx.params;
   try {
      await Post.findByIdAndRemove(id).exec();
      ctx.status = 204; // No contene(성공은 했지만 응답할 데이터 없음)
   } catch (e) {
      ctx.throw(500, e);
   }
};

/*
데이터 수정
PATCH /api/posts/:id
{
   title: '수정',
   body: '수정 내용',
   tags: ['수정', '태그']
}
 */
export const update = async ctx => {
   const { id } = ctx.params;

   /* 
   Request Body 검증 
   - 데이터를 받는 것 write, update이기 때문에
   두개만 검증하면 된다.
   */
   //--------------------------------
   // write에서 사용한 schema와 비슷한데, required()가 없다.
   const schema = Joi.object().keys({
      title: Joi.string(),
      body: Joi.string(),
      tags: Joi.array().items(Joi.string()),
   });

   // 검증하고 나서 검증 실패인 경우 에러 처리
   const result = Joi.validate(ctx.request.body, schema);
   if (result.error) {
      ctx.status = 400; // Bad Request
      ctx.body = result.error;
      return;
   }
   //--------------------------------

   try {
      // ctx.request.body : 업데이트 된 값이 들어간다.
      const posts = await Post.findByIdAndUpdate(id, ctx.request.body, {
         // 이 값을 설정하면 업데이트된 데이터를 반환한다.
         // false일 때는 업데이트 되기 이전의 데이터를 반환한다.
         new: true,
      }).exec();
      if (!posts) {
         ctx.status = 404;
         return;
      }
      ctx.body = posts;
   } catch (e) {
      ctx.throw(e);
   }
};

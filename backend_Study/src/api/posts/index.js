import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkedLoggedIn';

const posts = new Router();

// const printInfo = ctx => {
//    ctx.body = {
//       method: ctx.method,
//       path: ctx.path,
//       params: ctx.params,
//    };
// };

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);
posts.get('/:id', postsCtrl.getPostById, postsCtrl.read);
posts.delete(
   '/:id',
   checkLoggedIn,
   postsCtrl.getPostById,
   postsCtrl.checkOwnPost,
   postsCtrl.remove,
);
posts.patch(
   '/:id',
   checkLoggedIn,
   postsCtrl.getPostById,
   postsCtrl.checkOwnPost,
   postsCtrl.update,
);

export default posts;

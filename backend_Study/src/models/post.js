import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
   title: String,
   body: String,
   tags: [String], // 문자열로 이루어진 배열
   publishedDate: {
      type: Date,
      default: Date.now, // 현재 날짜를 기본값으로 지정
   },
   /* 
   posts 에서도 인증을 사용하기 위해서는 스키마에 사용자 정보를 넣어 줘야 한다. 
   */
   user: {
      _id: mongoose.Types.ObjectId,
      username: String,
   },
});

// 첫 번째 파라미터는 스키마 이름이고, 두 번째 파라미터는 스키마 객체이다.
const Post = mongoose.model('Post', PostSchema);
export default Post;

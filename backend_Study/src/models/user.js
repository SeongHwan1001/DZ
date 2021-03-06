import mongoose, { Schema } from 'mongoose';
/* 
비밀번호를 데이터베이스에 저장 할 때 플레인(아무런 가공을 하지 않은) 텍스트로 저장하면 보안상 위험
단방향 해싱함수를 지원해주는 brcypt 라이브러리 사용하여 비밀번호를 안전하게 저장한다.
*/
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
   username: String,
   hashedPassword: String,
});

/*
인스턴스 메서드를 작성 할 때는 화살표 함수가 아닌 function 키워드를 사용해서 구현해야 한다.
함수 내부에서 this를 접근하기 위해서 인데,
화살표 함수를 사용하면 this 문서 인스턴스를 가리키지 못한다.
 */

// 이 메서드를 통해 비밀번호를 파라미터로 받아서 계정의 hashedPassword 값을 설정
UserSchema.methods.setPassword = async function(password) {
   const hash = await bcrypt.hash(password, 10);
   this.hashedPassword = hash;
};

// 이 메서드는 파라미터로 받은 비밀번호가 해당 계정의 비밀번호와 일치하는지 검증
UserSchema.methods.checkPassword = async function(password) {
   const result = await bcrypt.compare(password, this.hashedPassword);
   return result; //  true/false
};

// 이 메서드는 hashedPassword 필드가 응답되지 않도록 데이터를 JSON으로 변환한후 delete를 통해 해당 필드 지움
UserSchema.methods.serialize = function() {
   const data = this.toJSON();
   delete data.hashedPassword;
   return data;
};

/* 토큰 발급하기 */
// ===========================================================
UserSchema.methods.generateToken = function() {
   const token = jwt.sign(
      // 첫 번째 파라미터에는 토큰 안에 집어 놓고 싶은 데이터를 넣는다.
      {
         _id: this.id,
         username: this.username,
      },
      // 두 번째 파라미터에는 JWT 암호를 넣는다.(환경설정에 있는 비밀키)
      process.env.JWT_SECRET,
      {
         expiresIn: '3d', // 7일동안 유효함
      },
   );
   return token;
};
// ===========================================================

// 이 메서드는 username으로 데이터를 찾을 수 있게 해준다.
UserSchema.statics.findByUsername = function(username) {
   return this.findOne({ username });
};

const User = mongoose.model('User', UserSchema);
export default User;

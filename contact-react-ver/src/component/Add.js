import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';

const Add = ({ onInsert, history }) => {
   // 입력된 값을 관리하기 위한 state값
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');

   const onNameChange = e => {
      setName(e.target.value);
   };

   const onPhoneChange = e => {
      setPhone(e.target.value);
   };

   const onSubmit = e => {
      console.log('submit');
      onInsert(name, phone);
      setName(''); // insert 호출 후 name 값 초기화
      setPhone(''); // insert 호출 후 phone 값 초기화

      // submit 이번트는 브라우저에서 새로고침을 발생시킨다.
      // 이를 방지하기 위해 이 함수를 호출한다.
      e.preventDefault();
      history.push('/');
   };
   return (
      <form onSubmit={onSubmit}>
         <div>
            <p>
               name :&nbsp;
               <input placeholder="name" value={name} onChange={onNameChange} />
            </p>
            <p>
               phone :&nbsp;
               <input
                  placeholder="phone"
                  value={phone}
                  onChange={onPhoneChange}
               />
            </p>
            <button
               onClick={event => {
                  onSubmit(event);
               }}
            >
               저장
            </button>
            <button
               onClick={() => {
                  history.goBack();
               }}
            >
               뒤로
            </button>
         </div>
      </form>
   );
};

export default withRouter(Add);

import React from 'react';

import { withRouter } from 'react-router-dom';

const AddPresenter = ({
   inputName,
   inputPhone,
   onChangeInputName,
   onChangeInputPhone,
   onInsert,
   history,
}) => {
   const onSubmit = e => {
      e.preventDefault();
      onInsert(inputName, inputPhone);
      onChangeInputName('');
      onChangeInputPhone('');
      history.push('/');
   };

   const onChangeName = e => onChangeInputName(e.target.value);
   const onChangePhone = e => onChangeInputPhone(e.target.value);
   return (
      <form>
         <div onSubmit={onSubmit}>
            <h2>Add</h2>
            name : <input value={inputName} onChange={onChangeName}></input>
            <br />
            phone : <input value={inputPhone} onChange={onChangePhone}></input>
            <br />
            <button
               onClick={e => {
                  e.preventDefault();
                  onChangeInputName('');
                  onChangeInputPhone('');
                  history.goBack();
               }}
            >
               뒤로
            </button>
            <button
               onClick={e => {
                  onSubmit(e);
                  // e.preventDefault();
                  // onInsert(inputName, inputPhone);
                  // onChangeInputName('');
                  // onChangeInputPhone('');
                  // history.push('/');
               }}
            >
               등록
            </button>
         </div>
      </form>
   );
};

export default withRouter(AddPresenter);

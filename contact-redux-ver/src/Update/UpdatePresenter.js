import React from 'react';

import { withRouter } from 'react-router-dom';

const UpdatePresenter = ({
   inputName,
   inputPhone,
   onChangeInputName,
   onChangeInputPhone,
   onUpdate,
   history,
}) => {
   const onChangeName = e => onChangeInputName(e.target.value);
   const onChangePhone = e => onChangeInputPhone(e.target.value);

   const onSubmit = e => {
      e.preventDefault();
      onUpdate(inputName, inputPhone);
      onChangeInputName('');
      onChangeInputPhone('');
      history.push('/');
   };
   return (
      <form onSubmit={onSubmit}>
         <div>
            <h2>Update</h2>
            name :{' '}
            <input
               name="inputName"
               value={inputName}
               onChange={onChangeName}
            ></input>
            <br />
            phone : <input value={inputPhone} onChange={onChangePhone}></input>
            <br />
            <button
               onClick={() => {
                  onChangeInputName('');
                  onChangeInputPhone('');
                  history.goBack();
               }}
            >
               뒤로
            </button>
            <button
               onClick={event => {
                  onSubmit(event);
               }}
            >
               등록
            </button>
         </div>
      </form>
   );
};

export default withRouter(UpdatePresenter);

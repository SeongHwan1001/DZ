import React from 'react';
import UpdatePresenter from './UpdatePresenter';

import { useSelector, useDispatch } from 'react-redux';

import { update, changeInputName, changeInputPhone } from '../Modules/contacts';

const UpdateContainer = () => {
   // const checkId = useSelector(state => state.contacts.checkId);
   const inputName = useSelector(state => state.contacts.inputName);
   const inputPhone = useSelector(state => state.contacts.inputPhone);
   const dispatch = useDispatch();
   return (
      <UpdatePresenter
         inputName={inputName}
         inputPhone={inputPhone}
         onChangeInputName={inputName => dispatch(changeInputName(inputName))}
         onChangeInputPhone={inputPhone =>
            dispatch(changeInputPhone(inputPhone))
         }
         onUpdate={(inputName, inputPhone) => {
            dispatch(update(inputName, inputPhone));
         }}
      />
   );
};

export default UpdateContainer;

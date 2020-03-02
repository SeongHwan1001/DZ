import React from 'react';
import AddPresenter from './AddPresenter';

import { useSelector, useDispatch } from 'react-redux';
import { insert, changeInputName, changeInputPhone } from '../Modules/contacts';

const AddContainer = () => {
   const inputName = useSelector(state => state.contacts.inputName);
   const inputPhone = useSelector(state => state.contacts.inputPhone);
   const dispatch = useDispatch();
   return (
      <AddPresenter
         inputName={inputName}
         inputPhone={inputPhone}
         onChangeInputName={inputName => dispatch(changeInputName(inputName))}
         onChangeInputPhone={inputPhone =>
            dispatch(changeInputPhone(inputPhone))
         }
         onInsert={(inputName, inputPhone) =>
            dispatch(insert(inputName, inputPhone))
         }
      />
   );
};

export default AddContainer;

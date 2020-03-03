import React from 'react';
import HomePresenter from './HomePresenter';

import { useSelector, useDispatch } from 'react-redux';

import {
   checkId,
   remove,
   favorite,
   checked,
   checkedDelete,
} from '../Modules/contacts';

const HomeContainer = () => {
   const contacts = useSelector(state => state.contacts.contacts);
   const dispatch = useDispatch();
   return (
      <HomePresenter
         contacts={contacts}
         onRemove={id => dispatch(remove(id))}
         onFavorite={id => dispatch(favorite(id))}
         checkId={id => dispatch(checkId(id))}
         checked={id => dispatch(checked(id))}
         checkedDelete={() => dispatch(checkedDelete())}
      />
   );
};

export default HomeContainer;

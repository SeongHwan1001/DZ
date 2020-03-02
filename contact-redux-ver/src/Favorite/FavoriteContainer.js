import React from 'react';
import FavoritePresenter from './FavoritePresenter';
import { useSelector, useDispatch } from 'react-redux';

import { favorite, remove, update } from '../Modules/contacts';

const FavoriteContainer = () => {
   const contacts = useSelector(state => state.contacts.contacts);
   console.log(contacts);
   const dispatch = useDispatch();
   return (
      <FavoritePresenter
         contacts={contacts}
         onFavorite={id => dispatch(favorite(id))}
         onRemove={id => dispatch(remove(id))}
         onUpdate={id => dispatch(update(id))}
      />
   );
};

export default FavoriteContainer;

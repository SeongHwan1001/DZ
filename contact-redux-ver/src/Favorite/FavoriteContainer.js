import React from 'react';
import FavoritePresenter from './FavoritePresenter';
import { useSelector, useDispatch } from 'react-redux';

import {
   favorite,
   remove,
   update,
   checkId,
   checked,
} from '../Modules/contacts';

const FavoriteContainer = () => {
   const contacts = useSelector(state => state.contacts.contacts);
   const dispatch = useDispatch();
   return (
      <FavoritePresenter
         contacts={contacts}
         onFavorite={id => dispatch(favorite(id))}
         onRemove={id => dispatch(remove(id))}
         onUpdate={id => dispatch(update(id))}
         checkId={id => dispatch(checkId(id))}
         checked={id => dispatch(checked(id))}
      />
   );
};

export default FavoriteContainer;

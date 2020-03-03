import React from 'react';
import List from '../List';

const FavoritePresenter = ({
   contacts,
   onFavorite,
   onRemove,
   onUpdate,
   checkId,
   checked,
}) => {
   const style = {
      color: '#828282',
      fontSize: '27px',
   };
   return (
      <div>
         <h2 style={style}>Favorites</h2>
         {contacts
            .filter(contact => contact.favorite === true)
            .map(contact => (
               <List
                  contact={contact}
                  onFavorite={onFavorite}
                  onRemove={onRemove}
                  onUpdate={onUpdate}
                  checkId={checkId}
                  checked={checked}
               />
            ))}
      </div>
   );
};

export default FavoritePresenter;

import React from 'react';
import ContactList from '../List/ContactList';

const FavoritePresenter = ({ contacts, onFavorite, onRemove, onUpdate }) => {
   return (
      <div>
         <h2>Favorites</h2>
         {contacts
            .filter(contact => contact.favorite === true)
            .map(contact => (
               <ContactList
                  contact={contact}
                  onFavorite={onFavorite}
                  onRemove={onRemove}
                  onUpdate={onUpdate}
               />
            ))}
      </div>
   );
};

export default FavoritePresenter;

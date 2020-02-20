import React from 'react';
// import FavoritesList from './FavoritesList';
import ContactList from './ContactList';

const Favorites = ({ contacts, onRemove, onFavorite }) => {
   return (
      <div>
         {/* 먼저 filter를 통해 즐찾 ture 것들만 필터 하고 map을 사용함 */}
         {contacts
            .filter(contact => contact.favorite === true)
            .map(contact => (
               <ContactList
                  contact={contact}
                  key={contact.id}
                  onRemove={onRemove}
                  onFavorite={onFavorite}
               />
            ))}
      </div>
   );
};

export default Favorites;

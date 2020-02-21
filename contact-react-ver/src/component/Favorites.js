import React from 'react';
import ContactList from './ContactList';

const Favorites = ({ contacts, onRemove, onFavorite, onUpdateCheck }) => {
   console.log('화면 Favorites');
   const style = {
      color: '#828282',
      fontSize: '25px',
   };
   return (
      <div>
         <h2 style={style}>Favorites</h2>
         {/* 먼저 filter를 통해 즐찾 ture 것들만 필터 하고 map을 사용함 */}
         {contacts
            .filter(contact => contact.favorite === true)
            .map(contact => (
               <ContactList
                  contact={contact}
                  key={contact.id}
                  onRemove={onRemove}
                  onFavorite={onFavorite}
                  onUpdateCheck={onUpdateCheck}
               />
            ))}
      </div>
   );
};

export default Favorites;

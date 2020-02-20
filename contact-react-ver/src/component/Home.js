import React, { useState } from 'react';
import ContactList from './ContactList';

const Home = ({ contacts, onRemove, onFavorite, onUpdateCheck }) => {
   const [keyword, setKeyword] = useState('');

   const onChange = e => {
      setKeyword(e.target.value);
   };
   return (
      <div>
         <input value={keyword} onChange={onChange} />
         <button
            onClick={() => {
               setKeyword('');
            }}
         >
            clear
         </button>
         {
            (contacts = contacts
               .filter(contact => {
                  return contact.name.indexOf(keyword) > -1;
               })
               .map(contact => (
                  // map에서는 key가 반드시 존재해야 에러가 발생하지 않는다.
                  <ContactList
                     contact={contact}
                     key={contact.id}
                     onRemove={onRemove}
                     onFavorite={onFavorite}
                     onUpdateCheck={onUpdateCheck}
                  />
               )))

            // contacts.map(contact => (
            //    // map에서는 key가 반드시 존재해야 에러가 발생하지 않는다.
            //    <ContactList
            //       contact={contact}
            //       key={contact.id}
            //       onRemove={onRemove}
            //       onFavorite={onFavorite}
            //    />
            // ))
         }
      </div>
   );
};

export default Home;

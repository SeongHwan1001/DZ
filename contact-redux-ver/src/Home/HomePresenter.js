import React from 'react';

import { withRouter } from 'react-router-dom';

import ContactList from '../List/ContactList';

const HomePresenter = ({
   contacts,
   onRemove,
   onFavorite,
   checkId,
   history,
}) => {
   return (
      <div>
         <h2>Contact Infomation</h2>
         {contacts.map(contact => (
            <ContactList
               contact={contact}
               checkId={checkId}
               onRemove={onRemove}
               onFavorite={onFavorite}
               key={contact.id}
               history={history}
            />
         ))}
      </div>
   );
};

export default withRouter(HomePresenter);

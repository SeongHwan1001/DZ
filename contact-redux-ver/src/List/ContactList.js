import React from 'react';

import { withRouter } from 'react-router-dom';

import {
   MdBookmark,
   MdBookmarkBorder,
   MdDelete,
   MdEdit,
   MdCheckBox,
   MdCheckBoxOutlineBlank,
} from 'react-icons/md';

import Link from '@material-ui/core/Link';
const ContactList = ({
   contact,
   onRemove,
   onFavorite,
   checkId,
   checked,
   history,
}) => {
   return (
      <div>
         <h4>
            <Link
               component="button"
               variant="body2"
               color="black"
               onClick={() => {
                  checked(contact.id);
               }}
            >
               {contact.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </Link>
            &nbsp;
            {contact.name}
            {contact.phone}
            &nbsp;&nbsp;
            <Link
               component="button"
               variant="body2"
               color="secondary"
               onClick={id => {
                  onRemove(contact.id);
               }}
            >
               <MdDelete />
            </Link>
            &nbsp;
            <Link
               component="button"
               variant="body2"
               color="primary"
               onClick={() => {
                  checkId(contact.id);
                  history.push('/update');
               }}
            >
               <MdEdit />
            </Link>
            &nbsp;
            <Link
               component="button"
               variant="body2"
               color="black"
               onClick={() => {
                  onFavorite(contact.id);
               }}
            >
               {contact.favorite ? <MdBookmark /> : <MdBookmarkBorder />}
            </Link>
         </h4>
      </div>
   );
};

export default withRouter(ContactList);

import React from 'react';
// http://react-icons.netlify.com/#/icons/md 리액트 지원 icon 사용
import {
   MdBookmark,
   MdBookmarkBorder,
   MdDelete,
   MdCached,
} from 'react-icons/md';
import { withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const ContactList = ({
   contact,
   onRemove,
   onFavorite,
   onUpdateCheck,
   history,
}) => {
   const { id, name, phone, favorite } = contact;
   console.log(contact);
   return (
      <div>
         <h4>
            <Link
               component="button"
               variant="body3"
               color="black"
               onClick={() => {
                  onFavorite(id);
               }}
            >
               {favorite ? <MdBookmark /> : <MdBookmarkBorder />}
            </Link>
            &nbsp;
            {name} {phone}
            &nbsp;&nbsp;
            <Link
               component="button"
               onClick={() => {
                  onRemove(id);
               }}
            >
               <MdDelete />
            </Link>
            &nbsp;
            <Link
               component="button"
               onClick={() => {
                  history.push('/update');
                  onUpdateCheck(contact.id);
               }}
            >
               <MdCached />
            </Link>
         </h4>
      </div>
   );
};

export default withRouter(ContactList);

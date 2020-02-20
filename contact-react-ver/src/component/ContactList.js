import React from 'react';
// http://react-icons.netlify.com/#/icons/md 리액트 지원 icon 사용
import { MdStar, MdStarBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ContactList = ({ contact, onRemove, onFavorite, onUpdateCheck }) => {
   const { id, name, phone, favorite } = contact;

   return (
      <div>
         <h5>name : {name}</h5>
         <h5>phone : {phone}</h5>
         {/* <h5>{favorite}</h5> */}
         <button onClick={() => onRemove(id)}>삭제</button>
         <Link to="/update">
            <button
               onClick={() => {
                  onUpdateCheck(contact.id);
               }}
            >
               수정
            </button>
         </Link>
         <div onClick={() => onFavorite(id)}>
            {favorite ? <MdStar /> : <MdStarBorder />}
         </div>
         <p>-----------------------------</p>
      </div>
   );
};

export default ContactList;

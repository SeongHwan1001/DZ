import React, { useState } from 'react';
import ContactList from './ContactList';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';

const Home = ({ contacts, onRemove, onFavorite, onUpdateCheck, history }) => {
   console.log('화면 home');
   const useStyles = makeStyles(theme => ({
      margin: {
         margin: theme.spacing(1),
      },
   }));
   const [keyword, setKeyword] = useState('');

   const onChange = e => {
      setKeyword(e.target.value);
   };
   const style = {
      color: '#828282',
      fontSize: '25px',
   };
   const classes = useStyles();
   return (
      <div>
         <h2 style={style}>Contact Infomation</h2>

         <TextField
            className={classes.margin}
            label="Search"
            InputProps={{
               startAdornment: (
                  <InputAdornment position="start">
                     <Search />
                  </InputAdornment>
               ),
            }}
            value={keyword}
            onChange={onChange}
         />
         {
            (contacts = contacts
               // 첫 번째 인수가 두 번째 인수보다 작을 경우 -1
               // 두 인수가 같을 경우 0
               // 첫 번째 인수가 두 번째 인수보다 클 경우 +1
               .sort(function(a, b) {
                  // 오름 차순
                  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
               })
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
                     history={history}
                  />
               )))
         }
      </div>
   );
};

export default Home;

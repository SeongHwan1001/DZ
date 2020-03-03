import React from 'react';

// import ContactList from '../List/ContactList';
import List from '../List';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteForever from '@material-ui/icons/DeleteForever';

const HomePresenter = ({
   contacts,
   onRemove,
   onFavorite,
   checkId,
   checked,
   checkedDelete,
}) => {
   const style = {
      color: '#828282',
      fontSize: '27px',
   };

   const useStyles = makeStyles(theme => ({
      root: {
         display: 'flex',
         flexWrap: 'wrap',
      },
      textField: {
         marginLeft: theme.spacing(1),
         marginRight: theme.spacing(1),
         width: 200,
      },
   }));

   const classes = useStyles();
   return (
      <div>
         <h2 style={style}>Contact Infomation</h2>
         {contacts.map(contact => (
            <List
               contact={contact}
               checkId={checkId}
               onRemove={onRemove}
               onFavorite={onFavorite}
               key={contact.id}
               checked={checked}
            />
         ))}
         <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            startIcon={<DeleteForever />}
            onClick={e => {
               checkedDelete();
            }}
         >
            Delete
         </Button>
      </div>
   );
};

export default HomePresenter;

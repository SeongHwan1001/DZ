import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import BackspaceRoundedIcon from '@material-ui/icons/BackspaceRounded';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

import InputAdornment from '@material-ui/core/InputAdornment';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Face from '@material-ui/icons/Face';

const Update = ({ contact, onUpdate, history }) => {
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

   // console.log('update');
   // console.log(contact);
   const [name, setName] = useState(contact[0].name);
   const [phone, setPhone] = useState(contact[0].phone);

   const onNameChange = e => {
      setName(e.target.value);
   };

   const onPhoneChange = e => {
      setPhone(e.target.value);
   };

   const onSubmit = e => {
      console.log('submit');
      onUpdate(name, phone);
      // submit 이번트는 브라우저에서 새로고침을 발생시킨다.
      // 이를 방지하기 위해 이 함수를 호출한다.
      e.preventDefault();
      history.goBack();
   };

   const style = {
      color: '#828282',
      fontSize: '25px',
   };

   return (
      <div>
         <h2 style={style}>Update</h2>
         <p>
            <TextField
               className={classes.margin}
               label="Name"
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">
                        <Face />
                     </InputAdornment>
                  ),
               }}
               value={name}
               onChange={onNameChange}
            />
         </p>
         <p>
            <TextField
               className={classes.margin}
               // id="input-with-icon-textfield"
               label="Phone"
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">
                        <PhoneIphone />
                     </InputAdornment>
                  ),
               }}
               value={phone}
               onChange={onPhoneChange}
            />
         </p>
         <br />
         <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            startIcon={<BackspaceRoundedIcon />}
            onClick={() => {
               history.goBack();
            }}
         >
            Back
         </Button>
         &nbsp;
         <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={event => {
               onSubmit(event);
            }}
         >
            Save
         </Button>
      </div>
   );
};

export default withRouter(Update);

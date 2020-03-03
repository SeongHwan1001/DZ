import React from 'react';

import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import BackspaceRoundedIcon from '@material-ui/icons/BackspaceRounded';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Face from '@material-ui/icons/Face';

const UpdatePresenter = ({
   inputName,
   inputPhone,
   onChangeInputName,
   onChangeInputPhone,
   onUpdate,
   history,
}) => {
   const onChangeName = e => onChangeInputName(e.target.value);
   const onChangePhone = e => onChangeInputPhone(e.target.value);

   const onSubmit = e => {
      e.preventDefault();
      onUpdate(inputName, inputPhone);
      onChangeInputName('');
      onChangeInputPhone('');
      history.push('/');
   };
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
      <form onSubmit={onSubmit}>
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
                  name="name"
                  value={inputName}
                  onChange={onChangeName}
               />
            </p>
            <p>
               <TextField
                  className={classes.margin}
                  label="Phone"
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <PhoneIphone />
                        </InputAdornment>
                     ),
                  }}
                  name="phone"
                  value={inputPhone}
                  onChange={onChangePhone}
               />
            </p>
            <br />
            <Button
               variant="contained"
               color="secondary"
               size="small"
               className={classes.button}
               startIcon={<BackspaceRoundedIcon />}
               onClick={e => {
                  e.preventDefault();
                  onChangeInputName('');
                  onChangeInputPhone('');
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
               onClick={e => {
                  onSubmit(e);
               }}
            >
               Save
            </Button>
         </div>
      </form>
   );
};

export default withRouter(UpdatePresenter);

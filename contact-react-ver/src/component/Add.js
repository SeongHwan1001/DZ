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

const Add = ({ onInsert, history }) => {
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

   // 입력된 값을 관리하기 위한 state값
   const [inputs, setInputs] = useState({
      name: '',
      phone: '',
   });

   const onChange = e => {
      const { value, name } = e.target;
      console.log(e.target);
      setInputs({
         ...inputs,
         [name]: value,
      });
      console.log(inputs);
   };

   const onSubmit = e => {
      // submit 이번트는 브라우저에서 새로고침을 발생시킨다. 이를 방지하기 위함
      e.preventDefault();
      onInsert(inputs.name, inputs.phone);
      history.push('/');
   };

   const style = {
      color: '#828282',
      fontSize: '25px',
   };
   return (
      <form onSubmit={onSubmit}>
         <div>
            <h2 style={style}>Add</h2>
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
                  value={inputs.name}
                  onChange={onChange}
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
                  value={inputs.phone}
                  onChange={onChange}
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
      </form>
   );
};

export default withRouter(Add);

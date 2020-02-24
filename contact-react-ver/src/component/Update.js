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

   // Add의 name과 phone를 App에서 관리를 하면 편하지만 update시 기존에 가지고 있던 정보를 가지고 와서 뿌려주고 그 값을 가지고
   // setName을 사용하기 위해 Add, Update에 각 name, phone의 state와 onChange를 만들어 주었다.
   // 만약 App에서 관리하면 setName, setPhone 사용 불가 -> 즉, 기존의 값을 TextField에 뿌려주지 못함

   const [inputs, setInputs] = useState({
      name: contact.name,
      phone: contact.phone,
   });

   const onChange = e => {
      const { name, value } = e.target;
      setInputs({
         ...inputs,
         [name]: value,
      });
   };

   const onSubmit = e => {
      e.preventDefault();
      onUpdate(inputs.name, inputs.phone);
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
               name="name"
               value={inputs.name}
               onChange={onChange}
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
   );
};

export default withRouter(Update);

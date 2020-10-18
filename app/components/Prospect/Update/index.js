/**
 *
 * Update
 *
 */


import React from 'react';
import { Edit, SimpleForm, TextInput, required, DateInput } from 'react-admin';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: { display: 'inline', float: 'left', marginLeft: '20px' }
});

function Update(props) {
  const  classes = useStyles();
  return (
    <Edit title="Update Prospect" {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" validate={required()}  className={classes.input} />
        <TextInput label="Last Name" source="lastName" validate={required()} className={classes.input} />
        <TextInput label="Email" source="email" validate={required()} className={classes.input} />
        <TextInput label="Phone" source="phone" validate={required()} className={classes.input} />
        <TextInput label="Address" source="address" className={classes.input} />
        <TextInput label="City" source="city" className={classes.input} />
        <TextInput label="State" source="state" className={classes.input} />
        <TextInput label="Country" source="Country" className={classes.input} />
        <DateInput label="Date Of Birth" source="dob"/>
      </SimpleForm>
    </Edit>
  );
}

Update.propTypes = {};

export default Update;

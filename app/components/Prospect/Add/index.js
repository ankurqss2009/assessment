/**
 *
 * Add
 *
 */

import React from 'react';
import {
  DateInput,
  Create,
  SimpleForm,
  TextInput,
  required,
} from 'react-admin';

function Add(props) {
  return (
    <Create title="Add New Prospect" {...props}>
      <SimpleForm redirect="list">
        <TextInput label="First Name"  source="firstName"  validate={required()} style={{ display: 'inline', float: 'left', marginLeft: '20px' }} />
        <TextInput label="Last Name" source="lastName" validate={required()}  style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <TextInput label="Email" source="email" validate={required()} style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <TextInput label="Phone" source="phone" validate={required()} style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <TextInput label="Address" source="address"  style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <TextInput label="City" source="city"  style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <TextInput label="State" source="state" style={{ display: 'inline', float: 'left', marginLeft: '20px' }} />
        <TextInput label="Country" source="Country" style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <DateInput label="Date Of Birth" source="dob" />
      </SimpleForm>
    </Create>
  );
}

Add.propTypes = {};

export default Add;

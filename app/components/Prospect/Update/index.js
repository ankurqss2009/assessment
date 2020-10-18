/**
 *
 * Update
 *
 */


import React from 'react';
import { Edit, SimpleForm, TextInput, required, DateInput } from 'react-admin';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Update(props) {
  return (
    <Edit title="Update Prospect" {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" validate={required()} style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <TextInput label="Last Name" source="lastName" validate={required()} style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <TextInput label="Email" source="email" validate={required()} style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <TextInput label="Phone" source="phone" validate={required()} style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <TextInput label="Address" source="address" style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <TextInput label="City" source="city" style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <TextInput label="State" source="state" style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <TextInput label="Country" source="Country" style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
        <DateInput label="Date Of Birth" source="dob" />
      </SimpleForm>
    </Edit>
  );
}

Update.propTypes = {};

export default Update;

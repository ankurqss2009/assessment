
/**
 *
 * Listing
 *
 */

import React from 'react';
import { List, Datagrid, TextField, EditButton, ShowButton } from 'react-admin';

function Listing(props) {
  return (
    <List {...props} title="List of Prospects">
      <Datagrid>
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Email" source="email" />
        <TextField label="DOB" source="dob" />
        <TextField label="Phone" source="phone" />
        <TextField label="Address" source="address" />
        <TextField label="City" source="city" />
        <TextField label="State" source="state" />
        <TextField label="Country" source="Country" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}

Listing.propTypes = {};

export default Listing;

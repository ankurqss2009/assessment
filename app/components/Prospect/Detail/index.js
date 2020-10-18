/**
 *
 * Detail
 *
 */

import React from 'react';
import { TextField, Show, SimpleShowLayout } from 'react-admin';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Detail(props) {
  return (
    <Show title="Prospect Details" {...props}>
      <SimpleShowLayout>
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Email" source="Email" />
        <TextField label="DOB" source="dob" />
        <TextField label="Phone" source="phone" />
        <TextField label="Address" source="address" />
        <TextField label="City" source="city" />
        <TextField label="State" source="state" />
        <TextField label="Country" source="Country" />
      </SimpleShowLayout>
    </Show>
  );
}

Detail.propTypes = {};

export default Detail;

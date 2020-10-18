/**
 *
 * Detail
 *
 */

import React from 'react';
import { TextField, Show, SimpleShowLayout } from 'react-admin';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  field: {  float: 'left', width: '400px' }
});

function Detail(props) {
  const classes = useStyles();
  return (
    <Show title="Prospect Details" {...props}>
      <SimpleShowLayout>
        <TextField label="First Name" source="firstName" className = {classes.field}/>
        <TextField label="Last Name" source="lastName" className = {classes.field}/>
        <TextField label="Email" source="email" className = {classes.field}/>
        <TextField label="DOB" source="dob" className = {classes.field}/>
        <TextField label="Phone" source="phone" className = {classes.field}/>
        <TextField label="Address" source="address" className = {classes.field}/>
        <TextField label="City" source="city" className = {classes.field}/>
        <TextField label="State" source="state" className = {classes.field}/>
        <TextField label="Country" source="Country" className = {classes.field}/>
      </SimpleShowLayout>
    </Show>
  );
}

Detail.propTypes = {};

export default Detail;

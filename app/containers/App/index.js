/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';

import history from 'utils/history';
import { Admin, Resource } from 'react-admin';
import { Listing, Add, Detail, Update } from 'components/Prospect';

import DataProvider from '../../provider';


export default function App() {
  const dataProvider = new DataProvider('demo');
  return (
    <Admin dataProvider={dataProvider} history={history}>
      <Resource
        name="prospects"
        list={Listing}
        show={Detail}
        create={Add}
        edit={Update}
      />
    </Admin>
  );
}

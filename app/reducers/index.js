// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { createForms } from 'react-redux-form';

import counter from './counter';
import home from './home';
import itemList from './itemList';

const rootReducer = combineReducers({
  counter,
  home,
  items: itemList,
  ...createForms({ filter: { filterText: '' } }),
  router,
});

export default rootReducer;

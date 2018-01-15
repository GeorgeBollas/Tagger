// @flow

import ItemService from '../api/items/itemService';

import type { actionType } from '../types/common';
import type { itemType } from '../types/items';


export const LIST_ITEMS = 'LIST_ITEMS';
export const LIST_ITEMS_COMPLETE = 'LIST_ITEMS_COMPLETE';
export const NEW_ITEM = 'NEW_ITEM';
export const TOGGLE_ADVANCED_MODE = 'TOGGLE_ADVANCED_MODE';

export function toggleAdvancedMode() {
  return {
    type: TOGGLE_ADVANCED_MODE
  };
}

export function newItem(name: string) {
  return {
    type: NEW_ITEM,
    name
  };
}

export function listItems(filterText: string) {
  return {
    type: LIST_ITEMS,
    filterText
  };
}

export function listItemsComplete(items: itemType[], filterText: string) {
  console.log('listItemsComplete');
  return {
    type: LIST_ITEMS_COMPLETE,
    items,
    filterText
  };
}

export function listItemsAsync(filterText: string) {
  console.log('listItemsAsync called');
  return (dispatch: (action: actionType) => void) => {
    console.log('listItemsAsync activated');
    const is = new ItemService();
    is.getItems(filterText)
    .then((items: itemType[]) => dispatch(listItemsComplete(items, filterText)))
    .catch((err) => console.log(err));
  };
}

// @flow
import { LIST_ITEMS, LIST_ITEMS_COMPLETE, ADD_ITEM, TOGGLE_ADVANCED_MODE } from '../actions/itemList';
import type { itemType, listItemsStateType } from '../types/items';
import * as commonTypes from '../types/common';

export default function listItems(
  state: listItemsStateType = { items: [], filterText: '', isAdvancedOptions: true },
  action: commonTypes.actionType) {
  switch (action.type) {
    case LIST_ITEMS:
      return { ...state, items: action.items, filterText: action.filterText };
    case LIST_ITEMS_COMPLETE:
      return { ...state, items: action.items };
    case ADD_ITEM:
      return { ...state, name: action.name };
    case TOGGLE_ADVANCED_MODE:
      return { ...state, isAdvancedOptions: !state.isAdvancedOptions };
    default:
      return state;
  }
}

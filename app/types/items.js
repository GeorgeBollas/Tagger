// @flow

export type itemType = {
    name: string,
    date?: Date
  };

export type listItemsStateType = {
  items: itemType[],
  filterText: string
};

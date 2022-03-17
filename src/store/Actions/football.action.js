import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from './type';

export const addNewItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
    info: 'Add Item',
  };
};

export const editItem = (item) => {
  return {
    type: EDIT_ITEM,
    payload: item,
    info: 'Edit Item',
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
    info: 'Delete item',
  };
};
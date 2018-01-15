// @flow
import mongoose from 'mongoose';

const itemSchema =
  new mongoose.Schema({
    name: String,
    date: Date
  });

const itemsModel = mongoose.model('items', itemSchema);

export default itemsModel;

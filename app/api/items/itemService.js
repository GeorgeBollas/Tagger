// @flow
import mongoose from 'mongoose';
import itemsModel from './itemSchema';
import config from '../../core/config/config.dev';
import itemSchema from './itemSchema';

// import logger from '../../core/logger/app-logger';

mongoose.Promise = global.Promise;

export default class ItemService {

  db: any;

  constructor() {
    const dbHost = config.dbHost;
    const dbPort = config.dbPort;
    const dbName = config.dbName;

    mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, {
      useMongoClient: true
    });

    // this.generateItems('item', 10);
  }

  getItems(filterText: string) {
    return new Promise((resolve, reject) => {
      itemsModel.find({ name: { "$regex": filterText, "$options": "i" } }, (err, result) => {
        if (err) {
          return reject(err);
        }

        return resolve(result);
      });
    });
  }

  generateItems(prefix: string, count: number) {
    let item;
    for (let i = 1; i <= count; i++) {
      item = new itemSchema({
        name: prefix + i,
        date: new Date()
      });
      item.save();
    }
  }
}

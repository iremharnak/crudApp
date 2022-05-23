import mongoose from 'mongoose';
import Products from './seeders/product.seeder';
require('dotenv').config()

const mongoURL = process.env.DATABASE_URL;

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = {
  Products,
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();

// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Wine, More } = initSchema(schema);

export {
  Category,
  Wine,
  More
};
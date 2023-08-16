import Dexie from 'dexie';

export const db = new Dexie('myDatabase');


// Define a schema
db.version(1).stores({
  friends: '++id, name, age', // Primary key and indexed props
});

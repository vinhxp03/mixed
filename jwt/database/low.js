const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(process.env.DATABASE_PATH);
const db = low(adapter);

module.exports = db;
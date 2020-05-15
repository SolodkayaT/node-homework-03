const MongoDB = require("mongodb");
const { MongoClient } = MongoDB;
const MONGO_DB_URL =
  "mongodb+srv://admin:UATcKZ14b6QujBBX@cluster0-qdjyf.mongodb.net/admin?retryWrites=true&w=majority";
const DB_NAME = "mongo_db_example";
async function main() {
  const client = await MongoClient.connect(MONGO_DB_URL);
  const db = client.db(DB_NAME);
  const contacts = await db.createCollection("contacts");
  await contacts.insertOne({
    name: "Mango",
    email: "mango@mail.com",
  });
  console.log(await contacts.findOne({ name: "Mango" }));
}
main();

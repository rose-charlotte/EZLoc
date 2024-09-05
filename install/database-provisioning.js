// use with mongosh --file database-provisioning.js

db = connect("mongodb://localhost/ezloc");
db.createCollection("users");

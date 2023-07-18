const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// user: dbUser-2
// passKey: pD1PCKrMVx9sgvSv

const uri =
  "mongodb+srv://dbUser-2:pD1PCKrMVx9sgvSv@cluster0.jdfs3t2.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const userCollection = client
      .db("practiceNodeMongoCrud")
      .collection("practiceUsers");
    const user = { name: "Tom", email: "Hanks.25@gmail.com" };
    const result = await userCollection.insertOne(user);
    console.log(result);
  } finally {
  }
}

run().catch((er) => console.log(er));

app.get("/", (req, res) => {
  res.send("CRUD server working");
});

app.listen(port, () => {
  console.log(`CRUD running on port ${port}`);
});

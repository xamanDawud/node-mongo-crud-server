const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express());

// Async Await

// Passwrod : i5pFanDrvdhtz5lD
// userName : crud_accomplished

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://crud_accomplished:i5pFanDrvdhtz5lD @cluster0.lgiglma.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db("crud_accomplished").collection("users");
    const user = {
      name: "Xaman-2.0",
      email: "xaman2.0@gmail.com",
    };
    const result = await userCollection.insertOne(user);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Api is runnig to accomplished crud operation");
});
app.listen(port, (req, res) => {
  console.log(`Api is running on ${port}`);
});

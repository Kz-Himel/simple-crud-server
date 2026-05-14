const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const run = async () => {
    try{
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You Sucesfully conected to MONGO DB");
    }
    finally {

    }
}

run().catch(console.dir);



app.get("/", (req, res) => {
    console.log("Simple CRUD server is ready");
});

app.listen(port, () => {
    console.log(`Simplke CRUD Running on ${port}`);
})



// try{

// }
// catch(err) {
//     console.error(err);
// }
// finally{

// }
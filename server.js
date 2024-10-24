import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://christianmartindelmoral55:chrmor55@clustersorteo.cia5i.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSorteo";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const db = client.db("Sorteos");
    const collection = db.collection("usuarios");

    // Ruta para registrar usuarios
    app.post('/register', async (req, res) => {
      const { usuario, email, password } = req.body;
      const result = await collection.insertOne({ usuario, email, password });
      res.json(result);
    });

    // Ruta para obtener ganadores
    app.get('/ganadores', async (req, res) => {
      try {
        const ganadores = await collection.find({}).sort({ _id: -1 }).limit(5).toArray();
        res.json(ganadores);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los ganadores');
      }
    });

    // Iniciar el servidor
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });

  } catch (error) {
    console.error(error);
  }
}

run().catch(console.dir);

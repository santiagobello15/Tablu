import clientPromise from "../../middleware/database";

export default async function handler(req: any, res: any) {
  const client: any = await clientPromise;
  const db: any = client.db("TabluMarcas");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newPost = await db.collection("TabluMarcas").insertOne(bodyObject);
      res.json(newPost.ops[0]);
      break;
    case "GET":
      const posts = await db.collection("TabluMarcas").find({}).toArray();
      res.json({ CardsArray: posts });
      break;
  }
}

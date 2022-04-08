import clientPromise from "../../middleware/database";

export default async function handler(req: any, res: any) {
  const client: any = await clientPromise;
  const db: any = client.db("TabluFamosos");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newPost = await db.collection("cards").insertOne(bodyObject);
      res.json(newPost.ops[0]);
      break;
    case "GET":
      const posts = await db.collection("cards").find({}).toArray();
      res.json({ data: posts });
      break;
  }
}

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/cards", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let cards = await res.json();

  return {
    props: { cards },
  };
}

console.log(props.data.)

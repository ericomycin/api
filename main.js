import express from "express";
import dotenv, { configDotenv } from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT


app.get("/", (req, res) =>{
  const people = [
    {
      id: 1,
      name: `Eric opoku`,
      age:24
    },
    {
      id: 2,
      name: `Opoku`,
      age:54
    },
    {
      id: 3,
      name: `Beatrice`,
      age:90
    },
    {
      id: 4,
      name: `Boahene`,
      age:78
    }
  ]
  res.send(people)
})

app.listen(port, () => {
  console.log(`App runnung at ${port}`)
})
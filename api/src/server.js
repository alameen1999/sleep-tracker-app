// import express from "express";
// import cors from "cors";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.get("/", async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// });

// app.post("/", async (req, res) => {
//   const newUser = await prisma.user.create({ data: req.body });
//   res.json(newUser);
// });

// app.put("/:id", async (req, res) => {
//   const id = req.params.id

//   const updateUser = await prisma.user.update({where: {id: parseInt(id)}, data: {age: newAge}})
// })

// app.listen(8000, () => {
//   console.log("Connected to backend");
// });

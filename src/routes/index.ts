import { httpRequest } from "mon";

export const GET = httpRequest(async (req, res) => {
  res.json("Hello World");
});

export const POST = httpRequest(async (req, res) => {
  res.send("Hello World");
});

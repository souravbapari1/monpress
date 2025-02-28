import { httpRequest } from "monpress";

export const GET = httpRequest(async (req, res) => {
  res.send("Hello World");
});

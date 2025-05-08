import { httpRequest } from "monpress";

export const GET = httpRequest(async (req, res) => {
  res.json({ message: "GET request successful" });
});
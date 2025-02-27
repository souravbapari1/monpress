import { httpRequest } from "monpress";

export const GET = httpRequest(async (req, res) => {
  res.json({ id: req.params.id });
});

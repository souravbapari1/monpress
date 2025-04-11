import { httpRequest } from "monpress";

export const GET = httpRequest(async (req, res) => {
  res.status(200).json({ message: "GET request successful" });
});

export const POST = httpRequest(async (req, res) => {
  res.json({ message: "POST request successful" });
});

export const PATCH = httpRequest(async (req, res) => {
  res.json({ message: "PATCH request successful" });
});

export const PUT = httpRequest(async (req, res) => {
  res.json({ message: "PUT request successful" });
});

export const DELETE = httpRequest(async (req, res) => {
  res.json({ message: "DELETE request successful" });
});

import { middleware } from "monpress";

export const authMiddleware = middleware((req, res, next) => {
  if (req.path.startsWith("/auth")) {
    req.user = {
      id: "1",
      name: "Sourav",
    };
  }

  next();
});

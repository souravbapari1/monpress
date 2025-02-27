import { MonPress } from "monpress";
import routes from "@/generated/routes.g";
import { authMiddleware } from "@/src/middleware/authMiddleware";

const mon = MonPress({
  routes,
  middleware: [authMiddleware],
});

const port = process.env.PORT || 3000;
mon.listen(port, (e) => {
  console.log("⚡️ Server is running on port http://localhost:" + port);
});

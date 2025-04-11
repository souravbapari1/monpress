import { MonPress } from "monpress";
import routes from "@/generated/routes.g";
import { authMiddleware } from "@/src/middleware/authMiddleware";

const mon = MonPress({
  routes,
  middleware: [authMiddleware],
  express(app, http) {
  },
});



const port = process.env.PORT || 3000;
mon.listen(port, () => {
  console.log(`⚡️ Server is running on port http://localhost:${port}`);
});

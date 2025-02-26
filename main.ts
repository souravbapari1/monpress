import { MonPress } from "mon";
import routes from "./generated/routes.g";
import { authMiddleware } from "./src/middleware/authMiddleware";

const mon = MonPress({
  routes,
  middleware: [authMiddleware],
});

mon.listen(3000, (e) => {
  console.log("Listening on port 3000");
});

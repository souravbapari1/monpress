import { Router } from "express";
const router = Router();

//Route Group /  ✅
import * as routes0 from '@/src/routes/index.ts'; 
router.get("/", routes0.GET);
router.post("/", routes0.POST);
router.patch("/", routes0.PATCH);
router.put("/", routes0.PUT);
router.delete("/", routes0.DELETE);

export default router;

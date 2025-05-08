import { Router } from "express";
const router = Router();

//Route Group /  ✅
import * as routes0 from '@/src/routes/index.ts'; 
router.get("/", routes0.GET);

export default router;

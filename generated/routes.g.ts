import { Router } from "express";
const router = Router();

// Group /
import * as routes0 from '@/src/routes/index.ts';
router['get' as "get" | "post" | "put" | "patch" | "delete"]("/", routes0.GET);

export default router;

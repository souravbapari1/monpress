import { Router } from "express";
const router = Router();

// Group /
import * as routes0 from '@/src/routes/index.ts';
router['get' as "get" | "post" | "put" | "patch" | "delete"]("/", routes0.GET);

// Group /home/:id
import * as routes1 from '@/src/routes/home/[id].ts';
router['get' as "get" | "post" | "put" | "patch" | "delete"]("/home/:id", routes1.GET);

export default router;

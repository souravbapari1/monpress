import { Server } from "socket.io";
import * as express from "express";

// Extend the Express Request interface globally
declare global {
  namespace Express {
    interface Request {
      io?: Server;
      user?: {
        id: string;
        name: string;
      };
    }
  }
}

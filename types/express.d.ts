import * as express from "express";

// Extend the Express Request interface globally
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        name: string;
      };
    }
  }
}

import express from "express";
import { TenantController } from "../controllers/tenantController";

export const TenantRouter = express.Router();

TenantRouter.post("/tenant", TenantController.createTenant);

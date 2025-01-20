import { Tenant } from "@models";
import { Request, Response } from "express";
import { TenantModel } from "../models/tenant";
import { logger } from "../logger";

export const TenantController = {
    async createTenant(req: Request, res: Response): Promise<void> {
        try {
            const newTenant = req.body as Tenant;

            const tenantExist = await TenantModel.countDocuments({ id: newTenant.id }, { limit: 1 });

            if (tenantExist > 0) {
                logger.info(`Tenant ${newTenant.id} has already been created`);
                res.sendStatus(409);

                return;
            }

            const tenant = new TenantModel(newTenant);
            await tenant.save();
            res.status(201).json(tenant);
            logger.info(`new tenant ${tenant} has been created into DataBase`);
        } catch (err) {
            logger.error(err);
            res.status(500);
        }
    },
};

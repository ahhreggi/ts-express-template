import { Request } from "express";

export const buildReqDetails = (req: Request) => {
  return {
    route: `${req.method} ${req.path}`,
    params: req.params,
    body: req.body,
  };
};

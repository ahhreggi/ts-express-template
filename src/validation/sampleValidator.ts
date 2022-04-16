import { Request, Response, NextFunction } from "express";

export const sampleValidator = {
  validateGet: (req: Request, res: Response, next: NextFunction) => {
    next();
  },

  validateGetById: (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (isNaN(Number(id))) {
      return res.status(400).json({
        error: "Validation error: Parameter 'id' must be a number",
      });
    }
    next();
  },

  validatePost: (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.name || !req.body.description) {
      return res.status(400).json({
        error:
          "Validation error: Request body must include fields 'name' and 'description'",
      });
    }
    next();
  },
};

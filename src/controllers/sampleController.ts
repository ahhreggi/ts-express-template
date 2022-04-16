import { Request, Response } from "express";
import { sampleService } from "../services";
import { buildReqDetails } from "./utils";

export const sampleController = {
  getHandler: async (req: Request, res: Response): Promise<void> => {
    const result = await sampleService.findAll();
    res.status(200).json({
      statusCode: 200,
      requestDetails: buildReqDetails(req),
      body: result,
    });
  },

  getByIdHandler: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const result = await sampleService.findById(id);
    if (result) {
      res.status(200).json({
        statusCode: 200,
        requestDetails: buildReqDetails(req),
        body: result,
      });
    } else {
      res.status(400).json({
        statusCode: 400,
        requestDetails: buildReqDetails(req),
        error: `Could not retrieve item with id ${id}`,
      });
    }
  },

  postHandler: async (req: Request, res: Response): Promise<void> => {
    const { name, description } = req.body;
    const result = await sampleService.create(name, description);
    res.status(200).json({
      statusCode: 200,
      requestDetails: buildReqDetails(req),
      body: result,
    });
  },

  putHandler: async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({
      statusCode: 200,
      requestDetails: buildReqDetails(req),
      body: req.body,
    });
  },

  deleteHandler: async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({
      statusCode: 200,
      requestDetails: buildReqDetails(req),
    });
  },

  notFoundHandler: async (req: Request, res: Response): Promise<void> => {
    res.status(404).json({
      statusCode: 404,
      requestDetails: buildReqDetails(req),
      error: "That route doesn't exist!",
    });
  },
};

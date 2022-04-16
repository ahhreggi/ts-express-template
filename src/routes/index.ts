import { Router } from "express";
import { sampleValidator } from "../validation";
import { sampleController } from "../controllers";

export const router = Router();

// Request --> validator --> controller --> service

router.get("/", sampleValidator.validateGet, sampleController.getHandler);
router.get(
  "/:id",
  sampleValidator.validateGetById,
  sampleController.getByIdHandler,
);
router.post("/", sampleValidator.validatePost, sampleController.postHandler);
router.put("/:id", sampleController.putHandler);
router.delete("/:id", sampleController.deleteHandler);
router.get("/*", sampleController.notFoundHandler);

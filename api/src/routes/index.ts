import express from "express";
import { FilesController } from '../controllers/filesController';

const router = express.Router();

router.post("/files", async (req, res) => {
    const controller = new FilesController();
    const response = await controller.uploadFile(req.body.tokenId, req.body.file);
    return res.send(response);
});

  /**
   * @example tokenId "2"
   */

router.get("/files/:tokenId", async (req, res) => {
    const controller = new FilesController();
    const response = await controller.file(Number.parseInt(req.params.tokenId));
    return res.send(response);
});

export default router;
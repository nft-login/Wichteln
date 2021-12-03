import express from "express";
import multer from "multer";
import { FilesController } from '../controllers/filesController';
import { Web3Controller } from "../controllers/web3Controller";
import { ProfileController } from "../controllers/profileController";

const router = express.Router();

var upload = multer({ dest: 'uploads/' });
var type = upload.single('file');

router.post("/files/upload", type, async (req, res) => {
    const controller = new FilesController();
    if (req.file) {
        const response = await controller.uploadFile(req.body.tokenId, req.file);
        return res.send(response);
    }
    res.status(400).send("wrong file");
});

router.get("/files/:tokenId", async (req, res) => {
    const controller = new FilesController();
    const response = await controller.file(Number.parseInt(req.params.tokenId));
    return res.send(response);
});

router.get("/token/count", async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.count();
    return res.json(response);
});

router.get("/token/owner/:tokenId", async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.owner(Number.parseInt(req.params.tokenId));
    return res.json(response);
});

router.get("/token/account/:account", async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.account(req.params.account);
    return res.json(response);
});

router.get("/token/me", async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.me(req);
    return res.json(response);
});

router.get("/token/baseuri", async (_req, res) => {
    const controller = new Web3Controller();
    const response = await controller.baseuri()
    return res.json(response);
});

router.get("/profile/me", async (req, res) => {
    const controller = new ProfileController();
    const response = await controller.profile(req);
    return res.json(response);
});

export default router;

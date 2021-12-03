import express from "express";
import { FilesController } from '../controllers/filesController';
import { Web3Controller } from "../controllers/web3Controller";
import { ProfileController } from "../controllers/profileController";

const router = express.Router();

router.post("/files", async (req, res) => {
    const controller = new FilesController();
    const response = await controller.uploadFile(req.body.tokenId, req.body.file);
    return res.send(response);
});

router.get("/files/:tokenId", async (req, res) => {
    const controller = new FilesController();
    const response = await controller.file(Number.parseInt(req.params.tokenId));
    return res.send(response);
});

router.get("/token/count", async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.count();
    return res.send(response);
});

router.get("/token/owner/:tokenId", async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.owner(Number.parseInt(req.params.tokenId));
    return res.send(response);
});

router.get("/token/account/:account", async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.account(req.params.account);
    return res.send(response);
});

router.get("/token/me", async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.me(req);
    return res.send(response);
});

router.get("/token/baseuri", async (_req, res) => {
    const controller = new Web3Controller();
    const response = await controller.baseuri()
    return res.send(response);
});

router.get("/profile/me", async (req, res) => {
    const controller = new ProfileController();
    const response = await controller.profile(req);
    return res.send(response);
});

export default router;

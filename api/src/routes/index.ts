import express from "express";
import multer from "multer";
import { requiresAuth } from "express-openid-connect";
import { FilesController } from '../controllers/filesController';
import { Web3Controller, Web3Blockchain } from "../controllers/web3Controller";
import { ProfileController } from "../controllers/profileController";

const UPLOADS_PATH = process.env.UPLOADS_PATH || 'uploads/'

const router = express.Router();

var upload = multer({ dest: UPLOADS_PATH });
var type = upload.single('file');

router.post("/files/upload", requiresAuth(), type, async (req, res) => {
    const tokenId = req.body.tokenId;
    const account = await req.oidc.user?.sub;
    if (! await Web3Blockchain.getInstance().isOwnerOf(tokenId, account)) {
        return res.status(401).send();
    }
    const controller = new FilesController();
    if (req.file) {
        const response = await controller.uploadFile(req, tokenId, req.file);
        return res.send(response);
    }
    res.status(400).send("wrong file");
});

router.get("/files/:tokenId", requiresAuth(), async (req, res) => {
    const tokenId = Number.parseInt(req.params.tokenId);
    const account = await req.oidc.user?.sub;
    if (! await Web3Blockchain.getInstance().isOwnerOf(tokenId, account)) {
        return res.status(401).send();
    }
    const controller = new FilesController();
    controller.file(req, tokenId).then(response => res.send(response)).catch((error) => res.status(404).send());
});

router.get("/token/count", requiresAuth(), async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.count(req);
    return res.json(response);
});

router.get("/token/owner/:tokenId", requiresAuth(), async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.owner(req, Number.parseInt(req.params.tokenId));
    return res.json(response);
});

router.get("/token/account/:account", requiresAuth(), async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.account(req, req.params.account);
    return res.json(response);
});

router.get("/token/me", requiresAuth(), async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.me(req);
    return res.json(response);
});

router.get("/token/baseuri", requiresAuth(), async (req, res) => {
    const controller = new Web3Controller();
    const response = await controller.baseuri(req)
    return res.json(response);
});

router.get("/profile/me", requiresAuth(), async (req, res) => {
    const controller = new ProfileController();
    const response = await controller.profile(req);
    return res.json(response);
});

router.get("/login/:contract", async (req, res) => {
    const user = await req.oidc.user;
    if (user) {
        return res.redirect("/");
    }
    let contract = req.params.contract;
    return res.oidc.login({
        authorizationParams: {
            contract: contract
        }
    });
});

export default router;

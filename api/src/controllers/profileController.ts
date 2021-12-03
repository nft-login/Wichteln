import { Get, Route, Request } from "tsoa";
import express from "express";

@Route("profile")
export class ProfileController {

    @Get("me")
    public async profile(
        @Request() request: express.Request
    ): Promise<String> {
        const userInfo = await request.oidc.user?.sub || "unknown";
        return userInfo;
    }
}

import { Post, Get, Route, FormField, UploadedFile, Path, Response, Request } from "tsoa";
import { readFileSync, rename, existsSync, mkdirSync } from 'fs';
import express from "express";

const CONTRACT = process.env.CONTRACT;
const CHAIN_ID = process.env.CHAIN_ID;

@Route("files")
export class FilesController {
  @Post("upload")
  public async uploadFile(
    @Request() request: express.Request,
    @FormField() tokenId: number,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<void> {
    const chain_id = request.oidc.user?.chain_id || CHAIN_ID;
    const contract = request.oidc.user?.contract || CONTRACT;
    const dir = `${file.destination}/${chain_id}/${contract}`;
    !existsSync(dir) && mkdirSync(dir, { recursive: true });
    rename(file.path, `${dir}/${tokenId}`, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  /**
   * @example tokenId "2"
   */
  @Get("{tokenId}")
  @Response<File, { 'content-type': 'image/png' }>(200)
  public async file(
    @Request() request: express.Request,
    @Path() tokenId: number
  ): Promise<Buffer> {
    const chain_id = request.oidc.user?.chain_id || CHAIN_ID;
    const contract = request.oidc.user?.contract || CONTRACT;
    const dir = `uploads/${chain_id}/${contract}`;
    return readFileSync(`${dir}/${tokenId}`);
  }
}

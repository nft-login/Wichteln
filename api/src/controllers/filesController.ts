import { Post, Get, Route, FormField, UploadedFile, Path, Response } from "tsoa";
import { writeFileSync, readFileSync } from 'fs';

@Route("files")
export class FilesController {
  @Post("uploadFile")
  public async uploadFile(
    @FormField() tokenId: number,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<void> {
    console.log(file);
    writeFileSync(`uploads/${tokenId}`, file.buffer);
  }


  /**
   * @example tokenId "2"
   */
  @Get("{tokenId}")
  @Response<File, { 'content-type': 'image/png' }>(200)
  public async file(
    @Path() tokenId: number
  ): Promise<Buffer> {
    return readFileSync(`uploads/${tokenId}`);
  }
}
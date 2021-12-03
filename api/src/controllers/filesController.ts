import { Post, Get, Route, FormField, UploadedFile, Path, Response } from "tsoa";
import { writeFileSync, readFileSync, unlinkSync } from 'fs';

@Route("files")
export class FilesController {
  @Post("upload")
  public async uploadFile(
    @FormField() tokenId: number,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<void> {
    writeFileSync(`uploads/${tokenId}`, file.buffer);
    unlinkSync(file.path);
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

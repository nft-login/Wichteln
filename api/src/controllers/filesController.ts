import { Post, Get, Route, FormField, UploadedFile, Path, Response } from "tsoa";
import { writeFileSync, readFileSync, unlinkSync, rename } from 'fs';

@Route("files")
export class FilesController {
  @Post("upload")
  public async uploadFile(
    @FormField() tokenId: number,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<void> {
    rename(file.path, `${file.destination}/${tokenId}`, (err) => {
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
    @Path() tokenId: number
  ): Promise<Buffer> {
    return readFileSync(`uploads/${tokenId}`);
  }
}

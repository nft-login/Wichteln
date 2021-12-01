import { Post, Route, FormField, UploadedFiles, UploadedFile } from "tsoa";

@Route("files")
export class FilesController {
  @Post("uploadFile")
  public async uploadFile(
      @FormField() title: string,
      @FormField() description: string,
      @UploadedFile() file: Express.Multer.File,
  ): Promise<void> {
    console.log(file);
  }
}
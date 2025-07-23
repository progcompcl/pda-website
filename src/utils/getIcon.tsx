import { FileText, FileArchive, FileCode, File } from "lucide-react";

export function getFileIcon(ext: string) {
  switch (ext) {
    case "pdf":
      return FileText;
    case "zip":
    case "rar":
      return FileArchive;
    case "js":
    case "ts":
    case "cpp":
    case "c":
    case "java":
      return FileCode;
    case "md":
      return FileText;
    default:
      return File;
  }
}

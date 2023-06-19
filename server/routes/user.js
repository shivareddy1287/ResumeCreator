import express from "express";
import {
  getUsers,
  createUser,
  profileCreate,
  getDataPdf,
  getDataPdfJson,
  sendTotalData,
} from "../controllers/user.js";
import multer from "multer";
const router = express.Router();

const upload = multer({ dest: "uploads2/" });

router.get("/users", getUsers);
router.post("/user", createUser);
router.post("/senddata", sendTotalData);
router.post("/profile", upload.single("image"), profileCreate);
router.get("/datapdf", getDataPdf);
router.get("/datapdfJson", getDataPdfJson);
export default router;

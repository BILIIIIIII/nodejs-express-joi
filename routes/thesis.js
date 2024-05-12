import express from "express";
import { createThesis, deleteThesis, editThesis, getThesisByID, getThesises } from "../controllers/thesis.js";

// -------------------------------------------------------------------------

const router = express.Router();

router.get("/", getThesises);

router.get("/:id", getThesisByID);

router.post("/", createThesis);

router.put("/:id", editThesis);

router.delete("/:id", deleteThesis);

export default router;

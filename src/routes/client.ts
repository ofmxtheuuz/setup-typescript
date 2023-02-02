import express from "express"
import * as c from "../controllers/client.c"
const router = express.Router()


router.get("/", c.index)

export default router
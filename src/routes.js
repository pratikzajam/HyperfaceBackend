import express from 'express';
import { getAllBooks, addBooks, removeBook, updateBookStatus } from './controllers.js'


let router = express.Router()

router.get("/getallbooks", getAllBooks)
router.post("/addbooks", addBooks)
router.delete("/removebook/:bookId", removeBook)
router.patch("/updatestatus/:bookId", updateBookStatus)

export default router
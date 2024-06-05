import express from "express"
import { addProduct,listProd,removeProd} from "../controllers/prodController.js"
import multer from "multer"

const prodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

prodRouter.post("/add",upload.single("image"),addProduct)
prodRouter.get("/list",listProd)
prodRouter.post("/remove",removeProd);






export default prodRouter;
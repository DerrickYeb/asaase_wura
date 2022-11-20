import nextConnect from "next-connect";
import { createLand, getAllLands } from "../../../controllers/LandController";
import onError from "../../../middlewares/error";


const handler = nextConnect({onError})

handler.get(getAllLands)

handler.post(createLand)

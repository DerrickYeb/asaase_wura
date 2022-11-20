import nextConnect from "next-connect";
import { getSingleLand } from "../../../controllers/LandController";
import onError from "../../../middlewares/error";


const handler = nextConnect({onError});

handler.get(getSingleLand)
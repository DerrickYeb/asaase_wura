import nextConnect from "next-connect";
import { SendInvoiceRequest } from "../../../controllers/InvoiceController";

const handler = nextConnect({onError});

handler.post(SendInvoiceRequest);
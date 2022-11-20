import { request } from "https";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import { postAxiosInvoice } from "../src/hooks/axiosRequest";

const SendInvoiceRequest = catchAsyncErrors(async(req, res) => {
  const params = JSON.stringify({
    description: req.description,
    line_items: [
        {name: "Land Payment", amount: req.amount},
        // {name: data.name, amount: data.amount}
    ],
    tax: [
        {name: "VAT", amount: 200}
    ],
    customer: req.firstName + " " + req.lastName,
    due_date: "2022-12-08"
  })

  postAxiosInvoice(params,"/paymentrequest").then((response) => {
    res.status(200).json(
      {
        status: "success",
        data: {
          response
        }
      }
      );
  }).catch((error) => {
    res.status(500).json(
      {
        status: "error",
        data: {
          error
        }
      }
      );
  })
      
       
});

export { SendInvoiceRequest };
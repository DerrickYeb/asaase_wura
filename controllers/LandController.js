import prisma from "../lib/prisma";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";

const getAllLands = catchAsyncErrors(async(req, res) => {
  const lands = await prisma.Land.findmany();
  res.status(200).json(
    {
         status: "success",
            data: {
                lands
            }
    }
    );
});

const getSingleLand = catchAsyncErrors(async(req, res) => {
    const land = await prisma.Land.findUnique({
        where: {
        id: req.params.id
        }
    });
    res.status(200).json(
        {
             status: "success",
                data: {
                    land
                }
        }
        );
});

const createLand = catchAsyncErrors(async(req, res) => {
    const land = await prisma.Land.create({
        data: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            location: req.body.location,
            image: req.body.image,
            document: req.body.document,
            owner: req.body.owner,
            status: req.body.status,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
        }
    });
    res.status(200).json(
        {
             status: "success",
                data: {
                    land
                }
        }
        );
});

export { getAllLands, getSingleLand, createLand };
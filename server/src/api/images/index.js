import express from "express";
import multer from "multer";
import { ImageModel } from "../../database/allModels";
import { s3Upload } from "../../utils/s3";

const Router = express.Router();

// multer configure
const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * Route    /:_id
 * Desc     Get image details
 * Params   _id
 * Access   Public
 * Method   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params._id);
    return res.status(200).json({ image });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /
 * Desc     Upload image file to s3 bucket and the save file link in mongodb
 * Params   none
 * Access   Public
 * Method   POST
 */

Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const bucketOptions = {
      Bucket: "zomato-clone-page-bucket",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    };

    const uploadImage = await s3Upload(bucketOptions);

    const dbUpload = await ImageModel.create({
      images: [
        {
          location: uploadImage.Location,
        },
      ],
    });
    return res.status(200).json({ dbUpload });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

// Router.post("/", upload.array("file", 4), async (req, res) => {
//   try {
//     const file = req.files;

//     console.log(file);

//     const bucketOptions = {
//       Bucket: "zomato-clone-page-bucket",
//       Key: file.originalname,
//       Body: file.buffer,
//       ContentType: file.mimetype,
//       ACL: "public-read",
//     };

//     const uploadImage = await s3Upload(bucketOptions);

//     // const dbUpload = await ImageModel.create({
//     //   images: [
//     //     {
//     //       location: uploadImage.Location,
//     //     },
//     //   ],
//     // });

//     return res.status(200).json({ uploadImage });
//   } catch (error) {
//     return res.status(500).json({
//       error: error.message,
//     });
//   }
// });

export default Router;

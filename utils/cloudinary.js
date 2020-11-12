require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "kyambalo",
  api_key: 564237899423339,
  api_secret: "_Lwkx00Yb6l26xLEkRv2pUpVUzo",
});
module.exports = { cloudinary };

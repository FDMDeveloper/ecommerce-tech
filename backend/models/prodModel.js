const mongoose = require("mongoose");
const multer = require("multer"); // For image upload handling
const path = require("path"); // For file path manipulation

// ... (other imports and setup)

// Environment variable for image storage URL (replace with your actual URL)
process.env.IMAGE_STORAGE_URL = "gs://smarttechshop-vid.appspot.com/products";

const prodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    type: String,
    required: true,
    get: (image) => {
      if (!image) {
        return null;
      }
      return `${process.env.IMAGE_STORAGE_URL}/${image}`;
    },
    set: (image) => {
      return image.filename;
    }
  },
  category: { type: String, required: true }
});

// Configure Multer for image upload
const upload = multer({
  dest: "uploads/", // Temporary directory for uploaded images (optional)
  limits: { fileSize: 1000000 } // Set file size limit (optional)
});

// Function to upload image to file storage (replace with your specific storage implementation)
const uploadImageToStorage = async (imageFile) => {
  // ... (Your implementation to upload the image file to the secure file system)
  // Replace with your actual image storage service's upload logic and return the uploaded filename
  return "uploaded-image.jpg"; // Example filename returned by the storage service
};

prodSchema.pre("save", async function (next) {
  const product = this; // Reference the current product instance

  if (!product.isModified("image")) {
    return next(); // Skip if image hasn't changed
  }

  try {
    // Upload image to file storage
    const uploadedFilename = await uploadImageToStorage(product.image);

    // Update product image with uploaded filename
    product.image = uploadedFilename;

    next();
  } catch (error) {
    next(error); // Handle upload errors appropriately
  }
});

const prodModel = mongoose.models.prod || mongoose.model("prod", prodSchema);

export default prodModel;

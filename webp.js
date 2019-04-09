var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "./assets/images/wild_webp",            // Output folder
  PNGImages = "./assets/images/wild_jpg/*.png",         // PNG images
  JPEGImages = "./assets/images/wild_jpg/*.jpg";        // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [webp({
      lossless: true // Losslessly encode images
  })]
});

imagemin([JPEGImages], outputFolder, {
  plugins: [webp({
    quality: 70 // Quality setting from 0 to 100
  })]
});
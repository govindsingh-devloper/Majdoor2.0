const cloudinary = require('cloudinary').v2;

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
    const options = {
        folder,
        resource_type: 'auto',
    };
    
    if (height) {
        options.height = height;
    }
    if (quality) {
        options.quality = quality;
    }
    
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(options, (error, result) => {
            if (error) {
                return reject(error);
            }
            resolve(result);
        }).end(file.data); // Use file.data for the upload stream
    });
};



// exports.uploadImageToCloudinary  = async (file, folder, height, quality) => {
//     const options = {folder};
//     if(height) {
//         options.height = height;
//     }
//     if(quality) {
//         options.quality = quality;
//     }
//     options.resource_type = "auto";
//     console.log("OPTIONS",options)

//     return await cloudinary.uploader.upload(file.data, options);
// }

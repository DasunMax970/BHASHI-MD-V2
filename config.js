const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "BHASHI-MD~DQwGnKDb#QnQUe7x4C5VfIm6DCLYH7HzLLq1BEv_mip1YpMTGu2o",
  MONGODB: process.env.MONGODB || "mongodb+srv://dragon:v11@cluster0.7tfnvps.mongodb.net/",
 
};

import express from 'express';
const router = express.Router();
const fs = require('fs');
const apiDrive = require("../helpers/driveHdl");

// Agregar una nota
router.get('/results', async(req, res) => {
  try {

    // Load client secrets from a local file.
    fs.readFile('credentials.json', (err, content) => {
      if (err) return console.log('Error loading client secret file:', err);
      // Authorize a client with credentials, then call the Google Drive API.
      apiDrive.authorize(JSON.parse(content), apiDrive.listFiles);
    });

    res.status(200).json({
      "msg": "jota"
    }); 
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportamos la configuración de express app
module.exports = router;
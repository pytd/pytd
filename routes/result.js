import express from 'express';
const router = express.Router();
const apiDrive = require("../helpers/driveHdl");

// Agregar una nota
router.get('/results', async (req, res) => {
  try {

    const dataFile = await apiDrive.getFileId(req.query);
    // console.log('fileId: ', dataFile);
    if (dataFile) {
      res.status(200).json(dataFile);
    } else {
      res.status(404).json({
        msg: 'No existe ningun resultado con esos datos, por favor verifique',
      })
    }

  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportamos la configuración de express app
module.exports = router;
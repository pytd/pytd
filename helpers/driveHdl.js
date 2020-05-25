const { google } = require('googleapis');
const credentials = require('./pytd-bd9c64e2e6a9.json');
const scopes = [
  'https://www.googleapis.com/auth/drive'
];
const auth = new google.auth.JWT(
  credentials.client_email, null,
  credentials.private_key, scopes
);
const drive = google.drive({ version: "v3", auth });

module.exports = {
    getFileId
};

async function getFileId (params) {
    let filename;
    if (params.identify && params.order) {
        filename = params.identify + params.order + '.pdf';
    }
    // console.log('filename: ', filename);
    let res = await drive.files.list({
      q: "name = '" + filename + "'",
      pageSize: 1,
      spaces: 'drive',
      fields: 'files(name, id)'
    });
    // console.log('file: ', res.data.files[0]);
    return res.data.files[0];
}
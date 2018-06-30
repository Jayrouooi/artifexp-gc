const functions = require('firebase-functions');
const admin 	= require("firebase-admin");
const cors = require('cors')({ origin: true });
const _isEmpty = require('lodash/isEmpty');
const _isObject = require('lodash/isObject');

admin.initializeApp();

/* Triggers */

// firestore Users trigger
//const triggerFSUser = require('./triggers/user');
//exports.createUser = triggerFSUser.createUser;


/* API routes */
const apiError = { code: 'unauthorized_access', message: 'You are not authorized to perform this action.' };

// sample routes
// const sampleAPI = require('./api/sample');
// exports.sample = functions.https.onRequest((req,res) => {
//     if (req.method !== 'GET') { res.status(403).send(apiError); }
//     cors( req, res, () => { 
//         var action = rH.getParams(req,'action');
//         if ( action == 'sample' ) {
//             sampleAPI.get(req,res); 
//         } else {
//             res.status(403).send(apiError);
//         }
//     });
// });

exports.sendMessage = functions.https.onRequest((req,res) => {
    
    admin.messaging().send({
        data: {
            score: '850',
            time: '2:45'
          },
        token: 'f0eRus8pIb4:APA91bHvnqLAdzuIIKf_9HP51_x_7RHHKAVQauG-QFcKTiZ-rTEAeGTkCu8Fsqy_5Z-CJaOS0I71Bs9rWlKU5vAhnA2skGjTDtDcV6sTZnzAzpGQdG9xbZ1wg-SxSVylRvLefnboLN8409n1f3Alph_tLCcHtXFq8w'
    })
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
      res.status(200).send({ status: 'done' });
    })
    .catch((error) => {
      console.log('Error sending message:', error);
      res.status(403).send({ error: 'error' });
    });
  

});

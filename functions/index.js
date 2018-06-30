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

/**
 * www/node-mail/mailer.js
 *
 * entry point for NodeJS emailing with nodemailer and Sendgrid
 */

/** using mailtrap.io test account */

/** 1st integration testing */
//const sgMail = require('@sendgrid/mail');
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//const msg = {
//  //to: 'jus.a.sorensen@gmail.com',
//  //to: 'pmendez@us.ibm.com',
//  to: 'sorensej@us.ibm.com',
//  from: 'justin@jsore.com',
//  name: 'Justin Sorensen'
//  subject: 'Sent with NodeJS and Sendgrid',
//  text: 'Text version of body',
//  html: '<strong>woop woop</strong>',
//};
//sgMail.send(msg);


/** 1st attempt to hit the v3 API */
/** @sendgrid/client module lets you hit all API endpoints */
const client = require('@sendgrid/client');
client.setApiKey(process.env.SENDGRID_API_KEY);
/**
 * Required: ease access restrictions 'settings >> API Keys'
 *
 * not sure if required also, but before running set Authorization:
 *
 * curl -X "GET" "https://api.sendgrid.com/v3/templates"
 *   -H "Authorization: Bearer MY_API_KEY"
 *   -H "Content-Type: application/json"
 */
const request = {
  method: 'GET',
  url: '/v3/api_keys'
};
client.request(request)
  .then(([response, body]) => {
    console.log(response.statusCode);
    console.log(body);
  }).catch((err) => { console.log(err) });




// ripped from node/server.js
//const multiparty = require('multiparty');
//const util = require('util');
//app.post('/mail', (req, res) => {
//  res.writeHead(200);
//  console.log('incoming mail');
//  const form = new multiparty.Form({
//    maxFieldSize: 70000000
//  });
//  // this is apparentl depreciated
//  //form.on('progress', () => {
//  //  const start = Date.now();
//  //  let lastDisplayedPercentage = -1;
//  //  return function (bytesReceived, bytesExpected) {
//  //    const elapsed = Date.now() - start;
//  //    let percentage = Math.floor(bytesReceived / bytesExpected * 100);
//  //    if (percentage % 20 === 0 && percentage !== lastDisplayedPercentage) {
//  //      lastDisplayedPercentage = percentage;
//  //      console.log('Upload progress ' +
//  //        percentage + '% of ' + bytesExpected / 1000000 + 'Mb ' + elapsed + 'ms');
//  //    }
//  //  };
//  //})();
//  form.parse(req, (err, fields) => {
//    console.log(util.inspect(fields.email));
//    console.log('parsed fields: ' + Object.keys(fields));
//    fs.writeFileSync('payload.json', JSON.stringify(fields));
//  });
//});
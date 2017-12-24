//
// const yargs = require('yargs');
//
// const geocode = (require('./geocode/geocode.js'))
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//     .help()
//     .alias('help', 'h')
//     .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const request = require('request');

request({
  url: `https://api.darksky.net/forecast/API_KEY/40.6137658,-74.0153231`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Dark Sky API');
  } else if (response.statusCode === 400){
    console.log('No weather result found')
  } else if (response.statusCode === 200)
    console.log(`Temperature: ${body.currently.temperature}`);
  }
);

var request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Google Maps API');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('No address results found');
      } else if (body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
}

geocodeAddress('1914690').then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});

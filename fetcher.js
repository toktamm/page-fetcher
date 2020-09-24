const request = require('request');

const fs = require('fs');

const url = process.argv[2];
// console.log(url);

const location = process.argv[3];
// console.log(location);

const fetcher = function(url, location) {
  request(url, (err, res, body) => {

    const data = new Uint8Array(Buffer.from(body));

    fs.writeFile(location, data, (err) => {
      if (err) throw err;
      console.log(`Downloaded and saved the url to ${location}`);
    });

  })

}

fetcher(url, location);
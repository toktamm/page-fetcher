const request = require('request');

const fs = require('fs');

const url = process.argv[2];
// console.log(url);

const localPath = process.argv[3];
// console.log(localPath);

const fetcher = function(url, localPath) {
  request(url, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    //console.log res and statusCode here
    const data = new Uint8Array(Buffer.from(body));
    // console.log("data is: ", data);
    fs.writeFile(localPath, body, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Downloaded and saved saved ${body.length} bytes to ${localPath}`);
      }
    });

  })

}

if (!localPath) {
  console.log('please provide a valid local path!')
} else if (!url) {
  console.log('please provide a valid url!');
} else if (url && localPath) {
  fetcher(url, localPath);
}



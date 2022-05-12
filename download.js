const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream("quotes.json");
const request = https.get("https://type.fit/api/quotes", function(response) {
   response.pipe(file);

   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});
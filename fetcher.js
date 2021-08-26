
//when youre trying to control the order of asynchronous operations, you can use nested callbacks
const fs = require('fs');

//receive user input on url and path
const input = process.argv.slice(2);
console.log(input);

//make and http request and wait for response - should be async?

const request = require('request');
request(input[0], (error, response, body) => {
  
  //after the htp request is complete you need to take the data you receive and write it to a file in your local filesysten
  fs.writeFile(input[1], printToFile(error, response, body), function (err) {
    if (err) throw err;
    console.log(`Downloaded and saved to ${input[1]}.`)
    // console.log(`Downloaded and saved ${fileSizeBytes} to ${input[1]}.`)
  });
});


const printToFile = (error, response, body) => {
  console.log("Hello");
  // Print the error if one occurred
  error;
  // Print the response status code if a response was received
  response.statusCode;
  // Print the HTML for the homepage.
  body;

  return error, response.statusCode, body;
};


// const fileSize = fs.statSync("./index.html")
// const fileSizeBytes = fileSize["size"];
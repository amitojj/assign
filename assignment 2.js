function downloader(url) {
  return new Promise((res, rej) => {
    console.log("Started downloading from", url);
    setTimeout(() => {
      console.log("Download completed");
      let downloadedData = "Dummy content";
      res(downloadedData);
    }, 4000);
  });
}
function writeFile(data) {
  return new Promise((res, rej) => {
    console.log("Started writing data", data);
    setTimeout(() => {
      console.log("Writing completed");
      let fileName = "Dummy.txt";
      res(fileName);
    }, 2000);
  });
}
function uploadFile(fileName, newUrl) {
  return new Promise((res, rej) => {
    console.log("Started uploading file", fileName, "on the url", newUrl);
    setTimeout(() => {
      console.log("upload completed");
      let uploadResponse = "Success";
      res(uploadResponse);
    }, 3000);
  });
}

console.log("Starting the program");
downloader("www.google.com")
  .then((downloadedData) => writeFile(downloadedData))
  .then((fileName) => uploadFile(fileName, "www.drive.google.com"));

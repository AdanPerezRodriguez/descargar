const download = require("download");
var https = require("https");

https
  .get(
    "https://rawkuma.com/mou-hatarakitakunaindesu-boukensha-nanka-yamete-yaru-imasara-taiguu-wo-kaerukara-to-onegai-sarete-mo-okotowaridesu-boku-wa-zettai-hatarakimasen-chapter-12-2/",
    function (res) {
      var data = "";
      res.on("data", function (d) {
        data += d;
      });
      res.on("end", function () {
        let myArray = data.split('loading="lazy" src="');

        myArray.shift();
        myArray = myArray.map((img) => img.split('"')[0]);
        console.log(myArray);

        for (let i = 0; i < myArray.length; i++) {
          download(myArray[i], "imgs");
        }

        /*
        let imgs = [];
        for(let i = 1; i < myArray.length; i++) {
            let img = myArray[i].split('"')[0];
            imgs.push(img);
        }
        console.log(imgs);
        */
      });
    }
  )
  .on("error", function (e) {
    console.error(e);
  });

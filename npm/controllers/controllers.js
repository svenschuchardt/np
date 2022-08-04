const BASE_PATH   = "./controllers/";
const JSON_POSTS  = "posts.json";
const JSON_OFFERS = "offers.json";


const fs = require("fs");

exports.getPosts = (req, res, next) => {
    console.log("GET posts");
    createResponse(BASE_PATH + JSON_POSTS,res);
  };
  
  exports.getOffers = (req, res, next) => {
    console.log("GET offers");
    createResponse(BASE_PATH + JSON_OFFERS,res);
  };


  exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    // Create post in db
    res.status(201).json({
      message: 'Post created successfully!',
      post: { id: new Date().toISOString(), title: title, content: content }
    });
  };

function createResponse(filePath, res){
  fs.readFile(filePath, "utf8", (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const jsonPayload = JSON.parse(fileData);
      res.status(200).json(jsonPayload);
      //return cb && cb(null, object);
    } catch (err) {
      console.log(err);
      res.status(300).json({
        message : 'JSON parsing error', 
        errmsg : {err}
      });
    }
  });
}

 
  
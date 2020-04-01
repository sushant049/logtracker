let fs = require('fs');

exports.GetUserList = (req, res) => {
  console.log(process.env.NODE_ENV);
  if(process.env.NODE_ENV == "development") {
    let object = fs.readFileSync("./controllers/mock-data.json", function(err, data) {
      if(err)
        throw err;
      return data;
    });
    res.status(200).send(JSON.parse(object));
  } else {
    res.status(200).send({"ok": false});
  }
}
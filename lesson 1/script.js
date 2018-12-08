/*
var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");
});
app.get("/google", function(req, res){
   res.redirect('http://google.com');
    
 });
app.get("/youtube/:search", function(req, res){
    var search = req.params.search;
    res.redirect('https://www.youtube.com/results?search_query=' + search);   
});
app.get("/*", function(req, res){
    res.redirect("https://tumo.org/en/404")
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
//
var Square = require("./module");
var mySquareObject = new Square(5);

function main() {
   console.log(mySquareObject.getArea());
}
main();


*/
var fs = require("fs");

// fs.writeFile('message.txt', "Hello node", function(){
//    console.log("file saved");
// });




// var text = fs.readFileSync('message.txt','utf8')
// console.log(text)
var fs = require('fs');

// fs.appendFile('message.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });
/*
for (var i = 0; i < 3; i++) {
   fs.unlink('maa' + i + '.txt',  function () {
      console.log("file deleted " + i);
   })

}
*/
var express = require("express");
var app = express();
var fs = require('fs');
var ObjInString
fs.readFile('testObj.js', function (err, data) { return data = ObjInString })

//var ObjInString = JSON.stringify(fs.readFileSync("testObj.js")) 
//console.log(ObjInString);
/*app.listen(3000, function () {
   console.log("Example is running on port 3000");
});
app.get("/", function(req, res){
   res.send(ObjInString);
});
*/
console.log(ObjInString);








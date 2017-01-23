var express= require("express");
var app = express();
var bodyParser =require("body-parser");
app.set("view engine",'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.render("home");
})

var friends=["guy1","guy2","guy3","guy4","guy5"];

app.post("/add",function(req,res){
   
   console.log(req.body.newFriend);
   friends.push(req.body.newFriend);
   res.render("friends",{friends:friends});
})

app.get("/friends",function(req,res){
  console.log("friends page accessed");
  res.render("friends",{friends:friends});
})
app.listen(3000,function () {
  console.log('server started at 3000');
});

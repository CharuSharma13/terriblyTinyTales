var express = require('express');
var app = express();

app.use(express.json())
var roll=[{name:['5','6','9','12','18','20','25','30','32','36','37','38','40','42','45','47','49','50']}]

const PORT=process.env.PORT || 4000;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});


app.post("/api",function(req,res){
	var flag=0;
	for(let i=0;i<18;i++){
	let result=roll.find(rolls=>rolls.name[i]==req.body.name);
	if(result){
		flag=1;
		res.status(200).send({
			input:req.body.name,
			message:"Pass"
		})
		break;
	}
	}
	
	if(flag==0){
		res.status(200).send({
			input:req.body.name,
			message:"Fail"
		})
	}

})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('frontend/build'));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}

const whitelist = ['http://localhost:3000'​, 'http://localhost:8080'​, 'https://shrouded-journey-38552.heroku...​]
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

app.listen(PORT,function(){
	console.log("running on port 4000");
})


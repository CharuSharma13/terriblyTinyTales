# terriblyTinyTales
Insert and Fetch Data using node js Back-end &amp; Display records on react js front-end.
# Cezerin - Ecommerce Progressive Web Apps

[![CircleCI](https://circleci.com/gh/cezerin/cezerin/tree/master.svg?style=svg)](https://circleci.com/gh/cezerin/cezerin/tree/master)

Built with:
* Node.js
* React.js
* Express


Connecting the React Client to the Express API
On entering the value and pressing submit, a request should be sent to the backend

```js
// Post a request for a user with a given ID

function submit(e){
        e.preventDefault();
        var OPTIONS = {
            url: "http://localhost:4000/api",
            method: "POST",
            data:{name:data.name},
            headers: {
              "content-type": "application/json",
            },
          }

        axios(OPTIONS).then(res=>detail(res))
        .catch(err=>console.log(err));
    
    }
```

Access-Control-Allow-Origin

```js
// Post a request for a user with a given ID


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});
```



Configuring a new route in the Express API

```js
// 
const PORT=process.env.PORT || 4000;
app.listen(PORT,function(){
	console.log("running on port 4000");
})

```


rollnumber is the value to be passed, and it will return pass or fail results. This external API only accepts 1 rollnumber per call.
```js
// Post a request for a user with a given ID

var roll=[{name:['5','6','9','12','18','20','25','30','32','36','37','38','40','42','45','47','49','50']}]

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
```



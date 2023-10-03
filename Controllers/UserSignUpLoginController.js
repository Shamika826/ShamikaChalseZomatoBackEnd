const UserSignUpLogin_File = require("../Models/UserSignUpModel")

module.exports.getSignUpAPI = async (request, response) => {
    try {
        // let a = await UserSignUp.find()
        let bodyData = request.body;
        let UserSignUp_File_PostData = new UserSignUpLogin_File(       //create instance
            {
                "fullname": bodyData.fullname,
                "email": bodyData.email,
                "mobileNo": bodyData.mobileNo,
                "Password": bodyData.Password
            }
        )
        let result = await UserSignUp_File_PostData.save() //save the method , this method is promise , so we use async await 

        console.log(bodyData.Password)
        response.status(200).send(result)
        // response.status(200).send(bodyData)
        // response.status(200).send("sigup api")
    }
    catch (error) {
        response.status(200).send("ERROR!")
    }
}

module.exports.getLoginAPI = async (request, response) => {
    try {
        let data = request.body
        let UserLogin_PostData = await UserSignUpLogin_File.findOne({
            email: data.email,             //email is of mongodb and data.email is user entered data
            Password: data.Password        //Password is of mongodb and data.Password is user entered data
        })

        if(UserLogin_PostData != null){
            response.status(200).send(UserLogin_PostData)
        }else {
            response.status(200).send("Please enter again Wrong email or password")
        }
        // response.status(200).send(data)
        // response.status(200).send("login api")
    }
    catch (error) {
        response.status(200).send("ERROR!")
    }
}
/*
To enable the access of post data we use the bellow in app.js file:-
app.use(express.json())
app.use(express.urlencoaded({extended:false}))



app.use(express.json()) =  we use this as this converts string json data to pure 
json data.
When user type and send their data on http then the data is converted to 
string json , so we use app.use(express.json()) so that string json data
is converted to pure json data.
So to convert string json data to pure json data we use express.json()




app.use(express.urlencoaded({extended:false})) 

app.use(express.urlencoaded()) will converts normal post data into
json data.
Also we use {extended:false} extended as false , becaz we don't want to use
params data into post data.


JSON.parse() 
JSON.stringify() 
search abt these 2 methods
JSON.stringify()  method of js whch is use to convert pure json data to string 
json data and JSON.parse() is use to convert string json data to pure json data
then why are't we using JSON.parse() in app.use() and why we are using
app.use(express.json()) , that's becaz we need to make manny more configarations
and express has seperate json method which take care of these as well as
convert the string json data to pure json data.

These bellow 2 things are a part of body parser
app.use(express.json())
app.use(express.urlencoaded({extended:false}))


select raw and json application as it sends
Also select body option-->raw .


inside controller file:-
And since as we are sending data under body option  , so to access the data
inside express js we use request.body property 
so taht whatever we type under body section of post,
will get it inside request.body
request.body 

Since to access post data we use two properties app.use(express.json()) and 
app.use(express.urlencoaded({extended:false})) for request.body property to enable.

Now since we have gathered the data from the body section , now we need to
sae it in mongdb.
To do that we 1)create an instance and 2)save the method

1)create an instance =  we need to craete the instance of user model


*/

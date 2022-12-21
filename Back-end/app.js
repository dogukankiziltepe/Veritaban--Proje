var express = require('express');
var app = express()
var cors = require("cors");
const bodyParser = require("body-parser")


const testRoutes = require("./routes/test")
const authRoutes = require("./routes/auth")
const patientTestRoutes = require("./routes/patienttest")
const patientTestPropertyRoutes = require("./routes/patienttestproperty")
const testPropertyRoutes = require("./routes/testproperty")
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };



app.use(bodyParser.json())
app.use(cors(corsOpts));
app.use("/test", testRoutes)
app.use("/auth", authRoutes)
app.use("/patienttest", patientTestRoutes)
app.use("/patienttestproperty", patientTestPropertyRoutes)
app.use("/testproperty", testPropertyRoutes)



app.get('/',(req,res) => {
    res.send("new project")
})

app.listen(3000);
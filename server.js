//const notes=require('./notes.js');
//console.log('server file is available');
//var age=notes.age;
//console.log(age);
// var _=require('lodash');
//var data=["person","person",1,2,1,2,'name','age','2'];
//var filter=_.uniq(data);
//console.log(filter);
const express = require('express')
const app = express()
const db=require('./db');
const Person=require('./models/person');
const Menu=require('./models/Menu');
const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})




//import the router files
const personRoutes=require('./routes/personRoutes');
//use the routers
app.use('/person',personRoutes);

//import the router files
const menuRoutes=require('./routes/menuRoutes');
//use the routers
app.use('/menu',menuRoutes);





app.listen(3000,()=>{
    console.log("listening on port 3000");
})

/*app.post('/person',(req,res)=>{
    const data=req.body
    //create a new person document using the mongoose model
    const newPerson =new person(data);
    //save the new person to database
    newPerson.save((error,savedperson)=>{
        if(error){
            console.log('Error saving person:',error);
            res.status(500).json({error:'Internal Saving Error'})
        }else{
            console.log('data saved succesfully');
            res.status(200).json(savedperson);
        }
    })
})*/
/*app.get('/sagar',(req,res)=>{
    var cricket={
        name:'sagar',
        fav_cricketer:'Dhoni',
        jersy_no:7
    }
    
    res.send(cricket)
}

)*/


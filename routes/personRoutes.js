const express=require('express');
const router= express.Router();
const Person=require('./../models/person');
router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newPerson=new Person(data);
        const response=await newPerson.save();
        console .log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

router.get('/',async(req,res)=>{
    try{
        const data= await Person.find();
        console .log('data fetched');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
})
router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType=='chef'||'manager'||'waiter'){
            const response=await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'Internal Service Error'});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
})

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id; //extract the id from the url parameter
        const updatedPersonData= req.body; //updated data for the person
        const response= await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true, //return the updated document
            runValidators:true //run mongoose validation
        })

        if(!response){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);


    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
})
module.exports=router;
const express=require('express');
const router= express.Router();
const Menu=require('./../models/Menu');
router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newItem=new Menu(data);
        const response=await newItem.save();
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
        const data= await Menu.find();
        console .log('data fetched');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
})

module.exports = router;
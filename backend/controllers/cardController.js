import cards from './../models/cardModel.js';
import errorHandler from './../helpers/dbErrorHandler.js';
import {StatusCodes} from 'http-status-codes';

const createCard=async(req,res,next)=>{
    try{
        const newCard=await cards.create(req.body);
        res.status(StatusCodes.CREATED).json({
            status:"sucess",
            data:{
                newCard
            }
        })
    }catch(err){
        return res.status(StatusCodes.BAD_REQUEST).json({
            status:'failed!',
            message:errorHandler.getErrorMessage(err)
        })
    }
};

const getAllCard=async(req,res)=>{
    try{
        const card=await cards.find();
      
        res.status(StatusCodes.OK).json({
            status:'sucess',
            data:{
                card
            }
        });
    }catch(err){
        return res.status(StatusCodes.BAD_REQUEST).json({
            message:'failed!',
            message:errorHandler.getErrorMessage(err)
        })
    }
}

export default {createCard,getAllCard}
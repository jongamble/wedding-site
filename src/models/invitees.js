import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Invitee = new Schema({
    invitationName : String,
    name  		   : String,
    email  		   : String,
    attending  	   : String
});
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const inviteeSchema = new Schema({
    inviteName : String,
    name  	   : String,
    email  	   : String,
    attending  : String
});

export default inviteeSchema;
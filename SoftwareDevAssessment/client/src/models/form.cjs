// schema for making sure the form takes data accordingly before sending it to the data store on mongodb

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    user: String,
    breed: String,
    dogNumber: String,
    email: Array
});

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;
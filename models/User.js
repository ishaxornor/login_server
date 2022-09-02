const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password : String,
    dateOfBirth : Date
});

const user = mongoose.model('User',UserSchema);

module.exports = user;
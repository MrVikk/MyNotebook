const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/Mynotebook"

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("connected to Mongo Successfully");
    }).catch((error) => {
        console.log(error)
    })

}
module.exports = connectToMongo;
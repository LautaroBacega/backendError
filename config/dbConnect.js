const {default: moongose} = require("mongoose");

const dbConnect = () => {
    try{
        const conn = mongoose.connect(process.env.MONGODB_URL); 
        console.log('Database connected');
    }
    catch(error) {
        console.log('Database error');
    }
};

module.exports = dbConnect;
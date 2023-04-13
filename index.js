const {app} = require('./app.js');
const mongoose = require("mongoose");


const port = process.env.PORT || 3000;

app.listen(port, async () => {
    await mongoose.connect('mongodb+srv://amrsiam:a3332862@cluster0.9djjbot.mongodb.net/?retryWrites=true&w=majority');
    console.log(`listening on port ${port} ...`)
});

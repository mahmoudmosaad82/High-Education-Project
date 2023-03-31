const express = require('express');
const app = express();
app.use(express.json());

// const {addStudentRouter}= require('./routs/addStudent_router.js');
const {addStudentRouter} = require("./routs/addStudent_router.js");

app.use("/api/addStudentRouter", addStudentRouter);

module.exports = {
    app
};

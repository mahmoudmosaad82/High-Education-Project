const { Router } = require('express');
const addStudentRouter = Router()

const addNewStudent_controller= require('../student_controller/addNewStudent_controller.js');

addStudentRouter.get('/',addNewStudent_controller.getAllstudents);
addStudentRouter.get('/:id',addNewStudent_controller.getStudentById);
addStudentRouter.post('/',addNewStudent_controller.addStudent);
addStudentRouter.put('/:id',addNewStudent_controller.editStudent);
addStudentRouter.delete('/:id',addNewStudent_controller.deleteStudent);

module.exports = {
    addStudentRouter
};

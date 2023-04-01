const { computer_dep_students } = require('../models/department_students');
const Joi = require('joi');
const { validateStudentName } = require('../helper/validation');
const {validateStudentId} = require('../helper/validation');




const getAllstudents = (req, res) => {
    res.send(computer_dep_students);
};

const getStudentById = (req, res) => {
    const student = computer_dep_students.find(c => c.id === parseInt(req.params.id));
    if (!student) {
        res.status(404).send('The student with the given ID not found !');
    } else {
        res.send(student);
    }
};

const addStudent = (req, res) => {
    	 /*   if(!req.body.name || req.body.name.length<3){
           // res.status(400).send('Name is required and must be more than 3 characters');
     */  }

   

    const student = {
        id: computer_dep_students.length + 1,
        student_name:req.body.student_name,
        student_dep:req.body.student_dep,
        sudent_UniversityID:req.body.sudent_UniversityID,
        academic_year:req.body.academic_year,
        degree:req.body.degree,
        subjects:req.body.subjects,
       
    };
    computer_dep_students.push(student);
    res.send(student);
};

const editStudent = (req, res) => {
    //we check if the id exist or not
    // Parsent transforms string id to int
    const student = computer_dep_students.find(c => c.id === parseInt(req.params.id));
    
  /*  if (!student)// in case there is no match in id

        res.status(404).send('The student with the given ID not found !');

    const result = validateStudentId(req.body); /// validate data from .helper file with  joi

    if (result.error) {
        // details[0] prints the firs line of the error
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;*/

    }
    // we get the new name from api body

    student.student_name = req.body.student_name;
    //we send the new data to apii as a response
    res.send(student);

};

const deleteStudent = (req, res) => {
    // serach for the id we want to delet if it is exist or not
    const student = computer_dep_students.find(c => c.id === parseInt(req.params.id));
    if (!student)
        res.status(404).send('The Course with the given ID not found !');
    /// we get the index of that object
    const index = computer_dep_students.indexOf(student);
    /// delet object
    computer_dep_students.splice(index, 1);

    res.send(student);
};

module.exports = {
    getAllstudents,
    getStudentById,
    addStudent,
    editStudent,
    deleteStudent


};

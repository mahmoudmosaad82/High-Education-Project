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
    	 //   if(!req.body.name || req.body.name.length<3){
           // res.status(400).send('Name is required and must be more than 3 characters');
     //  }

   

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

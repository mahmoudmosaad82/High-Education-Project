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

const addStudent = async (req, res) => {
    try {
        const student = await computer_dep_students.create(req.body);
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};

const editStudent = async (req, res) => {
    
    try {
        
        const student = await computer_dep_students.findOne({ _id: req.params.id });
        if (req.body.student_name) {
            student.student_name = req.body.student_name;
        }
        if (req.body.student_dep) {
            student.student_dep = req.body.student_dep;
        }
        if (req.body.student_UniversityID) {
            student.student_UniversityID = req.body.student_UniversityID;
        }
        if (req.body.academic_year) {
            student.academic_year = req.body.academic_year;
        }
        if (req.body.degree) {
            student.degree = req.body.degree;
        }
        if (req.body.subjects) {
            student.subjects = req.body.subjects;
        }
        await student.save();
        res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteStudent = async (req, res) => {
    try {
        const student = await computer_dep_students.deleteOne({ _id: req.params.id });
        res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error);
        
    }
};


module.exports = {
    getAllstudents,
    getStudentById,
    addStudent,
    editStudent,
    deleteStudent


};

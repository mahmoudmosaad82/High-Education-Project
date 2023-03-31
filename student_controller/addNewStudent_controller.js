
const editStudent = (req, res) => {
    const student = computer_dep_students.find(c => c.id === parseInt(req.params.id));
    if (!student)
        res.status(404).send('The student with the given ID not found !');

    const result = validateStudentId(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    student.student_name = req.body.student_name;
    res.send(student);

};

const deleteStudent = (req, res) => {
    const student = computer_dep_students.find(c => c.id === parseInt(req.params.id));
    if (!student)
        res.status(404).send('The Course with the given ID not found !');

    const index = computer_dep_students.indexOf(student);
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

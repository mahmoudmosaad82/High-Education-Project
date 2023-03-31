
const editStudent = (req, res) => {
    //we check if the id exist or not
    // Parsent transforms string id to int
    const student = computer_dep_students.find(c => c.id === parseInt(req.params.id));
    
    if (!student)// in case there is no match in id
        res.status(404).send('The student with the given ID not found !');

    const result = validateStudentId(req.body); /// validate data from .helper file with  joi

    if (result.error) {
        // details[0] prints the firs line of the error
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
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

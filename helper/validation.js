const Joi = require('joi');

function validateStudentName(name) {
    const schema = Joi.object({
        student_name: Joi.string().min(3).required()
    });

    return schema.validate(name);
}
function validateStudentId(student_id) {
    const schema = Joi.object({
        student_UniversityID: Joi.string().length(14).regex(/^\d+$/)
    });

    return schema.validate(student_id);
}
module.exports = {
    validateStudentName,
    validateStudentId,
};

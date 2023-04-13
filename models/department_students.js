





const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;


const StudentSchema= Schema({
    student_name: {
        type: String,
        required: true,
    },
    student_dep: {
        type: String,
        required: true,
    },
    student_UniversityID: {
        type: Number,
        required: true,
    },
 
  
    academic_year: {
        type: Number,
        required: true,
    },

    degree: {
        type: String,
        required: true,
    },
    subjects: [{type:String ,
        required: true,},{type:String ,
            required: true,},{type:String ,
                required: true,},
        
    ]
       
    
});

const computer_dep_students = model('computer_dep_students', StudentSchema);




/*const computer_dep_students = [
    {id:1 , student_name:"Mahmoud",student_dep:"computer",
    student_UniversityID:1,academic_year:2021,degree:"bachelor",subjects:["Ai","ML","NN"]},
   
];*/

/* 
const electrical_dep_students = [
    {id:1 , student_name:"",student_dep:"",
    sudent_UniversityID:1,academic_year:2021,degree:"",subjects:["","",""]},
   
];
const mechanical_dep_students = [
    {id:1 , student_name:"",student_dep:"",
    sudent_UniversityID:1,academic_year:2021,degree:"",subjects:["","",""]},
   
];
const civil_dep_students = [
    {id:1 , student_name:"",student_dep:"",
    sudent_UniversityID:1,academic_year:2021,degree:"",subjects:["","",""]}, 
   
];*/
module.exports={
    computer_dep_students,
/*     electrical_dep_students,
    mechanical_dep_students,
    civil_dep_students */



};

const studentKntrl ={}

const Student = require('../models/Student')

studentKntrl.getStudents = async(req,res)=>{
   const students = await Student.find()
   res.json(students)
}
studentKntrl.createStudent = async (req,res)=>{
    const newStudent = new Student(req.body)
    
    await newStudent.save()

    res.send({message: 'Kayıt yapıldı'}); 
};

studentKntrl.getStudent = async (req,res)=>{
   const student = await Student.findById(req.params.id)
    res.send(student)
};

studentKntrl.editStudent = async(req,res)=>{
    await Student.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Güncelleme Yapıldı'})
}

studentKntrl.deleteStudent = async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id)
    res.json({status: 'Ögrenci Silindi'})

};


module.exports =studentKntrl;
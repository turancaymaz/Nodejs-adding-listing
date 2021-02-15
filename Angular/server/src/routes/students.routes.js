const { Router } = require('express')
const router = Router()

const studentsKntrl = require('../controllers/students.controller.js')


router.get('/',studentsKntrl.getStudents);

router.post('/', studentsKntrl.createStudent);

router.get('/:id',studentsKntrl.getStudent);

router.put('/:id', studentsKntrl.editStudent);

router.delete('/:id', studentsKntrl.deleteStudent);


module.exports = router
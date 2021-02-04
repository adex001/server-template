const buildMakeStudent = require('./student');
const studentSchema = require('./student-schema');
// let {studentValidator} = require('../../validator')
const studentValidator = require('../validator')(studentSchema);

const makeStudent = buildMakeStudent(studentValidator);

module.exports = makeStudent;

/* eslint-disable no-undef */
const chai = require('chai');

const { expect } = chai;
const validator = require('./index');
const studentSchema = require('../student/student-schema');

const studentValidator = validator(studentSchema);

describe('validators', () => {
  describe('studentValidator', () => {
    it('validates name:string:required, grade:number, age:number, prefect:boolean', () => {
      const validPayload = {
        name: 'howie',
        grade: 12,
        age: 17,
        prefect: false,
      };
      const input = studentValidator(validPayload);
      const actual = true;
      expect(input).to.equal(actual);
    });

    it('returns error messages if invalid', () => {
      const invalidPayload = {
        grade: 'twelve',
        age: null,
        prefect: 1,
        secret: 'boom',
      };
      const input = studentValidator(invalidPayload);
      const errorMessage = [
        'must have name as string',
        'age must be a number',
        'grade must be a number',
        'prefect must be a boolean',
        '"secret" is not allowed',
      ].join('\n');

      const actual = {
        error: errorMessage,
      };

      expect(input).to.eql(actual);
    });
  });
});

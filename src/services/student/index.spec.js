/* eslint-disable no-undef */
const chai = require('chai');

const { expect } = chai;
const makeStudent = require('./index');

describe('makeStudent', () => {
  it('throws error if invalid payload', () => {
    const errorMessage = [
      'must have name as string',
      'age must be a number',
      'grade must be a number',
      'prefect must be a boolean',
    ].join('\n');

    expect(() => {
      makeStudent({
        grade: 'twelve',
        age: 'twleve',
        prefect: 12,
      });
    }).to.throw(errorMessage);
  });
  it('must have name', () => {
    const student = makeStudent({
      name: 'howie',
    });
    const input = student.getName();
    const actual = 'howie';
    expect(input).to.equal(actual);
  });
  it('can have grade', () => {
    const student = makeStudent({ name: 'howie', grade: 2 });
    const input = student.getGrade();
    const actual = 2;
    expect(input).to.equal(actual);
  });
  it('can have age', () => {
    const student = makeStudent({ name: 'howie', age: 12 });
    const input = student.getAge();
    const actual = 12;
    expect(input).to.equal(actual);
  });
  it('sets prefect to false by default', () => {
    const student = makeStudent({ name: 'howie' });
    const input = student.isPrefect();
    const actual = false;
    expect(input).to.equal(actual);
  });
});

/**
 * Represents a Holborton room.
 */

class HolbertonCourse {
  /**
     * Creates a new @see {@link HolbertonCourse}.
     *
     * @param {String} name - The name of the course.
     * @param {Number} length - How long the course is (in months).
     * @param {String[]} students - The names of students in the course.
     */

  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be string');
    }

    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Name must be number');
    }

    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be array');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._students = value;
  }
}

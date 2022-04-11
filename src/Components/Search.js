import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { STUDENTS } from '../studentsList';

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function findStudent(studentName) {
	return STUDENTS.find((student) => studentName.toLocaleLowerCase() === student.name.toLocaleLowerCase());
}

function Search() {
	const { addResident, setError } = useContext(AppContext);
	const [studentName, setStudentName] = useState('');
	const [joiningDate, setJoiningDate] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		if (!studentName || !joiningDate) {
			return setError('Please fill all fields');
		}
		
		const student = findStudent(studentName);
		if (!student) {
			return setError(`Sorry, ${studentName} is not a verified student!`);
		}

		if (!checkValidity(joiningDate, student.validityDate)) {
			return setError(`Sorry, ${studentName}'s validity has Expired!`);
		}

		addResident(student);
		setError(null);
		setStudentName('');
    setJoiningDate('');
	}
	
	return (
    <form
      className="my-50 layout-row align-items-end justify-content-end"
      onSubmit={handleSubmit}
    >
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
						value={studentName}
						onChange={({ target: { value } }) => setStudentName(value)}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
						value={joiningDate}
						onChange={({ target: { value } }) => setJoiningDate(value)}
          />
        </div>
      </label>
      <button type="submit" data-testid="addBtn" className="small mb-0">
        Add
      </button>
    </form>
  );
}

export default Search;

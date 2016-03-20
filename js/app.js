console.log('Sanity Check: JS is working!');

$(document).ready(function(){

  // code in here
  // log name of course
  console.log(course.name);

  // log whole list of students
  console.log(course.students);

  // log all of first student's information
  console.log(course.students[0]);

  // log first student's id
  console.log(course.students[0].id);

  // log first student's full name
  console.log(course.students[0].firstName + 
  	' ' + course.students[0].lastName);

  // log number of students in class
  console.log(course.students.length);

  // log a list of GitHub usernames
   course.students.forEach(function logGitHubName(student){
  	console.log(student.gitHub);
  });

    // build a GitHub link from a single student's information
	function buildGitHubLink(singleStudent){
		return '<li><a href="' + singleStudent.gitHub + 
			'">' + singleStudent.firstName + ' ' + 
			singleStudent.lastName + '</a></li>';
	}

	// add github links to the page for all students
	function renderGitHubLinks(allStudents){
		allStudents.forEach(function addStudentToPage(student){
			var gitHubLink = buildGitHubLink(student);
			$studentList.append(gitHubLink);
		});

		// one line bonus version:
		// $studentList.append(allStudents.map(buildGitHubLink).join(''));
	}


  var $studentList = $('.student-list');
  renderGitHubLinks(course['students']);

});

var course = {
	name: "Web Development Immersive",
	students: [
		{
			firstName: "Adam",
			lastName: "nnnnnnnnnn",
			gitHub: "annnnnnńn"
		},
		{
			firstName: "b",
			lastName: "bb",
			gitHub: "bbbbbb"
		}
	]
}



### HTML Strings

For the following challenges you are going to use a provided data template.

2. Copy the clone URI from this repo.
3. In your terminal, go into your wdi folder and type 'git clone' + paste the link.  Make sure you're in `~/wdi` first!
4. Open this directory up in your text editor.
5. Paste the data object from data.js into the `js/app.js` file.
6. Type your solutions into the `document.ready` method.
8. You should `console.log` your solutions for the first set of problems.
7. Run your file by opening your `index.html` page in Chrome.
8. Rejoice!


0. As a warmup, try to log the following values:
    * the name of the course
  	* the full array of students
  	* all of the first student's information
    * the first student's id and full name
    * the number of students in the class
    * a list of GitHub usernames

1. Create a function `buildGitHubLink` that transforms a single student's info into an html string, with the following format:

	```
	<a href="https://github.com/torvalds">Linus Torvalds</a>
	```

2. Using the function you just built, create a function called `renderGitHubLinks` that takes an array of students and adds their github links to the page.

Extra points if you use built-in Array methods like `forEach`, `map` and `join` and only insert into the DOM once.

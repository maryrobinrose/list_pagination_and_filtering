/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


//Selects all students from main page
const studentList = document.querySelectorAll('.student-item');

//Hide students from list, show select students at a time
const showPage = (list, page) => {
  for (let i = 0; i < list.length; i += 1) {
    const minIndex = (page * 10) - 10;
    const maxIndex = (page * 10) - 1;
    if (i >= minIndex && i <= maxIndex) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}

//Function creates div for list of students and appends page numbers and buttons
const appendPageLinks = (list) => {
  //Sets maximum number of students per page
  const totalPages = Math.ceil(list.length / 10);

  //Creates a div and sets class name to 'pagination'
  const pageDiv = document.createElement('div');
  pageDiv.className = 'pagination';
  //Append it to the .page div
  const page = document.querySelector('.page');
  page.appendChild(pageDiv);

  //Creates ul to go in div
  const ul = document.createElement('ul');
  pageDiv.appendChild(ul);

  //Loop over pages and add li and a tags for pagination links
  for (let i = 0; i <= totalPages; i += 1) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    //Add page number text
    a.textContent = i + 1;
    a.href = '#';
    //Append a tag to li and li to ul
    li.appendChild(a);
    ul.appendChild(li);


    //Loop over pagination links to remove active class from all links, add active class to link that was just clicked
      a.addEventListener('click', () => {
        for (let i = 0; i <= a.length; i += 1) {
          console.log('hello');
          a.className.remove('active');
          showPage(studentList);
          event.target.className = 'active';
        }
      });
    }
  }

//Call functions
appendPageLinks(studentList);
showPage(studentList);

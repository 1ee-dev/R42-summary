// set groups
const lectures = [
  {
    id: 'lec1',
    title: 'Lecture 1',
    group: 'HTML & CSS',
  },
  {
    id: 'lec2',
    title: 'Lecture 2',
    group: 'HTML & CSS',
  },
  {
    id: 'lec3',
    title: 'Lecture 3',
    group: 'HTML & CSS',
  },
  {
    id: 'lec4',
    title: 'Lecture 4',
    group: 'HTML & CSS',
  },
  {
    id: 'lec5',
    title: 'Lecture 5',
    group: 'HTML & CSS',
  },
  {
    id: 'lec6',
    title: 'Lecture 6',
    group: 'HTML & CSS',
  },
  {
    id: 'lec7',
    title: 'Lecture 7',
    group: 'HTML & CSS',
  },
  {
    id: 'lec8',
    title: 'Lecture 8',
    group: 'HTML & CSS',
  },
  {
    id: 'lec9',
    title: 'Lecture 9',
    group: 'HTML & CSS',
  },
  {
    id: 'lec10',
    title: 'Lecture 10',
    group: 'HTML & CSS',
  },
  {
    id: 'lec11',
    title: 'Lecture 11',
    group: 'HTML & CSS',
  },
  {
    id: 'lec12',
    title: 'Lecture 12',
    group: 'HTML & CSS',
  },
  {
    id: 'lec13',
    title: 'Lecture 13',
    group: 'HTML & CSS',
  },
  {
    id: 'lec14',
    title: 'Lecture 14',
    group: 'HTML & CSS',
  },
  {
    id: 'lec15',
    title: 'Lecture 15',
    group: 'HTML5 & CSS3',
  },
  {
    id: 'lec16',
    title: 'Lecture 16',
    group: 'HTML5 & CSS3',
  },
  {
    id: 'lec17',
    title: 'Lecture 17',
    group: 'GitHub',
  },
  {
    id: 'lec18',
    title: 'Lecture 18',
    group: 'HTML5 & CSS3',
  },
  {
    id: 'lec19',
    title: 'Lecture 19',
    group: 'HTML5 & CSS3',
  },
  {
    id: 'lec20',
    title: 'Lecture 20',
    group: 'HTML5 & CSS3',
  },
  {
    id: 'lec21',
    title: 'Lecture 21',
    group: 'HTML5 & CSS3',
  },
  {
    id: 'lec22',
    title: 'Lecture 22',
    group: 'HTML5 & CSS3',
  },
  {
    id: 'lec23',
    title: 'Lecture 23',
    group: 'HTML5 & CSS3',
  },
  {
    id: 'lec24',
    title: 'Lecture 24',
    group: 'HTML5 & CSS3',
  },
  {
    id: 'lec25',
    title: 'Lecture 25',
    group: 'JavaScript',
  },
  {
    id: 'lec26',
    title: 'Lecture 26',
    group: 'JavaScript',
  },
  {
    id: 'lec27',
    title: 'Lecture 27',
    group: 'JavaScript',
  },
  {
    id: 'lec28',
    title: 'Lecture 28',
    group: 'JavaScript',
  },
  {
    id: 'lec29',
    title: 'Lecture 29',
    group: 'JavaScript',
  },
  {
    id: 'lec30',
    title: 'Lecture 30',
    group: 'JavaScript',
  },
  {
    id: 'lec31',
    title: 'Lecture 31',
    group: 'JavaScript',
  },
];

const groups = ['HTML & CSS', 'GitHub', 'HTML5 & CSS3', 'JavaScript'];

// get all lectures by group
function getLecturesByGroup(group) {
  return lectures.filter((lec) => lec.group === group);
}

// get all lectures for sidebar inner list
function sidebarInnerList(group) {
  let listHTML = '';
  getLecturesByGroup(group).forEach((lec) => {
    listHTML += `<li><button data-id="${lec.id}">${lec.title}</button></li>`;
  });
  return listHTML;
}

// append list items to sidebar
function appendListItems() {
  let navHTML = '';
  groups.forEach((group) => {
    navHTML += `<button>${group} <i class="fa-solid fa-angle-right"></i></button>
          <ul>
            ${sidebarInnerList(group)}
          </ul>`;
  });
  document.querySelector('aside nav').innerHTML = navHTML;
}

// fetch content for each lecture
async function fetchLectureContent() {
  const main = document.querySelector('main');

  const lectureContentPromises = lectures.map(async (lec) => {
    const response = await fetch(`content/${lec.id}.html`);
    const content = await response.text();
    return `<article id="${lec.id}">${content}</article>`;
  });

  const lectureContentHtml = await Promise.all(lectureContentPromises);
  main.innerHTML = lectureContentHtml.join('');
}

// Initialize content loading
async function initializeContent() {
  // First append the sidebar structure
  appendListItems();
  // Then load all lecture content
  await fetchLectureContent();
  // Dispatch event when everything is loaded
  document.dispatchEvent(new CustomEvent('contentLoaded'));
}

initializeContent();

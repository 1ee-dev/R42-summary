// main script functionality after content is loaded
document.addEventListener('contentLoaded', () => {
  // toogle dark mode
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.body.classList.remove('dark');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }

  // sidebar menu functionality
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  const sidebar = document.querySelector('aside');

  // toggle sidebar with hamburger menu
  hamburger.addEventListener('click', toggleMenu);
  // close menu on click outside
  overlay.addEventListener('click', hideMenu);
  // close menu with Escape key for accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideMenu();
  });
  // open and close menu on mobile swipe (horizontal only)
  let startX, startY, endX, endY;
  const HORIZONTAL_THRESHOLD = 50; // minimum horizontal distance (px) to consider a swipe
  const VERTICAL_RATIO_LIMIT = 0.4; // vertical movement must be less than 40% of horizontal movement

  document.addEventListener(
    'touchstart',
    (e) => {
      if (!e.touches || e.touches.length === 0) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true }
  );

  document.addEventListener(
    'touchend',
    (e) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      endX = e.changedTouches[0].clientX;
      endY = e.changedTouches[0].clientY;

      const dx = endX - startX;
      const dy = endY - startY;

      // Only treat this as a horizontal swipe if horizontal distance is large enough
      // and vertical movement is relatively small compared to horizontal movement.
      if (
        Math.abs(dx) > HORIZONTAL_THRESHOLD &&
        Math.abs(dy) < Math.abs(dx) * VERTICAL_RATIO_LIMIT
      ) {
        if (dx > 0) {
          openMenu();
        } else {
          hideMenu();
        }
      }
    },
    { passive: true }
  );
  // close sidebar on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) hideMenu();
  });

  function openMenu() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
  }

  function hideMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }

  function toggleMenu() {
    if (sidebar.classList.contains('open') || overlay.classList.contains('active')) {
      hideMenu();
    } else {
      openMenu();
    }
  }

  // toggle sidebar list groups
  const sidebarGroups = document.querySelectorAll('aside nav > button');
  sidebarGroups.forEach((button) => {
    button.addEventListener('click', () => {
      toggleActiveList(button);
    });
  });

  // toggle active class on clicked button
  function toggleActiveList(button) {
    // remove active class from other buttons
    sidebarGroups.forEach((btn) => {
      if (btn !== button) {
        btn.classList.remove('active');
        btn.nextElementSibling.classList.remove('active');
      }
    });
    button.classList.toggle('active');
    button.nextElementSibling.classList.toggle('active');
  }

  // load lecture content on sidebar item click
  const lectureButtons = document.querySelectorAll('aside li > button');
  lectureButtons.forEach((button) => {
    button.addEventListener('click', () => {
      updateCurrentList(button);
      highlightActiveLecture(button);
      scrollToContent(button);
      hideMenu();
    });
  });

  // update current list to show which list is currently active
  function updateCurrentList(button) {
    sidebarGroups.forEach((btn) => {
      if (btn !== button) {
        btn.classList.remove('current');
        btn.classList.remove('active');
        btn.nextElementSibling.classList.remove('active');
      }
    });
    const currentGroup = button.closest('ul').previousElementSibling;
    currentGroup.classList.add('current');
    currentGroup.classList.add('active');
    currentGroup.nextElementSibling.classList.add('active');
  }

  // highlight active lecture in sidebar
  function highlightActiveLecture(button) {
    lectureButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  }

  // scroll to lecture content
  function scrollToContent(button) {
    const lectureId = button.getAttribute('data-id');
    const lecture = document.getElementById(lectureId);
    if (lecture) {
      lecture.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // observe lectures for intersection and activate list item
  const lectures = document.querySelectorAll('article');
  const observer = new IntersectionObserver(
    (entry) => {
      const button = document.querySelector(`button[data-id="${entry[0].target.id}"]`);
      if (button) {
        highlightActiveLecture(button);
        updateCurrentList(button);
        setTimeout(() => {
          scrollBtnIntoView(button);
        }, 400);
      }
    },
    {
      rootMargin: '-25% 0px -75% 0px',
    }
  );

  lectures.forEach((lec) => {
    observer.observe(lec);
  });

  // scroll list button into view
  function scrollBtnIntoView(button) {
    if (button) {
      button.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});

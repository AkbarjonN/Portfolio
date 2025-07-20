const modeIcon = document.getElementById('modeIcon');
const body = document.body;
let subTitle = document.querySelector('.header__content-title');

// localStorage'dan holatni olib chiqamiz
let savedMode = localStorage.getItem('mode');

// 🌙 Default: DARK mode
if (!savedMode) {
  savedMode = 'dark';
  localStorage.setItem('mode', 'dark');
}

if (savedMode === 'dark') {
  body.classList.add('dark-mode');
  modeIcon.classList.replace('fa-moon', 'fa-sun');
  subTitle.classList.remove('color');
  subTitle.classList.add('header__content-title');
} else {
  body.classList.remove('dark-mode');
  modeIcon.classList.replace('fa-sun', 'fa-moon');
  subTitle.classList.add('color') ;
  subTitle.classList.remove('header__content-title');
}

// 🔄 Icon bosilganda o‘zgartirish
modeIcon.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');

  if (isDark) {
    modeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('mode', 'dark');
    subTitle.classList.remove('color');
    subTitle.classList.add('header__content-title')
  } else {
    modeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('mode', 'light');
    subTitle.classList.remove('header__content-title');
    subTitle.classList.add('color') ;
  }
});
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
      e.preventDefault();
      let targetId = this.getAttribute("href").substring(1);
      let targetElement = document.getElementById(targetId);
      
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  });
});
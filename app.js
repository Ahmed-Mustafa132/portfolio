// light mod and night mod
let mood = document.querySelector(".mood i");
let root = document.querySelector(":root");
mood.addEventListener("click", () => {
  if (mood.classList.value == "fa-solid fa-moon") {
    mood.setAttribute("name", "sun");
    mood.className = "fa-solid fa-sun";
    root.style.setProperty("--main-color", "hsl(0, 0%, 9%)");
    root.style.setProperty("--syntax-start-color", "hsl(0, 0%, 88%)");
    root.style.setProperty("--text-color", "hsl(0, 0%, 100%)");
  } else {
    mood.setAttribute("name", "moon");
    mood.className = "moon";
    root.style.setProperty("--main-color", "hsl(213, 69%, 95%)");
    root.style.setProperty("--syntax-start-color", "hsl(0, 0%, 22%)");
    root.style.setProperty("--text-color", "hsl(0, 0%, 0%)");
  }
});
// active nav bar
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("spicial");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("spicial");
      });
    }
  });
};
// open side list  function
const btn = document.querySelector(".fa-bars");
const x = document.querySelector(".fa-x");
const list = document.querySelector("header nav");
btn.addEventListener("click", () => {
  list.style.transform = "translateX(0)";
});
// close side list function
document.querySelectorAll("nav ul li").forEach((link) => {
  link.addEventListener("click", () => {
    list.style.transform = "translateX(100%)";
  });
});
x.addEventListener("click", () => {
  list.style.transform = "translateX(100%)";
});
// show all skills
const projectsContainer = document.querySelector(".projects-contener");
fetch("projects.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project) => {
      projectsContainer.innerHTML += `
          <div class="project">
              <div class="project-img">
                <img src="${project.image}" alt="project-1" />
              </div>
              <div class="project-info">
                <h2>${project.title}</h2>
                <p>
                 ${project.description}
                  </p>
                  <a href="${project.live}"><button class="projectBtn">click her</button></a>
            </div>
          </div>
          `;
    });
  });
// chose  skills
document
  .querySelector(".portfolioItems")
  .addEventListener("click", function (event) {
    const selectedLang = event.target.getAttribute("data-lang");
    fetch("projects.json")
      .then((response) => response.json())
      .then((data) => {
        projectsContainer.innerHTML = "";
        data.forEach((project) => {
          let lang = project.lang;
          lang.forEach((lanaguge) => {
            if (lanaguge == selectedLang) {
              projectsContainer.innerHTML += `
          <div class="project">
              <div class="project-img">
                <img src="${project.image}" alt="project-1" />
              </div>
              <div class="project-info">
                <h2>${project.title}</h2>
                <p>
                 ${project.description}
                  </p>
                  <a href="${project.live}"><button class="projectBtn">click her</button></a>
            </div>
          </div>
          `;
            }
          });
        });
      })
      .catch((error) => console.error("Error fetching projects.json:", error));
  });

let mood = document.querySelector(".mood box-icon");
let root = document.querySelector(":root");
// light mod and night mod
mood.addEventListener("click", () => {
  if (mood.classList.value == "moon") {
    mood.setAttribute("name", "sun");
    mood.className = "Sun";
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
// show skills
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

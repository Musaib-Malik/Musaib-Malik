// UI Variables 
const firstProject = document.getElementById('one');
const secondProject = document.getElementById('two');
const thirdProject = document.getElementById('three');

// Event handler
firstProject.addEventListener('mouseenter', showFirstProjectDetails);
firstProject.addEventListener('mouseleave', hideFirstProjectDetails);

secondProject.addEventListener('mouseenter', showSecondProjectDetails);
secondProject.addEventListener('mouseleave', hideSecondProjectDetails);

thirdProject.addEventListener('mouseenter', showThirdProjectDetails);
thirdProject.addEventListener('mouseleave', hideThirdProjectDetails);

// Show First Project Details
function showFirstProjectDetails(e) {

  firstProject.style.backgroundColor = 'rgba(0,0,0,0.8)'
  firstProject.style.backgroundBlendMode = 'multiply';
  firstProject.innerHTML = `
    <p class="about-project">
    This app is one of the apps that i have most enjoyed building. This app uses an external API to get random questions. It is fully functional and has a very nice User Interface.
    </p>
    <div class="btn-div">
    <a href="https://github.com/Musaib-Malik/Quizer.github.io"  target='_blank' class="github-btn">View Source</a>

    <a href="https://musaib-malik.github.io/Quizer.github.io"  target='_blank' class="app-btn">View App</a>
    </div>
 `;
}

// Hide First Project Details
function hideFirstProjectDetails(e) {
  firstProject.style.backgroundColor = '';
  firstProject.innerHTML = '';
}

// Show Second Project Details
function showSecondProjectDetails(e) {

  secondProject.style.backgroundColor = 'rgba(0,0,0,0.8)';
  secondProject.style.backgroundBlendMode = 'multiply';
  secondProject.innerHTML = `
    <p class="about-project">
    I have had a great time making this web app to fetch song lyrics. I used the fetch in combination with async-await and elegantly display the results.
    </p>
    <div class="btn-div">
    <a href="https://github.com/Musaib-Malik/Lyrical-Lyrics-Search-App"  target='_blank' class="github-btn">View Source</a>
    <a href="https://musaib-malik.github.io/Lyrical.github.io/" target='_blank' class="app-btn">View App</a>
    </div>
 `
}

// Hide Second Project Details
function hideSecondProjectDetails(e) {
  secondProject.style.backgroundColor = '';
  secondProject.innerHTML = ''
}

// Show Third Project Details
function showThirdProjectDetails(e) {

  thirdProject.style.backgroundBlendMode = 'multiply';
  thirdProject.style.backgroundColor = 'rgba(0,0,0,0.8)'
  thirdProject.innerHTML = `
    
    <p class="about-project">
    This application is built with minimal user interface to help you organize your day and never be late for your meetings!
    </p>
    <div class="btn-div">
    <a href="https://github.com/Musaib-Malik/ToDo-list-App" class="github-btn" target='_blank'>View Source</a>
    <a href="https://musaib-malik.github.io/todo-list.github.io/" target='_blank' class="app-btn">View App</a>
    </div>
 `
  thirdProject.style.marginTop = '2em'
}

// Hide Second Project Details
function hideThirdProjectDetails(e) {
  thirdProject.style.backgroundColor = '';
  thirdProject.innerHTML = '';
}
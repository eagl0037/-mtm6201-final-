function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }
  
  function navigateTo(sectionId) {
    const sections = {
      home: `
        <section id="home" class="home-section">
          <div class="container">
            <h1>Welcome to My Interactive World</h1>
            <p>Explore my portfolio through this interactive game-style homepage.</p>
            <div class="interactive-area">
              <div class="character">
                <img src="animated-dog.gif" alt="Animated Dog" class="dog">
              </div>
              <div class="buttons">
                <button class="btn" onclick="navigateTo('coding')">Coding</button>
                <button class="btn" onclick="navigateTo('design')">Graphic Design</button>
                <button class="btn" onclick="navigateTo('editing')">Editing</button>
                <button class="btn" onclick="navigateTo('about')">About</button>
                <button class="btn" onclick="navigateTo('contact')">Contact</button>
              </div>
            </div>
          </div>
        </section>
      `,
      coding: `
        <section id="coding" class="section">
          <div class="container">
            <h1 class="section-title">Coding</h1>
            <p class="section-description">Proficient in HTML, CSS, and JavaScript

            Natasha has a strong foundation in web development technologies, enabling her to create responsive and visually appealing user interfaces.
            
            Knowledgeable in Frameworks and Libraries
            
            She is well-versed in popular frameworks such as React and Vue.js, allowing her to build complex and dynamic web applications.
            
            Adaptable to New Technologies
            
            Natasha is a quick learner and stays up-to-date with the latest trends and advancements in the industry.</p>
            <div class="projects">
              <div class="project">
                <img src="images/m1.png" alt="Makeup Site">
                <h3>Makeup Site</h3>
                <p>an elegant and stylish website dedicated to makeup enthusiasts and professionals alike.</p>
                <a href="#" class="btn">View Project</a>
              </div>
              <div class="project">
                <img src="images/w1.png" alt="Music Site">
                <h3>Music Site</h3>
                <p>a comprehensive online resource for guitar players of all skill levels. The site boasts a clean and modern design, with easy-to-navigate sections dedicated to lessons, gear reviews, and performance tips.</p>
                <a href="#" class="btn">View Project</a>
              </div>
            </div>
          </div>
        </section>
      `,
      design: `
        <section id="design" class="section">
          <div class="container">
            <h1 class="section-title">Graphic Design</h1>
            <p class="section-description">A brief description of your graphic design skills and experience</p>
            <div class="projects">
              <div class="project">
                <img src="images/l.png" alt="l">
                <h3>Angel Art</h3>
               
                <a href="#" class="btn">View Project</a>
              </div>
              <div class="project">
                <img src="images/e.png" alt="e">
                <h3>Elephant Logo</h3>
               
                <a href="#" class="btn">View Project</a>
              </div>
            </div>
          </div>
        </section>
      `,
      editing: `
        <section id="editing" class="section">
          <div class="container">
            <h1 class="section-title">Editing</h1>
            <p class="section-description">A brief description of your editing skills and experience</p>
            <div class="projects">
              <div class="project">
                <img src="editing-project1.jpg" alt="Editing Project 1">
                <h3>Editing Project 1</h3>
                <p>A brief description of the project</p>
                <a href="#" class="btn">View Project</a>
              </div>
              <div class="project">
                <img src="editing-project2.jpg" alt="Editing Project 2">
                <h3>Editing Project 2</h3>
                <p>A brief description of the project</p>
                <a href="#" class="btn">View Project</a>
              </div>
            </div>
          </div>
        </section>
      `,
      about: `
        <section id="about" class="section">
          <div class="container">
            <h1 class="section-title">About</h1>
            <p class="section-description">A brief bio about yourself</p>
            <img src="about-image.jpg" alt="About Image">
          </div>
        </section>
      `,
      contact: `
        <section id="contact" class="section">
          <div class="container">
            <h1 class="section-title">Contact</h1>
            <p class="section-description">Get in touch with me:</p>
            <ul class="contact-info">
              <li><i class="fas fa-envelope"></i> <a href="mailto:your-email@example.com">your-email@example.com</a></li>
              <li><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/your-linkedin-profile/">LinkedIn</a></li>
              <li><i class="fab fa-github"></i> <a href="https://github.com/your-github-username">GitHub</a></li>
            </ul>
          </div>
        </section>
      `
    };
  
    document.getElementById('main-content').innerHTML = sections[sectionId];
  }
  
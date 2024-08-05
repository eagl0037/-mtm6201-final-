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
            <p class="section-description">Web Design

            Natasha's web designs strike a perfect balance between aesthetics and functionality.
            
            Branding
            
            She excels at creating distinctive brand identities that leave a lasting impression. </p>
            <div class="projects">
              <div class="project">
                <img src="images/l.png" alt="l">
                <h3>Angel Art</h3>
               <p>This captivating angel graphic design showcases a blend of ethereal elegance and delicate details. The angel, with gracefully outstretched wings, is depicted in soft pastel hues, embodying a serene and heavenly presence. The intricate patterns and flowing lines highlight the ethereal beauty and grace, while subtle accents of light and shadow add depth and dimension. This design seamlessly combines a girly and elegant aesthetic, reflecting Natasha's unique artistic vision and meticulous attention to detail.</p>
                <a href="#" class="btn">View Project</a>
              </div>
              <div class="project">
                <img src="images/e.png" alt="e">
                <h3>Elephant Logo</h3>
               <p>Natasha's elephant head logo design is a striking blend of strength and sophistication. The logo features a bold and intricate depiction of an elephant's head, characterized by its detailed lines and balanced symmetry. The design captures the majestic essence of the elephant, symbolizing wisdom and power. The elegant curves and refined elements reflect Natasha's girly and sophisticated aesthetic, making the logo both eye-catching and memorable. This unique creation showcases her exceptional talent and artistic vision.

               </p>
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
                <img src="images/u.png" alt="Editing Project 1">
                <h3>Lost Boy</h3>
                <p>A brief description of the project</p>
                <a href="#" class="btn">View Project</a>
              </div>
              <div class="project">
                <img src="images/c.png" alt="Editing Project 2">
                <h3>Cammes</h3>
                <p>A brief description of the project</p>
                <a href="#" class="btn">View Project</a>
              </div>
            </div>
          </div>
        </section>
      `,
      about: `
      <div class="container">
      <div class="container-inner">
        <div class="main-content">
          <div class="main-headings" id="main-headings-js">
          <p id="by-line">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
          <div class="heading">
            
            <h3 id="heading2">About</h3>
            <h1 id="heading3">Natasha</h1>
          </div>
    
          <div class="short-bio">
            <p>Passionate Learner

            Natasha is a driven and curious student, always eager to expand her skills and knowledge in the field of interactive media design.
            
            Multidisciplinary Talent
            
            She excels in a wide range of creative disciplines, including coding, video editing, and graphic design.
            
            Collaborative Mindset
            
            Natasha thrives in team environments, working closely with peers and clients to bring their visions to life.</p>
       
          </div>
    
          <a href="#" class="link" onclick="readMore()">Read More</a>
          </div>
          
          <div class="more-info " id="more-info-js">
            
            <h4>Who am I?</h4>
            <p>Hello! I'm Natasha, an aspiring interactive media designer currently enrolled in the Interactive Media Design (IMD) program at Algonquin College. With a passion for creating engaging and visually stunning digital experiences, I am dedicated to honing my skills and pushing the boundaries of design and technology.</p>
            
            <p>My Journey
            My journey into the world of interactive media design began with a deep fascination for how technology can be used to tell compelling stories and create immersive experiences. From a young age, I was captivated by the power of visual storytelling and the endless possibilities that digital media offers. This curiosity led me to pursue formal education in interactive media design, where I could combine my love for art, technology, and storytelling.
            
            Educational Background
            At Algonquin College, I have had the privilege of learning from some of the best in the industry. Under the guidance of my mentor, Kenn, I have explored various facets of interactive media, including web design, video production, animation, and user experience (UX) design. Each project and assignment has been an opportunity to refine my skills and discover new creative avenues.</p>
          </div>
          
        </div>
    
        <div class="image-wrapper">
        <div class="image-container">
        <img src="images/me.png" " "alt="image of a young woman.">
        </div>
      </div>
    </div>
    </div>
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
  
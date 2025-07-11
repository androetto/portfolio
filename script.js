// Configuración inicial
document.addEventListener('DOMContentLoaded', function() {
    loadAllData();
});

// Función principal para cargar todos los datos
function loadAllData() {
    try {
        // Usar los datos de la variable global portfolioData
        const { personal, experience, education, skills, projects } = portfolioData;

        // Renderizar todas las secciones
        renderPersonalInfo(personal);
        renderFloatingMenu(personal.contact);
        renderAboutSection(personal.about);
        renderExperienceSection(experience);
        renderEducationSection(education);
        renderSkillsSection(skills);
        renderProjectsSection(projects);

        // Inicializar funcionalidades después de cargar los datos
        initializeExperienceToggle();
        initializeScrollAnimations();
        initializeFloatingMenu();
        initializeScrollIndicator();
        
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Renderizar información personal
function renderPersonalInfo(personal) {
    document.getElementById('hero-name').textContent = personal.name;
    document.getElementById('hero-title').textContent = personal.title;
    document.getElementById('hero-description').textContent = personal.description;
}

// Renderizar menú flotante
function renderFloatingMenu(contact) {
    const floatingMenu = document.getElementById('floating-menu');
    floatingMenu.innerHTML = `
        <a href="${contact.github}" target="_blank" class="menu-item" title="GitHub">
            <i class="fab fa-github"></i>
        </a>
        <a href="${contact.linkedin}" target="_blank" class="menu-item" title="LinkedIn">
            <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:${contact.email}" class="menu-item" title="Email">
            <i class="fas fa-envelope"></i>
        </a>
        <a href="https://wa.me/${contact.whatsapp}" target="_blank" class="menu-item" title="WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
    `;
}

// Renderizar sección "Sobre Mí"
function renderAboutSection(aboutParagraphs) {
    const aboutContent = document.getElementById('about-content');
    aboutContent.innerHTML = aboutParagraphs.map(paragraph => `<p>${paragraph}</p>`).join('');
}

// Renderizar sección de experiencia
function renderExperienceSection(experiences) {
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = experiences.map(experience => `
        <div class="experience-item">
            <div class="experience-header">
                <img src="${experience.logo}" alt="${experience.company}" class="company-logo">
                <div class="experience-info">
                    <h3 class="job-title">${experience.position}</h3>
                    <p class="company-name">${experience.company}</p>
                    <p class="job-period">${experience.period}</p>
                </div>
                ${experience.website ? `<a href="${experience.website}" target="_blank" class="company-link" title="Visitar sitio web">
                    <i class="fas fa-external-link-alt"></i>
                </a>` : ''}
            </div>
            <div class="experience-details">
                <ul>
                    ${experience.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Renderizar sección de educación
function renderEducationSection(education) {
    const educationList = document.getElementById('education-list');
    educationList.innerHTML = education.formal.map(edu => `
        <div class="education-item">
            <div class="education-icon">
                ${edu.logo ? `<img src="${edu.logo}" alt="${edu.institution}" class="education-logo">` : `<i class="${edu.icon}"></i>`}
            </div>
            <div class="education-content">
                <h3>${edu.title}</h3>
                <p class="education-institution">${edu.institution}</p>
                <p class="education-period">${edu.period}</p>
            </div>
            ${edu.website ? `<a href="${edu.website}" target="_blank" class="education-link" title="Visitar sitio web">
                <i class="fas fa-external-link-alt"></i>
            </a>` : ''}
        </div>
    `).join('');

    const coursesList = document.getElementById('courses-list');
    coursesList.innerHTML = education.courses.map(course => `
        <div class="course-item">
            <i class="${course.icon}"></i>
            <div>
                <h4>${course.title}</h4>
                <p>${course.institution}</p>
            </div>
        </div>
    `).join('');
}

// Renderizar sección de habilidades
function renderSkillsSection(skillsData) {
    const skillsContainer = document.getElementById('skills-container');
    
    // Agrupar skills por categoría
    const categoryMapping = {
        'Frontend': 'Frameworks & Lenguajes',
        'Database': 'Base de Datos',
        'DevOps': 'DevOps & Cloud'
    };
    
    const groupedSkills = skillsData.reduce((groups, skill) => {
        const categoryName = categoryMapping[skill.category] || skill.category;
        if (!groups[categoryName]) {
            groups[categoryName] = [];
        }
        groups[categoryName].push(skill);
        return groups;
    }, {});
    
    // Renderizar con subtítulos
    let skillsHTML = '';
    
    Object.entries(groupedSkills).forEach(([category, skills]) => {
        skillsHTML += `
            <h4 class="skill-category-title">${category}</h4>
            <div class="skills-grid">
                ${skills.map(skill => `
                    <div class="skill-item">
                        <i class="${skill.icon}" style="color: ${skill.color}"></i>
                        <span class="skill-name">${skill.name}</span>
                    </div>
                    <span class="skill-years">${skill.years} año${skill.years > 1 ? 's' : ''}</span>
                    <div class="skill-bar-container">
                        <div class="skill-bar" style="background-color: ${skill.color}; width: ${(skill.years / 6) * 100}%"></div>
                    </div>
                `).join('')}
            </div>
        `;
    });
    
    skillsContainer.innerHTML = skillsHTML;
}

// Renderizar sección de proyectos
function renderProjectsSection(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <h3>${project.title}</h3>
                <span class="project-year">${project.year}</span>
            </div>
            <p class="project-description">
                ${project.description}
            </p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span>${getTechIcon(tech)} ${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Toggle de experiencias
function initializeExperienceToggle() {
    const experienceItems = document.querySelectorAll('.experience-item');
    
    experienceItems.forEach(item => {
        item.addEventListener('click', function() {
            // Cerrar otros items abiertos
            experienceItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle del item actual
            this.classList.toggle('active');
        });
    });
}

// Función para obtener el icono de una tecnología
function getTechIcon(tech) {
    const techIcons = {
        'Angular': '<i class="fab fa-angular"></i>',
        'Node.js': '<i class="fab fa-node-js"></i>',
        'React': '<i class="fab fa-react"></i>',
        'React Native': '<i class="fab fa-react"></i>',
        'JavaScript': '<i class="fab fa-js-square"></i>',
        'TypeScript': '<i class="fab fa-js-square"></i>',
        'Express': '<i class="fas fa-server"></i>',
        'Express.js': '<i class="fas fa-server"></i>',
        'NestJS': '<i class="fas fa-server"></i>',
        'Nest.js': '<i class="fas fa-server"></i>',
        'MongoDB': '<i class="fas fa-leaf"></i>',
        'MySQL': '<i class="fas fa-database"></i>',
        'PostgreSQL': '<i class="fas fa-database"></i>',
        'AWS': '<i class="fab fa-aws"></i>',
        'Google Cloud': '<i class="fab fa-google"></i>',
        'GCP': '<i class="fab fa-google"></i>',
        'Socket.io': '<i class="fas fa-plug"></i>',
        'Expo': '<i class="fas fa-mobile-alt"></i>',
        'Serverless': '<i class="fas fa-cloud"></i>',
        'Flutter': '<i class="fas fa-mobile-alt"></i>',
        'Ionic': '<i class="fab fa-ionic"></i>',
        'Angular Material': '<i class="fab fa-angular"></i>',
        'NgRx': '<i class="fab fa-angular"></i>',
        'WebSockets': '<i class="fas fa-plug"></i>',
        'JWT': '<i class="fas fa-key"></i>',
        'PayPal API': '<i class="fab fa-paypal"></i>',
        'Remix Run': '<i class="fas fa-code"></i>',
        'Next.js': '<i class="fab fa-react"></i>',
        'Computer Vision': '<i class="fas fa-eye"></i>',
        'AI/ML': '<i class="fas fa-brain"></i>',
        'Geolocation': '<i class="fas fa-map-marker-alt"></i>',
        'Legacy Migration': '<i class="fas fa-exchange-alt"></i>',
        'API Development': '<i class="fas fa-code"></i>'
    };
    
    return techIcons[tech] || '<i class="fas fa-code"></i>';
}

// Animaciones de scroll
function initializeScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => observer.observe(section));
}

// Funcionalidad del menú flotante
function initializeFloatingMenu() {
    // El menú flotante ahora siempre está visible
    // No necesitamos funcionalidad de ocultar/mostrar
}

// Funcionalidad del indicador de scroll
function initializeScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Funcionalidad de click para ir a la siguiente sección
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Ocultar/mostrar basado en scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(20px)';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
        }
    });
} 
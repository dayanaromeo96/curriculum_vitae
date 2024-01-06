/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            // document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
function scaleCV() {
    document.body.classList.add('scale-cv');
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
function removeScale() {
    document.body.classList.remove('scale-cv');
}

/*==================== GENERATE PDF ====================*/
// PDF generated area
const areaCv = document.getElementById('area-cv');

const resumeButton = document.getElementById('resume-button');

// Html2pdf options
const opt = {
    margin: 0,
    filename: 'myResume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
};

// Function to call areaCv and Html2Pdf options
function generateResume() {
    html2pdf(areaCv, opt);
}

// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', () => {
    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
    scaleCV()

    // 2. The PDF is generated
    generateResume()

    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
    setTimeout(removeScale, 5000)
});

// Define una variable para almacenar el idioma actual
let currentLanguage = 'en';
const enTranslations = {
    titleProfile: 'Profile',
    descProfile: 'Computer engineering graduate dedicated to web development with more than 3 years of experience, focused on Frontend development and with knowledge of UX/ UI, Adobe XD and Frameworks. With demonstrable ability to adapt to various situations and technologies.',
    titleLanguage: 'LANGUAGES',
    esLang: 'Spanish',
    enLang: 'English (basic)',
    titleTraining: 'TRAINING',
    ingInf: 'Bachelors degree in Computer Engineering',
    webDev: 'Web Developer',
    experienceTitle: 'EXPERIENCE',
    experienceTitle1: 'Angular Lead Developer',
    experienceDate1: 'from December 2022 - currently | IDS Comercial',
    experienceDesc1: 'In this project, I serve as the Angular Lead Developer, overseeing the development team and creating reusable components to enhance project performance and architecture. As a leader, I drive innovation, optimize code efficiency, and ensure the delivery of high-quality software solutions. I am well-versed in agile methodologies, collaborative problem-solving, and mentoring team members to achieve project goals.',
    experienceTitle2: 'Frontend developer',
    experienceDate2: 'from April 2022 - currently | Rezglo',
    experienceDesc2: 'During my work experience, I have had the privilege of providing technical support to a company in the tourism transportation industry. This role has allowed me to gain in-depth knowledge in map handling, as I have been involved in developing solutions that involve visualization and navigation of tourist routes. Additionally, I have been responsible for providing support to previously implemented modules, which has enabled me to become familiar with maintenance and troubleshooting in production applications. In this context, I have also worked with GraphQL services, utilizing this technology to optimize communication between clients and servers, ensuring efficient data exchange. These experiences have strengthened my ability to provide effective solutions and collaborate effectively on projects related to tourism transportation.',
    experienceTitle3: 'Angular developer',
    experienceDate2: 'from December 2021 to December 2022 | Softrek',
    experienceDesc3: 'During my work experience, I participated in two projects that expanded my skills and knowledge in different areas. In the first project, a call center project, I had the opportunity to work with technologies such as sockets and VoIP, which allowed me to gain experience in developing real-time communication applications. In the second project, related to tourism, I had the opportunity to expand my knowledge in UI design, as it was necessary to create attractive and functional interfaces for tourism applications. These experiences allowed me to build a strong foundation of technical skills and a deeper understanding of the specific needs and requirements of different industry sectors.',
    experienceTitle4: 'Web developer',
    experienceDate4: 'from March 2021 to September 2021 | ETECSA',
    experienceDesc4: 'During this project, my main contribution was the development of new modules to enhance the efficiency and functionality of the call center. Additionally, I provided technical support to users, resolving issues and delivering training to ensure smooth system operations.',
    experienceTitle5: 'Computer and automation specialist',
    experienceDate5: 'September 2019 – Febrary 2021 | COMBIOMED Tecnología Médica Digital',
    experienceDesc5: 'I developed an application that allowed the communication of a automaton with a web application in React. In addition to forming part of the team that developed the website of said company.',
    skill: 'SKILLS',
    interest: 'INTERESTS',
    music: 'Music',
    travel: 'Travel',
    reading: 'Reading',
    movies: 'Movies'
};

const esTranslations = {
    titleProfile: 'Perfil',
    descProfile: 'Graduada en Ingeniería Informática dedicada al desarrollo web con más de 3 años de experiencia, enfocada en el desarrollo Frontend y con conocimientos de UX/UI, Adobe XD y Frameworks. Con una capacidad demostrable para adaptarme a diversas situaciones y tecnologías.',
    titleLanguage: 'IDIOMAS',
    esLang: 'Español',
    enLang: 'Inglés (básico)',
    titleTraining: 'Educación',
    ingInf: 'Ingeniera Informática',
    webDev: 'Desarrolladora Web',
    experienceTitle: 'Experiencia',
    // experienceTitle1:'Líder Técnico de Angular',
    // experienceDate1:'desde Diciembre 2022 - actualmente | IDS Comercial',
    // experienceDesc1:'En este proyecto, me desempeño como Líder técnico de Angular, supervisando al equipo de desarrollo y creando componentes reutilizables para mejorar el rendimiento y la arquitectura del proyecto. Como líder, impulso la innovación, optimizo la eficiencia del código y garantizo la entrega de soluciones de software de alta calidad. Estoy familiarizado con metodologías ágiles, resolución colaborativa de problemas y mentoría de miembros del equipo para alcanzar los objetivos del proyecto.',
    experienceTitle2: 'Desarrolladora Frontend',
    experienceDate2: 'desde Abril 2022 - actualmente | Rezglo',
    experienceDesc2: 'Durante mi experiencia laboral, he tenido el privilegio de brindar soporte técnico a una empresa en la industria del transporte turístico. Este rol me ha permitido adquirir un profundo conocimiento en el manejo de mapas, ya que he estado involucrado en el desarrollo de soluciones que involucran la visualización y navegación de rutas turísticas. Además, he sido responsable de brindar soporte a módulos previamente implementados, lo que me ha permitido familiarizarme con el mantenimiento y la resolución de problemas en aplicaciones en producción. En este contexto, también he trabajado con servicios de GraphQL, utilizando esta tecnología para optimizar la comunicación entre clientes y servidores, garantizando un intercambio eficiente de datos. Estas experiencias han fortalecido mi capacidad para brindar soluciones efectivas y colaborar de manera efectiva en proyectos relacionados con el transporte turístico.',
    experienceTitle3: 'Desarrolladora Angular',
    experienceDate3: 'desde Diciembre 2021 hasta Diciembre 2022 | Softrek',
    experienceDesc3: 'Durante mi experiencia laboral, participé en dos proyectos que ampliaron mis habilidades y conocimientos en diferentes áreas. En el primer proyecto, un proyecto de centro de llamadas, tuve la oportunidad de trabajar con tecnologías como sockets y VoIP, lo que me permitió adquirir experiencia en el desarrollo de aplicaciones de comunicación en tiempo real. En el segundo proyecto, relacionado con el turismo, tuve la oportunidad de ampliar mis conocimientos en diseño de interfaz de usuario, ya que era necesario crear interfaces atractivas y funcionales para aplicaciones turísticas. Estas experiencias me permitieron construir una base sólida de habilidades técnicas y una comprensión más profunda de las necesidades y requisitos específicos de diferentes sectores industriales.',
    experienceTitle4: 'Desarrolladora web',
    experienceDate4: 'desde Marzo 2021 hasta Septiembre 2021 | ETECSA',
    experienceDesc4: 'Durante este proyecto, mi principal contribución fue el desarrollo de nuevos módulos para mejorar la eficiencia y funcionalidad del centro de llamadas. Además, brindé soporte técnico a los usuarios, resolviendo problemas y brindando capacitación para garantizar un funcionamiento fluido del sistema.',
    experienceTitle5: 'Especialista en Informática y Automatización',
    experienceDate5: 'desde Septiembre 2019 hasta Febrero 2021 | COMBIOMED Tecnología Médica Digital',
    experienceDesc5: 'Desarrollé una aplicación que permitía la comunicación de un autómata con una aplicación web en React. Además, formé parte del equipo que desarrolló el sitio web de dicha empresa en el mismo framework',
    skill: 'HABILIDADES',
    interest: 'INTERESES',
    music: 'Música',
    travel: 'Viajar',
    reading: 'Leer',
    movies: 'Películas'
};


// Función para cambiar el idioma
function changeLanguage() {
    // Cambia el idioma actual
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';

    // Importa las traducciones correspondientes según el idioma actual
    const translations = currentLanguage === 'en' ? enTranslations : esTranslations;

    // Actualiza el contenido de los elementos
    document.getElementById('titleProfile').innerText = translations.titleProfile;
    document.getElementById('descProfile').innerText = translations.descProfile;
    document.getElementById('titleLanguage').innerText = translations.titleLanguage;
    document.getElementById('esLang').innerText = translations.esLang;
    document.getElementById('enLang').innerText = translations.enLang;
    document.getElementById('ingInf').innerText = translations.ingInf;
    document.getElementById('webDev').innerText = translations.webDev;
    document.getElementById('titleTraining').innerText = translations.titleTraining;
    document.getElementById('experienceTitle').innerText = translations.experienceTitle;
    // document.getElementById('experienceTitle1').innerText = translations.experienceTitle1;
    // document.getElementById('experienceDate1').innerText = translations.experienceDate1;
    // document.getElementById('experienceDesc1').innerText = translations.experienceDesc1;
    document.getElementById('experienceTitle2').innerText = translations.experienceTitle2;
    document.getElementById('experienceDate2').innerText = translations.experienceDate2;
    document.getElementById('experienceDesc2').innerText = translations.experienceDesc2;
    document.getElementById('experienceTitle3').innerText = translations.experienceTitle3;
    document.getElementById('experienceDate3').innerText = translations.experienceDate3;
    document.getElementById('experienceDesc3').innerText = translations.experienceDesc3;
    document.getElementById('experienceTitle4').innerText = translations.experienceTitle4;
    document.getElementById('experienceDate4').innerText = translations.experienceDate4;
    document.getElementById('experienceDesc4').innerText = translations.experienceDesc4;
    document.getElementById('experienceTitle5').innerText = translations.experienceTitle5;
    document.getElementById('experienceDate5').innerText = translations.experienceDate5;
    document.getElementById('experienceDesc5').innerText = translations.experienceDesc5;
    document.getElementById('skill').innerText = translations.skill;
    document.getElementById('interest').innerText = translations.interest;
    document.getElementById('music').innerText = translations.music;
    document.getElementById('travel').innerText = translations.travel;
    document.getElementById('reading').innerText = translations.reading;
    document.getElementById('movies').innerText = translations.movies;
}

// Agrega un evento de escucha al botón para cambiar el idioma
document.getElementById('change-language').addEventListener('click', changeLanguage);

// Importa las traducciones correspondientes según el idioma actual



// Actualiza el contenido inicial de los elementos
document.getElementById('titleProfile').innerText = enTranslations.titleProfile;
document.getElementById('descProfile').innerText = enTranslations.descProfile;
document.getElementById('titleLanguage').innerText = enTranslations.titleLanguage;
document.getElementById('esLang').innerText = enTranslations.esLang;
document.getElementById('enLang').innerText = enTranslations.enLang;
document.getElementById('ingInf').innerText = enTranslations.ingInf;
document.getElementById('webDev').innerText = enTranslations.webDev;
document.getElementById('titleTraining').innerText = enTranslations.titleTraining;
document.getElementById('experienceTitle').innerText = enTranslations.experienceTitle;
document.getElementById('experienceTitle1').innerText = enTranslations.experienceTitle1;
document.getElementById('experienceDate1').innerText = enTranslations.experienceDate1;
document.getElementById('experienceDesc1').innerText = enTranslations.experienceDesc1;
document.getElementById('experienceTitle2').innerText = enTranslations.experienceTitle2;
document.getElementById('experienceDate2').innerText = enTranslations.experienceDate2;
document.getElementById('experienceDesc2').innerText = enTranslations.experienceDesc2;
document.getElementById('experienceTitle3').innerText = translations.experienceTitle3;
document.getElementById('experienceDate3').innerText = translations.experienceDate3;
document.getElementById('experienceDesc3').innerText = enTranslations.experienceDesc3;
document.getElementById('experienceTitle4').innerText = enTranslations.experienceTitle4;
document.getElementById('experienceDate4').innerText = enTranslations.experienceDate4;
document.getElementById('experienceDesc4').innerText = translations.experienceDesc4;
document.getElementById('experienceTitle5').innerText = translations.experienceTitle5;
document.getElementById('experienceDate5').innerText = translations.experienceDate5;
document.getElementById('experienceDesc5').innerText = translations.experienceDesc5;
document.getElementById('skill').innerText = translations.skill;
document.getElementById('interest').innerText = translations.interest;
document.getElementById('music').innerText = translations.music;
document.getElementById('travel').innerText = translations.travel;
document.getElementById('reading').innerText = translations.reading;
document.getElementById('movies').innerText = translations.movies;

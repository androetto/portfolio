// Datos del portafolio
const portfolioData = {
    personal: {
        "name": "Franco Androetto",
        "title": "Full Stack Developer & Tech Lead",
        "description": "Desarrollador Full Stack con +10 años de experiencia liderando equipos y creando soluciones digitales robustas, modernas y escalables para empresas de diferentes industrias.",
        "about": [
          "Soy un desarrollador Full Stack con más de 10 años de experiencia construyendo productos digitales de alto impacto. A lo largo de mi carrera he liderado equipos, diseñado arquitecturas robustas y desarrollado soluciones escalables, desde ERP empresariales hasta plataformas de ecommerce y control de flotas.",
          "Mi enfoque está centrado en la calidad del código, la escalabilidad y la eficiencia. Aplico buenas prácticas de desarrollo, CI/CD, testing, y patrones modernos para garantizar mantenibilidad a largo plazo.",
          "Fuera del trabajo, me apasiona aprender nuevas tecnologías, compartir conocimiento y contribuir con la comunidad tech. Disfruto mentorear a otros desarrolladores y enfrentar desafíos técnicos complejos con soluciones simples y efectivas."
        ],
        "contact": {
          "email": "androettofranco@gmail.com",
          "whatsapp": "5493564677539",
          "github": "https://github.com/androetto",
          "linkedin": "https://linkedin.com/in/franco-androetto"
        }
      
    },

    experience: [
        {
            "id": "perc",
            "company": "PERc",
            "position": "Full Stack Developer / Tech Lead - SR",
            "period": "Noviembre 2024 - Actualidad",
            "logo": "assets/perc_logo.png",
            "website": "https://www.perc.com.ar/",
            "responsibilities": [
              "Lideré el desarrollo técnico de varios proyectos clave, coordinando equipos y definiendo arquitectura.",
              "Diseñé e implementé un ecommerce moderno utilizando Angular 18, NestJS y MongoDB, optimizado para alto tráfico.",
              "Desarrollé un sistema completo de control de flotas con tecnologías escalables y bajo acoplamiento.",
              "Implementé una pasarela de pagos propietaria combinando Java y NestJS con PostgreSQL, garantizando integridad y rendimiento."
            ]
          },          
        {
            "id": "schedule-interpreter",
            "company": "Schedule Interpreter",
            "position": "Full Stack Developer Javascript - SR",
            "period": "Abril 2023 - Octubre 2024",
            "logo": "assets/scheduleinterpreter_com_logo.jpeg",
            "website": "https://www.scheduleinterpreter.com/index.html",
            "responsibilities": [
              "Lideré la migración completa de un sistema legacy en PERL a una arquitectura moderna basada en JavaScript.",
              "Refactoricé grandes porciones del código, mejorando el rendimiento, seguridad y mantenibilidad.",
              "Integré Swagger para documentación API efectiva y clara, optimizando el trabajo entre equipos.",
              "Conecté servicios internos con plataformas externas como QuickBooks mediante integraciones robustas."
            ]
          },          
        {
            "id": "xside-solutions",
            "company": "XSide Solutions",
            "position": "Full Stack Developer Javascript - SSR-SR",
            "period": "Diciembre 2021 - Abril 2023",
            "logo": "assets/xside_solutions_logo.jpeg",
            "website": "https://xsidesolutions.com/",
            "responsibilities": [
              "Desarrollé soluciones con Remix.run e integraciones de pagos usando PayPal.",
              "Asesoré equipos en buenas prácticas con Angular, refactorizando componentes críticos.",
              "Implementé sistemas complejos como una plataforma aduanera en React + Next.js.",
              "Participé en proyectos de reconocimiento de imágenes y despliegue en AWS."
            ]
          }
,          
        {
            "id": "pos-cloud",
            "company": "POS Cloud",
            "position": "Full Stack Developer (MEAN) / Tech Lead - SSR-SR",
            "period": "Abril 2016 - Noviembre 2021",
            "logo": "assets/poscloud_logo.jpeg",
            "website": "https://www.poscloud.com.ar/",
            "responsibilities": [
              "Desarrollé un ERP completo utilizando MEAN Stack para gestión comercial y administrativa.",
              "Construí apps móviles personalizadas con Flutter para la industria fitness.",
              "Desarrollé un CMS de noticias con Angular Universal para SSR y SEO optimizado.",
              "Implementé pipelines CI/CD usando GitHub Actions, Docker y Jenkins en entornos de producción."
            ]
          }
          
    ],

    education: {
        "formal": [
            {
                "id": "utn",
                "title": "Ingeniería en Sistemas de Información",
                "institution": "UTN Facultad Regional San Francisco",
                "period": "2012 - 2015 (3 años)",
                "icon": "fas fa-university",
                "logo": "assets/universidad_tecnologica_nacional_logo.jpeg",
                "website": "https://sanfrancisco.utn.edu.ar/"
            }
        ],
        "courses": [
            {
                "id": "sql-course",
                "title": "Querying & Administración Microsoft SQL Server",
                "institution": "Full Solutions - 2 años",
                "icon": "fas fa-database"
            },
            {
                "id": "linux-course",
                "title": "Carrera Debian Linux System Engineer",
                "institution": "Instituto Linux - 6 meses",
                "icon": "fab fa-linux"
            },
            {
                "id": "nodejs-course",
                "title": "NodeJS y Angular - MEAN Stack",
                "institution": "Udemy",
                "icon": "fab fa-node-js"
            },
            {
                "id": "angular-course",
                "title": "Angular: De cero a experto",
                "institution": "Udemy",
                "icon": "fab fa-angular"
            }
        ]
    },

    skills: [
        // Frontend
        {
            "name": "Angular",
            "years": 6,
            "category": "Frontend",
            "color": "#8b5cf6",
            "icon": "fab fa-angular"
        },
        {
            "name": "Node.js",
            "years": 5,
            "category": "Frontend",
            "color": "#8b5cf6",
            "icon": "fab fa-node-js"
        },
        {
            "name": "Vanilla.js",
            "years": 4,
            "category": "Frontend",
            "color": "#8b5cf6",
            "icon": "fab fa-js-square"
        },
        {
            "name": "Nest.js",
            "years": 3,
            "category": "Frontend",
            "color": "#8b5cf6",
            "icon": "fas fa-server"
        },
        {
            "name": "React + Next.js",
            "years": 2,
            "category": "Frontend",
            "color": "#8b5cf6",
            "icon": "fab fa-react"
        },
        {
            "name": "Remix.run",
            "years": 1,
            "category": "Frontend",
            "color": "#8b5cf6",
            "icon": "fas fa-code"
        },
        {
            "name": "Flutter",
            "years": 3,
            "category": "Frontend",
            "color": "#8b5cf6",
            "icon": "fas fa-mobile-alt"
        },
        {
            "name": "Ionic",
            "years": 1,
            "category": "Frontend",
            "color": "#8b5cf6",
            "icon": "fab fa-ionic"
        },
        
        // Database
        {
            "name": "MongoDB",
            "years": 5,
            "category": "Database",
            "color": "#10b981",
            "icon": "fas fa-leaf"
        },
        {
            "name": "MS SQL",
            "years": 3,
            "category": "Database",
            "color": "#10b981",
            "icon": "fas fa-database"
        },
        {
            "name": "PostgreSQL",
            "years": 2,
            "category": "Database",
            "color": "#10b981",
            "icon": "fas fa-database"
        },
        {
            "name": "MySQL",
            "years": 2,
            "category": "Database",
            "color": "#10b981",
            "icon": "fas fa-database"
        },
        
        // DevOps & Cloud
        {
            "name": "GitHub Actions",
            "years": 3,
            "category": "DevOps",
            "color": "#3b82f6",
            "icon": "fab fa-github"
        },
        {
            "name": "Jenkins",
            "years": 2,
            "category": "DevOps",
            "color": "#3b82f6",
            "icon": "fas fa-cogs"
        },
        {
            "name": "GCP",
            "years": 1,
            "category": "DevOps",
            "color": "#3b82f6",
            "icon": "fab fa-google"
        },
        {
            "name": "AWS",
            "years": 1,
            "category": "DevOps",
            "color": "#3b82f6",
            "icon": "fab fa-aws"
        }
    ],

    projects: [
        {
            "id": "pos-cloud-erp",
            "title": "POS Cloud - ERP",
            "year": "2016-2021",
            "description": "Desarrollé desde cero una plataforma ERP modularizada empresarial que revoluciona la gestión de negocios. El sistema integra módulos completos de compras, ventas, stock, fondos y reportes inteligentes, permitiendo a las empresas administrar todas sus operaciones desde una sola plataforma.",
            "technologies": ["Angular", "Node.js", "Express", "NestJS", "MongoDB", "AWS", "Google Cloud"]
        },
        {
            "id": "librologia",
            "title": "Librología - Red Social de Libros",
            "year": "2025",
            "description": "Red social completa para amantes de los libros con más de 5K descargas en Google Play Store. Permite encontrar, intercambiar, comprar, vender y regalar libros físicos dentro de una comunidad apasionada por la lectura.",
            "technologies": ["Angular", "React Native", "Expo", "Serverless", "MongoDB", "Socket.io"]
        },
        {
            "id": "schedule-interpreter",
            "title": "Schedule Interpreter - Migración Legacy",
            "year": "2023-2024",
            "description": "Lideré la migración completa de una plataforma empresarial legacy de servicios de interpretación desde Perl hacia una arquitectura moderna con JavaScript vanilla y Express.js. Mejoras significativas en rendimiento y escalabilidad.",
            "technologies": ["JavaScript", "Express.js", "MySQL", "Node.js", "Legacy Migration", "API Development"]
        },
        {
            "id": "sport-style",
            "title": "Sport Style - App de Entrenamiento",
            "year": "2020-2021",
            "description": "Durante la pandemia, desarrollé una solución integral que revolucionó el entrenamiento domiciliario. App móvil y backoffice administrativo completo para la gestión de gimnasios virtuales. Alcanzó más de 1K descargas en Google Play Store.",
            "technologies": ["Flutter", "Angular", "Node.js", "Express", "MongoDB"]
        },
        {
            "id": "cms-diario",
            "title": "CMS - Diario Virtual",
            "year": "2021-2022",
            "description": "CMS completo para un diario digital moderno, creando tanto el backoffice para editores como el frontend optimizado para lectores. Arquitectura SEO-first con meta tags dinámicos, URLs amigables y optimización para Core Web Vitals.",
            "technologies": ["Angular", "Node.js", "Express", "MongoDB"]
        },
        {
            "id": "blotter-cripto",
            "title": "Blotter v2.0 - Cotizador de Cripto",
            "year": "2023-2024",
            "description": "Plataforma completa de gestión financiera que revoluciona las operaciones de trading y gestión de órdenes bursátiles. Sistema robusto con seguimiento en tiempo real con WebSockets y interfaz Material Design optimizada.",
            "technologies": ["Angular 14", "Angular Material", "NgRx", "WebSockets", "JWT", "TypeScript"]
        },
        {
            "id": "order-journey",
            "title": "Order Journey - Plataforma de Traducción",
            "year": "2023-2024",
            "description": "Plataforma completa de servicios de traducción que automatiza todo el proceso desde la cotización hasta la entrega. Integración robusta con PayPal para procesamiento seguro de transacciones y dashboard administrativo completo.",
            "technologies": ["Remix Run", "React", "PostgreSQL", "PayPal API", "Node.js", "TypeScript"]
        },
        {
            "id": "chep-skycan",
            "title": "Chep Skycan - Inventario con Drones",
            "year": "2023-2024",
            "description": "Solución revolucionaria de inventario automatizado utilizando tecnología de drones y procesamiento de imágenes con inteligencia artificial. Reducción de errores humanos en un 95% y aceleración de procesos de días a minutos.",
            "technologies": ["Next.js", "PostgreSQL", "AWS", "Computer Vision", "AI/ML", "React"]
        },
        {
            "id": "watchman",
            "title": "Watchman - Seguridad Comunitaria",
            "year": "2023-2024",
            "description": "Plataforma integral de seguridad comunitaria que revoluciona la vigilancia barrial mediante tecnología móvil y web. Mejora de tiempos de respuesta en un 80% y comunicación efectiva entre vecinos y fuerzas de seguridad.",
            "technologies": ["Angular", "Ionic", "Node.js", "Express", "MongoDB", "Geolocation"]
        }
    ]
}; 
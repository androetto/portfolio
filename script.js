// Configuración inicial
document.addEventListener('DOMContentLoaded', function() {
    initializeTimelineAnimations();
    initializeScrollEffects();
    initializePerformanceOptimizations();
});

// Animaciones de timeline
function initializeTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Efectos de scroll
function initializeScrollEffects() {
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    const scrollObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled');
            }
        });
    }, {
        threshold: 0.1
    });
    
    scrollElements.forEach(element => {
        scrollObserver.observe(element);
    });
}

// Optimizaciones de rendimiento
function initializePerformanceOptimizations() {
    // Throttle para eventos de scroll
    let ticking = false;
    
    function updateScrolled() {
        // Efectos de scroll optimizados
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrolled);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Función para analytics (placeholder)
function trackEvent(eventName, eventData) {
    console.log('Event tracked:', eventName, eventData);
}

// Tracking de interacciones
document.addEventListener('click', function(e) {
    if (e.target.closest('.project-links a')) {
        const projectTitle = e.target.closest('.timeline-item').querySelector('.project-title').textContent;
        trackEvent('project_link_click', {
            project: projectTitle,
            link_type: e.target.getAttribute('aria-label')
        });
    }
    
    if (e.target.closest('.social-links a')) {
        trackEvent('social_link_click', {
            platform: e.target.getAttribute('aria-label')
        });
    }
}); 
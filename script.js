// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced reveal animation on scroll
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Create twinkling stars
function createTwinklingStars() {
    const starsContainer = document.querySelector('.stars-container');
    const starCount = 200; // Number of twinkling stars
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('twinkling-star');
        
        // Random position and timing
        const size = 0.5 + Math.random() * 2; // Random size between 0.5-2.5px
        const posX = Math.random() * 100; // Random X position
        const posY = Math.random() * 100; // Random Y position
        const delay = Math.random() * 5; // Random delay up to 5s
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.animationDelay = `${delay}s`;
        
        // Different durations for variety
        const duration = 3 + Math.random() * 7; // Between 3-10s
        star.style.animationDuration = `${duration}s`;
        
        starsContainer.appendChild(star);
    }
}

// Create larger, slower shooting stars with longer tails
function createShootingStars() {
    const starsContainer = document.querySelector('.stars-container');
    const starCount = 6; // Fewer shooting stars for better experience
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('shooting-star');
        
        // Random position and timing - slower animation
        const delay = Math.random() * 30; // Longer random delay up to 30s for more scattered appearance
        const duration = 12 + Math.random() * 15; // Much slower duration between 12-27s
        const size = 3 + Math.random() * 7; // Larger size between 3-10px
        
        // Trail effect - make tails longer
        const tail = 15 + Math.random() * 25; // Much longer tail between 15-40px
        
        star.style.width = `${size + tail}px`; // Width includes tail
        star.style.height = `${size}px`;
        star.style.opacity = 0.7 + Math.random() * 0.3; // Opacity between 0.7-1
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;
        
        // Set custom animation
        star.style.animation = `shooting-star-animation ${duration}s linear ${delay}s infinite`;
        
        starsContainer.appendChild(star);
    }
}

// Penguin animation
function initPenguin() {
    const penguin = document.querySelector('.penguin');
    const splash = document.querySelector('.splash');
    
    // Add wobble animation to penguin
    penguin.style.animation = 'penguin-wobble 2s infinite';
    
    // Penguin animated walk to water function
    function walkToWater() {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
            penguin.style.animation = 'penguin-walk 8s forwards, penguin-wobble 2s infinite';
            
            // Show splash after penguin jumps
            setTimeout(() => {
                splash.style.animation = 'splash 1s forwards';
            }, 7500);
        }
    }
    
    // Check if user has scrolled to bottom
    window.addEventListener('scroll', walkToWater);
}

// Add entrance animation effect for hero elements
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.hero-text, .hero-text + p, .btn-explore').forEach(el => {
            el.classList.add('active');
        });
    }, 300);
    
    // Create stars
    createTwinklingStars();
    createShootingStars();
    
    // Initialize penguin
    initPenguin();
});

window.addEventListener('scroll', revealElements);

// Run once on load to catch elements that are already in view
window.addEventListener('load', () => {
    revealElements();
    
    // Add initial animation to navbar
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 200);
    
    // Add 3D tilt effect to cards
    const cards = document.querySelectorAll('.chapter-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            const mouseX = e.clientX - cardCenterX;
            const mouseY = e.clientY - cardCenterY;
            
            const rotateX = mouseY * -0.05;
            const rotateY = mouseX * 0.05;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            setTimeout(() => {
                card.style.transform = '';
            }, 300);
        });
    });
});

// Add magnetic effect to buttons
const buttons = document.querySelectorAll('.chapter-access-btn, .btn-explore');

buttons.forEach(button => {
    button.addEventListener('mousemove', e => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const magneticPull = 3; // Adjust this for stronger/weaker effect
        button.style.transform = `translate(${x / magneticPull}px, ${y / magneticPull}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

window.__genspark_remove_badge_link = "https://www.genspark.ai/api/html_badge/" +
    "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDknYCvMVIaxokjfFQL02Tadn8L7Qi9R%2Fo6CRWEUikaC2NsqcyLvbDM3D3FjgjX%2BGkneDQQJizDr2G6mPf6GxNA3Je2JgPtcFispTYM%2FGMwAsknRvWN%2BkUtsgaPhMxHcBoERNd97pDNGU7wnuZI%2F%2F78P3i7TxibdWE5Gcgeozz09o3T%2FUKdCZMbm87BNqWHknc%2FrY7TlzdY7NZu6pVXOWUBfJ0sgeF%2Fl%2BPUZGMmq2xXuN2rCzMvBOR04p2U%2BZ8TAY48b7EVK8zjm5fS%2Bb5vh9HwcN1ZDZ10UbkzDrDHCG9fz53UQhQ93e%2BUwSUznPpF8nBlR0sTuN6aZk%2Fqx6D82OqpdiznTxzf7YOvmfWwqZ7b3m1Cay6YO8gqUmXCDS51EqKgoR4rLncQDxQvpJoBJf83EqUIb%2Bg1uzFBj1V%2Fg%2BG86hf8ST06ekPwbYjmF9hSE5i%2FBudIP8T70DGdpDk39D8g7G4aZq8%2BrdYCzu6cuXJblBt2aZXENrcDpJQ7DRm%2BRjTGh2y5qWEt%2BtA3VDdKC5ZN4%3D";
window.__genspark_locale = "en-US";
window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDknYCvMVIaxokjfFQL02Tadn8L7Qi9R/o6CRWEUikaC2NsqcyLvbDM3D3FjgjX+GkneDQQJizDr2G6mPf6GxNA3Je2JgPtcFispTYM/GMwAsknRvWN+kUtsgaPhMxHcBoERNd97pDNGU7wnuZI//78P3i7TxibdWE5Gcgeozz09o3T/UKdCZMbm87BNqWHknc/rY7TlzdY7NZu6pVXOWUBfJ0sgeF/l+PUZGMmq2xXuN2rCzMvBOR04p2U+Z8TAY48b7EVK8zjm5fS+b5vh9HwcN1ZDZ10UbkzDrDHCG9fz53UQhQ93e+UwSUznPpF8nBlR0sTuN6aZk/qx6D82OqpdiznTxzf7YOvmfWwqZ7b3m1Cay6YO8gqUmXCDS51EqKgoR4rLncQDxQvpJoBJf83EqUIb+g1uzFBj1V/g+G86hf8ST06ekPwbYjmF9hSE5i/BudIP8T70DGdpDk39D8g7G4aZq8+rdYCzu6cuXJblBt2aZXENrcDpJQ7DRm+RjTGh2y5qWEt+tA3VDdKC5ZN4=";

// External script: https://www.genspark.ai/html_badge.js
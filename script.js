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

// Add entrance animation effect for hero elements
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.hero-text, .hero-text + p, .btn-explore').forEach(el => {
            el.classList.add('active');
        });
    }, 300);
});

window.addEventListener('scroll', revealElements);
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
        const magneticPull = 3;
        button.style.transform = `translate(${x / magneticPull}px, ${y / magneticPull}px)`;
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

window.__genspark_remove_badge_link = "https://www.genspark.ai/api/html_badge/" +
    "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDschawp7dFKZi3frlxRebOGzsII3Y5ZpyCBB%2B1oHYMxZwGwyTWzBr%2F%2F4MFtcUfx38LherifyafvojL2axgN7mMo3aO5p9%2B7ynzoof122nj3EvxjMPImlf36L12p7q2%2B%2FJ6uLQ7%2FQ7pY4t%2B7OvWXnTB7bi3mYdrudF37JIjsaduQwtYTEBh3lRBw4Yg8X20xRoCWc6Z5H8HJkoRt7RWGt1NqsNobIql48y6wFDRgoHI3bkg8f8%2B%2F5Zo1JagIcLsCpK83RJAB%2FFGtwymm98Qqy7%2Fgc75El5wd%2F4QMLP6ybT79yDAWWFM1ctirmPJILn3TGbojE0PXMMzP26OSbi3rCYRgwLQr%2Fn5AhJOu%2BlHC6cQTSCPBzWFPNl7z8uljNz1zEpZ3UZ1ZE5C6D0Jg3%2FnM4tlCcUhoBIi92aD%2FSqnMJIDmFQsl8fpYnpChE3EHFDtA5U5cqTssO%2FBNcDbFSqnhf7k4M3shKInoKwyMIz8aZfJMMnFUspZaQM%2FLkWbxcvAbLUZIFAmWIUmbQMvQ2LvGi8sV5GHg3Et8neWcpskHt1%2FNI";
window.__genspark_locale = "en-US";
window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDschawp7dFKZi3frlxRebOGzsII3Y5ZpyCBB+1oHYMxZwGwyTWzBr//4MFtcUfx38LherifyafvojL2axgN7mMo3aO5p9+7ynzoof122nj3EvxjMPImlf36L12p7q2+/J6uLQ7/Q7pY4t+7OvWXnTB7bi3mYdrudF37JIjsaduQwtYTEBh3lRBw4Yg8X20xRoCWc6Z5H8HJkoRt7RWGt1NqsNobIql48y6wFDRgoHI3bkg8f8+/5Zo1JagIcLsCpK83RJAB/FGtwymm98Qqy7/gc75El5wd/4QMLP6ybT79yDAWWFM1ctirmPJILn3TGbojE0PXMMzP26OSbi3rCYRgwLQr/n5AhJOu+lHC6cQTSCPBzWFPNl7z8uljNz1zEpZ3UZ1ZE5C6D0Jg3/nM4tlCcUhoBIi92aD/SqnMJIDmFQsl8fpYnpChE3EHFDtA5U5cqTssO/BNcDbFSqnhf7k4M3shKInoKwyMIz8aZfJMMnFUspZaQM/LkWbxcvAbLUZIFAmWIUmbQMvQ2LvGi8sV5GHg3Et8neWcpskHt1/NI";

// External script: https://www.genspark.ai/html_badge.js
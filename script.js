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
    "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDquo%2FFZO%2BbsMFg%2BNRjnDVnuXto4cxmu4Z95YMkhC6mUDENAVTy9yefrJ%2BDUwj1z1bK4sQMs5vrJiw5u1Ljj158aug7dGfYy%2FnmjXUbA%2B6Rg3rRbefvcoDz5ZCFZcG2OA9thH3Ke3Czs%2BJM7hqDEalkf0LeVA0KGOK6RWtoKWqO06WkaeZ5waPJthJ2tY1JJZJIXh%2FKfz3%2F87Y3lxMioCLpgpXkYdb3d3WIoJUbdVwu%2FeYH36xoKtjVeaxulLMtsn5cKB6WBUK6S2iIJnf7cRNCThm8e0LmIVgL5JIReEI6TVA4xMskDmdP6x98J05QdT0%2BeNp%2BeeApPcIEH9%2F8NvWEEJ5CoM13QJIAOd3RhV9Z03b8lBj3qDLCMHfcj4On3l2Vt5ILbYyoWL2cyepnTrObZPw%2FZ6CrBgL%2F3olsISaYnqurz7iEMg1V8Ovmvh5GjZ%2BYjxwj0HH6D8yMhWTeEr9f%2BDo72R8fVs7JNx%2FJ0Qc5obcib0BkG2trvg5lVhWEkm%2Bdm6IhMEV1QSWek4O8wW74s%3D";
window.__genspark_locale = "en-US";
window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDquo/FZO+bsMFg+NRjnDVnuXto4cxmu4Z95YMkhC6mUDENAVTy9yefrJ+DUwj1z1bK4sQMs5vrJiw5u1Ljj158aug7dGfYy/nmjXUbA+6Rg3rRbefvcoDz5ZCFZcG2OA9thH3Ke3Czs+JM7hqDEalkf0LeVA0KGOK6RWtoKWqO06WkaeZ5waPJthJ2tY1JJZJIXh/Kfz3/87Y3lxMioCLpgpXkYdb3d3WIoJUbdVwu/eYH36xoKtjVeaxulLMtsn5cKB6WBUK6S2iIJnf7cRNCThm8e0LmIVgL5JIReEI6TVA4xMskDmdP6x98J05QdT0+eNp+eeApPcIEH9/8NvWEEJ5CoM13QJIAOd3RhV9Z03b8lBj3qDLCMHfcj4On3l2Vt5ILbYyoWL2cyepnTrObZPw/Z6CrBgL/3olsISaYnqurz7iEMg1V8Ovmvh5GjZ+Yjxwj0HH6D8yMhWTeEr9f+Do72R8fVs7JNx/J0Qc5obcib0BkG2trvg5lVhWEkm+dm6IhMEV1QSWek4O8wW74s=";

// External script: https://www.genspark.ai/html_badge.js


import { SpeedInsights } from "@vercel/speed-insights/next"
document.addEventListener('DOMContentLoaded', function() {
    // Animate cards on page load
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 * index);
    });

    // Add floating effect to background shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        // Generate random animation duration between 15-30s
        const duration = Math.random() * 15 + 15;
        shape.style.animation = `float ${duration}s ease-in-out infinite`;
    });

    // Add click effect on cards
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 1000);
        });
    });
});

// Add additional CSS for animations
const style = document.createElement('style');
style.textContent = `
    .card {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    @keyframes float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(-10px, 15px) rotate(5deg); }
        50% { transform: translate(10px, 30px) rotate(-5deg); }
        75% { transform: translate(15px, 15px) rotate(3deg); }
    }
    
    .pulse {
        animation: pulse 1s;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

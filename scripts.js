document.addEventListener('DOMContentLoaded', function() {
    const typingEffect = document.querySelector('.typing-effect');
    const textArray = typingEffect.getAttribute('data-text').split(' | ');
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            currentText = textArray[index].substring(0, charIndex--);
        } else {
            currentText = textArray[index].substring(0, charIndex++);
        }

        typingEffect.textContent = currentText;

        if (!isDeleting && charIndex === textArray[index].length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % textArray.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
});

function toggleDiagram() {
    const diagram = document.getElementById('mermaid-diagram');
    diagram.style.display = diagram.style.display === 'none' ? 'block' : 'none';
} 
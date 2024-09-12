"use strict";
const splits = document.querySelectorAll('.split');
const container = document.querySelector('.container');
Array.from(splits).forEach((split) => {
    split.addEventListener('mouseenter', (s) => {
        const target = s.target;
        const element = target.classList[1];
        element === 'right' ? container.classList.add('hover-right') : container.classList.remove('hover-right');
        element === 'left' ? container.classList.add('hover-left') : container.classList.remove('hover-left');
    });
    split.addEventListener('mouseleave', (e) => container.classList.remove(container.classList[1]));
});
//# sourceMappingURL=app.js.map
const splits = document.querySelectorAll('.split');
const container = document.querySelector('.container') as HTMLDivElement; 


Array.from(splits).forEach((split) => {
    split.addEventListener('mouseenter', (s) => {
        const target = s.target as HTMLDivElement; 
        const element = target.classList[1]; 
        element === 'right'? container.classList.add('hover-right') : container.classList.remove('hover-right')
        element === 'left'? container.classList.add('hover-left') : container.classList.remove('hover-left')
    })
    split.addEventListener('mouseleave', (e) => container.classList.remove(container.classList[1])); 
    })

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Lotto Logic
  const generateBtn = document.getElementById('generate-btn');
  const lottoDisplay = document.getElementById('lotto-numbers');

  generateBtn.addEventListener('click', () => {
    const numbers = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    numbers.sort((a, b) => a - b);

    lottoDisplay.innerHTML = '';
    numbers.forEach((num, index) => {
      const ball = document.createElement('div');
      ball.className = 'ball active';
      ball.textContent = num;
      ball.style.transitionDelay = `${index * 0.1}s`;
      lottoDisplay.appendChild(ball);
      
      // Animation trigger
      setTimeout(() => {
        ball.style.opacity = '1';
      }, 50);
    });
  });
});

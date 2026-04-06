document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
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

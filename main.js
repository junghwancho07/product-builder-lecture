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

// SNS Sharing Functions
function shareKakao() {
  // Note: Kakao sharing usually requires their SDK. For a quick link share:
  const url = window.location.href;
  window.open(`https://sharer.kakao.com/talk/friends/picker/link?url=${encodeURIComponent(url)}`, '_blank');
}

function shareFacebook() {
  const url = window.location.href;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function shareTwitter() {
  const url = window.location.href;
  const text = "당첨 기원! Lotto Expert에서 행운의 번호를 생성해보세요.";
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function copyLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert("링크가 복사되었습니다! 친구들에게 공유해보세요.");
  }).catch(err => {
    console.error('링크 복사 실패:', err);
  });
}

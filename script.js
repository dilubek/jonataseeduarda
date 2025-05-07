const startDate = new Date('2024-10-22T00:00:00');
const counterElement = document.getElementById('counter');

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  counterElement.innerText = `${days} dias, ${hours}h ${minutes}m ${seconds}s da minha melhor escolha 💖`;
}

updateCounter();
setInterval(updateCounter, 1000);

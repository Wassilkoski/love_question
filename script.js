const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;
    
    const newX = Math.floor(Math.random() * maxWidth);
    const newY = Math.floor(Math.random() * maxHeight);
    
    noBtn.style.left = ${newX}px;
    noBtn.style.top = ${newY}px;
});

yesBtn.addEventListener("click", () => {
    alert("Yay! I love you too! ❤");
});

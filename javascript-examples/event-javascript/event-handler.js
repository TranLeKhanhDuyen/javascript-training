const changeText = () => {
  const p = document.querySelector("p");
  p.textContent = "Confirm change";
};

const button = document.querySelector("button");
button.onclick = changeText;

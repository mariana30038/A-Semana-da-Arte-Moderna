const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const input = document.getElementById("input");
  const p = document.getElementById("p");
  let celsius = (input.value - 32) * (5 / 9);
  p.innerHTML = `${celsius.toFixed(1)}`;
});

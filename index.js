const copyMe = document.querySelector(".copy-me");
copyMe.addEventListener("copy", (e) => alert("copied me!"));

const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  e.target.textContent = `Pos-x: ${e.offsetX}, Pos-y: ${e.offsetY}`;
});

document.addEventListener("wheel", (e) => {
  console.log(e.pageX, e.pageY);
});

const hideLoading = () => {
  const loading = document.querySelector(".loading_screen");
  setTimeout(() => {
    loading.style.display = "none";
  }, 3000);
};

window.onload = hideLoading;
const i = document.querySelector(".icons ul:first-child");
i.addEventListener("click", () => {
  console.log('ji');
 console.log( document.querySelector(".pfp img").setAttribute('src','./Image/EXTtf7OWoAAvbEm.jpeg'))
});

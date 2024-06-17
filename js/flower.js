
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const sphere = document.getElementById("sphere")
const click = document.querySelectorAll(".click")

const loader = document.getElementById("loader_content")

window.addEventListener("load", () => {
  loader.style.visibility = "hidden"
  loader.style.opacity = 0
})


click.forEach(index => {
  index.addEventListener("click", () => {
    Swal.fire({
      title: `<strong style="color:#1E1D1E">In case no one gave you flowers
            ,<br> I'll give them to you ❤️
            </strong>`,
      imageUrl: "../icon/capybara-img.jpeg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Gift-forYou",
      showClass: {
        popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
            `
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
            `
      },
      showCloseButton: true,
      showConfirmButton: false,
    });
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    document.getElementById('containers').appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 2000);
  });
});


document.addEventListener("click", (e) => {
  let body = document.querySelector(".night");
  let heart = document.createElement("span");

  let x = e.offsetX;
  let y = e.offsetY;

  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  let size = Math.random() * 50;
  heart.style.width = 20 + size + 'px';
  heart.style.height = 20 + size + 'px';

  let transformValue = Math.random() * 360;
  let translateXValue = Math.random() * 20 - 10;
  let translateYValue = Math.random() * 20 - 10;
  heart.style.transform = 'rotate(' + transformValue + 'deg) translate(' + translateXValue + 'px, ' + translateYValue + 'px)';

  body.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 1000);
});



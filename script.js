document.addEventListener("DOMContentLoaded", () => {

  const openBtn = document.getElementById("openTeachers");
  const modal = document.getElementById("teachersModal");
  const closeBtn = document.getElementById("closeModal");

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });


  // FORM
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const msg =
`Родитель: ${form.parentName.value}
Ребёнок: ${form.childName.value}
Телефон: ${form.phone.value}`;

    window.open("https://wa.me/77759832420?text=" + encodeURIComponent(msg));
  });


  // CAROUSEL
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const next = document.querySelector(".carousel-btn.next");
  const prev = document.querySelector(".carousel-btn.prev");

  let index = 0;

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  });

});
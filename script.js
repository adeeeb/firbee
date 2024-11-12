const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

menuIcon.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "flex" ? "none" : "flex";
});

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./assets/images/prodact/product with ligh 1.png",
    "./assets/images/prodact/SPENCER-00269 1.jpg",
    "./assets/images/prodact/DSC08354_Opt2 2.jpg",
    "./assets/images/prodact/DSC08354_Opt2 1.jpg",
    "./assets/images/prodact/_DP_1563 1.jpg",
  ];

  const mainProductImage = document.getElementById("mainProductImage");
  const thumbnailContainer = document.getElementById("thumbnailContainer");

  images.forEach((src, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = src;
    thumbnail.alt = `Thumbnail ${index + 1}`;
    thumbnail.addEventListener("mouseenter", () => {
      mainProductImage.src = src;
    });
    thumbnail.addEventListener("click", () => {
      mainProductImage.src = src;
    });
    thumbnailContainer.appendChild(thumbnail);
  });
});

const faqs = document.querySelectorAll(".faq-item");

function toggleAnswer(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  const icon = document.getElementById(`toggle-icon-${index}`);

  const isOpen = answer.classList.contains("open");

  faqs.forEach((faq, i) => {
    const answer = document.getElementById(`faq-answer-${i}`);
    const icon = document.getElementById(`toggle-icon-${i}`);
    answer.classList.remove("open");
    icon.innerHTML = "+";
  });

  if (!isOpen) {
    answer.classList.add("open");
    icon.innerHTML = "-";
  }
}

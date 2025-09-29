const routes = JSON.parse(localStorage.getItem("route")) || [];

// ham them class active cho trang web link nao dang hdong
const currentLocation = window.location.href;
const menuItems = document.querySelectorAll(".listLink2 a");
for (let i = 0; i < menuItems.length; i++) {
  if (menuItems[i].href === currentLocation) {
    menuItems[i].className += " active";
  }
}

let currentPage = 1;
const cardsPerPage = 8;
const totalPages = Math.ceil(routes.length / cardsPerPage);

// ham phan trang
function displayPageNumbers() {
  const pageNumbers = document.getElementById("pageNumbers");
  pageNumbers.innerHTML = "";
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");
  prev.style.display = currentPage === 1 ? "none" : "block";
  next.style.display = currentPage === totalPages ? "none" : "block";
  for (let i = 1; i <= totalPages; i++) {
    const pageNum = document.createElement("button");
    pageNum.innerText = i;
    pageNum.classList.add("page-number");
    if (i === currentPage) {
      pageNum.classList.add("active");
    }
    pageNum.addEventListener("click", () => goToPage(i));
    pageNumbers.appendChild(pageNum);
  }
}

// ham hien thi danh sach card
function renderRouteCards() {
  const routebody = document.querySelector(".routebody");
  routebody.innerHTML = "";
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, routes.length);
  const currentRoutes = routes.slice(startIndex, endIndex);

  currentRoutes.forEach((route) => {
    const card = document.createElement("div");
    card.className = "card bodycard";
    card.innerHTML = `
          <img src="${route.img}" class="card-img-top" height=170px; alt="...">
          <div class="cardfooter">
              <h5>${route.title}</h5>
              <p>${route.description}</p>
          </div>
      `;
    routebody.appendChild(card);
  });
}

// ham dieu huong thu tu trang web
function goToPage(page) {
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    displayPageNumbers();
    renderRouteCards();
  }
}

// Thêm hàm changePage
function changePage(direction) {
  if (direction === "prev" && currentPage > 1) {
    goToPage(currentPage - 1);
  } else if (direction === "next" && currentPage < totalPages) {
    goToPage(currentPage + 1);
  }
}

// ham khi load trang
document.addEventListener("DOMContentLoaded", () => {
  displayPageNumbers();
  renderRouteCards();
});

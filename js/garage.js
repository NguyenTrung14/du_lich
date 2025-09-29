const currentLocation = window.location.href;
const menuItems = document.querySelectorAll(".listLink2 a");
for (let i = 0; i < menuItems.length; i++) {
  if (menuItems[i].href === currentLocation) {
    menuItems[i].className += " active";
  }
}
// hàm hiển thị nhà xe
function renderGarage() {
  let garageList = JSON.parse(localStorage.getItem("garageList")) || [];
  let start = (currentPage - 1) * perPage;
  let end = start + perPage;
  let user = garageList.slice(start, end);
  let div = document.getElementById("card-garage");
  div.innerHTML = "";
  user.forEach((item) => {
    div.innerHTML += `<div class="col-md-3" style="cursor: pointer">
      <div class="card h-100">
        <img
          src="${item.image}"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text"> <i class="fa-solid fa-map-location-dot"style="color: #3D54A5"></i> ${item.description}</p>
        </div>
      </div>
    </div>`;
  });
}
// hàm phân trang
let currentPage = 1;
let perPage = 8;
function renderPageNumber() {
  let garageList = JSON.parse(localStorage.getItem("garageList")) || [];
  let totalPage = Math.ceil(garageList.length / perPage);
  let ul = document.getElementById("pagination");
  ul.innerHTML = "";
  ul.innerHTML += `<li onclick="backPage()" style="${
    currentPage === 1 ? "display: none" : "display: block"
  }">&lt;</li>`;
  for (let i = 1; i <= totalPage; i++) {
    ul.innerHTML += `<li onclick="changePage(${i})" style="background-color: ${
      i === currentPage ? "#007bff" : "transparent"
    };
    color: ${i === currentPage ? "#fff" : "#000"}">${i}</li>`;
  }
  ul.innerHTML += `<li onclick='nextPage()  '>&gt;</li>`;
}
// hàm bấm vào nút phân trang
function changePage(page) {
  let garageList = JSON.parse(localStorage.getItem("garageList")) || [];
  let totalPage = Math.ceil(garageList.length / perPage);
  if (page > totalPage || page < 1) return;
  currentPage = page;
  renderGarage();
  renderPageNumber();
}
// hàm bấm nút next
function backPage() {
  if (currentPage > 1) {
    currentPage--;
  }
  renderGarage();
  renderPageNumber();
}
// hàm bấm nút back
function nextPage() {
  let garageList = JSON.parse(localStorage.getItem("garageList")) || [];
  let totalPage = Math.ceil(garageList.length / perPage);
  if (currentPage < totalPage) {
    currentPage++;
  }
  renderGarage();
  renderPageNumber();
}
renderGarage();
renderPageNumber();

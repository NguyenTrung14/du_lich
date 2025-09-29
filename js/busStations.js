const currentLocation = window.location.href;
const menuItems = document.querySelectorAll(".listLink2 a");
for (let i = 0; i < menuItems.length; i++) {
  if (menuItems[i].href === currentLocation) {
    menuItems[i].className += " active";
  }
}
const itemsPerPage = 8;
let currentPage = 1;
let filteredStations = [];

function createStationCard(station) {
  return `
          <a href="/pages/article.html" class="no-underline">
          <div class="station-card">
            <img src="${station.img}" alt="" class="station-img" />
            <div class="station-info">
              <h3>${station.title}</h3>
              <p>${station.description}</p>
            </div>
          </div>
         </a>
        `;
}

function displayStations() {
  const stationGrid = document.getElementById("stationGrid");
  const stations = JSON.parse(localStorage.getItem("busStations"));

  // Tính toán
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Lấy danh sách bến xe
  const displayedStations = filteredStations.slice(startIndex, endIndex);

  stationGrid.innerHTML = displayedStations.map((station) => createStationCard(station)).join("");

  // Cập nhật
  updatePagination();
}

function updatePagination() {
  const totalPages = Math.ceil(filteredStations.length / itemsPerPage);
  const pagination = document.getElementById("pagination");
  let paginationHTML = "";

  // Nút Previous
  paginationHTML += `
          <li class="back" ${currentPage === 1 ? 'style="opacity: 0.5"' : ""}>
            <a href="#" class="page-number" onclick="changePage(${currentPage - 1})"><i></i></a>
          </li>
        `;

  // Các số trang
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      paginationHTML += `
              <li><a href="#" class="page-number current">${i}</a></li>
            `;
    } else {
      paginationHTML += `
              <li><a href="#" class="page-number" onclick="changePage(${i})">${i}</a></li>
            `;
    }
  }

  // Nút Next
  paginationHTML += `
          <li class="next" ${currentPage === totalPages ? 'style="opacity: 0.5"' : ""}>
            <a href="#" class="page-number" onclick="changePage(${currentPage + 1})"><i></i></a>
          </li>
        `;

  pagination.innerHTML = paginationHTML;
}

function changePage(page) {
  const totalPages = Math.ceil(filteredStations.length / itemsPerPage);
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    displayStations();
  }
}

function searchStations() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const stations = JSON.parse(localStorage.getItem("busStations"));

  filteredStations = stations.filter(
    (station) =>
      station.title.toLowerCase().includes(searchTerm) || station.description.toLowerCase().includes(searchTerm)
  );

  currentPage = 1;
  displayStations();
}

// Khởi tạo trang
window.onload = function () {
  filteredStations = JSON.parse(localStorage.getItem("busStations"));
  displayStations();

  // Thêm sự kiện tìm kiếm
  document.getElementById("searchInput").addEventListener("input", searchStations);
};

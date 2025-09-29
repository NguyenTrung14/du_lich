let busCompanies = JSON.parse(localStorage.getItem("busCompanies")) || [];
let route = JSON.parse(localStorage.getItem("route")) || [];
let busStations = JSON.parse(localStorage.getItem("busStations")) || [];

let temp = busCompanies;
let currentPage = 1;
let perPage = 2;

function renderPageNumber(data = temp) {
  let totalPage = Math.ceil(data.length / perPage);
  document.getElementById("currentPage").textContent = currentPage;
  document.getElementById("totalPage").textContent = totalPage;
}

function prePage(data = temp) {
  if (currentPage > 1) {
    currentPage--;
    switch (data) {
      case busCompanies:
        renderBusCompanies();
        break;
      case route:
        renderBusStationsOrRouto(route);
        break;
      default:
        renderBusStationsOrRouto(data);
        break;
    }
    renderPageNumber(data);
  }
  if (currentPage === 1) {
    document.getElementById("prePage").style.opacity = "0.4";
  }
}

function nextPage(data = temp) {
  let totalPage = Math.ceil(data.length / perPage);
  if (currentPage > 0 && currentPage < totalPage) {
    document.getElementById("prePage").style.opacity = "1";
  }
  if (currentPage < totalPage) {
    currentPage++;
    switch (data) {
      case busCompanies:
        renderBusCompanies();
        break;
      case route:
        renderBusStationsOrRouto(data);
        break;
      default:
        renderBusStationsOrRouto(data);
        break;
    }
    renderPageNumber(data);
  }
}

function renderBusCompanies() {
  busCompanies = JSON.parse(localStorage.getItem("busCompanies")) || [];
  temp = busCompanies;
  document.getElementById("trademarkBase").textContent = "Nhà xe";
  document.getElementById("btnBusCompanies").classList.add("active");
  document.getElementById("btnRouto").classList.remove("active");
  document.getElementById("btnBusStation").classList.remove("active");
  let tableTrademark = document.getElementById("table_trademark");
  tableTrademark.innerHTML = "";

  let start = (currentPage - 1) * perPage;
  let end = start + perPage;
  let pagedData = busCompanies.slice(start, end);

  pagedData.forEach((element) => {
    tableTrademark.innerHTML += `
    <div class="card mb-2 position-relative" style="height: 160px;">
      <div class="dropdown text-end position-absolute top-0 end-0 m-2">
        <i class="bi bi-three-dots-vertical fs-6" data-bs-toggle="dropdown" aria-expanded="false"></i>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalsBusCompanie" onclick="editBusCompanie(${element.id})">Sửa</a></li>
          <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalDelete" onclick="deleteBusCompany(${element.id})">Xoá</a></li>
        </ul>
      </div>
      <div class="row m-3">
        <div class="col-2" style="width: 200px;">
          <img src="${element.img}" class="img-fluid" alt="car">
        </div>
        <div class="col-9">
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p><strong>${element.type}</strong> || ${element.departure} <i class="bi bi-arrow-repeat"></i> ${element.destination}</p>
            <p class="card-text"><i class="fa-solid fa-map-location-dot me-2"></i>${element.address}</p>
          </div>
        </div>
      </div>
    </div>
    `;
  });

  renderPageNumber();
}

function renderBusStationsOrRouto(data = busStations) {
  route = JSON.parse(localStorage.getItem("route")) || [];
  busStations = JSON.parse(localStorage.getItem("busStations")) || [];
  temp = data;

  let tableTrademark = document.getElementById("table_trademark");
  tableTrademark.innerHTML = "";

  let start = (currentPage - 1) * perPage;
  let end = start + perPage;
  let pagedData = data.slice(start, end);

  pagedData.forEach((element) => {
    const isRoute = data === route;
    tableTrademark.innerHTML += `
    <div class="card mb-2 position-relative" style="height: 160px;">
      <div class="dropdown text-end position-absolute top-0 end-0 m-2">
        <i class="bi bi-three-dots-vertical fs-6" data-bs-toggle="dropdown" aria-expanded="false"></i>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalsBusOrRoute" onclick="${
            isRoute ? `editRoute(${element.id})` : `editBusStation(${element.id})`
          }">Sửa</a></li>
          <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalDelete" onclick="${
            isRoute ? `deleteRoute(${element.id})` : `deleteBusStation(${element.id})`
          }">Xoá</a></li>
        </ul>
      </div>
      <div class="row m-3">
        <div class="col-2" style="width: 200px;">
          <img src="${element.img}" class="img-fluid" alt="car">
        </div>
        <div class="col-9">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
          </div>
        </div>
      </div>
    </div>
    `;
  });

  renderPageNumber();
}

document.getElementById("btnBusCompanies").addEventListener("click", function () {
  currentPage = 1;
  renderBusCompanies();
});

document.getElementById("btnRouto").addEventListener("click", function () {
  document.getElementById("btnBusCompanies").classList.remove("active");
  document.getElementById("btnBusStation").classList.remove("active");
  document.getElementById("trademarkBase").textContent = "Tuyến đường";
  document.getElementById("btnBusStation").classList.remove("active");
  document.getElementById("btnRouto").classList.add("active");
  currentPage = 1;
  renderBusStationsOrRouto(route);
});

document.getElementById("btnBusStation").addEventListener("click", function () {
  document.getElementById("btnRouto").classList.remove("active");
  document.getElementById("btnBusCompanies").classList.remove("active");
  document.getElementById("trademarkBase").textContent = "Bến xe";
  document.getElementById("btnRouto").classList.remove("active");
  document.getElementById("btnBusStation").classList.add("active");
  currentPage = 1;
  renderBusStationsOrRouto(busStations);
});

// Thêm nhà xe
function addBusCopanie() {
  let title = document.getElementById("title").value.trim();
  let type = document.getElementById("busType").value;
  let address = document.getElementById("address").value.trim();
  let departure = document.getElementById("departure").value.trim();
  let destination = document.getElementById("destination").value.trim();
  let img = "/UH/assets/img/logo.png"; // ảnh mặc định

  let newBusCompanie = {
    id: busCompanies.length ? busCompanies[busCompanies.length - 1].id + 1 : 1,
    name: title,
    type: type,
    departure: departure,
    destination: destination,
    address: address,
    img: img,
  };

  busCompanies.push(newBusCompanie);
  localStorage.setItem("busCompanies", JSON.stringify(busCompanies));
  renderBusCompanies();

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("busType").value = "Thông tin Taxi";
  document.getElementById("address").value = "";
  document.getElementById("departure").value = "";
  document.getElementById("destination").value = "";
}

// Thêm bến xe
function addBusStations() {
  let modal = bootstrap.Modal.getInstance(document.getElementById("modalsBusOrRoute"));
  let title = document.getElementById("title").value.trim();
  let description = document.getElementById("description").value.trim();
  let img = "/assets/img/logo.png";

  let newStation = {
    id: busStations.length ? busStations[busStations.length - 1].id + 1 : 1,
    title: title,
    description: description,
    img: img,
  };

  busStations.push(newStation);
  localStorage.setItem("busStations", JSON.stringify(busStations));
  renderBusStationsOrRouto(busStations);
  modal.hide();
  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}

// Thêm tuyến đường
function addRouto() {
  let modal = bootstrap.Modal.getInstance(document.getElementById("modalsBusOrRoute"));
  let title = document.getElementById("title").value.trim();
  let description = document.getElementById("description").value.trim();
  let img = "/assets/img/logo.png";

  let newRoute = {
    id: route.length ? route[route.length - 1].id + 1 : 1,
    title: title,
    description: description,
    img: img,
  };

  route.push(newRoute);
  localStorage.setItem("route", JSON.stringify(route));
  renderBusStationsOrRouto(route);
  modal.hide();
  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}

// Sửa nhà xe
function editBusCompanie(id) {
  let company = busCompanies.find((item) => item.id === id);
  if (!company) return;

  // Populate inputs
  document.getElementById("title").value = company.name;
  document.getElementById("busType").value = company.type;
  document.getElementById("address").value = company.address;
  document.getElementById("departure").value = company.departure;
  document.getElementById("destination").value = company.destination;

  let btn = document.getElementById("busCompanies");
  btn.textContent = "Cập nhật";
  btn.setAttribute("onclick", `confirmEditBusCompanies(${id})`);

  document.getElementById("modalHeader").textContent = "Chỉnh sửa nhà xe";
}

// Xác nhận chỉnh sửa nhà xe
function confirmEditBusCompanies(id) {
  const modal = bootstrap.Modal.getInstance(document.getElementById("modalsBusCompanie"));

  const company = busCompanies.find((item) => item.id === id);
  if (!company) return;

  company.name = document.getElementById("title").value.trim();
  company.type = document.getElementById("busType").value.trim();
  company.address = document.getElementById("address").value.trim();
  company.departure = document.getElementById("departure").value.trim();
  company.destination = document.getElementById("destination").value.trim();

  localStorage.setItem("busCompanies", JSON.stringify(busCompanies));

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("busType").value = "";
  document.getElementById("address").value = "";
  document.getElementById("departure").value = "";
  document.getElementById("destination").value = "";

  let btn = document.getElementById("busCompanies");
  btn.textContent = "Thêm";
  btn.setAttribute("onclick", "addBusCopanie()");

  modal.hide();
  renderBusCompanies();
}

// Sửa tuyến đường
function editRoute(id) {
  const item = route.find((r) => r.id === id);
  if (!item) return;

  document.getElementById("title").value = item.title;
  document.getElementById("description").value = item.description;

  document.getElementById("modalHeader").textContent = "Chỉnh sửa tuyến đường";
  const btn = document.getElementById("modalAddBtn");
  btn.textContent = "Cập nhật";
  btn.setAttribute("onclick", `confirmEditRoute(${id})`);
}

// Xác nhận chỉnh sửa tuyến đường
function confirmEditRoute(id) {
  const modal = bootstrap.Modal.getInstance(document.getElementById("modalsBusOrRoute"));

  const item = route.find((r) => r.id === id);
  if (!item) return;

  item.title = document.getElementById("title").value.trim();
  item.description = document.getElementById("description").value.trim();

  localStorage.setItem("route", JSON.stringify(route));

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";

  const btn = document.getElementById("modalAddBtn");
  btn.textContent = "Thêm";
  btn.setAttribute("onclick", "addRouto()");

  modal.hide();
  renderBusStationsOrRouto(route);
}

// Sửa bến xe
function editBusStation(id) {
  const item = busStations.find((s) => s.id === id);
  if (!item) return;

  document.getElementById("title").value = item.title;
  document.getElementById("description").value = item.description;

  document.getElementById("modalHeader").textContent = "Chỉnh sửa bến xe";
  const btn = document.getElementById("modalAddBtn");
  btn.textContent = "Cập nhật";
  btn.setAttribute("onclick", `confirmEditBusStation(${id})`);
}

// Xác nhận chỉnh sửa bến xe
function confirmEditBusStation(id) {
  const modal = bootstrap.Modal.getInstance(document.getElementById("modalsBusOrRoute"));

  const item = busStations.find((s) => s.id === id);
  if (!item) return;

  item.title = document.getElementById("title").value.trim();
  item.description = document.getElementById("description").value.trim();

  localStorage.setItem("busStations", JSON.stringify(busStations));

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";

  const btn = document.getElementById("modalAddBtn");
  btn.textContent = "Thêm";
  btn.setAttribute("onclick", "addBusStations()");

  modal.hide();
  renderBusStationsOrRouto(busStations);
}

// Xoá nhà xe
function deleteBusCompany(id) {
  currentDeleteId = id;
  currentDeleteType = "busCompany";
}

// Xoá tuyến đường
function deleteRoute(id) {
  currentDeleteId = id;
  currentDeleteType = "route";
}

// Xoá weathered xe
function deleteBusStation(id) {
  currentDeleteId = id;
  currentDeleteType = "busStation";
}

// Xác nhận xoá
let currentDeleteId = null;
let currentDeleteType = null;
document.getElementById("confirm-delete").addEventListener("click", function () {
  if (currentDeleteId !== null && currentDeleteType !== null) {
    if (currentDeleteType === "busCompany") {
      busCompanies = busCompanies.filter((item) => item.id !== currentDeleteId);
      localStorage.setItem("busCompanies", JSON.stringify(busCompanies));
      renderBusCompanies();
    } else if (currentDeleteType === "route") {
      route = route.filter((item) => item.id !== currentDeleteId);
      localStorage.setItem("route", JSON.stringify(route));
      renderBusStationsOrRouto(route);
    } else if (currentDeleteType === "busStation") {
      busStations = busStations.filter((item) => item.id !== currentDeleteId);
      localStorage.setItem("busStations", JSON.stringify(busStations));
      renderBusStationsOrRouto(busStations);
    }
    currentDeleteId = null;
    currentDeleteType = null;
  }
});

// Sự kiện khi click các nút thêm để đổi header và chức năng
document.getElementById("addBusCopanie").addEventListener("click", function () {
  // Reset inputs
  document.getElementById("title").value = "";
  document.getElementById("busType").value = "Thông tin Taxi";
  document.getElementById("address").value = "";
  document.getElementById("departure").value = "";
  document.getElementById("destination").value = "";

  document.getElementById("modalHeader").textContent = "Thêm nhà xe";
  const btn = document.getElementById("busCompanies");
  btn.textContent = "Thêm";
  btn.setAttribute("onclick", "addBusCopanie()");
});

document.getElementById("addRouto").addEventListener("click", function () {
  // Reset inputs
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";

  document.getElementById("modalHeader").textContent = "Thêm tuyến đường";
  const btn = document.getElementById("modalAddBtn");
  btn.textContent = "Thêm";
  btn.setAttribute("onclick", "addRouto()");
});

document.getElementById("addBusStations").addEventListener("click", function () {
  // Reset inputs
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";

  document.getElementById("modalHeader").textContent = "Thêm bến xe";
  const btn = document.getElementById("modalAddBtn");
  btn.textContent = "Thêm";
  btn.setAttribute("onclick", "addBusStations()");
});

renderPageNumber();
renderBusCompanies();

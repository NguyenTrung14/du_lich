// gắn sự kiện cho ô tìm kiếm
document.getElementById("search").addEventListener("input", function () {
  currentPage = 1;
  renderTicketManager();
  renderPageNumber();
});
// hàm hiển thị danh sách
function renderTicketManager() {
  let ticketList = JSON.parse(localStorage.getItem("ticketList")) || [];
  //   tìm kiếm
  let inputSearch = document
    .getElementById("search")
    .value.toLowerCase()
    .trim();
  let search = ticketList;
  if (inputSearch) {
    search = search.filter((el) =>
      el.fullName.toLowerCase().includes(inputSearch)
    );
  }
  let tbody = document.getElementById("body");
  tbody.innerHTML = "";
  let start = (currentPage - 1) * perPage;
  let end = start + perPage;
  let user = search.slice(start, end);
  user.forEach((element) => {
    let row = document.createElement("tr");
    row.innerHTML += `<td>${element.id}</td>
              <td>${element.fullName}</td>
              <td>${element.telephone}</td>
              <td>${element.departure} => ${element.destination}</td>
              <td>${element.date} - ${element.time}</td>
              <td>${element.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}</td>
              <td><i data-bs-toggle="modal" data-bs-target="#editTicketModal" class="fa-regular fa-pen-to-square" onclick="prepareEidt(${
                element.id
              })"></i></td>
              <td><i data-bs-toggle="modal" data-bs-target="#deleteTicketModal" class="fa-solid fa-trash" onclick="prepareDelete(${
                element.id
              })"></i></td>`;

    tbody.appendChild(row);
  });
}
// hàm thêm
function addTicketManager() {
  let modal = bootstrap.Modal.getInstance(
    document.getElementById("addTicketModal")
  );
  let ticketList = JSON.parse(localStorage.getItem("ticketList")) || [];
  let fullName = document.getElementById("nameInput").value.trim();
  let telephone = document.getElementById("telephone").value.trim();
  let departure = document.getElementById("departure").value.trim();
  let destination = document.getElementById("destination").value.trim();
  let date = document.getElementById("date").value.trim();
  let time = document.getElementById("time").value.trim();
  let pay = document.getElementById("pay").checked;
  let checkName = /^[A-Za-zÀ-ỹ\s]{2,50}$/;
  let checkTelephone = /^0\d{9}$/;

  if (!fullName) {
    document.getElementById("errorName").textContent =
      "Tên Không được để trống";
    return;
  }
  if (!checkName.test(fullName)) {
    document.getElementById("errorName").textContent = "tên không hợp lệ";
    return;
  }
  if (!telephone) {
    document.getElementById("errorTele").textContent =
      "Số điện thoại Không được để trống";
    return;
  }
  // let CheckDuplicatePhone = ticketList.some((item) => item.telephone === telephone);
  // if (CheckDuplicatePhone) {
  //   document.getElementById("errorTele").textContent = "Số điện thoại đã tồn tại";
  //   return;
  // }
  if (!checkTelephone.test(telephone)) {
    document.getElementById("errorTele").textContent =
      "số điện thoại không hợp lệ";
    return;
  }
  if (departure === "Điểm đón") {
    document.getElementById("errorDeparture").textContent =
      "Vui lòng chọn điểm đón";
    return;
  }
  if (destination === "Điểm đến") {
    document.getElementById("errorDestination").textContent =
      "Vui lòng chọn điểm đến";
    return;
  }
  if (!date) {
    document.getElementById("errorDate").textContent = "Vui lòng chọn ngày";
    return;
  }
  if (!time) {
    document.getElementById("errorTime").textContent =
      "Vui lòng chọn thời gian";
    return;
  }
  ticketList.push({
    id: ticketList.length > 1 ? ticketList[ticketList.length - 1].id + 1 : 1,
    fullName: fullName,
    telephone: telephone,
    departure: departure,
    destination: destination,
    date: date,
    time: time,
    isPaid: pay,
  });
  localStorage.setItem("ticketList", JSON.stringify(ticketList));
  renderTicketManager();
  renderPageNumber();
  modal.hide();
  document.getElementById("form-modal-add").reset();
}
// hàm lấy vị trí sửa
let currentIdEdit = -1;
function prepareEidt(id) {
  let ticketList = JSON.parse(localStorage.getItem("ticketList")) || [];
  currentIdEdit = id;
  let checkId = ticketList.find((item) => item.id === currentIdEdit);
  if (checkId) {
    document.getElementById("nameInputEdit").value = checkId.fullName;
    document.getElementById("telephoneEdit").value = checkId.telephone;
    document.getElementById("departureEdit").value = checkId.departure;
    document.getElementById("destinationEdit").value = checkId.destination;
    document.getElementById("dateEdit").value = checkId.date;
    document.getElementById("timeEdit").value = checkId.time;
    document.getElementById("payEdit").checked = checkId.isPaid;
  }
}
// hàm sửa
function editTicketManager() {
  let modal = bootstrap.Modal.getInstance(
    document.getElementById("editTicketModal")
  );
  let ticketList = JSON.parse(localStorage.getItem("ticketList")) || [];
  let fullName = document.getElementById("nameInputEdit").value.trim();
  let telephone = document.getElementById("telephoneEdit").value.trim();
  let departure = document.getElementById("departureEdit").value.trim();
  let destination = document.getElementById("destinationEdit").value.trim();
  let date = document.getElementById("dateEdit").value.trim();
  let time = document.getElementById("timeEdit").value.trim();
  let pay = document.getElementById("payEdit").checked;
  let checkName = /^[A-Za-zÀ-Ỹà-ỹ\s']+$/;
  let checkTelephone = /^0\d{9}$/;
  if (!fullName) {
    document.getElementById("errorNameEdit").textContent =
      "Tên Không được để trống";
    return;
  }
  if (!checkName.test(fullName)) {
    document.getElementById("errorNameEdit").textContent = "tên không hợp lệ";
    return;
  }
  if (!telephone) {
    document.getElementById("errorTeleEdit").textContent =
      "Số điện thoại Không được để trống";
    return;
  }
  if (!checkTelephone.test(telephone)) {
    document.getElementById("errorTeleEdit").textContent =
      "số điện thoại không hợp lệ";
    return;
  }
  if (departure === "Điểm đón") {
    document.getElementById("errorDepartureEdit").textContent =
      "Vui lòng chọn điểm đón";
    return;
  }
  if (destination === "Điểm đến") {
    document.getElementById("errorDestinationEdit").textContent =
      "Vui lòng chọn điểm đến";
    return;
  }
  if (!date) {
    document.getElementById("errorDateEdit").textContent = "Vui lòng chọn ngày";
    return;
  }
  if (!time) {
    document.getElementById("errorTimeEdit").textContent =
      "Vui lòng chọn thời gian";
    return;
  }
  // Tìm và cập nhật vé
  let itemIndex = ticketList.findIndex((item) => item.id === currentIdEdit);
  if (itemIndex !== -1) {
    ticketList[itemIndex] = {
      id: currentIdEdit,
      fullName: fullName,
      telephone: telephone,
      departure: departure,
      destination: destination,
      date: date,
      time: time,
      isPaid: pay,
    };
    localStorage.setItem("ticketList", JSON.stringify(ticketList));
    renderTicketManager();
    renderPageNumber();
    document.getElementById("form-modal-edit").reset();
    modal.hide();
  }
}
// hàm lấy id để xoá
let currentIdDelete = -1;
function prepareDelete(id) {
  currentIdDelete = id;
}
// hàm xoá
function deleteTicketManager() {
  let modal = bootstrap.Modal.getInstance(
    document.getElementById("deleteTicketModal")
  );
  let ticketList = JSON.parse(localStorage.getItem("ticketList")) || [];
  let itemIndex = ticketList.findIndex((item) => item.id === currentIdDelete);
  if (itemIndex !== -1) {
    ticketList.splice(itemIndex, 1);
    localStorage.setItem("ticketList", JSON.stringify(ticketList));
    renderTicketManager();
    renderPageNumber();
    modal.hide();
  }
}
let currentPage = 1;
let perPage = 5;
// hàm phân trang
function renderPageNumber() {
  let ticketList = JSON.parse(localStorage.getItem("ticketList")) || [];
  let totalPage = Math.ceil(ticketList.length / perPage);
  document.getElementById("currentPage").textContent = currentPage;
  document.getElementById("totalPage").textContent = totalPage;
}
function prePage() {
  if (currentPage > 1) {
    currentPage--;
    renderTicketManager();
    renderPageNumber();
  }
}
function nextPage() {
  let ticketList = JSON.parse(localStorage.getItem("ticketList")) || [];
  let totalPage = Math.ceil(ticketList.length / perPage);
  if (currentPage < totalPage) {
    currentPage++;
    renderTicketManager();
    renderPageNumber();
  }
}
renderTicketManager();
renderPageNumber();

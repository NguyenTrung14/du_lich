let tickets_set = JSON.parse(localStorage.getItem("tickets_set")) || [];
let copyTickets = [...tickets_set];

function toggleDetails(element) {
  let details = element.parentElement.nextElementSibling;
  details.classList.toggle("active");
}

function showTab(infor) {
  let inforImgs = document.querySelectorAll("#infor-img");
  let inforTables = document.querySelectorAll("#infor-table");

  for (let i = 0; i < inforImgs.length; i++) {
    if (infor === "infor-img") {
      inforImgs[i].classList.add("active");
      inforTables[i].classList.remove("active");
    } else {
      inforImgs[i].classList.remove("active");
      inforTables[i].classList.add("active");
    }
  }
}

function renderTickets(data = tickets_set) {
  let container = document.getElementById("ticket-card");
  container.innerHTML = ""; // Xóa dữ liệu cũ\
  defaultLogo =
    "https://vivutoday.com/wp-content/uploads/assets/images/logo-icon-f2.png";

  data.forEach((ticket) => {
    let card = document.createElement("div");
    card.innerHTML = `
         <div class="ticket-card mb-3" >
                          <div class="ticket-image" style="width: 120px; height: 120px">
                                <img src="${
                                  ticket.logo === undefined
                                    ? defaultLogo
                                    : ticket.logo
                                } "
                                    alt="${
                                      ticket.company
                                    }" class="img-fluid h-100 rounded-3" >
                          </div>
                            <div class="ticket-details">
                                <div class="ticket-header">
                                    <h2 class="ticket-name">${
                                      ticket.company
                                    }</h2>
                                    <span class="rating-badge"><i class="fa-solid fa-star me-2 ms-1"></i>${
                                      ticket.rating
                                    }</span>
                                    <small class="text-muted"><b class="mx-2">·</b> ${
                                      ticket.reviewCount
                                    } Đánh giá</small>
                                </div>
                                <div class="ticket-type">${
                                  ticket.vehicleType
                                }</div>
                                <div class="journey-info">
                                    <div class="time">${
                                      ticket.departureTime
                                    }</div>
                                    <div class="duration">
                                        <span class="duration-time">${
                                          ticket.duration
                                        }'</span>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                    <div class="time">${
                                      ticket.arrivalTime
                                    }</div>
                                </div>
                                <div class="stations">
                                    <div class="station">${ticket.from}</div>
                                    <div class="divider">-</div>
                                    <div class="station">${ticket.to}</div>
                                </div>
                                <div class="information">
                                    <div class="note">*Thuộc chuyến ${
                                      ticket.departureTime
                                    } ${ticket.date} ${ticket.route}</div>
                                    <a class="info-link" onclick="toggleDetails(this)">Thông tin chi tiết</a>
                                </div>

                                <div class="ticket-details-expanded">
                                    <div class="tabs">
                                        <div class="tab" id="infor-img" onclick="showTab('infor-img')">Hình ảnh</div>
                                        <div class="tab active" id="infor-table" onclick="showTab('infor-table')">Phí
                                            hủy</div>
                                    </div>
                                     <div class="image-section" id="infor-img">
                                        <div id="img-${
                                          ticket.id
                                        }" class="carousel slide">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#img-${
                                                  ticket.id
                                                }"
                                                    data-bs-slide-to="0" class="active" aria-current="true"
                                                    aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#img-${
                                                  ticket.id
                                                }"
                                                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#img-${
                                                  ticket.id
                                                }"
                                                    data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active" ">
                                                    <img src="${
                                                      ticket.images[0].src ||
                                                      defaultLogo
                                                    }"
                                                        class="d-block w-100" alt="...">
                                                </div>
                                                <div class="carousel-item"> 
                                                    <img src="${
                                                      ticket.images[1].src ||
                                                      defaultLogo
                                                    }"
                                                        class="d-block w-100" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="${
                                                      ticket.images[2].src ||
                                                      defaultLogo
                                                    }"
                                                        class="d-block w-100" alt="...">
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button"
                                                data-bs-target="#img-${
                                                  ticket.id
                                                }" data-bs-slide="prev">
                                            </button>
                                            <button class="carousel-control-next" type="button"
                                                data-bs-target="#img-${
                                                  ticket.id
                                                }" data-bs-slide="next">
                                            </button>
                                        </div>
                                    </div>

                                    <div class="cancel-policy active" id="infor-table">
                                        <table class="policy-table">
                                            <tr>
                                                <th>Hủy từ</th>
                                                <th>Đến trước</th>
                                                <th>Phí hủy</th>
                                            </tr>
                                            <tr>
                                                <td>Sau khi đặt</td>
                                                <td>06:45<br>25/11/2024</td>
                                                <td>0%<br>giá trị đơn hàng</td>
                                            </tr>
                                            <tr>
                                                <td>06:45<br>25/11/2024</td>
                                                <td>Giờ khởi hành</td>
                                                <td>100%<br>giá trị đơn hàng</td>
                                            </tr>
                                        </table>
                                        <div class="policy-note">
                                            <div style="font-weight: bold; margin-bottom: 6px;">Ghi chú:</div>
                                            Phí hủy sẽ được tính trên giá gốc, không giảm trừ khuyến mãi hoặc giảm giá;
                                            đồng thời không vượt quá số tiền quý khách đã thanh toán.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="price-section">
                                <div class="fw-bold text-primary" style="font-size: 20px;">${
                                  ticket.price
                                } đ</div>
                                <div class="seats-available">${
                                  ticket.availableSeats
                                } Còn trống</div>
                                <button class="btn btn-warning mt-4"><img src="/assets/icons/bus.png" alt="bus"
                                        class="me-2">Chọn xe</button>
                            </div>
      `;

    container.appendChild(card);
  });
}

function sortTime(data = copyTickets) {
  let time = document.getElementById("timeLabel").value;
  let sortData = [];

  document.getElementById("priceLabel").value = "price";

  if (time === "earliest") {
    //thời gian khởi hành thấp đến cao
    sortData = data.sort((a, b) => {
      let timeA = parseInt(a.departureTime.replace(":", ""));
      let timeB = parseInt(b.departureTime.replace(":", ""));
      return timeA - timeB;
    });
  } else {
    //thời gian khởi hành cao đến thấp
    sortData = data.sort((a, b) => {
      let timeA = parseInt(a.departureTime.replace(":", ""));
      let timeB = parseInt(b.departureTime.replace(":", ""));
      return timeB - timeA;
    });
  }

  renderTickets(sortData);
}

function sortPrice(data = copyTickets) {
  let price = document.getElementById("priceLabel").value;
  let sortData = [];

  document.getElementById("timeLabel").value = "hour";

  if (price === "low") {
    //giá tiền thấp đến cao
    sortData = data.sort((a, b) => {
      let timeA = parseInt(a.price);
      let timeB = parseInt(b.price);
      return timeA - timeB;
    });
  } else {
    //giá tiền cao đến thấp
    sortData = data.sort((a, b) => {
      let timeA = parseInt(a.price);
      let timeB = parseInt(b.price);
      return timeB - timeA;
    });
  }

  renderTickets(sortData);
}

let ticketFilters = {
  time: null,
  price: null,
  discount: null,
  vip: null,
  companyList: [],
};

function updateTimeLabel(slider) {
  let timeLabel = document.querySelector(".slider-labels span:first-child");
  let hours = parseInt(slider.value).toString().padStart(2, "0");
  timeLabel.textContent = `${hours}:00`;

  ticketFilters.time = `${hours}:00` || null;

  applyCombinedFilters();
}

function updatePriceLabel(slider) {
  let priceLabel = document.querySelector(".slider-label span:first-child");
  let price = parseInt(slider.value).toLocaleString("vi-VN");
  priceLabel.textContent = price;

  ticketFilters.price = price || null;

  applyCombinedFilters();
}

function updatePopularCriteria() {
  let discountChecked = document.getElementById("discount").checked;
  let vipChecked = document.getElementById("vip").checked;

  ticketFilters.discount = discountChecked ? true : null;
  ticketFilters.vip = vipChecked ? true : null;

  applyCombinedFilters(); // áp dụng các tiêu chí lọc
}

function garageFilter() {
  const checkboxes = document.querySelectorAll(".garageFilter");
  const selectedCompanies = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedCompanies.push(checkbox.value);
    }
  });

  console.log(selectedCompanies);

  ticketFilters.companyList = selectedCompanies;
  applyCombinedFilters();
}

function applyCombinedFilters() {
  let filtered = tickets_set.filter((ticket) => {
    let isTimeMatch = true;
    let isPriceMatch = true;
    let isDiscountMatch = true;
    let isVip = true;
    let isCompanyMatch = true;

    if (ticketFilters.time) {
      isTimeMatch = ticket.departureTime >= ticketFilters.time;
    }

    if (ticketFilters.price) {
      isPriceMatch = parseInt(ticket.price) >= ticketFilters.price;
    }

    if (ticketFilters.discount) {
      isDiscountMatch = ticket.isDiscount === ticketFilters.discount;
    }

    if (ticketFilters.vip) {
      isVip = ticket.vehicleType.toLowerCase().includes("limousine");
    }

    if (ticketFilters.companyList.length > 0) {
      isCompanyMatch = ticketFilters.companyList.includes(ticket.company);
    }

    return (
      isTimeMatch && isPriceMatch && isDiscountMatch && isVip && isCompanyMatch
    );
  });

  renderTickets(filtered);
}

function deleteFilter() {
  let rangeTime = document.querySelectorAll(".form-range")[0];
  rangeTime.value = 0;
  updateTimeLabel(rangeTime);

  let rangePrice = document.querySelectorAll(".form-range")[1];
  rangePrice.value = 0;
  updatePriceLabel(rangePrice);

  document.getElementById("discount").checked = false;
  document.getElementById("vip").checked = false;

  updatePopularCriteria();
}

function rendergarageFilter() {
  let garageFilter = document.getElementById("garageFilter");
  garageFilter.textContent = "";

  copyTickets.forEach(
    (el) =>
      (garageFilter.innerHTML += ` <div class="form-check">
                                <input class="form-check-input garageFilter" value = '${el.company}' type="checkbox" id="${el.id}" onchange="garageFilter()">
                                <label class="form-check-label" for="${el.id}">${el.company}</label>
                            </div>`)
  );
}

rendergarageFilter();
renderTickets();

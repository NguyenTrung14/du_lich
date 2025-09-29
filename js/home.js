// Dữ liệu tuyến đường
let routes = [
  {
    id: 1,
    image: "../assets/img/tuyen-sai-gon-vung-tau.webp.jpg",
    name: "Sài Gòn – Vũng Tàu",
    price: "150.000đ",
    className: "link"
  },
  {
    id: 2,
    image: "../assets/img/tuyen-sai-gon-mui-ne.webp.jpg",
    name: "Sài Gòn - Mũi Né",
    price: "180.000đ",
    className: "link-2"
  },
  {
    id: 3,
    image: "../assets/img/tuyen-sai-gon-nha-trang.webp.jpg",
    name: "Sài Gòn – Nha Trang",
    price: "240.000đ",
    className: "link-3"
  },
  {
    id: 4,
    image: "../assets/img/tuyen-nha-trang-da-lat.webp.jpg",
    name: "Nha Trang – Đà Lạt",
    price: "200.000đ",
    className: "link-4"
  },
  {
    id: 5,
    image: "../assets/img/tuyen-sai-gon-vung-tau.webp.jpg",
    name: "Bình Dương – Cần Thơ",
    price: "220.000đ",
    className: "link-51"
  },
  {
    id: 6,
    image: "../assets/img/tuyen-sai-gon-mui-ne.webp.jpg",
    name: "Sài gòn – Bình Thuận",
    price: "190.000đ",
    className: "link-61"
  },
  {
    id: 7,
    image: "../assets/img/tuyen-sai-gon-nha-trang.webp.jpg",
    name: "Đà Nẵng – Quy Nhơn",
    price: "230.000đ",
    className: "link-71"
  },
  {
    id: 8,
    image: "../assets/img/tuyen-nha-trang-da-lat.webp.jpg",
    name: "Sài Gòn - Bình Định",
    price: "250.000đ",
    className: "link-81"
  }
];

// Dữ liệu nhà xe
let nhaxes = [
  {
    id: 1,
    image: "../assets/img/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
    name: "Nhà xe An Hòa Hiệp",
    className: "link-5",
    imageClass: "nha-xe-an-hoa-hiep",
    hasFrame: true
  },
  {
    id: 2,
    image: "../assets/img/Container\\ \\(1\\).png",
    name: "Nhà xe Futa Hà Sơn",
    className: "link-7",
    wrapperClass: "nha-xe-futa-ha-son-wrapper",
    imageClass: "nha-xe-futa-ha-son",
    hasWrapper: true
  },
  {
    id: 3,
    image: "../assets/img/nha-xe-vu-linh-limousine-chat-luong.png.png",
    name: "Nhà xe Vũ Linh",
    className: "link-9",
    imageClass: "nha-xe-vu-linh"
  },
  {
    id: 4,
    name: "Nhà xe Toàn Thắng",
    className: "link-11",
    imageClass: "nha-xe-toan-thang"
  },
  {
    id: 5,
    image: "../assets/img/nha-xe-tai-phat.jpg",
    name: "Nhà xe Tài Phát",
    className: "link-52",
    imageClass: "nha-xe-an-hoa-hiep",
    hasFrame: true
  },
  {
    id: 6,
    image: "../assets/img/Container\\ \\(1\\).png",
    name: "Nhà xe Future Express",
    className: "link-72",
    wrapperClass: "nha-xe-futa-ha-son-wrapper",
    imageClass: "nha-xe-futa-ha-son",
    hasWrapper: true
  },
  {
    id: 7,
    image: "../assets/img/nha-xe-vu-linh-limousine-chat-luong.png.png",
    name: "Nhà xe Minh Trung",
    className: "link-92",
    imageClass: "nha-xe-vu-linh"
  },
  {
    id: 8,
    name: "Nhà xe Thành Công",
    className: "link-112",
    imageClass: "nha-xe-toan-thang"
  }
];

// Dữ liệu bến xe phổ biến
let stations = [
  {
    id: 1,
    image: "../assets/img/BX-1.jpg.png",
    name: "Bến xe Miền Đông Mới",
    className: "link-6",
    imageClass: "BX-jpg",
    hasFrame: true
  },
  {
    id: 2,
    image: "../assets/img/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
    name: "Bến xe Miền Tây",
    className: "link-8",
    imageClass: "be-CC-jpg"
  },
  {
    id: 3,
    name: "Bến xe Giáp Bát",
    className: "link-10",
    imageClass: "ben-giap-bat-jpg"
  },
  {
    id: 4,
    name: "Bến xe Mỹ Đình",
    className: "link-12",
    imageClass: "my-dinh-jpg"
  }
];

// Lưu dữ liệu tuyến đường vào localStorage
function saveRoutesToLocalStorage() {
  localStorage.setItem('popularRoutes', JSON.stringify(routes));
}

// Lấy dữ liệu tuyến đường từ localStorage
function getRoutesFromLocalStorage() {
  const routesData = localStorage.getItem('popularRoutes');
  return routesData ? JSON.parse(routesData) : routes;
}

// Lưu dữ liệu nhà xe vào localStorage
function saveNhaxesToLocalStorage() {
  localStorage.setItem('popularNhaxes', JSON.stringify(nhaxes));
}

// Lấy dữ liệu nhà xe từ localStorage
function getNhaxesFromLocalStorage() {
  const nhaxesData = localStorage.getItem('popularNhaxes');
  return nhaxesData ? JSON.parse(nhaxesData) : nhaxes;
}

// Lưu dữ liệu bến xe vào localStorage
function saveStationsToLocalStorage() {
  localStorage.setItem('popularStations', JSON.stringify(stations));
}

// Lấy dữ liệu bến xe từ localStorage
function getStationsFromLocalStorage() {
  const stationsData = localStorage.getItem('popularStations');
  return stationsData ? JSON.parse(stationsData) : stations;
}

// Lưu trạng thái trang hiện tại
let currentPage = 0;
const totalPages = 2; // Có 2 trang (8 liên kết chia thành 4 liên kết mỗi trang)
let isAnimating = false; // Biến theo dõi trạng thái đang có animation hay không

// Lưu trạng thái trang hiện tại cho container nhà xe
let currentNhaxePage = 0;
const totalNhaxePages = 2;
let isNhaxeAnimating = false;

// Hiển thị các tuyến đường từ dữ liệu localStorage
function renderRoutes() {
  const routesData = getRoutesFromLocalStorage();
  const routeContainer = document.querySelector('.route-container');
  
  // Xóa nội dung hiện tại của container
  if (routeContainer) {
    routeContainer.innerHTML = '';
    
    // Thêm các tuyến đường vào container
    routesData.forEach(route => {
      const routeElement = document.createElement('div');
      routeElement.className = `${route.className} route-item`;
      
      // Đặt CSS display dựa trên currentPage
      if ((currentPage === 0 && route.id <= 4) || (currentPage === 1 && route.id > 4)) {
        routeElement.style.display = 'block';
      } else {
        routeElement.style.display = 'none';
      }
      
      routeElement.innerHTML = `
        <img class="${route.id === 1 ? 'tuyen-sai-gon-vung' : 'img-2'}" src="${route.image}" />
        <div class="container-4">
          <${route.name.includes('-') ? 'div' : 'p'} class="text-wrapper-8">${route.name}</${route.name.includes('-') ? 'div' : 'p'}>
          <div class="text-wrapper-9">${route.price}</div>
        </div>
      `;
      
      routeContainer.appendChild(routeElement);
    });
  }
  
  // Cập nhật trạng thái các nút điều hướng
  updateNavigationButtons();
}

// Hàm hiển thị nhóm tuyến đường kế tiếp
function showNextRoutes() {
  if (currentPage < totalPages - 1 && !isAnimating) {
    animateSlideChange(1);
  }
}

// Hàm hiển thị nhóm tuyến đường trước đó
function showPreviousRoutes() {
  if (currentPage > 0 && !isAnimating) {
    animateSlideChange(-1);
  }
}

// Hiển thị các nhà xe từ dữ liệu localStorage
function renderNhaxes() {
  const nhaxesData = getNhaxesFromLocalStorage();
  const nhaxeContainer = document.querySelector('.nhaxe-container');
  
  // Xóa nội dung hiện tại của container
  if (nhaxeContainer) {
    nhaxeContainer.innerHTML = '';
    
    // Thêm các nhà xe vào container
    nhaxesData.forEach(nhaxe => {
      const nhaxeElement = document.createElement('div');
      nhaxeElement.className = `${nhaxe.className} nhaxe-item`;
      
      // Đặt CSS display dựa trên currentNhaxePage
      if ((currentNhaxePage === 0 && nhaxe.id <= 4) || (currentNhaxePage === 1 && nhaxe.id > 4)) {
        nhaxeElement.style.display = 'block';
      } else {
        nhaxeElement.style.display = 'none';
      }
      
      // Xây dựng nội dung HTML cho nhà xe tùy thuộc vào cấu trúc của nhà xe
      let nhaxeHTML = '';
      
      if (nhaxe.hasWrapper) {
        // Nhà xe có wrapper bổ sung
        nhaxeHTML = `
          <div class="${nhaxe.wrapperClass}">
            <div class="${nhaxe.imageClass}" src="${nhaxe.image}"></div>
          </div>
          <div class="heading">
            <p class="text-wrapper-10">${nhaxe.name}</p>
          </div>
        `;
      } else if (nhaxe.hasFrame) {
        // Nhà xe có frame-8
        nhaxeHTML = `
          <img class="${nhaxe.imageClass}" src="${nhaxe.image}" />
          <div class="frame-8">
            <p class="p">${nhaxe.name}</p>
          </div>
        `;
      } else {
        // Nhà xe cấu trúc thông thường
        nhaxeHTML = `
          <div class="${nhaxe.imageClass}"${nhaxe.image ? ` src="${nhaxe.image}"` : ''}></div>
          <div class="heading">
            <div class="text-wrapper-10">${nhaxe.name}</div>
          </div>
        `;
      }
      
      nhaxeElement.innerHTML = nhaxeHTML;
      nhaxeContainer.appendChild(nhaxeElement);
    });
  }
  
  // Cập nhật trạng thái các nút điều hướng
  updateNhaxeNavigationButtons();
}

// Hiển thị các bến xe từ dữ liệu localStorage
function renderStations() {
  const stationsData = getStationsFromLocalStorage();
  const stationContainer = document.querySelector('.station-container');
  
  // Xóa nội dung hiện tại của container nếu có
  if (stationContainer) {
    stationContainer.innerHTML = '';
    
    // Thêm các bến xe vào container
    stationsData.forEach(station => {
      const stationElement = document.createElement('div');
      stationElement.className = station.className;
      
      // Xây dựng nội dung HTML cho bến xe tùy thuộc vào cấu trúc
      let stationHTML = '';
      
      if (station.hasFrame) {
        // Bến xe có frame-8
        stationHTML = `
          <div class="${station.imageClass}" src="${station.image}"></div>
          <div class="frame-8">
            <p class="p">${station.name}</p>
          </div>
        `;
      } else {
        // Bến xe cấu trúc thông thường
        stationHTML = `
          <div class="${station.imageClass}"${station.image ? ` src="${station.image}"` : ''}></div>
          <div class="heading">
            <div class="text-wrapper-10">${station.name}</div>
          </div>
        `;
      }
      
      stationElement.innerHTML = stationHTML;
      stationContainer.appendChild(stationElement);
    });
  }
}

// Hàm hiển thị nhóm nhà xe kế tiếp
function showNextNhaxes() {
  if (currentNhaxePage < totalNhaxePages - 1 && !isNhaxeAnimating) {
    animateNhaxeSlideChange(1);
  }
}

// Hàm hiển thị nhóm nhà xe trước đó
function showPreviousNhaxes() {
  if (currentNhaxePage > 0 && !isNhaxeAnimating) {
    animateNhaxeSlideChange(-1);
  }
}

// Hiệu ứng chuyển trang trượt ngang
function animateSlideChange(direction) {
  // Nếu đang có animation thì không thực hiện nữa
  if (isAnimating) return;
  isAnimating = true;

  // Xác định trang kế tiếp dựa vào hướng
  const nextPage = currentPage + direction;
  
  // Lấy dữ liệu tuyến đường từ localStorage
  const routesData = getRoutesFromLocalStorage();

  // Lấy các phần tử thuộc trang hiện tại (routes 1-4 hoặc 5-8)
  const currentElements = document.querySelectorAll(
    `.route-container .route-item:nth-child(n+${currentPage * 4 + 1}):nth-child(-n+${(currentPage + 1) * 4})`
  );

  // Lấy các phần tử thuộc trang kế tiếp
  const nextElements = document.querySelectorAll(
    `.route-container .route-item:nth-child(n+${nextPage * 4 + 1}):nth-child(-n+${(nextPage + 1) * 4})`
  );

  // Cập nhật trang hiện tại để tránh nhấn liên tục
  currentPage = nextPage;
  updateNavigationButtons();

  // Xác định lớp hiệu ứng trượt ra dựa theo hướng
  const slideOutClass = direction > 0 ? "slide-out-left" : "slide-out-right";

  // Hiển thị sẵn các phần tử tiếp theo với trạng thái ẩn và trượt
  nextElements.forEach((el) => {
    el.style.display = "block";
    el.style.opacity = "0";
    el.style.transform = direction > 0 ? "translateX(100px)" : "translateX(-100px)";
  });

  // Thêm class hiệu ứng trượt ra cho phần tử hiện tại
  currentElements.forEach((el) => {
    el.classList.add(slideOutClass);
  });

  // Sau khi kết thúc hiệu ứng trượt ra
  setTimeout(() => {
    // Ẩn các phần tử cũ và xóa hiệu ứng
    currentElements.forEach((el) => {
      el.style.display = "none";
      el.classList.remove(slideOutClass);
      el.style.transform = ""; // Đặt lại transform để tránh lỗi CSS
      el.style.opacity = "";
    });

    // Thực hiện hiệu ứng trượt vào cho các phần tử mới
    nextElements.forEach((el) => {
      el.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      el.style.transform = "translateX(0)";
      el.style.opacity = "1";
    });

    // Sau khi hiệu ứng hoàn tất, xóa thuộc tính tạm thời
    setTimeout(() => {
      nextElements.forEach((el) => {
        el.style.transition = "";
      });
      isAnimating = false; // Cho phép animation lần tiếp theo
    }, 500);
  }, 500);
}

// Hiệu ứng lướt ngang khi chuyển trang nhà xe
function animateNhaxeSlideChange(direction) {
  // Ngăn việc kích hoạt hiệu ứng nếu đang trong quá trình chuyển đổi
  if (isNhaxeAnimating) return;
  isNhaxeAnimating = true;

  // Xác định trang tiếp theo
  const nextPage = currentNhaxePage + direction;
  
  // Lấy dữ liệu nhà xe từ localStorage
  const nhaxesData = getNhaxesFromLocalStorage();

  // Lấy các phần tử của trang hiện tại (nhà xe 1-4 hoặc 5-8)
  const currentElements = document.querySelectorAll(
    `.nhaxe-container .nhaxe-item:nth-child(n+${currentNhaxePage * 4 + 1}):nth-child(-n+${(currentNhaxePage + 1) * 4})`
  );

  // Lấy các phần tử của trang tiếp theo
  const nextElements = document.querySelectorAll(
    `.nhaxe-container .nhaxe-item:nth-child(n+${nextPage * 4 + 1}):nth-child(-n+${(nextPage + 1) * 4})`
  );

  // Cập nhật trang hiện tại ngay lập tức để tránh việc nhấn nhiều lần
  currentNhaxePage = nextPage;
  updateNhaxeNavigationButtons();

  // Xác định lớp hiệu ứng lướt ra dựa trên hướng
  const slideOutClass = direction > 0 ? "slide-out-left" : "slide-out-right";

  // Đặt vị trí ban đầu cho phần tử tiếp theo
  nextElements.forEach((el) => {
    el.style.display = "block";
    el.style.opacity = "0";
    el.style.transform = direction > 0 ? "translateX(100px)" : "translateX(-100px)";
  });

  // Thêm hiệu ứng lướt ra cho các phần tử hiện tại
  currentElements.forEach((el) => {
    el.classList.add(slideOutClass);
  });

  // Sau khi hiệu ứng lướt ra kết thúc, hiển thị các phần tử tiếp theo
  setTimeout(() => {
    // Ẩn các phần tử hiện tại và loại bỏ class hiệu ứng
    currentElements.forEach((el) => {
      el.style.display = "none";
      el.classList.remove(slideOutClass);
      // Đặt lại transform để tránh xung đột CSS
      el.style.transform = "";
      el.style.opacity = "";
    });

    // Lướt các phần tử mới vào
    nextElements.forEach((el) => {
      // Sử dụng CSS transition thay vì class để kiểm soát tốt hơn
      el.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      el.style.transform = "translateX(0)";
      el.style.opacity = "1";
    });

    // Sau khi hoàn thành hiệu ứng, xóa các thuộc tính chuyển tiếp tạm thời
    setTimeout(() => {
      nextElements.forEach((el) => {
        // Loại bỏ các thuộc tính inline sau khi hoàn tất để tránh xung đột CSS
        el.style.transition = "";
      });
      // Đánh dấu quá trình animation đã kết thúc
      isNhaxeAnimating = false;
    }, 500);
  }, 500);
}

// Cập nhật trạng thái của các nút điều hướng
function updateNavigationButtons() {
  const prevButton = document.querySelector(".arrow-circle-left");
  const nextButton = document.querySelector(".arrow-circle-right");

  if (prevButton) {
    prevButton.style.opacity = currentPage === 0 ? "0.5" : "1";
    prevButton.style.pointerEvents = currentPage === 0 ? "none" : "auto";
  }

  if (nextButton) {
    nextButton.style.opacity = currentPage === totalPages - 1 ? "0.5" : "1";
    nextButton.style.pointerEvents = currentPage === totalPages - 1 ? "none" : "auto";
  }
}

// Cập nhật trạng thái của các nút điều hướng nhà xe
function updateNhaxeNavigationButtons() {
  const prevButton = document.querySelector(".arrow-circle-left-nhaxe");
  const nextButton = document.querySelector(".arrow-circle-right-nhaxe");

  if (prevButton) {
    prevButton.style.opacity = currentNhaxePage === 0 ? "0.5" : "1";
    prevButton.style.pointerEvents = currentNhaxePage === 0 ? "none" : "auto";
  }

  if (nextButton) {
    nextButton.style.opacity = currentNhaxePage === totalNhaxePages - 1 ? "0.5" : "1";
    nextButton.style.pointerEvents = currentNhaxePage === totalNhaxePages - 1 ? "none" : "auto";
  }
}

// Xử lý hiệu ứng menu hover và active
function setupMenuEffects() {
  // Chọn tất cả các mục menu
  const menuItems = document.querySelectorAll(".item-margin, .item-margin-2");

  // Lấy trang hiện tại từ URL hoặc sử dụng mặc định là "home"
  const currentPage = getCurrentPage();

  menuItems.forEach((item) => {
    // Thêm sự kiện click để xử lý chuyển trang
    item.addEventListener("click", function () {
      // Loại bỏ class active từ tất cả các mục
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove("active");
      });

      // Thêm class active cho mục được nhấp
      this.classList.add("active");

      // Lấy trang đích từ thuộc tính data-page
      const targetPage = this.getAttribute("data-page");

      // Xử lý chuyển trang
      if (targetPage && targetPage !== "home") {
        // Lưu trang đã chọn vào localStorage để duy trì trạng thái giữa các trang
        localStorage.setItem("activePage", targetPage);
        // Chuyển hướng đến trang đích
        window.location.href = `./${targetPage}.html`;
      } else if (targetPage === "home" && !window.location.href.includes("home.html")) {
        // Nếu đang ở trang khác và nhấp vào "TRANG CHỦ"
        localStorage.setItem("activePage", "home");
        window.location.href = "./home.html";
      }
    });
  });

  // Đặt trạng thái active cho mục menu dựa vào trang hiện tại
  setActiveMenuItem(currentPage);
}

// Hàm để xác định trang hiện tại từ URL hoặc localStorage
function getCurrentPage() {
  // Lấy từ URL trước
  const url = window.location.href;
  const pageMatch = url.match(/\/([a-zA-Z_]+)\.html/);

  if (pageMatch && pageMatch[1]) {
    return pageMatch[1];
  }

  // Nếu không tìm thấy trong URL, thử lấy từ localStorage
  const savedPage = localStorage.getItem("activePage");
  if (savedPage) {
    return savedPage;
  }

  // Mặc định là trang chủ
  return "home";
}

// Hàm để đặt trạng thái active cho mục menu dựa vào trang hiện tại
function setActiveMenuItem(currentPage) {
  const menuItems = document.querySelectorAll(".item-margin, .item-margin-2");

  // Loại bỏ active từ tất cả
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Tìm và đặt active cho mục tương ứng với trang hiện tại
  const activeItem = Array.from(menuItems).find((item) => {
    return item.getAttribute("data-page") === currentPage;
  });

  if (activeItem) {
    activeItem.classList.add("active");
  } else {
    // Nếu không tìm thấy, đặt mục đầu tiên (trang chủ) làm active mặc định
    const homeItem = document.querySelector('.item-margin[data-page="home"]');
    if (homeItem) homeItem.classList.add("active");
  }
}

// Khởi tạo trạng thái khi trang được tải
window.onload = function () {
  console.log("Initializing navigation with slide animations...");

  // Thiết lập hiển thị cho các route items
  document.querySelectorAll('.route-container .route-item').forEach((el, index) => {
    el.style.display = index < 4 ? "block" : "none";
    if (index < 4) {
      el.style.opacity = "1";
      el.style.transform = "";
    }
  });

  // Thiết lập hiển thị cho các nhà xe items
  document.querySelectorAll('.nhaxe-container .nhaxe-item').forEach((el, index) => {
    el.style.display = index < 4 ? "block" : "none";
    if (index < 4) {
      el.style.opacity = "1";
      el.style.transform = "";
    }
  });

  // Thiết lập hiệu ứng menu
  setupMenuEffects();

  // Thiết lập dropdown chọn điểm khởi hành và điểm đến
  setupDropdowns();

  // Thiết lập date picker cho chọn ngày khởi hành
  setupDatePicker();

  // Thiết lập slideshow banner
  setupBannerSlideshow();

  // Cập nhật trạng thái các nút điều hướng
  updateNavigationButtons();
  updateNhaxeNavigationButtons();
};

// Thiết lập dropdown cho điểm khởi hành và điểm đến
function setupDropdowns() {
  // Thiết lập dropdown cho điểm khởi hành
  setupDropdown("start-point-dropdown", "start-point-display", "selectedStartPoint");

  // Thiết lập dropdown cho điểm đến
  setupDropdown("destination-dropdown", "destination-display", "selectedDestination");
}

// Hàm chung để thiết lập dropdown
function setupDropdown(dropdownId, displayId, storageKey) {
  const dropdown = document.getElementById(dropdownId);
  const dropdownDisplay = document.getElementById(displayId);

  if (!dropdown || !dropdownDisplay) return;

  const dropdownItems = dropdown.querySelectorAll(".dropdown-item");

  // Khi click vào dropdown, hiển thị/ẩn danh sách
  dropdown.addEventListener("click", function (event) {
    // Chỉ mở dropdown khi click vào phần hiển thị, tránh đóng khi click vào phần tử trong dropdown
    if (event.target === dropdownDisplay || event.target === dropdown) {
      // Đóng tất cả các dropdown khác trước khi mở cái này
      document.querySelectorAll(".dropdown.active").forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove("active");
        }
      });

      dropdown.classList.toggle("active");
    }

    // Dừng sự kiện click để không bị lan ra ngoài
    event.stopPropagation();
  });

  // Khi click vào một lựa chọn trong dropdown
  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      // Lấy giá trị đã chọn
      const value = this.getAttribute("data-value");

      // Cập nhật hiển thị
      dropdownDisplay.textContent = value;

      // Đóng dropdown
      dropdown.classList.remove("active");

      // Lưu giá trị đã chọn vào localStorage
      localStorage.setItem(storageKey, value);

      // Kiểm tra nếu đã chọn cả điểm khởi hành và điểm đến
      const startPoint = localStorage.getItem("selectedStartPoint");
      const destination = localStorage.getItem("selectedDestination");

      // Nếu cả hai đều đã chọn và chúng giống nhau, hiển thị thông báo
      if (startPoint && destination && startPoint === destination) {
        // alert("Điểm khởi hành và điểm đến không thể giống nhau!");
        dropdownDisplay.textContent = dropdownId.includes("start") ? "Chọn Điểm Khởi Hành" : "Chọn Điểm Đến";
        localStorage.removeItem(storageKey);
      }

      // Dừng sự kiện click để không bị lan ra ngoài
      event.stopPropagation();
    });
  });

  // Kiểm tra nếu đã có điểm được chọn trước đó
  const savedValue = localStorage.getItem(storageKey);
  if (savedValue) {
    dropdownDisplay.textContent = savedValue;
  }
}

// Thiết lập date picker
function setupDatePicker() {
  const datePickerContainer = document.getElementById("date-picker-container");
  const dateSelectField = document.getElementById("date-select-field");
  const datePicker = document.getElementById("date-picker");
  const monthSelect = document.getElementById("month-select");
  const yearSelect = document.getElementById("year-select");
  const daysContainer = document.getElementById("days-container");
  const prevMonthBtn = document.getElementById("prev-month");
  const nextMonthBtn = document.getElementById("next-month");
  const selectedDateDisplay = document.getElementById("selected-date-display");

  if (!datePickerContainer || !dateSelectField || !datePicker || !daysContainer) {
    return;
  }

  // Khởi tạo biến ngày
  let currentDate = new Date();
  let selectedDate = null;

  // Lấy ngày đã chọn từ localStorage nếu có
  const savedDate = localStorage.getItem("selectedDate");
  if (savedDate) {
    selectedDate = new Date(savedDate);
    displaySelectedDate(selectedDate);
  }

  // Tạo các option cho năm (từ năm hiện tại đến +5 năm)
  populateYearOptions();

  // Đặt tháng và năm hiện tại cho dropdown
  monthSelect.value = currentDate.getMonth();
  yearSelect.value = currentDate.getFullYear();

  // Thêm event listener cho dropdown tháng và năm
  monthSelect.addEventListener("change", function () {
    currentDate.setMonth(parseInt(this.value));
    updateCalendar();
  });

  yearSelect.addEventListener("change", function () {
    currentDate.setFullYear(parseInt(this.value));
    updateCalendar();
  });

  // Hiển thị date picker khi click vào ô chọn ngày
  dateSelectField.addEventListener("click", function () {
    // Đóng các dropdown khác nếu có
    document.querySelectorAll(".dropdown.active").forEach((dropdown) => {
      dropdown.classList.remove("active");
    });

    // Toggle date picker
    datePickerContainer.classList.toggle("active");

    // Cập nhật hiển thị lịch nếu date picker đang mở
    if (datePickerContainer.classList.contains("active")) {
      updateCalendar();
    }
  });

  // Đóng date picker khi click ra ngoài
  document.addEventListener("click", function (event) {
    if (!datePickerContainer.contains(event.target)) {
      datePickerContainer.classList.remove("active");
    }
  });

  // Xử lý khi click nút chuyển tháng trước
  prevMonthBtn.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    // Cập nhật giá trị dropdown
    monthSelect.value = currentDate.getMonth();
    yearSelect.value = currentDate.getFullYear();
    updateCalendar();
  });

  // Xử lý khi click nút chuyển tháng sau
  nextMonthBtn.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    // Cập nhật giá trị dropdown
    monthSelect.value = currentDate.getMonth();
    yearSelect.value = currentDate.getFullYear();
    updateCalendar();
  });

  // Hàm tạo options cho dropdown năm
  function populateYearOptions() {
    const currentYear = new Date().getFullYear();
    // Tạo options từ năm hiện tại đến +5 năm
    for (let year = currentYear; year <= currentYear + 5; year++) {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    }
  }

  // Hàm cập nhật hiển thị lịch
  function updateCalendar() {
    // Lấy thông tin tháng hiện tại
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Xóa nội dung ngày cũ
    daysContainer.innerHTML = "";

    // Lấy ngày đầu tiên của tháng
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Số ngày trong tháng
    const daysInMonth = lastDay.getDate();

    // Ngày trong tuần của ngày đầu tiên (0 = CN, 1 = T2, ..., 6 = T7)
    let startDay = firstDay.getDay();

    // Ngày hôm nay
    const today = new Date();

    // Thêm các ngày của tháng trước vào lịch
    for (let i = 0; i < startDay; i++) {
      const prevMonthLastDay = new Date(year, month, 0).getDate();
      const dayEl = document.createElement("div");
      dayEl.className = "day other-month";
      dayEl.textContent = prevMonthLastDay - startDay + i + 1;
      daysContainer.appendChild(dayEl);
    }

    // Thêm các ngày của tháng hiện tại vào lịch
    for (let i = 1; i <= daysInMonth; i++) {
      const dayEl = document.createElement("div");
      dayEl.className = "day";
      dayEl.textContent = i;

      // Kiểm tra nếu là ngày hiện tại
      if (today.getDate() === i && today.getMonth() === month && today.getFullYear() === year) {
        dayEl.classList.add("today");
      }

      // Kiểm tra nếu là ngày đã chọn
      if (
        selectedDate &&
        selectedDate.getDate() === i &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year
      ) {
        dayEl.classList.add("selected");
      }

      // Kiểm tra nếu là ngày trong quá khứ (không cho chọn)
      const currentDayDate = new Date(year, month, i);
      if (currentDayDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
        dayEl.classList.add("disabled");
      } else {
        // Chỉ cho phép chọn ngày trong tương lai hoặc ngày hiện tại
        dayEl.addEventListener("click", function () {
          const selectedDay = new Date(year, month, i);
          selectDate(selectedDay);
        });
      }

      daysContainer.appendChild(dayEl);
    }

    // Tính số ô còn lại cần điền để hoàn thành grid
    const remainingCells = 42 - (startDay + daysInMonth); // 42 = 6 rows * 7 days

    // Thêm các ngày của tháng sau vào lịch
    for (let i = 1; i <= remainingCells; i++) {
      const dayEl = document.createElement("div");
      dayEl.className = "day other-month";
      dayEl.textContent = i;
      daysContainer.appendChild(dayEl);
    }
  }

  // Hàm chọn ngày
  function selectDate(date) {
    selectedDate = date;

    // Lưu ngày đã chọn vào localStorage
    localStorage.setItem("selectedDate", date.toISOString());

    // Hiển thị ngày đã chọn
    displaySelectedDate(date);

    // Đóng date picker
    datePickerContainer.classList.remove("active");

    // Cập nhật hiển thị lịch (để đổi màu ngày đã chọn)
    updateCalendar();
  }

  // Hàm hiển thị ngày đã chọn
  function displaySelectedDate(date) {
    if (!date) return;

    // Định dạng ngày thành chuỗi dễ đọc (DD/MM/YYYY)
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    // Hiển thị ngày đã chọn trong ô
    selectedDateDisplay.textContent = `${day}/${month}/${year}`;
  }
}

// Biến theo dõi trạng thái slideshow banner
let isShowingFirstBanner = true;
let isBannerAnimating = false;

// Hiển thị banner trước đó
function showPreviousBanner() {
  if (isBannerAnimating) return;
  toggleBannerSlides();
}

// Hiển thị banner tiếp theo
function showNextBanner() {
  if (isBannerAnimating) return;
  toggleBannerSlides();
}

// Chuyển đổi giữa hai banner
function toggleBannerSlides() {
  isBannerAnimating = true;

  const firstBanner = document.querySelector(".banner-slide");
  const secondBanner = document.querySelector(".banner-slide-2");

  if (!firstBanner || !secondBanner) {
    isBannerAnimating = false;
    return;
  }

  if (isShowingFirstBanner) {
    // Hiệu ứng lướt sang banner thứ hai
    firstBanner.style.transform = "translateX(-100px)";
    firstBanner.style.opacity = "0";

    secondBanner.style.transform = "translateX(0)";
    secondBanner.style.opacity = "1";
  } else {
    // Hiệu ứng lướt sang banner đầu tiên
    secondBanner.style.transform = "translateX(100px)";
    secondBanner.style.opacity = "0";

    firstBanner.style.transform = "translateX(0)";
    firstBanner.style.opacity = "1";
  }

  // Đổi trạng thái
  isShowingFirstBanner = !isShowingFirstBanner;

  // Đánh dấu kết thúc hiệu ứng
  setTimeout(() => {
    isBannerAnimating = false;
  }, 400); // Thời gian phải khớp với transition trong CSS
}

// Chức năng hiển thị/làm ẩn overlay tìm kiếm
document.addEventListener("DOMContentLoaded", function () {
  // Khởi tạo dữ liệu routes và render
  saveRoutesToLocalStorage();
  renderRoutes();
  
  // Khởi tạo dữ liệu nhà xe và render
  saveNhaxesToLocalStorage();
  renderNhaxes();
  
  // Khởi tạo dữ liệu bến xe và render
  saveStationsToLocalStorage();
  renderStations();
  
  // Thiết lập hiển thị mặc định cho route-container
  document.querySelectorAll('.route-container .route-item').forEach((item, index) => {
    if (index < 4) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
  
  // Target both search buttons in the header
  const searchBtns = document.querySelectorAll(".search-box button");
  const searchOverlay = document.getElementById("search-overlay");
  const searchInput = document.getElementById("search-input");

  // Hiển thị overlay tìm kiếm khi người dùng bấm nút tìm kiếm
  searchBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      searchOverlay.style.display = "flex";
      // Focus vào ô tìm kiếm sau một chút delay để đảm bảo overlay đã hiển thị
      setTimeout(() => {
        searchInput.focus();
      }, 100);
    });
  });

  // Ẩn overlay nếu người dùng click ra ngoài khu vực tìm kiếm
  searchOverlay.addEventListener("click", function (event) {
    if (event.target === searchOverlay) {
      searchOverlay.style.display = "none";
      searchInput.value = ""; // Xóa nội dung trong ô tìm kiếm
    }
  });

  // Cũng ẩn overlay nếu người dùng click ra ngoài khu vực tìm kiếm
  searchOverlay.addEventListener("click", function (event) {
    if (event.target === searchOverlay) {
      searchOverlay.style.display = "none";
      searchInput.value = ""; // Xóa nội dung trong ô tìm kiếm
    }
  });

  // Ẩn overlay nếu người dùng bấm phím ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && searchOverlay.style.display === "flex") {
      searchOverlay.style.display = "none";
      searchInput.value = ""; // Xóa nội dung trong ô tìm kiếm
    }
  });

  // Add event listener for the search button inside the overlay
  const searchButton = document.querySelector(".search-button");
  if (searchButton) {
    searchButton.addEventListener("click", function() {
      // Perform search with the current input value
      performSearch(searchInput.value);
    });
  }

  // Add event listener for Enter key in search input
  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      performSearch(searchInput.value);
    }
  });

  // Function to perform search
  function performSearch(query) {
    if (query.trim() !== "") {
      // For now, just alert the search query (you can replace with actual search logic)
      alert("Đang tìm kiếm: " + query);
      // Close the search overlay
      searchOverlay.style.display = "none";
      searchInput.value = ""; // Clear the search input
    }
  }
});

// chuyển đến trang đặt vé
function tickets_set() {
  window.location.href = "/pages/ticket_set.html";
}

const contactInformation=JSON.parse(localStorage.getItem("contact")) || [];


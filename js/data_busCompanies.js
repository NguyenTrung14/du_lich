busCompanies = [
  {
    id: 1,
    name: "Nhà xe Tài Phát Limousine",
    img: "/assets/img/nha-xe-tai-phat.jpg",
    departure: "Bình Định",
    destination: "TP. Hồ Chí Minh",
    type: "Limosine",
    address: "344 Nguyễn Huệ, TT. Bình Dương, H. Phù Mỹ, Bình Định.",
  },
  {
    id: 2,
    name: "Nhà xe Vinh Chung",
    img: "/assets/img/NX-VINH-CHUNG-1.jpg",
    departure: "Hà Nội",
    destination: "Nghệ An",
    type: "Limosine",
    address: "95 Trần Thái Tông, P. Dịch Vọng, Q. Cầu Giấy, Hà Nội.",
  },
  {
    id: 3,
    name: "Nhà xe Hùng Hiếu",
    img: "/assets/img/NX-HUNG-HIEU-2-768x551.jpg",
    departure: "TP. Hồ Chí Minh",
    destination: "Tiền Giang",
    type: "Limosine",
    address: "95 Trần Thái Tông, P. Dịch Vọng, Q. Cầu Giấy, Hà Nội.",
  },
  {
    id: 4,
    name: "Nhà xe Huy Hoàng Limousine",
    img: "/assets/img/HUY-HOANG-1-768x555.jpg",
    departure: "TP. Hồ Chí Minh",
    destination: "Vũng Tàu",
    type: "Limosine",
    address:
      "312 Nguyễn An Ninh, Phường 9, Thành phố Vũng Tầu, Bà Rịa - Vũng Tàu, Việt Nam.",
  },
];

if (!localStorage.getItem("busCompanies")) {
  localStorage.setItem("busCompanies", JSON.stringify(busCompanies));
}

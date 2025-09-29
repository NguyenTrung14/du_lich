users = [
  {
    id: 0,
    name: "Admin",
    email: "Admin@123",
    password: "Admin@123",
    role: "admin",
  },
  {
    id: 1,
    email: "nguyentienloc@gmail.com",
    name: "Nguyễn Lộc",
    password: "12345678",
    role: "user",
  },
  {
    id: 2,
    email: "locnguyen@gmail.com",
    name: "tien loc",
    password: "ls123456",
    role: "user",
  },
];

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

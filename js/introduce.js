const contactInformation=JSON.parse(localStorage.getItem("contact")) || [];

// khi trang nao dang hoat dong thi them class active
const currentLocation = window.location.href;
const menuItems = document.querySelectorAll(".listLink2 a");
for (let i = 0; i < menuItems.length; i++) {
  if (menuItems[i].href === currentLocation) {
    menuItems[i].className += " active";
  }
}

function handleSearch(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm) {
        const searchModal = bootstrap.Modal.getInstance(document.getElementById('searchModal'));
        searchModal.hide();
        window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    }
}

// reset input khi đóng modal
document.getElementById('searchModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('searchInput').value = '';
});


// them xử lý form liên hệ
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let nameContact = document.getElementById("fullName").value.trim();
    let warningNameContact = document.getElementById("warningNameContact");
    let warningBorderName = document.getElementById("fullName");

    let emailContact = document.getElementById("email").value.trim();
    let warningEmailContact = document.getElementById("warningEmailContact");
    let warningBorderEmail = document.getElementById("email");

    let phoneContact = document.getElementById("phone").value.trim();
    let warningPhoneContact = document.getElementById("warningPhoneContact");
    let warningBorderPhone = document.getElementById("phone");

    let messageContact = document.getElementById("message").value.trim();
    let warningMessageContact = document.getElementById("warningMessageContact");
    let warningBorderMessage= document.getElementById("message");
    let checkEmail=/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    let hasError = false;

    warningBorderName.classList.remove("warning-border");
    warningBorderEmail.classList.remove("warning-border");
    warningBorderPhone.classList.remove("warning-border");
    warningBorderMessage.classList.remove("warning-border");

    if(nameContact==""){
        warningNameContact.innerHTML = `Tên người liên hệ không được để trống`;
        warningBorderName.classList.add("warning-border");
        hasError = true;
    }
    if(emailContact==""){
        warningEmailContact.innerHTML = `Email người liên hệ không được để trống`;
        warningBorderEmail.classList.add("warning-border");
        hasError = true;
    }
    if(!checkEmail.test(emailContact)){
        warningEmailContact.innerHTML = `Email sai định dạng`;
        warningBorderEmail.classList.add("warning-border");
        hasError = true;
    }
    if(phoneContact==""){
        warningPhoneContact.innerHTML = `Số điện thoại không được để trống`;
        warningBorderPhone.classList.add("warning-border");
        hasError = true;
    }
    if(isNaN(phoneContact)){
        warningPhoneContact.innerHTML = `Số điện thoại sai định dạng`;
        warningBorderPhone.classList.add("warning-border");
        hasError = true;
    }
    if(messageContact==""){
        warningMessageContact.innerHTML = `Tin nhắn không được để trống`;
        warningBorderMessage.classList.add("warning-border");
        hasError = true;
    }
    if(messageContact.length<8){
        warningMessageContact.innerHTML = `Tin nhắn không được ít hơn 8 ký tự`;
        warningBorderMessage.classList.add("warning-border");
        hasError = true;
    }
    
    if(hasError==true){
        return;
    }

    const newContact = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };
    contactInformation.push(newContact);
    localStorage.setItem('contact', JSON.stringify(contactInformation));
    this.reset();
    alert('Cảm ơn bạn đã gửi thông tin liên hệ!');
});






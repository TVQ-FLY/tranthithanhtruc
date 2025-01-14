// Hiển thị ảnh (Thêm ảnh theo cấu trúc img + số thứ tự đuôi PNG vào Image)
// Tăng số lượng ảnh hiển thị ở biến totalImages
document.addEventListener("DOMContentLoaded", function () {
  const imageGrid = document.getElementById("image-grid");
  const totalImages = 79; // Số lượng ảnh mà bạn có

  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement("img");
    img.src = `Image/image (${i}).jpg`; // Tên file ảnh theo thứ tự
    img.alt = `Image ${i}`;
    img.classList.add("w-full", "h-auto", "image");
    const col = document.createElement("div");
    col.classList.add("image-container"); // Thêm lớp CSS cho thẻ div chứa ảnh
    col.appendChild(img);
    imageGrid.appendChild(col);
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Hiển thị prompt yêu cầu mật khẩu
//   const password = "03052006"; // Thay "yourpassword" bằng mật khẩu của bạn
//   const attemptsLimit = 3; // Số lần thử tối đa
//   let attempts = 0;

//   while (attempts < attemptsLimit) {
//     const userInput = prompt("Vui lòng nhập mật khẩu để truy cập: ");
//     if (userInput === password) {
//       alert("Trần Văn Quyền chào mừng bạn đã truy cập !");
//       break;
//     } else {
//       attempts++;
//       alert("Mật khẩu không đúng! Vui lòng thử lại.");
//     }

//     if (attempts === attemptsLimit) {
//       alert("Bạn đã nhập sai quá nhiều lần. Truy cập bị từ chối!");
//       // Đóng hoặc chuyển hướng người dùng
//       window.location.href = "https://google.com"; // Thay đổi URL nếu cần
//     }
//   }
// });

// Back top
let backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// Smooth
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// // Lắng nghe sự kiện 'contextmenu' trên toàn bộ trang
// document.addEventListener("contextmenu", function (event) {
//   // Ngăn chặn menu chuột phải mặc định
//   event.preventDefault();
//   // Hiển thị thông báo
//   alert(
//     "Xin chào ! \nHành động của bạn bị vô hiệu hóa !\n- Sent by Trần Văn Quyền -"
//   );
// });

// // Lắng nghe sự kiện 'keydown' để kiểm tra khi người dùng nhấn phím F12
// document.addEventListener("keydown", function (event) {
//   // Kiểm tra nếu phím F12 (mã phím 123) được nhấn
//   if (event.key === "F12" || event.keyCode === 123) {
//     event.preventDefault();
//     alert(
//       "Xin Chào ! \nBạn không thể mở DevTools bằng F12 ! \n- Sent by Trần Văn Quyền -"
//     );
//   }
// });

// // Khởi tạo biến để theo dõi thời gian giữ chuột
// let mouseHoldTimeout;
// // Lắng nghe sự kiện 'mousedown' trên tất cả các ảnh
// document.querySelectorAll("#image-grid").forEach(function (image) {
//   image.addEventListener("mousedown", function (event) {
//     // Khởi động bộ đếm thời gian
//     mouseHoldTimeout = setTimeout(function () {
//       event.preventDefault(); // Ngăn hành động mặc định
//       alert(
//         "Xin chào ! \nBạn không thể giữ chuột trên ảnh này ! \n- Sent by Trần Văn Quyền -"
//       );
//     }, 500); // Ngưỡng giữ chuột (500ms)
//   });

//   // Khi nhả chuột, xóa bộ đếm giờ
//   image.addEventListener("mouseup", function () {
//     clearTimeout(mouseHoldTimeout);
//   });

//   // Khi chuột rời khỏi ảnh, xóa bộ đếm giờ
//   image.addEventListener("mouseleave", function () {
//     clearTimeout(mouseHoldTimeout);
//   });
// });

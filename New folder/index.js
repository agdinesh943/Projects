const item = document.querySelectorAll("#apply-li");
document.querySelectorAll("#apply-li").forEach(item => {
  item.addEventListener("click", function () {
    document.querySelectorAll("#apply-li").forEach(i => i.classList.remove("active"));
    this.classList.add("active");
  });
});



const baskets = document.querySelectorAll(".baskets");
const coreItems = document.querySelectorAll(".core");

coreItems.forEach(item => {
  item.addEventListener("click", function (event) {
    if (event.target.classList.contains("b-n-core") || event.target.classList.contains("chevron-down")) {
      baskets.forEach(basket => {
        if (basket.classList.contains("hide")) {
          basket.classList.remove("hide"); // Fade-out and collapse
        } else {
          basket.classList.add("hide"); // Fade-in and expand
        }
      });
    }
  });
});

// 
const bask = document.querySelectorAll(".baskets2");
const core = document.querySelectorAll(".core2");

core.forEach(item => {
  item.addEventListener("click", function (event) {
    if (event.target.classList.contains("b-n-core2") || event.target.classList.contains("chevron-down2")) {
      bask.forEach(basket => {
        if (basket.classList.contains("hide")) {
          basket.classList.remove("hide"); // Fade-out and collapse
        } else {
          basket.classList.add("hide"); // Fade-in and expand
        }
      });
    }
  });
});


function changeBtnBg(btn) {
  btn.classList.add("clicked");
}


//this for old popup

// function showPopup() {
//   document.getElementById("popup").style.top = "100px"; // Slide down
//   document.getElementById("overlay").style.display = "block"; // Show overlay
//   setTimeout(() => {
//     document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0.5)"; // Darken background
//   }, 10);
// }

// function closePopup() {
//   document.getElementById("popup").style.top = "-100%"; // Slide up
//   document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0)"; // Remove dim effect
//   setTimeout(() => {
//     document.getElementById("overlay").style.display = "none"; // Hide overlay after animation
//     document.getElementById("overlay").style.background = "rgba(255, 255, 255, 0.5)";
//   }, 500);
// }
// let maths = document.getElementById("title").innerText;
// document.getElementById("data-title").innerText = maths;



/*new*/

// function showPopup(element) {
//   const container = element.closest(".basket-contents");

//   const courseCode = container.querySelector(".course-code-head")?.textContent || "N/A";
//   const credit = container.querySelector(".key-credit b")?.textContent || "N/A";
//   const title = container.querySelector("b#title")?.textContent
//     || container.querySelectorAll("b")[1]?.textContent || "N/A";
//   const superCode = [...container.querySelectorAll(".key-values p")].find(p =>
//     p.textContent.includes("Super Course Code"))?.textContent.trim().split(':')[1]?.trim() || "N/A";

//   document.getElementById("modalCourseCode").innerText = courseCode;
//   document.getElementById("modalTitle").innerText = title;
//   document.getElementById("modalCredit").innerText = credit;
//   // document.getElementById("modalSuperCode").innerText = superCode;

//   document.getElementById("popupModal").style.display = "flex";
// }

// function closePopup() {
//   document.getElementById("popupModal").style.display = "none";
// }

/*new latest */
function showPopup(element) {
  const container = element.closest(".basket-contents");

  const courseCode = container.querySelector(".course-code-head")?.textContent || "N/A";
  const credit = container.querySelector(".key-credit b")?.textContent || "N/A";
  const title = container.querySelector("b#title")?.textContent
    || container.querySelectorAll("b")[1]?.textContent || "N/A";

  document.getElementById("modalCourseCode").innerText = courseCode;
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalCredit").innerText = credit;

  const modal = document.getElementById("popupModal");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("show");
  }, 10); // slight delay to trigger transition
}

function closePopup() {
  const modal = document.getElementById("popupModal");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 400); // match transition duration
}

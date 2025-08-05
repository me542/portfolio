// const pages = [
//   "index.html",
//   "about.html",
//   "service.html",
//   "project.html",
//   "contact.html"
// ];

// document.body.style.minHeight = "200vh";

// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;
//   const viewportHeight = window.innerHeight;
//   const fullHeight = document.documentElement.scrollHeight;
//   const current = window.location.pathname.split("/").pop();
//   const i = pages.indexOf(current);

//   // Scroll down to next
//   if (scrollY + viewportHeight >= fullHeight - 5) {
//     const next = pages[i + 1];
//     if (next) {
//       window.location.href = next;
//     }
//   }

//   // Scroll up to previous
//   if (scrollY <= 0) {
//     const prev = pages[i - 1];
//     if (prev) {
//       window.location.href = prev;
//     }
//   }
// });

/* =========================================================
   Wonseok Oh — Yiming Dou format interactions
   ========================================================= */
(function () {
  "use strict";
  const root = document.documentElement;

  /* ---------- Theme toggle (persisted) ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("theme-modern");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(stored || (prefersDark ? "dark" : "light"));
  function setTheme(mode) { root.setAttribute("data-theme", mode); localStorage.setItem("theme-modern", mode); }
  themeToggle.addEventListener("click", function () {
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  /* ---------- Profile photo: play GIF on hover ---------- */
  const photo = document.getElementById("profilePhoto");
  if (photo && photo.dataset.hoverSrc) {
    const stillSrc = photo.getAttribute("src");
    const hoverSrc = photo.dataset.hoverSrc;
    let hoverReady = false;
    let hovering = false;

    /* Fetch the GIF after the page has settled so it never delays first paint. */
    window.addEventListener("load", function () {
      const pre = new Image();
      pre.onload = function () {
        hoverReady = true;
        if (hovering) photo.setAttribute("src", hoverSrc);
      };
      pre.src = hoverSrc;
    });

    photo.addEventListener("mouseenter", function () {
      hovering = true;
      if (hoverReady) photo.setAttribute("src", hoverSrc);
    });
    photo.addEventListener("mouseleave", function () {
      hovering = false;
      photo.setAttribute("src", stillSrc);
    });
  }

  /* ---------- Publications: Recent / Others ---------- */
  const container = document.getElementById("publications_list");
  const btnRecent = document.getElementById("btn-recent");
  const btnOthers = document.getElementById("btn-others");
  if (container && btnRecent && btnOthers) {
    function selectButton(active) {
      [btnRecent, btnOthers].forEach((b) => b.classList.remove("selected-button"));
      active.classList.add("selected-button");
    }
    btnRecent.addEventListener("click", function () {
      container.className = "publications-container show-recent";
      selectButton(btnRecent);
    });
    btnOthers.addEventListener("click", function () {
      container.className = "publications-container show-others";
      selectButton(btnOthers);
    });
  }
})();

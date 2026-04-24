(function () {
  const toggleButton = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!toggleButton || !mobileMenu) {
    return;
  }

  toggleButton.addEventListener("click", function () {
    const willOpen = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    toggleButton.setAttribute("aria-expanded", String(willOpen));
  });

  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });
})();

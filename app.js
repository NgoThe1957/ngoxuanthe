// VHLDL v0.2.0 — Homepage
// UI-only bootstrap. Search/data integrations will be connected
// only after the Knowledge Engine/Data Hub contract is approved.
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector(".header-search button");
  const searchInput = document.querySelector(".header-search input");

  searchButton?.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (!query) {
      searchInput.focus();
      return;
    }
    console.info("VHLDL search placeholder:", query);
  });
});

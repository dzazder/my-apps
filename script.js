async function loadLinks() {
  const tilesEl = document.getElementById("tiles");
  const emptyEl = document.getElementById("empty");

  const res = await fetch("links.json");
  const links = await res.json();

  if (!links.length) {
    emptyEl.hidden = false;
    return;
  }

  tilesEl.innerHTML = links
    .map(
      (link) => `
        <a class="tile" href="${link.url}" target="_blank" rel="noopener noreferrer">
          <span class="emoji">${link.emoji || "🔗"}</span>
          <span class="name">${link.name}</span>
          <span class="url">${link.url.replace(/^https?:\/\//, "")}</span>
        </a>
      `
    )
    .join("");
}

loadLinks();

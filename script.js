document.getElementById("year").textContent = new Date().getFullYear();

const postForm = document.getElementById("postForm");
const threadList = document.getElementById("threadList");

if (postForm && threadList) {
  postForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("postTitle").value.trim();
    const body = document.getElementById("postBody").value.trim();

    if (!title || !body) return;

    const thread = document.createElement("article");
    thread.className = "thread";
    thread.innerHTML = `
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(body)}</p>
    `;

    threadList.prepend(thread);
    postForm.reset();
  });
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, function (char) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char];
  });
}

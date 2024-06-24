const scriptURL =
"https://script.google.com/macros/s/AKfycbxlJO0-wxE7_jZrv6SGOJR1_YtR9MnJXpn-ttw109b6YetPnpBIwqOMBZPyS-y0Qidj/exec";
const form = document.forms["Register"];

form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(scriptURL, {
  method: "POST",
  body: new FormData(form),
})
  .then((response) => window.location.reload())
  .catch((error) => console.error("Error!", error.message));
});
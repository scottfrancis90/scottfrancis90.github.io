(function () {
  "use strict";
  var copy = document.getElementById("copy");
  copy.addEventListener("click", function () {
    if (!navigator.clipboard) { copy.textContent = "Copy it below"; return; }
    navigator.clipboard.writeText(copy.getAttribute("data-email")).then(
      function () { copy.textContent = "Email copied"; },
      function () { copy.textContent = "Copy it below"; }
    );
  });
})();

function Burger() {
    var v = document.getElementById("links");
    if (v.style.display === "grid") {
      v.style.display = "none";
    } else {
      v.style.display = "grid";
    }
  }
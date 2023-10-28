function showhideFunction() {
    var x = document.getElementById("showhide");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
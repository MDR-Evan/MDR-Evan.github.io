const motionWall = document.getElementById("motionWall");

function moveToMotionWall(event) {
  event.preventDefault();
  window.location.href = "motionWall.html";
}

motionWall.addEventListener("click", moveToMotionWall);
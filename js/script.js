const airplane = document.getElementById("airplane");

function animate() {
  airplane
    .velocity(
      {
        top: "0",
        left: "40%",
        transform: ["rotate(10deg", "rotate(0deg"],
      },
      {
        duration: 7000,
      }
    )
    .velocity(
      {
        left: "30%",
        transform: ["rotate(0deg)", "rotate(10deg)"],
      },
      {
        duration: 7000,
      }
    );
}

animate();

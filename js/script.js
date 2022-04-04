const airplane = document.getElementById("airplane");
const manJump = document.getElementById("man-jump");

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
    )
    .velocity(
      {
        left: "-500px",
        top:'100px',
        transform: ["rotate(-5deg)", "rotate(0deg)"],
      },
      {
        duration: 15000,
      }
    );

  manJump
    .velocity(
      {
        opacity: 1,
      },
      {
        delay: 13000,
        duration: 1000,
      }
    )
    .velocity(
      {
        top: window.innerHeight + 100,
      },
      {
        queue: false,
        delay: 13000,
        duration: 10000,
      }
    );
}

animate();

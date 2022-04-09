window.addEventListener("load", () => {
 
  console.log('ok')
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // Variables
  let drawing = false


  function startPosition() {
    drawing = true;
    draw();
  }

  function stopPosition() {
    drawing = false;
    ctx.beginPath();
  }

  function draw(e) {
    if(!drawing) return;

    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  // EventListeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", stopPosition);
  canvas.addEventListener("mousemove", draw);
})
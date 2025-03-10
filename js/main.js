// js/main.js
// Smooth Scrolling with Lenis
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Cursor Trail
const cursorTrail = document.createElement("div");
cursorTrail.style.cssText = "position: fixed; width: 10px; height: 10px; background: #A4F9C8; border-radius: 50%; pointer-events: none; z-index: 9999; opacity: 0.5;";
document.body.appendChild(cursorTrail);

document.addEventListener("mousemove", (e) => {
    gsap.to(cursorTrail, { x: e.clientX - 5, y: e.clientY - 5, duration: 0.2 });
});

// General Button Animations
gsap.utils.toArray("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => gsap.to(btn, { scale: 1.05, boxShadow: "0 0 15px #A4F9C8", duration: 0.3 }));
    btn.addEventListener("mouseleave", () => gsap.to(btn, { scale: 1, boxShadow: "none", duration: 0.3 }));
    btn.addEventListener("click", () => gsap.to(btn, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 }));
});

// Canvas Background Animation (for Hero Sections)
function createCanvasAnimation(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 2,
            speed: Math.random() * 0.5 + 0.1,
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(164, 249, 200, 0.8)";
            ctx.fill();
            p.y -= p.speed;
            if (p.y < 0) p.y = canvas.height;
        });
        requestAnimationFrame(animate);
    }
    animate();
}

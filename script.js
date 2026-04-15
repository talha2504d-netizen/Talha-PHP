const canvas = document.getElementById('simCanvas');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

// UI State
const toggleBtn = document.getElementById('toggleGravityBtn');
const led = document.getElementById('statusLed');
const statusText = document.getElementById('statusText');

let isAnti = false;
let currentGravity = 0.18;
let targetGravity = 0.18;

toggleBtn.addEventListener('click', () => {
    isAnti = !isAnti;
    if (isAnti) {
        toggleBtn.classList.add('active');
        led.className = 'led anti';
        statusText.textContent = 'Ascending (Anti)';
        targetGravity = -0.15;
    } else {
        toggleBtn.classList.remove('active');
        led.className = 'led normal';
        statusText.textContent = 'Descending (Normal)';
        targetGravity = 0.18;
    }
});
led.className = 'led normal'; // Default state

// Interaction State
let mouse = { x: -1000, y: -1000, isDown: false };
const setMouseParams = (x, y) => { mouse.x = x; mouse.y = y; };

window.addEventListener('mousemove', e => setMouseParams(e.clientX, e.clientY));
window.addEventListener('mousedown', () => mouse.isDown = true);
window.addEventListener('mouseup', () => mouse.isDown = false);
window.addEventListener('mouseleave', () => setMouseParams(-1000, -1000));

window.addEventListener('touchstart', e => { 
    setMouseParams(e.touches[0].clientX, e.touches[0].clientY); 
    mouse.isDown = true; 
}, {passive: false});
window.addEventListener('touchmove', e => {
    setMouseParams(e.touches[0].clientX, e.touches[0].clientY);
    e.preventDefault();
}, {passive: false});
window.addEventListener('touchend', () => { mouse.isDown = false; setMouseParams(-1000, -1000); });

// Particle System
const particles = [];
const numParticles = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 3500), 400);

const colorPalettes = [
    '#00f2fe', '#4facfe', '#7928ca', '#ff0080', '#ff0844', '#f5576c'
];

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 5;
        this.vy = (Math.random() - 0.5) * 5;
        this.radius = Math.random() * 1.5 + 0.5;
        this.baseRadius = this.radius;
        this.color = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
        
        // For trail history
        this.history = []; 
        this.maxHistory = Math.floor(Math.random() * 8) + 6;
        
        this.friction = 0.985;
    }

    update() {
        // Record trail history
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        }

        // Apply Gravity
        this.vy += currentGravity;

        // Interaction (Repel or Vortex)
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        let influenceRadius = 250;
        
        if (dist < influenceRadius) {
            let force = (influenceRadius - dist) / influenceRadius;
            
            if (mouse.isDown) {
                // Vortex effect (Pull + Spin)
                let angle = Math.atan2(dy, dx);
                // pull
                this.vx -= Math.cos(angle) * force * 1.2;
                this.vy -= Math.sin(angle) * force * 1.2;
                // spin
                this.vx += Math.sin(angle) * force * 3;
                this.vy -= Math.cos(angle) * force * 3;
            } else {
                // Repel effect
                this.vx += (dx / dist) * force * 0.9;
                this.vy += (dy / dist) * force * 0.9;
            }
            
            // Expand size closer to mouse
            this.radius = Math.min(this.baseRadius * 3, this.baseRadius + force * 2);
        } else {
            // Shrink back
            this.radius = Math.max(this.baseRadius, this.radius - 0.1);
        }

        // Velocity & Position
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.x += this.vx;
        this.y += this.vy;

        // Boundary Collisions (Soft bounce)
        if (this.x < 0) { this.x = 0; this.vx *= -0.8; }
        else if (this.x > width) { this.x = width; this.vx *= -0.8; }
        
        if (this.y < 0) { this.y = 0; this.vy *= -0.6; this.vx *= 0.9; }
        else if (this.y > height) { this.y = height; this.vy *= -0.8; this.vx *= 0.9; }
    }

    draw() {
        // Draw Trail
        if (this.history.length > 1) {
            ctx.beginPath();
            ctx.moveTo(this.history[0].x, this.history[0].y);
            for (let i = 1; i < this.history.length; i++) {
                ctx.lineTo(this.history[i].x, this.history[i].y);
            }
            ctx.lineTo(this.x, this.y);
            ctx.strokeStyle = this.color;
            // Opacity fading for trail length
            ctx.lineWidth = this.radius * 1.5;
            ctx.lineCap = 'round';
            ctx.stroke();
        }

        // Draw Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
    }
}

// Initialization
for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
}

// Render Loop
function animate() {
    requestAnimationFrame(animate);
    
    // Smooth Gravity transition
    currentGravity += (targetGravity - currentGravity) * 0.04;

    // Use a slightly opaque background fill instead of clearRect
    // to create a fading motion blur effect globally
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(3, 3, 5, 0.35)';
    ctx.fillRect(0, 0, width, height);

    // Add 'lighter' composite for extreme neon glow effect
    ctx.globalCompositeOperation = 'lighter';
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
}

animate();

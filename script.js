// ARTHUR PORTFOLIO - JAVASCRIPT PRO
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. COMPTEUR DE VISITES
    let visiteCount = localStorage.getItem('visites') || 0;
    visiteCount = parseInt(visiteCount) + 1;
    localStorage.setItem('visites', visiteCount);
    
    // Créer élément compteur
    const compteur = document.createElement('div');
    compteur.id = 'visites';
    compteur.innerHTML = `<strong>👀 ${visiteCount} visites</strong>`;
    compteur.style.cssText = `
        position: fixed; top: 20px; right: 20px; 
        background: rgba(52,152,219,0.9); color: white; 
        padding: 10px 20px; border-radius: 25px; 
        font-weight: bold; box-shadow: 0 5px 15px rgba(52,152,219,0.4);
        z-index: 1000; font-size: 14px;
    `;
    document.body.appendChild(compteur);
    
    // 2. ANIMATIONS BOUTONS
    const btnDark = document.getElementById('dark-mode-btn');
    btnDark.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        this.textContent = isDark ? '☀️ Mode Clair' : '🌙 Mode Sombre';
        
        // Animation bouton
        this.style.transform = 'scale(0.95)';
        setTimeout(() => this.style.transform = '', 150);
    });
    
    // 3. EFFET TYPEWRITER NOM (header)
    const titre = document.querySelector('header h1');
    const texteOriginal = titre.textContent;
    titre.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < texteOriginal.length) {
            titre.textContent += texteOriginal.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 500);
    
    // 4. SMOOTH SCROLL liens internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    console.log('Portfolio interactif chargé ! 🚀');
});
    // 6. PARTICULES ANIMÉES
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    for(let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = document.body.classList.contains('dark-mode') 
                ? `rgba(116,185,255,${p.radius / 3})`
                : `rgba(52,152,219,${p.radius / 3})`;
            ctx.fill();
            
            p.x += p.vx;
            p.y += p.vy;
            
            if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
        });
        requestAnimationFrame(animate);
    }
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    // 7. COMPTEUR VISITES GITHUB
    fetch('https://api.github.com/repos/arthurbasselin7-gif/mon-portfolio')
        .then(res => res.json())
        .then(data => {
            const visitsEl = document.getElementById('visites');
            visitsEl.innerHTML += `<br><small>⭐ ${data.stargazers_count} étoiles GitHub</small>`;
        });

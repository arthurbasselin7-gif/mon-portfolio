// Mon premier JavaScript !

// 1. Quand la page charge complètement
window.addEventListener('load', function() {
    console.log('Site chargé ! 🎉');
    
    // 2. Trouver le bouton "dark mode"
    const darkModeBtn = document.querySelector('#dark-mode-btn');
    
    // 3. Quand on clique dessus
    darkModeBtn.addEventListener('click', function() {
        // Basculer mode sombre/clair
        document.body.classList.toggle('dark-mode');
        
        // Changer texte du bouton
        if (document.body.classList.contains('dark-mode')) {
            darkModeBtn.textContent = '☀️ Mode Clair';
        } else {
            darkModeBtn.textContent = '🌙 Mode Sombre';
        }
    });
});

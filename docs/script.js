
    const toggle = document.getElementById('themeToggle');
    const body = document.body;

    window.addEventListener('load', function() {
        const savedTheme = localStorage.getItem('theme');
        
        if(savedTheme === 'dark') {
            toggle.checked = true;
            body.classList.add('dark');
        }
    });

    toggle.addEventListener('change', function() {
        body.classList.toggle('dark');
        
        if(toggle.checked) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

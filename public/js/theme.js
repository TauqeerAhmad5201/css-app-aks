document.addEventListener('DOMContentLoaded', function() {
  // Create theme toggle element if it doesn't exist
  if (!document.getElementById('theme-toggle')) {
    const themeToggle = document.createElement('div');
    themeToggle.id = 'theme-toggle';
    
    // Add color swatches
    const themes = [
      { name: 'light', class: '' },
      { name: 'dark', class: 'theme-dark' },
      { name: 'mint', class: 'theme-mint' },
      { name: 'warm', class: 'theme-warm' },
      { name: 'lavender', class: 'theme-lavender' }
    ];
    
    themes.forEach(theme => {
      const swatch = document.createElement('div');
      swatch.className = `color-swatch ${theme.name}`;
      swatch.setAttribute('data-theme', theme.class);
      swatch.title = `Switch to ${theme.name} theme`;
      
      swatch.addEventListener('click', () => {
        // Remove all theme classes
        document.body.classList.remove('theme-dark', 'theme-mint', 'theme-warm', 'theme-lavender');
        
        // Add selected theme class if not default/light
        if (theme.class) {
          document.body.classList.add(theme.class);
        }
        
        // Save preference to localStorage
        localStorage.setItem('preferred-theme', theme.class);
        
        // Update active state
        document.querySelectorAll('.color-swatch').forEach(s => {
          s.classList.remove('active');
        });
        swatch.classList.add('active');
      });
      
      themeToggle.appendChild(swatch);
    });
    
    document.body.appendChild(themeToggle);
    
    // Check for saved preference
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      const activeSwatch = document.querySelector(`[data-theme="${savedTheme}"]`);
      if (activeSwatch) activeSwatch.classList.add('active');
    } else {
      // Set default as active
      document.querySelector('.color-swatch.light').classList.add('active');
    }
  }
  
  // Optional: Add background pattern toggle
  const addPatternToggle = document.createElement('button');
  addPatternToggle.className = 'btn btn-sm btn-primary';
  addPatternToggle.style.position = 'fixed';
  addPatternToggle.style.bottom = '60px';
  addPatternToggle.style.right = '20px';
  addPatternToggle.textContent = 'Toggle Pattern';
  
  addPatternToggle.addEventListener('click', () => {
    const patterns = ['', 'bg-pattern-dots', 'bg-pattern-grid', 'bg-gradient-colorful'];
    const currentPattern = document.body.className.match(/bg-pattern-\w+|bg-gradient-\w+/);
    const currentIndex = currentPattern ? patterns.indexOf(currentPattern[0]) : 0;
    const nextIndex = (currentIndex + 1) % patterns.length;
    
    // Remove existing patterns
    document.body.classList.remove('bg-pattern-dots', 'bg-pattern-grid', 'bg-gradient-colorful');
    
    // Add next pattern
    if (patterns[nextIndex]) {
      document.body.classList.add(patterns[nextIndex]);
    }
  });
  
  document.body.appendChild(addPatternToggle);
});

document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

          
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

           
            const linkText = this.textContent.trim();
            console.log(` Navigatie: "${linkText}" geselecteerd`);
        });
    });


    const photoBox = document.getElementById('fotoContainer');
    if (photoBox) {
        photoBox.addEventListener('mouseenter', function() {
            this.style.background = '#e3deef';
            this.style.borderColor = '#9a88c4';
            this.style.transition = '0.2s';
        });
        photoBox.addEventListener('mouseleave', function() {
            this.style.background = '#edeaf3';
            this.style.borderColor = '#b8afcf';
        });
        photoBox.addEventListener('click', function() {
            alert(' Hier kun je jouw eigen foto plaatsen!\n(Vervang de placeholder door een <img> of achtergrondafbeelding)');
        });
    }


    const textBox = document.getElementById('tekstContainer');
    if (textBox) {
        textBox.addEventListener('mouseenter', function() {
            this.style.background = '#f1eef9';
            this.style.borderColor = '#c9bede';
            this.style.transition = '0.2s';
        });
        textBox.addEventListener('mouseleave', function() {
            this.style.background = '#f6f5fa';
            this.style.borderColor = '#e9e6f0';
        });
        textBox.addEventListener('click', function() {
            alert('Hier kun je jouw eigen tekst plaatsen.\nPas de HTML aan of gebruik een CMS.');
        });
    }

    console.log('Hallo Shruti! Je homepage is klaar. Veel plezier met aanpassen.');
});
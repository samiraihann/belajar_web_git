document.getElementById('search-input').addEventListener('keyup', function () {
    const filter = this.value.toLowerCase();
    const links = document.querySelectorAll('.link-container a');
    
    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes(filter)) {
            link.style.display = 'inline-block';
        } else {
            link.style.display = 'none';
        }
    });
});
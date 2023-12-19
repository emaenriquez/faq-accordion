document.addEventListener('DOMContentLoaded', function () {

    const faqSection = document.getElementById('faqSection');
    faqSection.addEventListener('click', function (event) {
      const icon = document.querySelector('.icon');
      icon.src = icon.src.endsWith('icon-plus.svg') ? 'assets/images/icon-minus.svg' : 'assets/images/icon-plus.svg';
    });
});
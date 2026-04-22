document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.check-item input');
    const progressBar = document.getElementById('progress-bar');

    function updateProgress() {
        const total = checkboxes.length;
        const checked = document.querySelectorAll('.check-item input:checked').length;
        const percentage = Math.round((checked / total) * 100);

        progressBar.style.width = percentage + '%';
        progressBar.textContent = percentage + '% Terpenuhi';

        if (percentage === 100) {
            progressBar.style.backgroundColor = '#22c55e'; // Hijau jika selesai
        } else {
            progressBar.style.backgroundColor = '#3b82f6';
        }
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });
});
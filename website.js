// Fungsi untuk menampilkan dan menyembunyikan deskripsi program
function showDetails(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

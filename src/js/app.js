try {
    window.AOS = require('aos');

    // Mengambil tinggi body pada browser
    const tinggi = $(window).height() / 2;

    // Membuat fungsi scroll ditampilkan Tombol Back-top
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > tinggi) {
            $('#back-top').addClass('active');
        } else {
            $('#back-top').removeClass('active');
        }
    });
} catch (e) {}
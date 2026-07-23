// ===== LOADER =====
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 800);
});

// ===== HAMBURGER MENU =====
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== MODAL DETAIL =====
function openDetail(title, imageSrc, description) {
    const modal = document.getElementById('detailModal');
    document.getElementById('detailTitle').textContent = title;
    document.getElementById('detailImage').src = imageSrc;
    document.getElementById('detailText').textContent = description;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetail() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== MODAL GALERI =====
function openGallery(src) {
    const modal = document.getElementById('galleryModal');
    document.getElementById('galleryImage').src = src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== TUTUP MODAL DENGAN ESC =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const detailModal = document.getElementById('detailModal');
        const galleryModal = document.getElementById('galleryModal');
        if (detailModal.classList.contains('active')) {
            closeDetail();
        }
        if (galleryModal.classList.contains('active')) {
            closeGallery();
        }
    }
});

// ===== TUTUP MODAL KLIK BACKGROUND =====
document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeDetail();
    }
});

document.getElementById('galleryModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeGallery();
    }
});

// ===== BOOKING FORM =====
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const telepon = document.getElementById('telepon').value.trim();
    const destinasi = document.getElementById('destinasi').value;
    const tanggal = document.getElementById('tanggal').value;
    const peserta = document.getElementById('peserta').value;
    const pesan = document.getElementById('pesan').value.trim();

    if (!nama || !email || !telepon || !destinasi || !tanggal || !peserta) {
        showNotification('Mohon lengkapi semua data yang diperlukan.');
        return;
    }

    if (peserta < 1) {
        showNotification('Jumlah peserta minimal 1 orang.');
        return;
    }

    const bookingData = {
        nama,
        email,
        telepon,
        destinasi,
        tanggal,
        peserta,
        pesan: pesan || '-'
    };

    console.log('Data Booking:', bookingData);
    showNotification('✅ Booking berhasil dikirim! Kami akan menghubungi Anda segera.');
    this.reset();
});

// ===== NOTIFICATION =====
function showNotification(message) {
    const oldNotif = document.querySelector('.notification');
    if (oldNotif) {
        oldNotif.remove();
    }

    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = message;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.classList.add('show');
    }, 10);

    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => {
            notif.remove();
        }, 500);
    }, 4000);
}

// ===== HERO IMAGE FALLBACK =====
document.getElementById('heroImage').addEventListener('error', function() {
    this.style.display = 'none';
    this.parentElement.style.background = 'linear-gradient(135deg, #1e3b2c, #2a5a3f)';
});

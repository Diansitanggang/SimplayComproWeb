document.addEventListener('DOMContentLoaded', function() {
    
    const cards = document.querySelectorAll('.brand-card');
    const brandRows = document.querySelectorAll('.brand-row');


    







    // Tambahkan kelas 'show' ke semua kartu secara bersamaan
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, 0); // Menambahkan kelas 'show' langsung tanpa delay
    });

    // Fungsi untuk mengatur scroll dan zoom effect
    function handleScroll() {
        const scrollPosition = window.scrollY;
        brandRows.forEach(row => {
            const rect = row.getBoundingClientRect();
            if (rect.top + scrollPosition < window.innerHeight && rect.bottom + scrollPosition > 0) {
                row.querySelectorAll('.brand-card').forEach(card => {
                    card.classList.add('zoom-out');
                });
            } else {
                row.querySelectorAll('.brand-card').forEach(card => {
                    card.classList.remove('zoom-out');
                });
            }
        });
    }

    // Menambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Menjalankan fungsi untuk pertama kali saat DOMContentLoaded

    const productContainer = document.querySelector('.product-container');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    let currentScrollPosition = 0;
    const itemWidth = productContainer.clientWidth / 10; // Mengatur untuk menampilkan 10 item

    nextBtn.addEventListener('click', () => {
        currentScrollPosition += itemWidth * 10; // Geser 10 item
        productContainer.scrollTo({
            top: 0,
            left: currentScrollPosition,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        currentScrollPosition -= itemWidth * 10; // Geser 10 item
        productContainer.scrollTo({
            top: 0,
            left: currentScrollPosition,
            behavior: 'smooth'
        });
    });

    const imageContainer = document.querySelector('.image-container');
    const image = document.querySelector('.hero-image');

    imageContainer.addEventListener('mousemove', (event) => {
        const rect = imageContainer.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const xPercent = (x / rect.width) - 0.5;
        const yPercent = (y / rect.height) - 0.5;

        const rotateX = yPercent * 30;
        const rotateY = xPercent * 30;

        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    imageContainer.addEventListener('mouseleave', () => {
        image.style.transform = 'rotateX(0) rotateY(0)';
    });

    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = carouselInner.children.length;
    const itemsVisible = 10; // Jumlah item yang terlihat

    function moveCarousel(direction) {
        const itemWidth = carouselInner.children[0].offsetWidth;
        currentScrollPosition += direction * itemWidth;

        // Looping kembali jika posisi scroll melebihi batas
        if (currentScrollPosition < 0) {
            currentScrollPosition = (totalItems - itemsVisible) * itemWidth;
        } else if (currentScrollPosition >= (totalItems - itemsVisible + 1) * itemWidth) {
            currentScrollPosition = 0;
        }

        const translateX = -currentScrollPosition;
        carouselInner.style.transform = `translateX(${translateX}px)`;
    }

    document.querySelector('.carousel-control.prev').addEventListener('click', () => moveCarousel(-1));
    document.querySelector('.carousel-control.next').addEventListener('click', () => moveCarousel(1));



});

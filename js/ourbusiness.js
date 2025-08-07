        // Mobile Menu Toggle
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const overlay = document.getElementById('overlay');
        
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('open');
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
        
        overlay.addEventListener('click', () => {
            hamburgerBtn.classList.remove('open');
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
        
        // Close menu when clicking links
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('open');
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });

        // Fungsi untuk menangani error gambar
        function handleImageError(event) {
            const imgElement = event.target;
            imgElement.style.backgroundColor = '#e0e7ff';
            imgElement.style.display = 'flex';
            imgElement.style.alignItems = 'center';
            imgElement.style.justifyContent = 'center';
            
            // Tambahkan pesan error jika diperlukan
            const errorDiv = document.createElement('div');
            errorDiv.textContent = 'Image failed to load';
            errorDiv.style.color = '#4b5563';
            errorDiv.style.fontSize = '0.875rem';
            
            imgElement.parentNode.replaceChild(errorDiv, imgElement);
        }

        // Terapkan event listener ke semua gambar
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('error', handleImageError);
            });
        });
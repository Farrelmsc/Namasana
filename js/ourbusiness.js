        // Mobile Menu Toggle
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
<<<<<<< HEAD
        const overlay = document.getElementById('overlay');
=======
        const closeMenuBtn = document.getElementById('close-menu-btn');
>>>>>>> 0ba6182892d2c3683184e76ae57f957858de9630
        
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('open');
            mobileMenu.classList.toggle('active');
<<<<<<< HEAD
            overlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
        
        overlay.addEventListener('click', () => {
            hamburgerBtn.classList.remove('open');
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
=======
            document.body.classList.toggle('no-scroll');
        });
        
        closeMenuBtn.addEventListener('click', () => {
            hamburgerBtn.classList.remove('open');
            mobileMenu.classList.remove('active');
>>>>>>> 0ba6182892d2c3683184e76ae57f957858de9630
            document.body.classList.remove('no-scroll');
        });
        
        // Close menu when clicking links
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('open');
                mobileMenu.classList.remove('active');
<<<<<<< HEAD
                overlay.classList.remove('active');
=======
>>>>>>> 0ba6182892d2c3683184e76ae57f957858de9630
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
<<<<<<< HEAD
=======
            errorDiv.style.padding = '10px';
            errorDiv.style.textAlign = 'center';
>>>>>>> 0ba6182892d2c3683184e76ae57f957858de9630
            
            imgElement.parentNode.replaceChild(errorDiv, imgElement);
        }

        // Terapkan event listener ke semua gambar
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('error', handleImageError);
            });
<<<<<<< HEAD
        });
=======
        });
        // Mobile Menu Toggle
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('open');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
        
        closeMenuBtn.addEventListener('click', () => {
            hamburgerBtn.classList.remove('open');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
        
        // Close menu when clicking links
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('open');
                mobileMenu.classList.remove('active');
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
            errorDiv.style.padding = '10px';
            errorDiv.style.textAlign = 'center';
            
            imgElement.parentNode.replaceChild(errorDiv, imgElement);
        }

        // Terapkan event listener ke semua gambar
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('error', handleImageError);
            });
        });
>>>>>>> 0ba6182892d2c3683184e76ae57f957858de9630

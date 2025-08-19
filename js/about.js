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
            
            // Fungsi untuk sidebar sticky behavior
            const sidebar = document.querySelector('nav[aria-label="About Us Navigation"]');
            const mainContent = document.querySelector('main');
            
            function updateSidebarPosition() {
                const scrollPosition = window.scrollY;
                const mainOffsetTop = mainContent.offsetTop;
                const mainHeight = mainContent.offsetHeight;
                const sidebarHeight = sidebar.offsetHeight;
                const windowHeight = window.innerHeight;
                
                if (window.innerWidth >= 768) {
                    if (scrollPosition > mainOffsetTop - 100) {
                        if (scrollPosition + windowHeight > mainOffsetTop + mainHeight) {
                            sidebar.style.position = 'absolute';
                            sidebar.style.top = `${mainHeight - sidebarHeight}px`;
                        } else {
                            sidebar.style.position = 'sticky';
                            sidebar.style.top = '100px';
                        }
                    } else {
                        sidebar.style.position = 'relative';
                        sidebar.style.top = 'auto';
                    }
                }
            }
            
            window.addEventListener('scroll', updateSidebarPosition);
            window.addEventListener('resize', updateSidebarPosition);
            updateSidebarPosition();
            
            // Fungsi untuk video optimization
            const video = document.querySelector('video');
            if (video) {
                // Preload metadata untuk performa lebih baik
                video.preload = 'metadata';
                
                // Optimasi untuk mobile
                if ('connection' in navigator) {
                    if (navigator.connection.saveData || navigator.connection.effectiveType.includes('2g')) {
                        video.preload = 'none';
                    }
                }
            }
        });
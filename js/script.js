        tailwind.config = {
            theme: {
                extend: {
                    screens: {
                        'xs': '480px',
                    }
                }
            }
        }
  
    
    // Fungsi untuk menangani error gambar
    document.addEventListener('DOMContentLoaded', function() {
      // Error handling untuk gambar
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        img.addEventListener('error', function() {
          this.style.backgroundColor = '#e0e7ff';
          this.style.display = 'flex';
          this.style.alignItems = 'center';
          this.style.justifyContent = 'center';
          this.innerHTML = '<div class="text-gray-500">Image failed to load</div>';
        });
      });
      
      // Sticky sidebar behavior
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
      
      // Video optimization
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

document.addEventListener('DOMContentLoaded', () => {
            const carousel = document.getElementById('carousel');
            const buttons = document.querySelectorAll('.carousel-indicator');
            let slideIndex = 0;
            const totalSlides = buttons.length;
            let interval = null;

            function goToSlide(index) {
                if(index < 0) index = totalSlides - 1;
                if(index >= totalSlides) index = 0;
                
                slideIndex = index;
                carousel.style.transform = `translateX(${-100 * slideIndex}%)`;
                
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.classList.remove('bg-yellow-400');
                    btn.classList.add('bg-gray-300');
                });
                
                buttons[slideIndex].classList.add('active');
                buttons[slideIndex].classList.add('bg-yellow-400');
                buttons[slideIndex].classList.remove('bg-gray-300');
            }

            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    goToSlide(parseInt(btn.dataset.slide));
                    resetInterval();
                });
            });

            function startAutoSlide() {
                interval = setInterval(() => {
                    goToSlide(slideIndex + 1);
                }, 5000);
            }

            function resetInterval() {
                clearInterval(interval);
                startAutoSlide();
            }

            // Initialize
            goToSlide(0);
            startAutoSlide();
            
            // Add hover effect for publication items
            document.querySelectorAll('.publication-item').forEach(item => {
                item.addEventListener('mouseenter', () => {
                    item.querySelector('.book-icon').style.background = 
                        'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)';
                });
                
                item.addEventListener('mouseleave', () => {
                    item.querySelector('.book-icon').style.background = 
                        'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)';
                });
            });
        });

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
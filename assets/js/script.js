document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer for Sri Dwarakamaye
    const currentYearSdElement = document.getElementById('current-year-sd');
    if (currentYearSdElement) {
        currentYearSdElement.textContent = new Date().getFullYear();
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileServicesDropdownToggle = document.getElementById('mobile-services-dropdown-toggle');
    const mobileServicesDropdown = document.getElementById('mobile-services-dropdown');
    // Ensure mobileDropdownIcon is correctly selected, might be null if not present initially
    const mobileDropdownIcon = mobileServicesDropdownToggle ? mobileServicesDropdownToggle.querySelector('.mobile-dropdown-icon') : null;

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        });
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) mobileMenu.classList.add('hidden');
            if (mobileMenuButton) mobileMenuButton.querySelector('i').setAttribute('data-lucide', 'menu');
            if (mobileServicesDropdown) mobileServicesDropdown.classList.add('hidden');
            if (mobileDropdownIcon) mobileDropdownIcon.classList.remove('rotate-180');
            lucide.createIcons();
        });
    });

    if (mobileServicesDropdownToggle && mobileServicesDropdown && mobileDropdownIcon) {
        mobileServicesDropdownToggle.addEventListener('click', () => {
            mobileServicesDropdown.classList.toggle('hidden');
            mobileDropdownIcon.classList.toggle('rotate-180');
        });
    }

    // --- Smooth scrolling for all navigation links (only applies to index.html or root path) ---
    // This function needs to be adjusted slightly for internal pages.
    // On internal pages, links like #appointments should still scroll, but links like #home should go to index.html#home
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault(); // Prevent default only if it's an internal anchor on the same page
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // If it's a full path like index.html#home, let the default behavior happen
        });
    });


    // --- Data for Services, Doctors, Testimonials, Facilities (Sri Dwarakamaye Specific) ---
    // Services data - UPDATED WITH SPECIFIC IMAGE PATHS AND PAGE LINKS
    const servicesData = [
        { name: "General Medicine", icon: "stethoscope", description: "Comprehensive care for common illnesses and chronic conditions.", page: "general-medicine.html" },
        { name: "General Surgery", icon: "scalpel", image: "assets/images/gen_sur.png", description: "Expert surgical solutions for a wide range of conditions.", page: "general-surgery.html"},
        { name: "Cardiology", icon: "heart", description: "Advanced heart care, diagnostics, and treatment.", page: "cardiology.html" },
        { name: "Neurology", icon: "brain", description: "Specialized care for disorders of the brain and nervous system.", page: "neurology.html" },
        { name: "Orthopedics", icon: "bone", description: "Treatment for musculoskeletal injuries and conditions.", page: "orthopedics.html" },
        { name: "Gastroenterology", icon: "stomach", image: "assets/images/gastroentro.png", description: "Diagnosis and treatment of digestive system disorders.", page: "gastroenterology.html" },
        { name: "Gynecology & OBGY", icon: "baby", description: "Comprehensive women's health, obstetrics, and gynecology services.", page: "gynecology-obgy.html" },
        { name: "Pediatrics", icon: "baby", description: "Dedicated medical care for infants, children, and adolescents.", page: "pediatrics.html" },
        { name: "Pulmonology", icon: "lungs", image: "assets/images/pulmonology_17307127.png", description: "Expert care for respiratory diseases and lung health.", page: "pulmonology.html" },
        { name: "ENT (Ear, Nose, Throat)", icon: "ear", description: "Specialized treatment for ear, nose, throat, and head & neck conditions.", page: "ent.html" },
        { name: "Urology", icon: "droplet", description: "Care for urinary tract and male reproductive system disorders.", page: "urology.html" },
        { name: "Oncology", icon: "pill", description: "Comprehensive cancer diagnosis, treatment, and support.", page: "oncology.html" },
        { name: "Dermatology", icon: "sparkles", description: "Expert care for skin, hair, and nail conditions.", page: "dermatology.html" },
        { name: "Physiotherapy", icon: "dumbbell", description: "Rehabilitation and physical therapy for recovery and mobility.", page: "physiotherapy.html" },
        { name: "Radiology", icon: "scan", description: "Advanced imaging services for accurate diagnosis.", page: "radiology.html" },
        { name: "Anesthesia", icon: "syringe", description: "Safe and effective anesthesia services for surgical procedures.", page: "anesthesia.html" },
        { name: "Oral & Maxillofacial Surgery", icon: "tooth", image: "assets/images/tooth-extraction_2818358.png", description: "Surgical treatment for conditions affecting the mouth, jaw, and face.", page: "oral-maxillofacial-surgery.html" },
        { name: "Emergency Medicine (RMO)", icon: "ambulance", description: "24/7 immediate medical attention for urgent and life-threatening conditions.", page: "emergency-medicine.html" },
    ];

    // Doctors data from WhatsApp Image 2025-07-16 at 1.58.12 AM.jpeg and 1.58.10 AM (2).jpeg
    const doctorsData = [
        {
            name: "Dr. P. Vamshi Krishna",
            specialty: "M.D., General Physician (Director & Main Doctor)",
            image: "assets/images/WhatsApp Image 2025-07-16 at 1.58.10 AM (2).jpeg", // Specific image for director
            bio: "Dr. Vamshi Krishna is the esteemed Director and main General Physician, providing leadership and comprehensive primary care."
        },
        {
            name: "Dr. K. Arun",
            specialty: "M.S. (Gen Surgeon & Laparoscopy)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Arun",
            bio: "Dr. Arun is an expert in general and laparoscopic surgeries, ensuring minimally invasive procedures."
        },
        {
            name: "Dr. B. Anudeep",
            specialty: "M.S. (Ortho)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Anudeep",
            bio: "Dr. Anudeep specializes in orthopedic surgeries, focusing on bone and joint health."
        },
        {
            name: "Dr. Hruday",
            specialty: "M.Ch (Urology)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Hruday",
            bio: "Dr. Hruday provides advanced urological care and surgical solutions."
        },
        {
            name: "Dr. K. Dilzith Arora",
            specialty: "M.D.(C.M) Clinical Cardiologist",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Arora",
            bio: "Dr. Arora is a renowned Clinical Cardiologist, dedicated to comprehensive heart care."
        },
        {
            name: "Dr. Harikrishna",
            specialty: "M.D, D.M (Neuro)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Harikrishna",
            bio: "Dr. Harikrishna specializes in neurology, treating complex brain and nervous system disorders."
        },
        {
            name: "Dr. Srilatha",
            specialty: "M.S (OBG)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Srilatha",
            bio: "Dr. Srilatha provides expert obstetric and gynecological care for women's health."
        },
        {
            name: "Dr. M. Ramu",
            specialty: "DNB, DTCD (Chest)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Ramu",
            bio: "Dr. Ramu is a chest specialist, focusing on respiratory and pulmonary conditions."
        },
        {
            name: "Dr. Kruthartha Mohareeru",
            specialty: "MDS (MFS)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Mohareeru",
            bio: "Dr. Mohareeru specializes in Oral & Maxillofacial Surgery, providing advanced facial and oral treatments."
        },
        {
            name: "Dr. Prashanth",
            specialty: "M.S (ENT)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Prashanth",
            bio: "Dr. Prashanth offers specialized care for ear, nose, and throat conditions."
        },
        {
            name: "Dr. P.V.K. Kishor",
            specialty: "M.Ch (Neuro Surgeon)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Kishor",
            bio: "Dr. Kishor is a skilled Neuro Surgeon, performing complex brain and spinal surgeries."
        },
        {
            name: "Dr. Sandeep",
            specialty: "DM (Nephrology)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Sandeep",
            bio: "Dr. Sandeep specializes in nephrology, providing expert care for kidney diseases."
        },
        {
            name: "Dr. V. Swaroopa",
            specialty: "M.D (Anaesthesia)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Swaroopa",
            bio: "Dr. Swaroopa ensures safe and effective anesthesia for all surgical procedures."
        },
        {
            name: "Dr.V. Parameshwar",
            specialty: "M.D, DNB (Gastroenterology)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Parameshwar",
            bio: "Dr. Parameshwar is a gastroenterologist, specializing in digestive health."
        },
        {
            name: "Dr. Rajesh Reddy",
            specialty: "MBBS (RMO)",
            image: "https://placehold.co/300x380/00A79D/ffffff?text=Dr.+Reddy",
            bio: "Dr. Rajesh Reddy serves as a Resident Medical Officer, providing essential medical support."
        },
    ];

    const testimonialsData = [
        {
            quote: "The care at Sri Dwarakamaye was exceptional. The staff was incredibly supportive and the facilities are top-notch.",
            author: "Anusha R."
        },
        {
            quote: "My recovery after surgery was smooth thanks to the dedicated team. Highly recommend their surgical department!",
            author: "Suresh P."
        },
        {
            quote: "I felt truly cared for during my stay. The doctors explained everything clearly and compassionately.",
            author: "Lakshmi D."
        },
        {
            quote: "A truly multispeciality hospital. All my family's health needs are met under one roof with excellent care.",
            author: "Ravi K."
        },
        {
            quote: "The emergency services were prompt and life-saving. Grateful for the quick action of the team.",
            author: "Meena S."
        },
        // NEW TESTIMONIAL ADDED HERE
        {
            quote: "Outstanding medical professionals and a very clean environment. I highly recommend Sri Dwarakamaye Hospitals for their excellent service.",
            author: "Priya V."
        }
    ];

    const facilitiesData = [
        { name: "24x7 Emergency Services", icon: "ambulance", color: "text-sd-secondary", image: "" }, // No image specified, will use Lucide icon
        { name: "24x7 Ambulance Services", icon: "truck", color: "text-sd-primary", image: "" },
        { name: "Advanced Operation Theatres", icon: "scalpel", color: "text-sd-primary", image: "assets/images/advancedoperationtheatre.png" },
        { name: "ICU & Critical Care Units", icon: "heart-pulse", color: "text-sd-secondary", image: "" },
        { name: "Modern Labor & Delivery Rooms", icon: "baby", color: "text-sd-primary", image: "" },
        { name: "Digital X-Ray & Imaging", icon: "scan", color: "text-sd-secondary", image: "" },
        { name: "Ultra Sound & Color Doppler", icon: "scan-line", color: "text-sd-primary", image: "" },
        { name: "ECG & 2D Echo", icon: "activity", color: "text-sd-secondary", image: "" },
        { name: "Pharmacy Services", icon: "pill", color: "text-sd-primary", image: "" },
        { name: "Well-equipped Laboratories", icon: "flask-conical", color: "text-sd-secondary", image: "" },
        { name: "Blood Bank", icon: "droplet", color: "text-sd-primary", image: "" },
        { name: "C-ARM Facility", icon: "target", color: "text-sd-secondary", image: "" },
    ];

    // Health Packages data (kept for potential future use, not linked in header)
    const healthPackagesData = [
        {
            name: "Comprehensive Health Check",
            image: "https://placehold.co/400x250/00A79D/ffffff?text=Health+Check",
            price: "Rs. 2,500",
            description: "Full body check-up for overall health assessment.",
            buttonText: "Book Now"
        },
        {
            name: "Cardiac Wellness Package",
            image: "https://placehold.co/400x250/00A79D/ffffff?text=Cardiac+Wellness",
            price: "Rs. 5,000",
            description: "Focused on heart health, including ECG, Echo, and lipid profile.",
            buttonText: "Book Now"
        },
        {
            name: "Diabetic Management Plan",
            image: "https://placehold.co/400x250/00A79D/ffffff?text=Diabetic+Plan",
            price: "Rs. 1,800",
            description: "Tests and consultation for effective diabetes management.",
            buttonText: "Book Now"
        },
        {
            name: "Women's Health Screening",
            image: "https://placehold.co/400x250/00A79D/ffffff?text=Women's+Health",
            price: "Rs. 3,200",
            description: "Essential screenings for women's well-being.",
            buttonText: "Book Now"
        },
        {
            name: "Senior Citizen Health Package",
            image: "https://placehold.co/400x250/00A79D/ffffff?text=Senior+Health",
            price: "Rs. 4,000",
            description: "Tailored health checks for elderly patients.",
            buttonText: "Book Now"
        },
        {
            name: "Child Health & Growth Check",
            image: "https://placehold.co/400x250/00A79D/ffffff?text=Child+Health",
            price: "Rs. 1,500",
            description: "Growth monitoring and basic health assessment for children.",
            buttonText: "Book Now"
        },
    ];

    // --- Render Services (Dropdown and NEW Services Scroller) ---
    const servicesDropdownDesktop = document.querySelector('.services-dropdown');
    const servicesScroller = document.getElementById('services-scroller'); // New scroller for services
    const prevServiceBtn = document.getElementById('prev-service');
    const nextServiceBtn = document.getElementById('next-service');
    let serviceSlideInterval; // New interval for services scroller

    const specialitySelect = document.getElementById('speciality'); // For appointment form
    const mobileServicesDropdownList = document.getElementById('mobile-services-dropdown');

    servicesData.forEach(service => {
        // Logic to use image if available, otherwise fallback to Lucide icon
        let iconOrImageHtmlForDropdown = ''; // For header dropdowns
        if (service.image) {
            iconOrImageHtmlForDropdown = `<img src="${service.image}" onerror="this.onerror=null;this.src='https://placehold.co/24x24/00A79D/FFFFFF?text=${service.name.substring(0,2)}';" alt="${service.name} Icon" class="w-6 h-6 mr-3 rounded-full object-contain">`;
        } else if (service.icon) {
            iconOrImageHtmlForDropdown = `<i data-lucide="${service.icon}" class="mr-2 w-5 h-5"></i>`;
        }

        let iconOrImageHtmlForScroller = ''; // For main services scroller
        if (service.image) {
            iconOrImageHtmlForScroller = `<img src="${service.image}" onerror="this.onerror=null;this.src='https://placehold.co/64x64/00A79D/FFFFFF?text=${service.name.substring(0,2)}';" alt="${service.name} Icon" class="w-16 h-16 mb-4 object-contain">`;
        } else if (service.icon) {
            iconOrImageHtmlForScroller = `<i data-lucide="${service.icon}" class="w-16 h-16 text-sd-primary mb-4"></i>`;
        }

        // Desktop Dropdown
        if (servicesDropdownDesktop) {
            const dropdownLink = document.createElement('a');
            dropdownLink.href = service.page || '#services'; // Link to service page, or # if not defined
            dropdownLink.classList.add('px-4', 'py-2', 'text-sd-white', 'hover:bg-sd-secondary', 'block', 'flex', 'items-center');
            dropdownLink.innerHTML = iconOrImageHtmlForDropdown + service.name;
            servicesDropdownDesktop.appendChild(dropdownLink);
        }

        // Mobile Dropdown
        if (mobileServicesDropdownList) {
            const mobileDropdownLink = document.createElement('a');
            mobileDropdownLink.href = service.page || '#services';
            mobileDropdownLink.classList.add('mobile-nav-link', 'text-sd-white', 'hover:bg-sd-secondary', 'font-medium', 'transition', 'duration-300', 'w-full', 'py-2', 'flex', 'items-center', 'justify-center');
            mobileDropdownLink.innerHTML = iconOrImageHtmlForDropdown + service.name;
            mobileServicesDropdownList.appendChild(mobileDropdownLink);
        }

        // Services Scroller (Centres of Excellence section)
        if (servicesScroller) {
            const serviceCard = `
                <a href="${service.page || '#'}" class="service-card flex-shrink-0 w-64 bg-sd-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:scale-105 p-4 text-center flex flex-col items-center justify-center">
                    ${iconOrImageHtmlForScroller}
                    <h3 class="text-xl font-bold text-sd-dark-text mb-2">${service.name}</h3>
                    <p class="text-sd-light-text text-sm">${service.description}</p>
                </a>
            `;
            servicesScroller.insertAdjacentHTML('beforeend', serviceCard);
        }

        // Populate Speciality dropdown in Appointment Form
        if (specialitySelect) {
            const option = document.createElement('option');
            option.value = service.name;
            option.textContent = service.name;
            specialitySelect.appendChild(option);
        }
    });

    // Services Scroller Logic (for index.html main services)
    if (servicesScroller && prevServiceBtn && nextServiceBtn) {
        function autoSlideServices() {
            const currentScroll = servicesScroller.scrollLeft;
            const scrollAmount = 344; // Approx width of service card + gap
            const maxScroll = servicesScroller.scrollWidth - servicesScroller.clientWidth;

            let newScroll = currentScroll + scrollAmount;

            if (newScroll >= maxScroll && maxScroll > 0) {
                newScroll = 0;
            } else if (maxScroll <= 0) {
                stopServiceSlideInterval();
                return;
            }
            servicesScroller.scrollTo({ left: newScroll, behavior: 'smooth' });
        }

        function startServiceSlideInterval() {
            clearInterval(serviceSlideInterval);
            serviceSlideInterval = setInterval(autoSlideServices, 4000); // Auto-slide every 4 seconds
        }

        function stopServiceSlideInterval() {
            clearInterval(serviceSlideInterval);
        }

        prevServiceBtn.addEventListener('click', () => {
            stopServiceSlideInterval();
            servicesScroller.scrollBy({ left: -350, behavior: 'smooth' });
            startServiceSlideInterval();
        });

        nextServiceBtn.addEventListener('click', () => {
            stopServiceSlideInterval();
            servicesScroller.scrollBy({ left: 350, behavior: 'smooth' });
            startServiceSlideInterval();
        });

        setTimeout(() => {
            startServiceSlideInterval();
        }, 500);

        servicesScroller.addEventListener('mouseenter', stopServiceSlideInterval);
        servicesScroller.addEventListener('mouseleave', startServiceSlideInterval);
    }


    // --- Render Doctors (Scroller) ---
    const doctorsScroller = document.getElementById('doctors-scroller');
    const prevDoctorBtn = document.getElementById('prev-doctor');
    const nextDoctorBtn = document.getElementById('next-doctor');
    let doctorSlideInterval;

    if (doctorsScroller && prevDoctorBtn && nextDoctorBtn) {
        doctorsData.forEach(doctor => {
            const doctorCard = `
                <div class="doctor-card flex-shrink-0 w-64 bg-sd-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:scale-105">
                    <img
                        src="${doctor.image}"
                        alt="Dr. ${doctor.name}"
                        onerror="this.onerror=null;this.src='https://placehold.co/300x380/00A79D/ffffff?text=${doctor.name.split(' ').map(n => n[0]).join('.')}'"
                        class="w-full h-64 object-cover"
                    />
                    <div class="p-4 text-center">
                        <h3 class="text-xl font-bold text-sd-dark-text mb-1">${doctor.name}</h3>
                        <p class="text-sd-secondary text-sm font-semibold">${doctor.specialty}</p>
                        <p class="text-sd-light-text text-xs mt-1">${doctor.bio}</p>
                        <a href="#appointments" class="mt-4 inline-flex items-center px-4 py-2 bg-sd-primary text-sd-white text-sm font-semibold rounded-full hover:bg-teal-700 transition duration-300">
                            Book Now <i data-lucide="calendar-days" class="ml-2 w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            `;
            doctorsScroller.insertAdjacentHTML('beforeend', doctorCard);
        });

        function autoSlideDoctors() {
            const currentScroll = doctorsScroller.scrollLeft;
            const scrollAmount = 344;
            const maxScroll = doctorsScroller.scrollWidth - doctorsScroller.clientWidth;

            let newScroll = currentScroll + scrollAmount;

            if (newScroll >= maxScroll && maxScroll > 0) {
                newScroll = 0;
            } else if (maxScroll <= 0) {
                stopDoctorSlideInterval();
                return;
            }
            doctorsScroller.scrollTo({ left: newScroll, behavior: 'smooth' });
        }

        function startDoctorSlideInterval() {
            clearInterval(doctorSlideInterval);
            doctorSlideInterval = setInterval(autoSlideDoctors, 3000);
        }

        function stopDoctorSlideInterval() {
            clearInterval(doctorSlideInterval);
        }

        prevDoctorBtn.addEventListener('click', () => {
            stopDoctorSlideInterval();
            doctorsScroller.scrollBy({ left: -350, behavior: 'smooth' });
            startDoctorSlideInterval();
        });

        nextDoctorBtn.addEventListener('click', () => {
            stopDoctorSlideInterval();
            doctorsScroller.scrollBy({ left: 350, behavior: 'smooth' });
            startDoctorSlideInterval();
        });

        setTimeout(() => {
            startDoctorSlideInterval();
        }, 500);

        doctorsScroller.addEventListener('mouseenter', stopDoctorSlideInterval);
        doctorsScroller.addEventListener('mouseleave', startDoctorSlideInterval);
    }

    // --- Values Section Flip Card Functionality ---
    // The flip is now handled purely by CSS :hover, no JS needed to toggle 'flipped' class.
    // The JS for this section is removed to rely on CSS.


    // --- Render Facilities (only on index.html) ---
    const facilitiesGrid = document.getElementById('facilities-grid');
    if (facilitiesGrid) {
        facilitiesData.forEach(facility => {
            let iconHtml = '';
            // Facilities can use either an image or a Lucide icon
            if (facility.image) {
                iconHtml = `<img src="${facility.image}" alt="${facility.name} Icon" class="w-12 h-12 mb-4 facility-icon object-contain">`;
            } else if (facility.icon) {
                iconHtml = `<i data-lucide="${facility.icon}" class="w-12 h-12 mb-4 facility-icon ${facility.color}"></i>`;
            }

            const facilityCard = `
                <div class="facility-card bg-sd-white p-6 rounded-lg shadow-md text-center transition duration-300 hover:scale-105">
                    ${iconHtml}
                    <h3 class="text-xl font-semibold mb-2 text-sd-dark-text">${facility.name}</h3>
                </div>
            `;
            facilitiesGrid.insertAdjacentHTML('beforeend', facilityCard);
        });
    }

    // --- Render Testimonials (with animation) ---
    const testimonialsGrid = document.getElementById('testimonials-grid');
    if (testimonialsGrid) {
        testimonialsData.forEach((testimonial, index) => {
            const testimonialCard = document.createElement('div');
            testimonialCard.classList.add('bg-sd-primary', 'p-8', 'rounded-lg', 'shadow-md', 'border', 'border-sd-light-bg', 'testimonial-card', 'opacity-0'); // Added 'opacity-0' for animation
            
            testimonialCard.innerHTML = `
                <p class="text-lg italic mb-6 leading-relaxed">"${testimonial.quote}"</p>
                <p class="text-right font-semibold">- ${testimonial.author}</p>
            `;
            testimonialsGrid.appendChild(testimonialCard);
        });

        const testimonialCards = document.querySelectorAll('.testimonial-card');
        const testimonialsSection = document.getElementById('testimonials');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    testimonialCards.forEach((card, index) => {
                        // Stagger the animation
                        setTimeout(() => {
                            if (index % 2 === 0) { // Even cards slide from left
                                card.classList.add('animate-slide-in-left');
                            } else { // Odd cards slide from right
                                card.classList.add('animate-slide-in-right');
                            }
                        }, index * 200); // 200ms delay between each card
                    });
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, { threshold: 0.2 }); // Reduced threshold to 0.2 for earlier trigger

        observer.observe(testimonialsSection);
    }


    // --- Number Counting Animation for "Why Choose Us" section ---
    const whyChooseUsSection = document.getElementById('why-choose-us');
    let hasAnimated = false;

    function animateNumber(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 10);
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.floor(current).toLocaleString() + '+';
        }, 10);
    }

    if (whyChooseUsSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    const statBoxes = entry.target.querySelectorAll('#why-choose-us .grid > div');

                    if (statBoxes[0] && statBoxes[0].querySelector('h3')) animateNumber(statBoxes[0].querySelector('h3'), 50000, 2000); // Patients Treated
                    if (statBoxes[1] && statBoxes[1].querySelector('h3')) animateNumber(statBoxes[1].querySelector('h3'), 50, 1500); // Specialities
                    if (statBoxes[2] && statBoxes[2].querySelector('h3')) animateNumber(statBoxes[2].querySelector('h3'), 200, 1500); // Doctors

                    hasAnimated = true;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(whyChooseUsSection);
    }

    // --- Appointment Form Submission (using Make.com Webhook) ---
    const appointmentForm = document.getElementById('appointment-form');
    const appointmentConfirmation = document.getElementById('appointment-confirmation');
    const closeConfirmationButton = document.getElementById('close-confirmation');

    // IMPORTANT: Replace this with your actual Make.com webhook URL for Sri Dwarakamaye
    const MAKE_COM_WEBHOOK_URL = 'https://hook.eu2.make.com/48hj36qidveym16u29yl626zwvstib5v'; // <--- REPLACE THIS LINE

    if (appointmentForm && appointmentConfirmation && closeConfirmationButton) {
        appointmentForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = {
                name: appointmentForm.name.value,
                email: appointmentForm.email.value,
                phone: appointmentForm.phone.value,
                speciality: appointmentForm.speciality.value,
                date: appointmentForm.date.value,
                message: appointmentForm.message.value,
                timestamp: new Date().toISOString()
            };

            try {
                const response = await fetch(MAKE_COM_WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    appointmentConfirmation.classList.remove('hidden', 'bg-red-100', 'border-red-400', 'text-red-700');
                    appointmentConfirmation.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
                    appointmentConfirmation.querySelector('strong').textContent = 'Success!';
                    appointmentConfirmation.querySelector('span').textContent = 'Your appointment request has been submitted. We will contact you shortly.';
                    
                    appointmentForm.reset();

                    setTimeout(() => {
                        appointmentConfirmation.classList.add('hidden');
                    }, 5000);
                } else {
                    console.error("Error submitting to Make.com webhook:", response.status, response.statusText);
                    appointmentConfirmation.classList.remove('hidden', 'bg-green-100', 'border-green-400', 'text-green-700');
                    appointmentConfirmation.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
                    appointmentConfirmation.querySelector('strong').textContent = 'Error!';
                    appointmentConfirmation.querySelector('span').textContent = 'There was an issue submitting your appointment. Please try again later.';
                }

            } catch (e) {
                console.error("Network or fetch error:", e);
                appointmentConfirmation.classList.remove('hidden', 'bg-green-100', 'border-green-400', 'text-green-700');
                appointmentConfirmation.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
                appointmentConfirmation.querySelector('strong').textContent = 'Error!';
                appointmentConfirmation.querySelector('span').textContent = 'There was an issue submitting your appointment. Please check your internet connection and try again.';
            }
        });

        closeConfirmationButton.addEventListener('click', () => {
            appointmentConfirmation.classList.add('hidden');
        });
    } else {
        console.warn("Appointment form elements not found. Form submission will not be handled.");
    }

    // --- Render Health Packages (only on health-packages.html) ---
    // This part is kept in script.js but will only run if health-packages.html exists and has the #packages-grid element.
    const packagesGrid = document.getElementById('packages-grid');
    if (packagesGrid) {
        healthPackagesData.forEach(pkg => {
            const packageCard = `
                <div class="package-card bg-sd-white rounded-lg shadow-md overflow-hidden flex flex-col transition duration-300 hover:scale-105">
                    <img src="${pkg.image}" alt="${pkg.name}" class="w-full h-48 object-cover rounded-t-lg mb-4">
                    <div class="p-6 flex flex-col items-center text-center flex-grow">
                        <h3 class="text-2xl font-bold text-sd-secondary mb-2">${pkg.name}</h3>
                        <p class="text-sd-light-text mb-4 flex-grow">${pkg.description}</p>
                        <p class="text-sd-primary text-3xl font-extrabold mb-4">${pkg.price}</p>
                        <button class="w-full bg-sd-primary text-sd-white py-3 rounded-md font-semibold text-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105">
                            ${pkg.buttonText}
                        </button>
                    </div>
                </div>
            `;
            packagesGrid.insertAdjacentHTML('beforeend', packageCard);
        });
    }

    // --- Function to render "Other Services" on individual service pages ---
    function renderOtherServicesSection() {
        const otherServicesGrid = document.getElementById('other-services-grid');
        const currentPageServiceName = document.body.dataset.currentService; 

        if (otherServicesGrid && servicesData && currentPageServiceName) {
            const filteredServices = servicesData.filter(service => service.name !== currentPageServiceName);

            otherServicesGrid.innerHTML = '';
            filteredServices.forEach(service => {
                let iconOrImageHtml = '';
                if (service.image) { // Prefer image for other services
                    iconOrImageHtml = `<img src="${service.image}" onerror="this.onerror=null;this.src='https://placehold.co/32x32/00A79D/FFFFFF?text=${service.name.substring(0,2)}';" alt="${service.name} Icon" class="w-8 h-8 service-icon object-contain">`;
                } else if (service.icon) { // Fallback to Lucide icon
                    iconOrImageHtml = `<i data-lucide="${service.icon}" class="w-8 h-8 service-icon"></i>`;
                }

                const serviceCard = `
                    <a href="${service.page || '#'}" class="service-card flex-shrink-0 w-64 bg-sd-white p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center group transition duration-300 hover:scale-105">
                        <div class="mb-4 p-3 bg-sd-light-bg rounded-full shadow-inner flex items-center justify-center">
                            ${iconOrImageHtml}
                        </div>
                        <h3 class="text-2xl font-semibold mb-3 text-sd-dark-text transition duration-300 group-hover:text-sd-secondary">${service.name}</h3>
                        <p class="leading-relaxed text-sd-light-text">${service.description}</p>
                    </a>
                `;
                otherServicesGrid.insertAdjacentHTML('beforeend', serviceCard);
            });
            lucide.createIcons(); // Re-create icons after adding new elements
        }
    }

    // Call renderOtherServicesSection if on a service page
    if (document.body.dataset.currentService) {
        renderOtherServicesSection();

        // --- Other Services Scroller Logic (for service pages) ---
        const otherServicesScroller = document.getElementById('other-services-grid'); // This is the same element as the grid
        const prevOtherServiceBtn = document.getElementById('prev-other-service');
        const nextOtherServiceBtn = document.getElementById('next-other-service');
        let otherServiceSlideInterval;

        if (otherServicesScroller && prevOtherServiceBtn && nextOtherServiceBtn) {
            function autoSlideOtherServices() {
                const currentScroll = otherServicesScroller.scrollLeft;
                const scrollAmount = 344; // Approx width of service card + gap
                const maxScroll = otherServicesScroller.scrollWidth - otherServicesScroller.clientWidth;

                let newScroll = currentScroll + scrollAmount;

                if (newScroll >= maxScroll && maxScroll > 0) {
                    newScroll = 0;
                } else if (maxScroll <= 0) {
                    stopOtherServiceSlideInterval();
                    return;
                }
                otherServicesScroller.scrollTo({ left: newScroll, behavior: 'smooth' });
            }

            function startOtherServiceSlideInterval() {
                clearInterval(otherServiceSlideInterval);
                otherServiceSlideInterval = setInterval(autoSlideOtherServices, 4000); // Auto-slide every 4 seconds
            }

            function stopOtherServiceSlideInterval() {
                clearInterval(otherServiceSlideInterval);
            }

            prevOtherServiceBtn.addEventListener('click', () => {
                stopOtherServiceSlideInterval();
                otherServicesScroller.scrollBy({ left: -350, behavior: 'smooth' });
                startOtherServiceSlideInterval();
            });

            nextOtherServiceBtn.addEventListener('click', () => {
                stopOtherServiceSlideInterval();
                otherServicesScroller.scrollBy({ left: 350, behavior: 'smooth' });
                startOtherServiceSlideInterval();
            });

            setTimeout(() => {
                startOtherServiceSlideInterval();
            }, 500);

            otherServicesScroller.addEventListener('mouseenter', stopOtherServiceSlideInterval);
            otherServicesScroller.addEventListener('mouseleave', startOtherServiceSlideInterval);
        }
    }

    // --- Gallery Lightbox Functionality (for gallery.html) ---
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxContent = document.getElementById('lightbox-content');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxVideo = document.getElementById('lightbox-video');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxClose = document.getElementById('lightbox-close');

    let currentGalleryItems = [];
    let currentIndex = -1;

    // This part will only run if the lightbox elements are present on the current page (e.g., gallery.html)
    if (lightboxModal && lightboxContent && lightboxClose) {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        function updateGalleryItems() {
            const activeTabContent = document.querySelector('.tab-content:not(.hidden)');
            if (activeTabContent) {
                currentGalleryItems = Array.from(activeTabContent.querySelectorAll('.gallery-item'));
            } else {
                currentGalleryItems = [];
            }
        }

        updateGalleryItems(); // Initial update for gallery.html

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                updateGalleryItems();
                currentIndex = currentGalleryItems.indexOf(item);
                openLightbox(item);
            });
        });

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxModal.addEventListener('click', (event) => {
            if (event.target === lightboxModal) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (lightboxModal.classList.contains('active')) {
                if (event.key === 'Escape') {
                    closeLightbox();
                } else if (event.key === 'ArrowLeft') {
                    showPrevItem();
                } else if (event.key === 'ArrowRight') {
                    showNextItem();
                }
            }
        });

        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', showPrevItem);
        }
        if (lightboxNext) {
            lightboxNext.addEventListener('click', showNextItem);
        }

        function openLightbox(item) {
            const type = item.dataset.type;
            const src = item.dataset.src;
            const title = item.dataset.title || '';
            const description = item.dataset.description || '';

            lightboxImage.classList.add('hidden');
            lightboxVideo.classList.add('hidden');
            lightboxImage.src = '';
            lightboxVideo.src = '';

            if (type === 'image') {
                lightboxImage.src = src;
                lightboxImage.classList.remove('hidden');
            } else if (type === 'video') {
                let embedSrc = src;
                if (src.includes('youtube.com/watch?v=')) {
                    embedSrc = src.replace('watch?v=', 'embed/');
                } else if (src.includes('youtu.be/')) {
                    embedSrc = src.replace('youtu.be/', 'youtube.com/embed/');
                }
                lightboxVideo.src = `${embedSrc}?autoplay=1&modestbranding=1&rel=0`;
                lightboxVideo.classList.remove('hidden');
            }

            lightboxTitle.textContent = title;
            lightboxDescription.textContent = description;

            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            lucide.createIcons();
        }

        function closeLightbox() {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
            if (lightboxVideo) {
                lightboxVideo.src = '';
            }
        }

        function showPrevItem() {
            if (currentGalleryItems.length === 0) return;
            currentIndex = (currentIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
            openLightbox(currentGalleryItems[currentIndex]);
        }

        function showNextItem() {
            if (currentGalleryItems.length === 0) return;
            currentIndex = (currentIndex + 1) % currentGalleryItems.length;
            openLightbox(currentGalleryItems[currentIndex]);
        }

        // --- Gallery Tabs Functionality (for gallery.html) ---
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        if (tabButtons.length > 0 && tabContents.length > 0) {
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContents.forEach(content => content.classList.add('hidden'));

                    button.classList.add('active');

                    const targetId = button.getAttribute('aria-controls');
                    const targetContent = document.getElementById(targetId);
                    if (targetContent) {
                        targetContent.classList.remove('hidden');
                    }
                    updateGalleryItems();
                    lucide.createIcons();
                });
            });
        }
    } else {
        console.warn("Gallery Lightbox elements not found on this page. Lightbox functionality will not be active.");
    }

    // --- Initialize Lucide icons after all content is loaded ---
    lucide.createIcons();
});

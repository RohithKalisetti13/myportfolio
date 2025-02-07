document.addEventListener("DOMContentLoaded", () => {
    const profileClick = document.getElementById("profile-click");
    const imageModal = document.getElementById("image-modal");
    const closeModal = document.getElementById("close-modal");
    const content = document.querySelector(".content");
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav ul li a");
    const projectCards = document.querySelectorAll(".project-card");
    const projectModal = document.getElementById("project-modal");
    const closeProjectModal = document.getElementById("close-project-modal");
    const projectModalContent = document.querySelector(".project-modal-content");

    // ✅ Toggle Image Modal on Click
    profileClick.addEventListener("click", (e) => {
        e.preventDefault();
        imageModal.classList.toggle("show"); // Toggle visibility
    });

    // ✅ Close Image Modal When Clicking "X"
    closeModal.addEventListener("click", () => {
        imageModal.classList.remove("show");
    });

    // ✅ Close Image Modal When Clicking Outside the Image
    imageModal.addEventListener("click", (e) => {
        if (e.target === imageModal) {
            imageModal.classList.remove("show");
        }
    });

    // ✅ Hide Image Modal When Clicking Another Section
    content.addEventListener("click", () => {
        imageModal.classList.remove("show");
    });

    // ✅ Highlight Active Section in Sidebar (Fixed Detection)
    function highlightSection() {
        let scrollPosition = window.scrollY + window.innerHeight / 3; // Offset to detect earlier

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                let currentSectionId = section.getAttribute("id");

                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === currentSectionId) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightSection);
    highlightSection(); // Run once on page load


    // ✅ Open Full Project Modal on Click
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const project = card.dataset.project; // Fetch project type from data attribute
            openProject(project);
        });
    });

    function openProject(project) {
        let projectDetails = "";

        if (project === "wheelchair") {
            projectDetails = `
                <h2>Gesture-Controlled Smart Wheelchair Using MEMS and ATmega32</h2>
                <div class="github-link">
                    <a href="https://github.com/RohithKalisetti13/WheelChairObstacleDetection" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <p>This project presents a smart wheelchair control system designed to enhance accessibility for physically disabled users through gesture-based navigation. The system utilizes MEMS (Micro Electromechanical Systems) sensors to detect hand movements, which are processed by an ATmega32 microcontroller to control the wheelchair's motion.</p>
                <p>To improve safety, infrared (IR) sensors are integrated for real-time obstacle detection, achieving an 85% accuracy in preventing collisions. The system ensures smooth and responsive movement in multiple directions, including forward, backward, left, and right, based on the user's gestures.</p>
                <p>The development environment includes MuVision2 IDE, and programming is done in C and Assembly (ASM) using Keil Development Tools. This innovative approach provides an intuitive, hands-free mobility solution for users with limited physical movement</p>
                <div class="project-tags">
                    <span>C</span>
                    <span>Assembly (ASM)</span>
                    <span>ATmega32</span>
                    <span>MuVision2 IDE</span>
                    <span>Keil uVision</span>
                    <span>MEMS sensors</span>
                    <span>Infrared (IR) sensors</span>
                    <span>PWM</span>
                </div>
            `;
        } else if (project === "beamformer") {
            projectDetails = `
                <h2>Implementation of Digital Beamformer on GPUs</h2>
                <div class="github-link">
                    <a href="https://github.com/RohithKalisetti13/DigitalBeamformerGPU" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <p>This project implements digital beamforming using GPUs to accelerate real-time signal processing for applications like radar, wireless communication, and sonar systems. By leveraging CUDA and cuFFT, the system efficiently processes signals from 1024 antennas, dynamically adjusting phase and amplitude to enhance directionality. Compared to CPU-based methods, GPU acceleration achieves 85% faster computations, significantly improving performance in high-interference environments.</p>
                <p>The beamforming system supports both time-domain and frequency-domain processing, with optimized execution speeds. Time-domain beamforming completes in 0.025 ms, while GPU kernel execution runs in 0.024 ms, ensuring rapid and precise signal alignment. Using Fast Fourier Transform (FFT), the system steers beams without physically moving antennas, making it ideal for adaptive and scalable communication networks</p>
                <p>Developed using CUDA, Keil tools, and Visual Studio, this project demonstrates the potential of GPUs in high-performance signal processing. By offloading complex calculations to parallel GPU cores, it enables real-time beamforming with minimal latency and high computational efficiency, paving the way for next-generation communication technologies.</p>
                <div class="project-tags">
                    <span>CUDA</span>
                    <span>C</span>
                    <span>Fast Fourier Transform (FFT)</span>
                    <span>cuFFT library</span>
                    <span>Multi-threading</span>
                    <span>HPC</span>
                    <span>Visual Studio</span>
                </div>
            `;
        }

        projectModalContent.innerHTML = projectDetails;
        projectModal.classList.add("show");

        // Scroll to top to ensure full modal is visible
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // ✅ Close Full Project Modal
    closeProjectModal.addEventListener("click", () => {
        projectModal.classList.remove("show");
    });

    // ✅ Close Modal When Clicking Outside the Project Details
    projectModal.addEventListener("click", (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove("show");
        }
    });

    // ✅ Auto-Close Image Modal when opening a project
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            imageModal.classList.remove("show");
        });
    });
});

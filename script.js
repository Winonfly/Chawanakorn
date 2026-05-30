
// 1. ตั้งค่าพื้นหลัง Plexus (โครงข่ายประสาท) เหมือนในรูป
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.2, "random": false },
        "size": { "value": 2, "random": true },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.1,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "grab" }, // เมาส์โดนแล้วเส้นจะเข้มขึ้น
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "grab": { "distance": 200, "line_linked": { "opacity": 0.3 } }
        }
    }
});

// 2. แอนิเมชันตอนเปิดหน้า
gsap.to(".hero-anim", {
    opacity: 1,
    y: -20,
    duration: 1,
    stagger: 0.15,
    ease: "power4.out"
});

// ลงทะเบียน Plugin
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// ฟังก์ชันเลื่อนหน้าจอแบบนุ่มนวล
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: element, offsetY: 70 },
            ease: "power4.inOut"
        });
    }
}

// ผูกปุ่มเข้ากับระบบเลื่อน
document.addEventListener("DOMContentLoaded", () => {
    // สำหรับปุ่ม View Projects (อ้างอิงจาก ID ที่คุณตั้งไว้)
    const viewBtn = document.getElementById('view-work-btn');
    if (viewBtn) {
        viewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll('#projects');
        });
    }

    // สำหรับปุ่มอื่นๆ เช่น About Me หรือทุกลิงก์ที่มี href=#
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });
});

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    const skillBars = [
        { class: ".js-fill", width: "88%" },
        { class: ".html-fill", width: "95%" },
        { class: ".css-fill", width: "85%" },
        { class: ".gasap-fill", width: "76%" }
    ];

    skillBars.forEach(skill => {
        gsap.to(skill.class, {
            width: skill.width,
            duration: 4,
            ease: "power4.out",
            scrollTrigger: {
                trigger: "#skills",
                start: "top 80%",
                end: "bottom 20%",
                // restart = เริ่มใหม่เมื่อเห็น, reverse = วิ่งกลับเมื่อพ้นหน้าจอ
                toggleActions: "restart reverse restart reverse" 
            }
        });
    });
});
// แอนิเมชันหน้า Contact
gsap.to(".contact-info-item", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3, // ให้ค่อยๆ ขึ้นทีละอัน
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
    }
});
// ลงทะเบียน Plugin ทุกตัวก่อนใช้งาน
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ระบบเลื่อนหน้าจอสำหรับปุ่ม View Projects และ About Me
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: { y: element, offsetY: 80 },
                ease: "power4.inOut"
            });
        }
    };

    // ผูกปุ่ม View Projects (อ้างอิงจาก ID เดิมของคุณ)
    const viewBtn = document.getElementById('view-work-btn');
    if (viewBtn) {
        viewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll('#projects');
        });
    }

    // 2. ระบบเลื่อนหน้าจอสำหรับแถบ Navigation (อ้างอิงจากภาพเมนู)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
        });
    });

    // 3. แก้ไข Error: Target not found สำหรับ .gsap-fill และ .content
    // ตรวจสอบก่อนรัน Animation เพื่อไม่ให้เกิด Error ใน Console
    const fillElements = document.querySelectorAll('.gsap-fill');
    if (fillElements.length > 0) {
        fillElements.forEach(fill => {
            gsap.to(fill, {
                width: fill.dataset.width || "100%", 
                scrollTrigger: {
                    trigger: fill,
                    start: "top 80%",
                }
            });
        });
    }
});

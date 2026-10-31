/*
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

const themeToggler = document.querySelector('.theme-toggler')

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display ="block" 
})
closeBtn.addEventListener('click' , ()=>{
    sideMenu.style.display = "none"
})

themeToggler.addEventListener('click', ()=>{

    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2 )').classList.toggle('active')
}) */

document.addEventListener("DOMContentLoaded", () => {

    // Sidebar Elements
    const sideMenu = document.querySelector("aside");
    const menuBtn = document.getElementById("menu_bar");
    const closeBtn = document.getElementById("close_btn");

    // Open Sidebar
    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            sideMenu.style.display = "block";
        });
    }

    // Close Sidebar
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            sideMenu.style.display = "none";
        });
    }

    // Theme Toggle
    const themeToggler = document.querySelector(".theme-toggler");

    if (themeToggler) {

        themeToggler.addEventListener("click", () => {

            document.body.classList.toggle("dark-theme-variables");

            const icons = themeToggler.querySelectorAll("span");

            icons.forEach(icon => {
                icon.classList.toggle("active");
            });

            const isDarkMode =
                document.body.classList.contains("dark-theme-variables");

            localStorage.setItem(
                "dashboardTheme",
                isDarkMode ? "dark" : "light"
            );
        });

        const savedTheme =
            localStorage.getItem("dashboardTheme");

        if (savedTheme === "dark") {

            document.body.classList.add("dark-theme-variables");

            const icons =
                themeToggler.querySelectorAll("span");

            icons.forEach(icon => {
                icon.classList.toggle("active");
            });
        }
    }

    // Active Sidebar Link
    const sidebarLinks =
        document.querySelectorAll(".sidebar a");

    sidebarLinks.forEach(link => {

        link.addEventListener("click", () => {

            sidebarLinks.forEach(item =>
                item.classList.remove("active")
            );

            link.classList.add("active");

        });

    });

    // Today's Date
    const dateInput =
        document.querySelector('input[type="date"]');

    if (dateInput) {

        const today = new Date();

        const formattedDate =
            today.getFullYear() + "-" +
            String(today.getMonth() + 1).padStart(2, "0") + "-" +
            String(today.getDate()).padStart(2, "0");

        dateInput.value = formattedDate;
    }

    // Dashboard Cards Animation
    const dashboardCards =
        document.querySelectorAll(
            ".sales, .expenses, .income"
        );

    dashboardCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform =
                "translateY(-5px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform =
                "translateY(0)";
        });

    });

    // Recent Orders Table Rows
    const tableRows =
        document.querySelectorAll(
            ".recent_order tbody tr"
        );

    tableRows.forEach(row => {

        row.addEventListener("mouseenter", () => {
            row.style.backgroundColor =
                "#f5f5f5";
            row.style.cursor = "pointer";
        });

        row.addEventListener("mouseleave", () => {
            row.style.backgroundColor =
                "";
        });

        row.addEventListener("click", () => {

            const productName =
                row.children[0].textContent;

            alert(`Viewing ${productName} details`);

        });

    });

    // Sales Analytics Cards
    const analyticsCards =
        document.querySelectorAll(
            ".sales_analytics .item"
        );

    analyticsCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "scale(1.02)";
            card.style.transition = "0.3s ease";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "scale(1)";

        });

    });

    // Add Product
    const addProductBtn =
        [...sidebarLinks].find(link =>
            link.textContent.includes("Products")
        );

    if (addProductBtn) {

        addProductBtn.addEventListener("click", e => {

            e.preventDefault();

             window.location.href = "adminProducts.html";

        });

    }

    // Logout
    const logoutBtn =
        [...sidebarLinks].find(link =>
            link.textContent.includes("Logout")
        );

    if (logoutBtn) {

        logoutBtn.addEventListener("click", e => {

            e.preventDefault();

            const confirmLogout =
                confirm("Are you sure you want to logout?");

            if (confirmLogout) {

                localStorage.clear();

                window.location.href = "adminLogin.html";

            }

        });

    }

    // Progress Circle Animation
    const circles =
        document.querySelectorAll("svg circle");

    circles.forEach(circle => {

        const radius =
            circle.getAttribute("r");

        const circumference =
            2 * Math.PI * radius;

        circle.style.strokeDasharray =
            circumference;

        circle.style.transition =
            "stroke-dashoffset 1s ease";

    });

});
document.addEventListener("DOMContentLoaded", () => {

    // Sidebar Navigation
    const sidebarLinks = document.querySelectorAll(".sidebar a");

    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebarLinks.forEach(item =>
                item.classList.remove("active")
            );

            link.classList.add("active");
        });
    });

    // Search Orders
    const searchInput = document.querySelector(".filters input");
    const orderRows = document.querySelectorAll(".order-row");

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const searchValue =
                searchInput.value.toLowerCase().trim();

            orderRows.forEach(row => {

                const orderNumber =
                    row.children[1].textContent.toLowerCase();

                const customer =
                    row.children[2].textContent.toLowerCase();


                if (
                    orderNumber.includes(searchValue) ||
                    customer.includes(searchValue)
                ) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }

            });

        });

    }

    // Filter Buttons
    const filterButtons =
        document.querySelectorAll(".filters button");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter =
                button.textContent.trim().toLowerCase();

            orderRows.forEach(row => {

                const orderNumber =
                    row.children[1].textContent.toLowerCase();

                const customer =
                    row.children[2].textContent.toLowerCase();

                const status =
                    row.querySelector(".status")
                        .textContent
                        .trim()
                        .toLowerCase();

                if (filter === "all") {

                    row.style.display = "";

                } else if (
                    filter === "order number" &&
                    orderNumber
                ) {

                    row.style.display = "";

                } else if (
                    filter === "customer" &&
                    customer
                ) {

                    row.style.display = "";

                } else if (
                    status === filter
                ) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";

                }

            });

        });

    });

    // Select All Checkbox
    const selectAllCheckbox =
        document.querySelector(
            'thead input[type="checkbox"]'
        );

    const rowCheckboxes =
        document.querySelectorAll(
            'tbody input[type="checkbox"]'
        );

    if (selectAllCheckbox) {

        selectAllCheckbox.addEventListener("change", () => {

            rowCheckboxes.forEach(box => {

                box.checked =
                    selectAllCheckbox.checked;

                updateRowHighlight(box);

            });

        });

    }

    // Individual Checkboxes
    rowCheckboxes.forEach(box => {

        box.addEventListener("change", () => {

            updateRowHighlight(box);

            const checkedCount =
                document.querySelectorAll(
                    'tbody input[type="checkbox"]:checked'
                ).length;

            if (selectAllCheckbox) {

                selectAllCheckbox.checked =
                    checkedCount === rowCheckboxes.length;

            }

        });

    });

    // Row Highlight Function
    function updateRowHighlight(checkbox) {

        const row = checkbox.closest("tr");

        if (checkbox.checked) {

            row.style.backgroundColor =
                "#eef2ff";

        } else {

            row.style.backgroundColor = "";

        }

    }

    // Row Click
    orderRows.forEach(row => {

        row.addEventListener("click", (event) => {

            if (
                event.target.type === "checkbox"
            ) {
                return;
            }

            const orderNumber =
                row.children[1].textContent;

            alert(
                `Selected Order: ${orderNumber}`
            );

        });

    });

    // Export Button
    const exportButton =
        document.querySelector(".export-btn");

    if (exportButton) {

        exportButton.addEventListener("click", () => {

            const selectedOrders = [];

            rowCheckboxes.forEach(box => {

                if (box.checked) {

                    const row =
                        box.closest("tr");

                    selectedOrders.push({
                        order:
                            row.children[1].textContent,
                        customer:
                            row.children[2].textContent,
                        items:
                            row.children[3].textContent,
                        total:
                            row.children[4].textContent,
                        status:
                            row.querySelector(".status")
                                .textContent
                                .trim()
                    });

                }

            });

            console.log(
                "Exported Orders:",
                selectedOrders
            );

            alert(
                `${selectedOrders.length} order(s) exported successfully.`
            );

        });

    }

    // Add Product Button
    const addProductLink =
        [...sidebarLinks].find(link =>
            link.textContent
                .includes("Products")
        );

    if (addProductLink) {

        addProductLink.addEventListener("click", e => {

            e.preventDefault();

             window.location.href = "adminProducts.html";

        });

    }

    // Logout Button
    const logoutLink =
        [...sidebarLinks].find(link =>
            link.textContent
                .includes("Logout")
        );

    if (logoutLink) {

        logoutLink.addEventListener("click", e => {

            e.preventDefault();

            const logout =
                confirm(
                    "Are you sure you want to logout?"
                );

            if (logout) {

                localStorage.clear();

                window.location.href =
                    "adminLogin.html";

            }

        });

    }

});
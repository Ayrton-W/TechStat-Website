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


// ==========================================
// SELECT ALL CHECKBOX FUNCTIONALITY
// ==========================================

const selectAllCheckbox = document.querySelector(
  "thead input[type='checkbox']"
);

const productCheckboxes = document.querySelectorAll(
  "tbody input[type='checkbox']"
);

if (selectAllCheckbox) {
  selectAllCheckbox.addEventListener("change", () => {
    productCheckboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });
}

// ==========================================
// DELETE SELECTED PRODUCTS
// ==========================================

const deleteBtn = document.querySelector(".delete-btn");

deleteBtn.addEventListener("click", () => {
  const selectedProducts = document.querySelectorAll(
    "tbody input[type='checkbox']:checked"
  );

  if (selectedProducts.length === 0) {
    alert("Please select at least one product.");
    return;
  }

  const confirmDelete = confirm(
    `Delete ${selectedProducts.length} selected product(s)?`
  );

  if (!confirmDelete) return;

  selectedProducts.forEach((checkbox) => {
    const row = checkbox.closest("tr");
    row.remove();
  });

  alert("Selected products deleted successfully.");
});

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================

const searchInput = document.querySelector(".filters input");

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();

    if (rowText.includes(searchValue)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// ==========================================
// FILTER BUTTONS
// ==========================================

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterType = button.textContent.trim();

    const rows = document.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const statusElement = row.querySelector(".status");

      if (!statusElement) return;

      const status = statusElement.textContent.trim();

      if (filterType === "All") {
        row.style.display = "";
      } else if (filterType === "Active") {
        row.style.display =
          status === "Active" ? "" : "none";
      } else if (filterType === "Inactive") {
        row.style.display =
          status === "Inactive" ? "" : "none";
      }
    });
  });
});


// ==========================================
// EDIT PRODUCT BUTTONS
// ==========================================

const tableRows = document.querySelectorAll("tbody tr");

tableRows.forEach((row) => {
  const editCell = row.lastElementChild;

  editCell.style.cursor = "pointer";
  editCell.style.color = "#7380ec";
  editCell.style.fontWeight = "600";

  editCell.addEventListener("click", () => {
    const productName = row.children[2].textContent;

    alert(`Edit Product: ${productName}`);

    // future edit page navigation
    // window.location.href = "editProduct.html";
  });
});

// ==========================================
// ADD PRODUCT BUTTON
// ==========================================

const addBtn = document.querySelector(".addProduct-btn");

addBtn.addEventListener("click", () => {
  alert("Add Product button clicked.");

  // future page
  // window.location.href = "adminAddProduct.html";
});

// ==========================================
// KEEP SELECT ALL IN SYNC
// ==========================================

productCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const checkedBoxes = document.querySelectorAll(
      "tbody input[type='checkbox']:checked"
    );

    selectAllCheckbox.checked =
      checkedBoxes.length === productCheckboxes.length;
  });
});

// ==========================================
// PRODUCT ROW HIGHLIGHT
// ==========================================

const rows = document.querySelectorAll(".order-row");

rows.forEach((row) => {
  const checkbox = row.querySelector("input[type='checkbox']");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      row.style.backgroundColor = "#eef2ff";
    } else {
      row.style.backgroundColor = "";
    }
  });
});


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
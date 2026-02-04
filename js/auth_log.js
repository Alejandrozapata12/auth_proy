// ---------------- Test credentials ----------------

// Employee credentials
const user_emp = "emp@correo.com";
const pass_emp = "emp123";

// Admin credentials
const user_admin = "admin@correo.com";
const pass_admin = "admin123";

// DOM references
const form = document.getElementById("data_e");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const userName = document.getElementById("userName").value;
    const pass = document.getElementById("password").value;

    // Employee login validation
    if (userName === user_emp && pass === pass_emp) {

        localStorage.setItem("auth", "emp");

        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Welcome employee',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        });

        setTimeout(() => {
            localStorage.setItem("auth", "emp");
            window.location.href = "./pages/emp_dashboard.html";
        }, 1500);

    // Admin login validation
    } else if (userName === user_admin && pass === pass_admin) {

        localStorage.setItem("auth", "admin");

        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Welcome Admin',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        });

        setTimeout(() => {
            localStorage.setItem("auth", "admin");
            window.location.href = "./pages/admin_dashboard.html";
        }, 1500);

    // Invalid credentials
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incorrect credentials',
            showClass: {
                popup: 'animate__animated animate__shakeX'
            }
        });
    }
});

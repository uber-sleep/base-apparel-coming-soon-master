window.onload = function() {
    // Event
    let input = document.querySelector(".input-btn");
    input.addEventListener("click", (event) => {
        event.preventDefault();
        formValidation();
    });
    // Function
    function formValidation() {
        let input = document.querySelector(".input");
        let errorIcon = document.querySelector(".error-icon");
        let span = document.querySelector(".span");
        let inputBtn = document.querySelector(".input-btn");
        // Conditional statement for toggling classes
        if (input.value === "") {
            input.classList.add("active");
            errorIcon.classList.add("active");
            span.classList.remove("inactive");
            span.classList.add("active");
            inputBtn.classList.add("active");
            return false;
        } else {
            input.classList.remove("active");
            errorIcon.classList.remove("active");
            span.classList.remove("active");
            span.classList.add("inactive");
            inputBtn.classList.remove("active");
        }; 
        return true;
    };
};
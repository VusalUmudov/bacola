const categoriesBtn = document.getElementsByClassName("categories-a")[0];

categoriesBtn.addEventListener("click", ()=>{
    const dropdownCategories = document.getElementsByClassName("dropdown-categories")[0];
    dropdownCategories.classList.toggle("active");
})
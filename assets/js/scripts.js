const menuRows = document.querySelectorAll(".menu-list__row")

menuRows.forEach((item) => {
    item.classList.remove("menu-list__row_active")
    item.addEventListener("click", () => {
        menuRows.forEach((item) => item.classList.remove("menu-list__row_active"))
        item.classList.toggle("menu-list__row_active")
    })
})

const accordions = document.querySelectorAll(".mailing-table__row-edit")

accordions.forEach((item) => {
    // item.classList.remove("mailing-table__row-edit_active")
    item.addEventListener("click", () => {
        item.classList.toggle("mailing-table__row-edit_active")
    })
})

window.onclick = function(event) {
    if (!event.target.matches('.mailing-table__row-edit_icon') &&
    !event.target.matches('.mailing-table__row-edit_icon circle') &&
    !event.target.matches('.mailing-table__row-edit') &&
    !event.target.matches('.mailing-table__accord') &&
    !event.target.matches('.mailing-table__accord-item')) {
        accordions.forEach((i) => i.classList.remove("mailing-table__row-edit_active"))
    }
  }
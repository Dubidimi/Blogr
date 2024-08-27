function showDropdown() {
        let dropdown = document.getElementById('dropdown_hidden')
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "flex";
        mobile_gallery.style.zIndex = '-1';
    } else {
        dropdown.style.display = "none";
        mobile_gallery.style.zIndex = '1';
    }
}
function showMenu() {
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('menu_btn').style.display = 'none';
    document.getElementById('close_btn').style.display = 'block';
}
function hideMenu() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('menu_btn').style.display = 'block';
    document.getElementById('close_btn').style.display = 'none';
}
function mobileDrop() {
        let mobile_dropdown = document.getElementById('mobile_dropdown')
    if (mobile_dropdown.style.display === "none" || mobile_dropdown.style.display === "") {
        mobile_dropdown.style.display = "block";
        mobile_gallery.style.zIndex = '-1';
    } else {
        mobile_dropdown.style.display = "none";
        mobile_gallery.style.zIndex = '1';
    }
}
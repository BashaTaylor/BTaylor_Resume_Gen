function showPopup() {
    var popup = document.getElementById("To print in correct scale, go to: More Settings, change Scale from default to Custom, and select 45%");
    popup.style.visibility = "visible";
}

function printPage() {
    window.print();
}

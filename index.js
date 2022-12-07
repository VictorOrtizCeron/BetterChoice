var rows = document.querySelectorAll("tr");

for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function(event){
    this.remove();
    })
}
for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener("keydown", myCreateFunction)
}

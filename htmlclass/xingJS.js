const button1 = document.querySelector(".button1");
const pim = document.querySelector(".p2");
const table = document.querySelector(".table1");
const tableBtn = document.querySelector(".tableBtu2");

let haid = false;
button1.addEventListener("click", function (e) {
  e.preventDefault();

  if (!haid) {
    haid = true;
  } else if (haid) {
    haid = false;
  }

  if (haid) {
    pim.style.display = "block";
  } else if (!haid) {
    pim.style.display = "none";
  }
});

tableBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(table.classList.contains("tableBtn123"));
  if (table.classList.contains("tableBtn123")) {
    table.classList.remove("tableBtn123");
  } else if (!table.classList.contains("tableBtn123")) {
    table.classList.add("tableBtn123");
  }
});

console.log(table);
console.log(tableBtn);

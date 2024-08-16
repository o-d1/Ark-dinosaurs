// Search functionality

function findDinos () {
    // Getting elements from the DOM
    let searchBar = document.getElementById("searchBar").value.toUpperCase();
    let dinos = document.getElementById("dinos");
    let info = dinos.getElementsByTagName("tr");

    for (i = 0; i < info.length; i++) {
        let column = info[i].getElementsByTagName("td")[0];
        let language = column.textContent;
    
        rows[i].style.display =
          language.toUpperCase().indexOf(searchBar) > -1 ? "" : "none";
      }
    }
    
document.getElementById("searchInput").addEventListener("keyup", findDinos)
document.getElementById("save").addEventListener("click", SaveData);
                    
function SaveData() {
    const fs = require("fs");
    var nom = document.getElementById('message')
fs.writeFile(nom+".txt", "Writing content", (err) => {
             if (err) throw err;
             console.log("Completed!");});

}
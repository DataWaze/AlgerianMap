/*
 * enter the IDs of wilayas : integer between 1 and 58
 * in the array array_IDs
 * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,
            13,14,15,16,17,18,19,20,21, 22,23,24,
            25,26,27,28,29,30,31,32,33, 34,35,36,
            37,38,39,40,41,42,43,44,45, 46,47,48,
            49,50,51,52,53,54,55,56,57, 58]
 */
 var IDs = [ 1, 2, 3]

 var colors = ["#fab999","#a6ff99","#bb5353","#ff960e","#ff5e00","#a6ff00","#cc9ab1","#ff0037","#96810e","#960e0e","#0e9196","#003496",
               "#890096","#910303","#ff0000","#ff4e4e","#fb4e00","#555e00","#2a5eff","#a13e00","#aa5e00","#aa8777","#0f8e90","#ee9e00",
               "#f353b6","#af73b6","#b65e43","#ccffff","#f9be00","#a6ffff","#cc9ab1","#aa0037","#aaabbb","#ff9999","#0e9196","#003496",
               "#99ff55","#910be3","#ffaaaa","#ff9a8a","#fb4a90","#555e00","#2eadcf","#a13ebb","#aa5e00","#fa5b77","#0f8e90","#ee9e00",
               "#f353b6","#af73b6","#b65e43","#ff0000","#ff0000","#a6ffff","#eeeeee","#fbb999","#96810e","#960e0e" 
              ]

for (let i= 0; i<IDs.length;i++) 
{
    j = i+1
    document.getElementById("Dz_"+j).setAttribute("fill",colors[i]);
}

 function let_color() {
    console.log("hello")
     document.getElementById("Dz_4").style.fill = "#fb4a90";
     }

document.getElementById("lDz_4").addEventListener("click", let_color);

// var IDs_2 = []
// for (let i=1; i<59; i++) {
//     document.getElementById(i.toString()).addEventListener("click", let_color);
//     IDs_2[i-1] = i;
//     console.log(i)

// }

// function let_color() {
    
//     var colors = ["#fab999","#a6ff99","#bb5353","#ff960e","#ff5e00","#a6ff00","#cc9ab1","#ff0037","#96810e","#960e0e","#0e9196","#003496",
//                "#890096","#910303","#ff0000","#ff4e4e","#fb4e00","#555e00","#2a5eff","#a13e00","#aa5e00","#aa8777","#0f8e90","#ee9e00",
//                "#f353b6","#af73b6","#b65e43","#ccffff","#f9be00","#a6ffff","#cc9ab1","#aa0037","#aaabbb","#ff9999","#0e9196","#003496",
//                "#99ff55","#910be3","#ffaaaa","#ff9a8a","#fb4a90","#555e00","#2eadcf","#a13ebb","#aa5e00","#fa5b77","#0f8e90","#ee9e00",
//                "#f353b6","#af73b6","#b65e43","#ff0000","#ff0000","#a6ffff","#eeeeee","#fbb999","#96810e","#960e0e" 
//               ]
//     for (let i= 0; i<IDs_2.length;i++) 
//     {
//      j = i+1
//      document.getElementById("Dz_"+j).setAttribute("fill",colors[i]);
//     }

// }

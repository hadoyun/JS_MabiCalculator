const exTable = [
    // level 1~10
    300, 415, 577, 784, 1038, 1338, 1684, 2077, 2515, 3000,
    // level 11~20
    3531, 4108, 4732, 5401, 6117, 6879, 7687, 8542, 9443, 10389,
    // level 21~30
    11383, 12422, 13507, 14639, 15817, 17041, 18311, 19628, 20991, 22400,
    // level 31~40
    23400, 24500, 25500, 26600, 27800, 28900, 30100, 31300, 32500, 33800,
    // level 41~50
    35000, 36300, 37600, 39000, 40300, 41700, 43200, 44660, 46100, 47500,
    // level 51~60
    49100, 50600, 52200, 53700, 55300, 57000, 58600, 60300, 62000, 63800,
    // level 61~70
    65500, 67300, 69100, 70900, 72800, 74600, 76500, 78500, 80400, 82400,
    // level 71~80
    84400, 86400, 88400, 90500, 92600, 94700, 96800, 99000, 101200, 103400,
    // level 81~90
    105600, 107900, 110200, 112500, 114800, 117200, 119600, 122000, 124400, 126800,
    // level 91~99
    129300, 131800, 134300, 136900, 139500, 142100, 144700, 147300, 150000,
]
let sum = 0;
const currentLevel = 1;


const handleLevelInput = document.querySelector("#inputLevel");
const currentLv = handleLevelInput.querySelector("input");

const handleGLvInput = document.querySelector("#goalLevel");
const GoalLv = handleGLvInput.querySelector("input");

function paintInput(event) {
    event.preventDefault();
    //console.log(currentLv.value);

}

document.addEventListener("submit", paintInput);

// for (var i = 0; i < exTable.length; ++i) {
//     sum += exTable[i];
// }

// console.log(sum);
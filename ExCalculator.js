//마비노기 신 정령 필요 경험치 테이블
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

let nidExTable = [
    //level 1~10
    0, 300, 715, 1292, 2076, 3114, 4452, 6136, 8213, 10728,
    //level 11~20
    13728, 17259, 21367, 26099, 31500, 37617, 44496, 52183, 60725, 70168,
    //level 21~30 
    80557, 91940, 104362, 117869, 132508, 148325, 165366, 183677, 203305, 224296,
    //level 31~40 
    246696, 270096, 294596, 320096, 346696, 374496, 403396, 433496, 464796, 497296,
    //level 41~50 
    531096, 566096, 602396, 639996, 678996, 719296, 760996, 804196, 848856, 894956,
    //level 51~60 
    942456, 991556, 1042156, 1094356, 1148056, 1203356, 1260356, 1318956, 1379256, 1441256,
    //level 61~70 
    1505056, 1570556, 1637856, 1706956, 1777856, 1850656, 1925256, 2001756, 2080256, 2160656,
    //level 71~80 
    2243056, 2327456, 2413856, 2502256, 2592756, 2685356, 2780056, 2876856, 2975856, 3077056,
    //level 81~90 
    3180456, 3286056, 3393956, 3504156, 3616656, 3731456, 3848656, 3968256, 4090256, 4214656,
    //level 91~99 
    4341456, 4470756, 4602556, 4736856, 4873756, 5013256, 5155356, 5300056, 5447356
];

let sum = 0;

//일주일에 얻을 수 있는 최대 경험치
const weekMaxEx = 400000;
//주 
let reqweek = 0;
let reqEx = 0;

let currentLv = 1;
let GoalLv = 1;

//////////////////////////////////////////////////////////////////////

const handleLevelInput = document.querySelector("#inputLevel");
const currentLvInput = handleLevelInput.querySelector("input");
const currentLvbtn = handleLevelInput.querySelector("button");

const handleGLvInput = document.querySelector("#goalLevel");
const GoalLvInput = handleGLvInput.querySelector("input");
const GoalLvbtn = handleLevelInput.querySelector("button");

const btnHandle = document.querySelector("#btn");

///////////////////////////////////////////////////////////////////////

// function makeAccumExtable() {
//     AccumExTable.push(0);
//     AccumExTable.push(exTable[0]);

//     let temp = exTable[0];
//     for (let i = 2; i < exTable.length; ++i) {

//         temp += exTable[i - 1]

//         AccumExTable.push(temp);
//     }
// }

console.log(AccumExTable);

// function fillAccumExTable(num) {
//     let ex = 0;
//     for (let i = 0; i < (num + 1); ++i) {
//         ex += exTable[i];
//         AccumExTable[i - 1] = ex;
//     }
// }

// function getCurrentLevel(event) {
//     event.preventDefault();
//     currentLv = currentLvInput.value;
//     console.log(currentLv);
// }

// function getGoalLevent(event) {
//     event.preventDefault();
//     GoalLv = GoalLvInput.value;
// }

// function calculateLv(event) {
//     event.preventDefault();

//     let abGoalEx = AccumExTable[currentLv];
//     let abCurrentEx = AccumExTable[GoalLv];

//     reqEx = abGoalEx - abCurrentEx;
//     console.log(reqEx);
// }

// currentLvbtn.addEventListener("onclick", getCurrentLevel);
// GoalLvbtn.addEventListener("onclick", getGoalLevent);
// btnHandle.addEventListener("onclick", calculateLv);

// function paintInput(event) {
//     event.preventDefault();
//     //console.log(currentLv.value);
// }

// // document.addEventListener("submit", paintInput);

// // for (var i = 0; i < exTable.length; ++i) {
// //     sum += exTable[i];
// // }

// // console.log(sum);
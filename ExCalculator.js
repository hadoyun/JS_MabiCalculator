//마비노기 신 정령 경험치 누적 필요 경험치 테이블
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
    4341456, 4470756, 4602556, 4736856, 4873756, 5013256, 5155356, 5300056, 5447356, 5597356
];

///////////////////////////////////////////////////////////////////////////////////////////////////

const h_curuntLevel = document.querySelector("#CuruntLevel");
const h_goalLevel = document.querySelector("#goalLevel");

const h_btn = document.querySelector("#btn");

const h_weekCount = document.querySelector("#weekCount");
const h_weekCountEvent = document.querySelector("#weekCountEvent");

const h_nJEaCount = document.querySelector("#nJEaCount");
const h_sJEaCount = document.querySelector("#sJEaCount");

const h_nJPrice = document.querySelector("#nJPrice");
const h_sJPrice = document.querySelector("#sJPrice");
const h_nJPriceCount = document.querySelector("#nJPriceCount");
const h_sJPriceCount = document.querySelector("#sJPriceCount");

////////////////////////////////////////////////////////////////////////////////////////////////////////

//일주일에 얻을 수 있는 최대 경험치
const weekMaxEx = 400000;
const WeekMaxExEevent = 800000;

let needEx = 0;

let weekCount = 0;

/**일반 보석 갯수 */
let nJamEa = 0;

/**특별 보석 갯수 */
let sJamEa = 0;

/**보석의 가격 */
//let nJPrice = h_nJPrice.value;
//let sJPrice = h_sJPrice.value;
let price = 0;
//////////////////////////////////////////////////////////////////////


/**필요한 경험치를 구한다.*/
function need_Ex(event) {
    if (h_goalLevel.value > h_curuntLevel.value) {
        needEx = nidExTable[h_goalLevel.value - 1] - nidExTable[h_curuntLevel.value - 1];
        calculate_Lv();
        calculate_Lv(true);
        calculate_Ea();
        calculate_Ea(true);
        calculate_Price();
        calculate_Price(true);
    } else if (h_goalLevel.value = h_curuntLevel.value) {
        alert("현재 레벨과 목표 레벨이 같아요!")
    } else {
        alert("현재 레벨 보다 목표 레벨이 낮아요!")
    }
}

/**필요 일수(주)를 구한다.*/
function calculate_Lv(isEvent = false) {
    if (isEvent == false) {
        weekCount = Math.ceil(needEx / weekMaxEx);
        h_weekCount.innerHTML = "통상일 때는 " + weekCount + "주 걸립니다~";
    } else {
        weekCount = Math.ceil(needEx / WeekMaxExEevent);
        h_weekCountEvent.innerHTML = "이벤트 기간 시에는 " + weekCount + "주 걸립니다~";
    }
}

/**보석을 먹였을 시에 걸리는 갯수를 구한다. */
function calculate_Ea(isEvent = false) {
    if (isEvent == false) {
        nJamEa = Math.ceil(needEx / 150);
        h_nJEaCount.innerHTML = "일반 보석 총 " + nJamEa + " 개가 필요합니다~";
    } else {
        sJamEa = Math.ceil(needEx / 4000);
        h_sJEaCount.innerHTML = "특별 보석 총 " + sJamEa + " 개가 필요합니다~";
    }
}

/**보석을 먹였을 시에 총 금액을 계산한다. */
function calculate_Price(isSpecial = false) {
    if (isSpecial == false) {
        price = nJamEa * h_nJPrice.value;
        h_nJPriceCount.innerHTML = "일반 보석 사용시 총 " + price + " 골드가 필요합니다."
    } else {
        price = sJamEa * h_sJPrice.value;
        h_sJPriceCount.innerHTML = "특별 보석 사용시 총 " + price + " 골드가 필요합니다."
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

h_btn.addEventListener("click", need_Ex);
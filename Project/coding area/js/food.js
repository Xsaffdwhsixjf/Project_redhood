const myNavImg = document.querySelector(`#myNavImg`);
const myNavNum = document.querySelector(`#myNavNum`);
const myNavTitle = document.querySelector(`#myNavTitle`);
const myNavLocation = document.querySelector(`#myNavLocation`);
const myNavText = document.querySelector(`#myNavText`);


function openNav(food) {
    const foodX = document.querySelector(`.food${food}`);
    foodX.style.transform = 1;
    foodX.style.zIndex = 1;
    document.getElementById("myNav").style.height = "100%";
    setNavContent(food);
}

function setNavContent(food) {
    // myNavImg.src = "../img/food/大幅羊肉海鮮餐廳.jpg";
    // myNavNum.innerHTML = "";
    // myNavTitle.innerHTML = "";
    // myNavLocation.innerHTML = "";
    // myNavText.innerHTML = "";

    switch (food) {
        case 1:
            myNavImg.src = "../img/food/food1.jpg";
            myNavNum.innerHTML = "1";
            myNavTitle.innerHTML = "大峰米食館";
            myNavLocation.innerHTML =
            '<a href="https://g.page/dfmsg?share"  target="_blank"><i class="fa-solid fa-location-dot"></i> &nbsp;屏東縣琉球鄉民生路88之1號</a>';
            myNavText.innerHTML = "擁有四十年歷史的店家位於美食林立的民生路上";
            break;
        case 2:
            myNavImg.src = "../img/food/food2.jpg";
            myNavNum.innerHTML = "2";
            myNavTitle.innerHTML = "大福羊肉海鮮店";
            myNavLocation.innerHTML = 
            '<a href="https://goo.gl/maps/jJm75nYzWY5pV5Lu9"  target="_blank"><i class="fa-solid fa-location-dot"></i> &nbsp;屏東縣琉球鄉仁愛路104-8號</a>';
            myNavText.innerHTML = "酥炸羊肉排還有琉球小封征服了不少人的味蕾";
            break;
        case 3:
            myNavImg.src = "../img/food/food3.jpg";
            myNavNum.innerHTML = "3";
            myNavTitle.innerHTML = "大頭山海產琉球店";
            myNavLocation.innerHTML =
            '<a href="https://goo.gl/maps/jJm75nYzWY5pV5Lu9"  target="_blank"><i class="fa-solid fa-location-dot"></i> &nbsp;屏東縣琉球鄉上福村杉板路76巷17-6號</a>';
            myNavText.innerHTML = "在地風味的餐點，提供新鮮美味的合菜料理";
            break;
        case 4:
            myNavImg.src = "../img/food/food4.jpg";
            myNavNum.innerHTML = "4";
            myNavTitle.innerHTML = "小琉球脆皮蛋餅";
            myNavLocation.innerHTML =
                '<a href="https://goo.gl/maps/XyFk84JarUxPampx7"  target="_blank"><i class="fa-solid fa-location-dot"></i> &nbsp;屏東縣琉球鄉中正路158-6號</a>';
            myNavText.innerHTML = "蛋餅薄脆鹹香，吃起來非常涮嘴";
            break;
        case 5:
            myNavImg.src = "../img/food/food5.jpg";
            myNavNum.innerHTML = "5";
            myNavTitle.innerHTML = "相思麵";
            myNavLocation.innerHTML =
                '<a href="https://goo.gl/maps/mBgMGGvT9FTjnMm8A"  target="_blank"><i class="fa-solid fa-location-dot"></i> &nbsp;屏東縣琉球鄉上杉路31巷7號</a>';
            myNavText.innerHTML = "超人氣古早味乾麵，柴燒熬煮的肉燥拌乾麵";
            break;
        case 6:
            myNavImg.src = "../img/food/food6.jpg";
            myNavNum.innerHTML = "6";
            myNavTitle.innerHTML = "夏味鮮海鮮";
            myNavLocation.innerHTML =
                '<a href="https://goo.gl/maps/mBgMGGvT9FTjnMm8A"  target="_blank"><i class="fa-solid fa-location-dot"></i> &nbsp;屏東縣琉球鄉上杉路31巷7號</a>';
            myNavText.innerHTML = "私房合菜海鮮，在地人帶路的私房美味";
            break;
        case 7:
            myNavImg.src = "../img/food/food7.jpg";
            myNavNum.innerHTML = "7";
            myNavTitle.innerHTML = "桂飄香腿庫飯舖";
            myNavLocation.innerHTML =
                '<a href="https://goo.gl/maps/mBgMGGvT9FTjnMm8A"  target="_blank"><i class="fa-solid fa-location-dot"></i> &nbsp;屏東縣琉球鄉上杉路31巷7號</a>';
            myNavText.innerHTML = "傳說中小琉球最強腿庫飯，在地必吃店家之一";
            break;
        case 8:
            myNavImg.src = "../img/food/food8.jpg";
            myNavNum.innerHTML = "8";
            myNavTitle.innerHTML = "高記在地小吃";
            myNavLocation.innerHTML = '<a href="https://goo.gl/maps/C7GShynRP6KKnmbJA"  target="_blank"><i class="fa-solid fa-location-dot"></i> &nbsp;屏東縣琉球鄉中山路58號</a>';
            myNavText.innerHTML = "高記招牌的蜂巢蝦，一道菜就可以定江山";
            break;
        case 9:
            myNavImg.src = "../img/food/food9.jpg";
            myNavNum.innerHTML = "9";
            myNavTitle.innerHTML = "蜜仔琉部";
            myNavLocation.innerHTML =
                '<a href="https://g.page/mizi2019?share"  target="_blank"><i class="fa-solid fa-location-dot"></i> &nbsp;屏東縣琉球鄉民生路65-1號</a>';
            myNavText.innerHTML = "人氣網美義式餐廳，開放明亮的採光非常好拍";
            break;
        case 10:
            myNavImg.src = "../img/food/food10.jpg";
            myNavNum.innerHTML = "10";
            myNavTitle.innerHTML = "廟口點心站";
            myNavLocation.innerHTML = 
            '<a href="https://goo.gl/maps/LcdiWhrxSbHRf2fx5"  target="_blank"><i class="fa-solid fa-location-dot"></i> &nbsp;屏東縣琉球鄉三民路277號</a>';
            myNavText.innerHTML = "熱呼呼的甜圈酥餅，老街裡的人氣點心麵包";
    }
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
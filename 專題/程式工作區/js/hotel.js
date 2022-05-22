fetch('../js/ball_hotel.json')
//注意路徑是以html為根目錄
.then(response => {
    return response.json();
})
.then(response => console.log(response));

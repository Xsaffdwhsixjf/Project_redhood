fetch('../js/ball_hotel.json')
//注意路徑是以html為根目錄
.then(response => {
    return response.json();
})
.then(response => console.log(response));
fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-035?Authorization=CWB-3E64CFD6-C20C-4A83-9EF9-3642C40DA1DC')
//ball_weather=>NO.26
.then(ball => {
    return ball.json();
})
.then(ball => console.log(ball));

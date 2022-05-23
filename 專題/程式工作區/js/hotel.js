let card = document.querySelector('#card')
fetch('../js/ball_hotel.json')
    //注意路徑是以html為根目錄
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i <= 149; i++) {
            let members = data.members[i];
            let name = members.name;
            let narrative = members.narrative;
            let address = members.address;
            let telephone = members.telephone;
            let pic1 = members.pic1;
            let pic_explain1 = members.pic_explain1;
            let web = members.web;
            if (pic1 == "") {
                pic1 = "https://buysmartjapan.com/assets/no_image-709ea11ceed07452132945912fd5c436755e3eddd89d92eed4fd66128e8dcf7a.png"
            }
            console.log(members);
            card.innerHTML += `
<div class="card">
    <div class="pic">
        <img src="${pic1}" alt="${pic_explain1}">
    </div>
    <div class="content">
        <h1 class="name">${name}</h1>
        <p class="narrative">${narrative}</p>
        <p class="address">${address}</p>
        <a href="${web}" class="web">${web}</a>
        <div class="tel">${telephone}</div>
    </div>
</div>        
            
            `
        };
    });
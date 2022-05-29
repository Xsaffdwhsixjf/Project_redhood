let screen_width = document.querySelector('html').clientWidth
let card = document.querySelector('#hotel_info');
let top_btn =document.querySelector('.top_btn')
fetch('../js/ball_hotel.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (index) {
        console.log(index);
        print(index);
    });
console.log(screen_width);

function print(index) {
    let N = 149;
    for (let i = 0; i < N; i += 2) {
        let members1 = index.members[i];
        let name1 = members1.name;
        let address1 = members1.address;
        let telephone1 = members1.telephone;
        let pic1 = members1.pic1;
        let pic_explain1 = members1.pic_explain1;
        let web1 = members1.web;
        if (pic1 == "") {
            pic1 = "https://buysmartjapan.com/assets/no_image-709ea11ceed07452132945912fd5c436755e3eddd89d92eed4fd66128e8dcf7a.png"
        };
        let members2 = index.members[i + 1];
        let name2 = members2.name;
        let address2 = members2.address;
        let telephone2 = members2.telephone;
        let pic2 = members2.pic1;
        let pic_explain2 = members2.pic_explain1;
        let web2 = members2.web;
        if (pic2 == "") {
            pic2 = "https://buysmartjapan.com/assets/no_image-709ea11ceed07452132945912fd5c436755e3eddd89d92eed4fd66128e8dcf7a.png"
        };
        let A1;
        let A2;
        if (web1 == '') {
            A1 = `<td>
    <div class="info_card">
    <div class="img">
    <img src="${pic1}" alt="${pic_explain1}" ></div>
    <div class="content">
    <h1>${name1}</h1>
    <p><i class="fa-solid fa-location-dot"></i>${address1}</p>
                <p><i class="fa-solid fa-phone"></i>${telephone1}</p>
            </div>
        </div>
        </td>`
        } else {
            A1 = `<td>
    <div class="info_card">
    <div class="img">
    <img src="${pic1}" alt="${pic_explain1}" ></div>
    <div class="content">
    <h1><a href="${web1}" target=_blank>${name1}</a></h1>
    <p><i class="fa-solid fa-location-dot"></i>${address1}</p>
                <p><i class="fa-solid fa-phone"></i>${telephone1}</p>
            </div>
        </div>
        </td>`
        }
        if (web2 == '') {
            A2 = `<td>
    <div class="info_card">
    <div class="img">
    <img src="${pic2}" alt="${pic_explain2}" ></div>
    <div class="content">
    <h1>${name2}</h1>
    <p><i class="fa-solid fa-location-dot"></i>${address2}</p>
                <p><i class="fa-solid fa-phone"></i>${telephone2}</p>
            </div>
        </div>
        </td>`
        } else {
            A2 = `<td>
    <div class="info_card">
    <div class="img">
    <img src="${pic2}" alt="${pic_explain2}" ></div>
    <div class="content">
    <h1><a href="${web2}" target=_blank>${name2}</a></h1>
    <p><i class="fa-solid fa-location-dot"></i>${address2}</p>
                <p><i class="fa-solid fa-phone"></i>${telephone2}</p>
            </div>
        </div>
        </td>`
        }
        card.innerHTML += `<tr>${A1}${A2}</tr>`;
        // if (i == N - 1 && (N % 2 != 0)) {
        //     card.innerHTML += `<tr>${A1}<td></td></tr>`;
        // } else {
        //     card.innerHTML += `<tr>${A1}${A2}</tr>`;
        // }
    };
    if(screen_width>1250){
        
    $(document).ready(function () {
        $('#table_id').dataTable({
            "bPaginate": true,
            "bLengthChange": false,
            "bFilter": true,
            "bInfo": false,
            "lengthMenu": [3],
            "bAutoWidth": false,
            "language": {
                "emptyTable": "資料載入時，發生了錯誤，試試重新整理",
                "zeroRecords": "無搜尋結果，試試更換關鍵字",
                "oPaginate": {
                    "sNext": '<i class="fa-solid fa-angles-right"></i>',
                    "sPrevious": '<i class="fa-solid fa-angles-left"></i>'
                }
            }
        });
    });
}else{
    top_btn.classList.remove('d-none')
    $(document).ready(function () {
        $('#table_id').dataTable({
            "bPaginate": false,
            "bLengthChange": false,
            "bFilter": true,
            "bInfo": false,
            "lengthMenu": [3],
            "bAutoWidth": false,
            "language": {
                "emptyTable": "資料載入時，發生了錯誤，試試重新整理",
                "zeroRecords": "無搜尋結果，試試更換關鍵字",
                "oPaginate": {
                    "sNext": '<i class="fa-solid fa-angles-right"></i>',
                    "sPrevious": '<i class="fa-solid fa-angles-left"></i>'
                }
            }
        });
    });
}}
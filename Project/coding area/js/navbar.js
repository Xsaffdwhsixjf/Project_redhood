    // Navbar下拉清單js
    const btn1 = document.querySelector('.btn1')
    const btn2 = document.querySelector('.btn2')
    const list1 = document.querySelector('.list1')
    const list2 = document.querySelector('.list2')
    btn1.addEventListener('click', () => {
        list1.classList.toggle('show')
    })
    btn2.addEventListener('click', () => {
        list2.classList.toggle('show')
    })

    // 最新消息橋段
    let news_btn = document.querySelector('.news')
    let news = document.querySelector('#news')
    let turtle = document.querySelector('.turtle');
    let whale = document.querySelector('.whale');


    whale.addEventListener('click', function () {
        whale.classList.toggle('d-none');
        turtle.classList.toggle('d-none');
        news.classList.toggle('open');
    })

    turtle.addEventListener('click', function () {
        whale.classList.toggle('d-none');
        turtle.classList.toggle('d-none');
        news.classList.toggle('open');
    })
    news_btn.addEventListener('click', function () {
        news.classList.toggle('open');
        event.preventDefault();
    })

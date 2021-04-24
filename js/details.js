window.onload=function () {
    var mySwiper = new Swiper ('.swiper-container1', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay:{
            stopOnLastSlide:true,
        },

    })

    let oDiv = document.getElementById('tabs_container');
    let aBtn = document.getElementsByTagName('li');
    let aDiv = oDiv.getElementsByTagName('div');
    console.log(aDiv)

    for (let i=0;i<aBtn.length;i++){
        aBtn[i].index = i;
        aBtn[i].onclick=function () {
            for (let i=0;i<aBtn.length;i++){
                console.log(aDiv[i])
                aBtn[i].className = '';
                aDiv[i].style.display='none';
            }
            this.className= 'tabulous_active';
            aDiv[this.index].style.display='block';
        }
    }
};
function fastBuy() {
    window.location.href='write_order.html';
}
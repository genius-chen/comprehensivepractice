window.addEventListener('load',function(){
    //轮播图 按钮显示
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var focus = document.querySelector('.focus');
    focus.addEventListener('mouseenter',function(){
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
        timer = null ;
    })
    focus.addEventListener('mouseleave',function(){
        prev.style.display = 'none';
        next.style.display = 'none';
        timer = setInterval(function(){
            next.click();
        },2000)
    })
    //轮播图圆点
    var slideshow = document.querySelector('.slideshow');
    var promoNav = document.querySelector('.promoNav');
    var focusWidth = focus.offsetWidth;
    var num = 0;//滑动位置计数器
    var circle = 0;//控制小圆圈
    for (var i = 0;i < slideshow.children.length; i++){
        var li = document.createElement('li');
        li.setAttribute('index', i);
        promoNav.appendChild(li);
        li.addEventListener('click',function(){
            for(var i = 0;i < promoNav.children.length; i++){
                promoNav.children[i].className = '';
                
            }
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            this.className = 'selected';
            
            animate(slideshow, -index * focusWidth)
        })
    }
    //按钮
    var first = slideshow.children[0].cloneNode(true);
    slideshow.appendChild(first);
    next.addEventListener('click',function(){
        if(num == slideshow.children.length - 1){
            slideshow.style.left = 0;
            num = 0;
        }
        num++;
        animate(slideshow,-num * focusWidth);
        circle++;
        for(var i = 0;i < promoNav.children.length;i++){
            promoNav.children[i].className = '';
        }
        if(circle == promoNav.children.length){
            circle = 0;
        }
        promoNav.children[circle].className = 'selected';
    })
    prev.addEventListener('click',function(){
        if(num == 0){
            num = slideshow.children.length - 1;
            slideshow.style.left = -num * focusWidth + 'px';
        }
        num--;
        animate(slideshow,-num * focusWidth);
        circle--;
        for(var i = 0;i < promoNav.children.length;i++){
            promoNav.children[i].className = '';
        }
        if(circle < 0){
            circle = promoNav.children.length - 1;
        }
        promoNav.children[circle].className = 'selected';
    })
    
    promoNav.children[0].className = 'selected';
    //自动切换定时器
    var timer = setInterval(function(){
        next.click();
    },2000)
})
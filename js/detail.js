window.addEventListener('load',function(){
    var previmg =  document.querySelector('.preview-img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    previmg.addEventListener('mouseover',function(){
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    previmg.addEventListener('mouseout',function(){
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    previmg.addEventListener('mousemove',function(e){
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        var differenceX = previmg.offsetWidth - mask.offsetWidth;
        var differenceY = previmg.offsetHeight - mask.offsetHeight;
        if(maskX <= 0){
            maskX = 0 ;
        }else if(maskX >= differenceX) {
            maskX = differenceX;
        }
        if(maskY <= 0){
            maskY = 0 ;
        }else if(maskY >= differenceY) {
            maskY = differenceY;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bigImg = document.querySelector('.bigImg');
        var bigMaxX = bigImg.offsetWidth - big.offsetWidth;
        var bigX = maskX / differenceX * bigMaxX ;
        var bigY = maskY / differenceX * bigMaxX ;
        bigImg.style.top = - bigY + 'px';
        bigImg.style.left = - bigX + 'px';
    })
})
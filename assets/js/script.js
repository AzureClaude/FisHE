$(function(){
    let slides = $(".slider-items");
    slides.hide();

    let min = 0;
    let max = 3;
    let curr = min;

    slides.eq(curr).show();

    $("#slide-left").click(()=>{
        slides.eq(curr).hide();
        curr--;
        if(curr < min) curr = max;
        slides.eq(curr).show();
    })

    $("#slide-right").click(()=>{
        slides.eq(curr).hide();
        curr++;
        if(curr > max) curr = min;
        slides.eq(curr).show();
    })

})
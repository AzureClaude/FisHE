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

    let fishbetta= $(".border-product-betta");
    fishbetta.hide();
    let fishkoi= $(".border-product-koi");
    fishkoi.hide();
    let fishgoldfish= $(".border-product-goldfish");
    fishgoldfish.hide();
   
    $("#fishbetta").click(()=>{
        fishkoi.hide();
        fishgoldfish.hide();
        fishbetta.show();
    })

    $("#fishkoi").click(()=>{
        fishgoldfish.hide();
        fishbetta.hide();
        fishkoi.show();
    })

    $("#fishgold").click(()=>{
        fishkoi.hide();
        fishbetta.hide();
        fishgoldfish.show();
    })
    
})
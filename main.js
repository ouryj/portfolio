$(document).ready(()=>{
 
    // burke on top here
    $('.nav').hide();
   $('.div2').hide();
   $('.div3').hide();
   $('.div4').hide();
   $('.showcase2').hide();
    $('#info').on('click',()=>{
        $('.nav').slideToggle(600).delay(800);
    })
    

    $('#bio').on('click',(event)=>{
        event.preventDefault()
       $('.div2').slideToggle( 600 ).delay( 800 );
       $('.div1').hide();
       $('.div3').hide();
       $('.div4').hide();
       
       
    })
    $('.fa-info-circle').on('click',(event)=>{
        event.preventDefault()
       $('.div2').slideToggle( 600 ).delay( 800 );
       $('.div1').hide();
       $('.div3').hide();
       $('.div4').hide();
       
       
    })
    $('#showcase').on('click',(event)=>{
        event.preventDefault()
        $('.div3').slideToggle(600).delay(800);
        $('.div2').hide();
        $('.div1').hide();
        $('.div4').hide();
    })
    $('#btn-div2').click((event)=>{
       
        $('.div2').hide();
        $('.div1').show();
    })
    $('#btn-div4').click((event)=>{
        event.preventDefault();
        $('.div4').hide();
        $('.div1').show();
    })
    $('.close').click(()=>{
        $('.div2').hide();
        $('.div1').show();
    })
    $('.close-div3').click(()=>{
        $('.div3').hide();
        $('.div1').show();
    })

    $('.right-arrow').click(()=>{
        $('.showcase2').show();
        $('.showcase1').hide();
    })
    $('.left-arrow').click(()=>{
        $('.showcase1').show();
        $('.showcase2').hide();
    })
    $('#contact').click(()=>{
        $('.div4').slideToggle(600).delay(800);
        $('.div1').hide();
        $('.div2').hide();
        $(".div3").hide();
    })
    $('.close-div4').on('click',()=>{
        $('.div4').hide();
        $('.div1').show();
    })
 
    //mouseoverinfo

   

  
 
 
  
})
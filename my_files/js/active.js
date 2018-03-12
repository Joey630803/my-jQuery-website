$(()=>{
  // $('.header_menu').on('mouseover','li',function(){
  //   $(this).addClass('active').siblings().removeClass('active');
  // })
  // $('.header_menu').on('mouseout','li',function(){
  //   $(this).removeClass('active')
  // })


  // $('.header_menu').on('click','a',function(){
  //   //alert(9999)
  //   $(this).addClass('actived').siblings().removeClass('actived');
  // })
  $(window).scroll(function(e) {
    let Top=$(this).scrollTop()
    if(Top>0){
      console.log(111111)
      $('.header').css('opacity','0')
    }else{
      $('.header').css('opacity','1')
    }
  })

})

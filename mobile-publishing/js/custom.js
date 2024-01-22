$(function(){
  //Trigger
  $('.trigger').click(function(){
    $('.trigger, .trigger-menu, .trigger-close').toggleClass('on')
  })
  $('.trigger-close').click(function(){
    $(this).removeClass('on')
    $('.trigger, .trigger-menu').removeClass('on')
  })

  //Accordion
  $('.trigger-title').click(function(){
    $(this).siblings('.trigger-content')
    $(this).next().stop().slideToggle()
    $(this).toggleClass('action')
  })

  //Tabmenu
  $('.tab1').show()
  $('.tab-btn a:first-child').click(function(){
    $('.tab1').show()
    $('.tab2').hide()
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
  })
  $('.tab-btn a:last-child').click(function(){
    $('.tab1').hide()
    $('.tab2').show()
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
  })

  //Footer Include
  $('.footer-include').load('footer.html')

  //Header Include
  $('.header-include').load('header.html')
})
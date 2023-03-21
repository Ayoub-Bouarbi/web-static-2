/*global $, alert, console, Waypoint*/
$(function () {

    "use strict";

    $('.navbar .lest-item li a').on('click', function () {

        $(this).parent().addClass('active').siblings().removeClass('active');

    });
    $('.navbar .menu').on('click', function () {
        
        $('.navbar .lest-item').toggle('show');
        
    });


    var waypoint = new Waypoint({
        
        element: document.getElementById('counter-content'),
        
        handler: function (down) {
            
            $('.timer').each(function () {
                
                var $this = $(this),
                    
                    countTo = $this.attr('data-count');

                $({
                    countNum: $this.text()
                    
                }).animate({
                    
                    countNum: countTo
                },

                    {

                        duration: 3000,
                    
                        easing: 'linear',
                    
                        step: function () {
                            
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            
                            $this.text(this.countNum);
                            
                    //alert('finished');
                        }
                    });
            });
        },
        offset: '90%'
    });

    $(window).on('load', function () {
        
        $('.load-screen .overlay').fadeOut(4000, function () {
            
            $('.load-screen').fadeOut(100, function () {
                
                $('body').css('overflow', 'auto');
                
                $(this).remove();
            });
        });
        
    });
});

$(document).ready(function() {

    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 60;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    $('[name="country"]').on('change', function () {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency;
        $("[value = " + geoKey + "]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });

    // $('.product_item .button').on('click', function(){
    //     var prodName = $(this).siblings('.title_block').children('h4').text();
    //     $("input[name='comment']").val(prodName);
    // });

    $('.cart-add').click(function() {
        var articul = $(this).parent().parent().find('.artic_n').text();
        $('.descr').val(articul);
        $("input[name='dop_params[articul]']").val(articul);
    });
    /* sliders */

    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 300,
        mouseDrag: false,
        pullDrag: false,
        dots: false,
        nav: true,
        navText: ""
    });

    $(".reviews_list").owlCarousel({
        smartSpeed: 300,
        mouseDrag: false,
        pullDrag: false,
        dots: false,
        navText: "",
        responsive: {
            0: {
                items: 1,
                margin: 0,
                nav: true,
                loop: true
            },
            660: {
                items: 2,
                margin: 20,
                nav: true,
                loop: true
            },
            1170: {
                items: 4,
                margin: 20,
                nav: false,
                loop: false
            }
        }
    });


    $('.slider_prods').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.owl-next').html(' ');
    $('.owl-prev').html(' ');

    $(document).ready(function(){
        //Open modal
        $('.goods-item__btn').click(function(e) {
            e.preventDefault();
            $("#openModal").addClass('show');
            $(".modal-dialog").addClass('animate');
        });
        //Close modal
        $(".hide__onclick").click(function(e) {
            if (e.target == this) {
                e.preventDefault();
                $(".modal").removeClass('show');
                $(".modal-dialog").removeClass('animate');
            }
        });
        $('.goods-item__btn').click(function(e){

            var color = $(this).prev().prev().find(".color").not('b:first').text();
            var colorArr = color.replace('Цвета', '').split(', ');

            $("select[name='dop_params[color]'] option").remove(); //очищаем контейнер
            $("select[name='dop_params[color]']").append('<option>'+'Цвет не выбран'+'</option>');
            $(colorArr).each(function(i,elem){
                $("select[name='dop_params[color]']").append('<option>'+elem+'</option>');
            });

            var art = $(this).prev().prev().find("p:last-child").text();
            var name_string = $(this).parent().find(".nametovar").text();
            $(".tovar_name p" ).remove(); //очищаем контейнер
            $(".tovar_img p").remove(); //очищаем контейнер

            $(".tovar_img").append('<p>'+name_string+'</p>');
            $(".tovar_img").append('<p>'+art+'</p>');
            $(".tovar_name").append('<p>'+'Ваш заказ'+'</p>');
            // var colorSelected = $("select[name='dop_params[color]']").children('option:selected').text();
            // $('input[name="comments"]').val(name_string + art + 'Цвет: '+ colorSelected);
            // $('select[name=colors]').change(function(event) {
            //     colorSelected = $(this).children('option:selected').text();
            //     colorSelected = $.trim(colorSelected.replace(/\s+/g, ' '));
            //     $('input[name="comments"]').val(name_string +', '+ art + ", "+ 'Цвет: '+ colorSelected);
            // });
        });
    });
});

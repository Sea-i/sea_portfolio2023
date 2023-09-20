$(document).on("pagecreate", "#layout" , function(){
    console.log("%c@kimseoha", "font-size:20px; color:white; background:#6667aa; font-family:'Shrikhand'; padding:5px 10px;")
    //한 섹션 씩 스크롤 되게 하기 
    const scStop = $("#layout .move");
    const mobileWidth = $(document).width();
    
    $(scStop).each(function(){
        if( mobileWidth >= 0 ){ 
            $(this).on("mousewheel DOMMouseScroll", function(e){
                e.preventDefault();
                let delta = 0;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                }
                else if (event.detail) delta = -event.detail / 3;
    
                let moveTop = null;
    
                if (delta < 0) {
                    if ($(this).next() !=undefined) {
                        moveTop = $(this).next().offset().top;
                    }
                }//end if 
                    else  {
                        if($(this).prev() !=undefined) {
                            moveTop = $(this).prev().offset().top;
                        };
                    }//end else
    
                    $("html, body").stop().animate({ 
                        scrollTop : moveTop + "px"},
                        { duration : 300, complete: function(){
                        }
                    });
            });// end this.on 
        }// if
    });//end each() */

    // 첫화면 글씨 타이핑효과
    const mainTitle = "Portfoilo";
    const mainLen = mainTitle.length;
    let mT = 0;
    let mTxt = "";

    const subTitle = " : Kim Seo Ha";
    const subLen = subTitle.length;
    let sT = 0;
    let sTxt = "";

    function mainType(){
        if( mT < mainLen ){
            mTxt += mainTitle[ mT ];
            $("#title h1").text( mTxt );
            mT++;
            setTimeout( mainType , 250 );
        }
    }// mainType
    mainType();

    function subType(){
        if( sT < subLen ){
            sTxt += subTitle[ sT ];
            $("#title span").text( sTxt );
            sT++;
            setTimeout( subType , 250 );
        }
    }
    setTimeout ( subDelay , 2000 );
    function subDelay(){
        subType();
    }

    // 메인메뉴
    $("#menu-slide").on("mouseenter focus", function(){
        $("#menu a").removeClass("ent");
        $(this).addClass("ent");
        $(this).next().stop().slideDown();        
    });//end #menu-slide.on
    $("#sub-menu a").on("mouseenter focus", function(){
        $("#sub-menu a").removeClass("ent");
        $(this).addClass("ent");
        $(this).parent().prev().addClass("ent");
    });//edn #sub-menu a.on
    $("#menu li").mouseleave(function(){
        $("#sub-menu a").removeAttr("class");
        $("#menu a").removeClass("ent");
        $("#sub-menu").stop().slideUp();
    });
    $("#sub-menu a:last-child").blur(function(){
        $("#sub-menu a").removeAttr("class");
        $("#menu a").removeClass("ent");
        $("#sub-menu").stop().slideUp();
    });

    // 서브메뉴
    $("#side-btn").click(function(){
        if( $(this).text() == "menu" ){
            $("#side-menu").stop().fadeIn();
            $(this).text("close");
            $("#side").addClass("hov");
        }
        else {
            $(this).text("menu");
            $("#side-menu").stop().fadeOut();
            $("#side").removeClass("hov");
        }
    });
    $("#side").mouseleave(function(){
        if( $("#side-btn").text() == "menu" ){
            $("#side-menu").stop().fadeOut();
            $("#side").removeClass("hov");
        }
        else{            
            $$("#side-btn").text("menu");
            $("#side-menu").stop().fadeOut();
            $("#side").removeClass("hov");
        }
    });
    $("#side").blur(function(){
        if( $("#side-btn").text() == "menu" ){
            $("#side-menu").stop().fadeOut();
            $("#side").removeClass("hov");
        }
        else{            
            $("#side-btn").text("menu");
            $("#side-menu").stop().fadeOut();
            $("#side").removeClass("hov");
        }
    });
    $("#side-menu a").click(function(){
        $("#side-btn").text("menu");
        $("#side").removeClass("hov");
        $("#side-menu").stop().fadeOut();
    });

    const winWidth = $(window).width();
    const winHeight = $(window).height();
    const homeTop = $("#home").offset().top;
    const aboutTop = $("#about").offset().top;
    const webTop = $("#web").offset().top;
    const detailTop = $("#detail").offset().top;
    const eventTop = $("#event").offset().top;
    const contactTop = $("#contact").offset().top;
    let scrollTop = 0;

    if( winWidth > 1920){
        // alret("이 웹페이지는  1920px 이상에서는 원활하지 않으니 브라우저의 사이즈를 줄여주세요");
    }
    $(document).scroll(function(){
        scrollTop = $(window).scrollTop();
        if ( scrollTop >= homeTop ){
            $("#side").hide();
        }
        if ( scrollTop >= aboutTop ){
            $("#side").show().css("display","flex");
            $("#photo progress").delay(200).animate({ value : 93 });
            $("#ai progress").delay(300).animate( {value : 83 });
            $("#proto progress").delay(300).animate({ value : 78 });
            $("#html progress").delay(300).animate({ value : 89 });
            $("#css progress").delay(300).animate({ value : 88 });
            $("#js progress").delay(300).animate({ value : 85 });
        }
        if ( scrollTop >= webTop ){
            
            
        }
        if ( scrollTop >= detailTop ){

        }
        if ( scrollTop >= eventTop ){

        }
        if ( scrollTop >= contactTop ){

        }
    });//end window.scroll

    // <web>이미지 슬라이드
    let slide = setInterval( webSlide , 2800);

    function webSlide(){
        
        $("#slideArea").stop().animate( { top : "-600pt"} , 2500 , function(){
            $("#slideArea").prepend( $("#slideArea").children().last() );
            $("#slideArea").css( "top" , "-1200pt" );
            
        });
    }

    $("#slideArea").hover(
        function(){
            clearInterval( slide );
        }, 
        function(){
            slide = setInterval( webSlide , 2800);
        }
        );


    // 상세페이지 이미지에 마우스를 올리면, 큰 화면
    $("#small button").on("mouseenter focus", function(){
        const smallSrc = $(this).children().attr("src");
        const smallAlt = $(this).children().attr("alt");
        $("#big img").attr({ src : smallSrc , alt : smallAlt });
    });

    $("#dt-info").click(function(){
        const bigSrc = $("#dt-info").prev().prev().children().children().attr("src")
        const bigAlt = $("#dt-info").prev().prev().children().children().attr("alt")
        console.log( bigSrc + "\n" + bigAlt );
    });

    // 이벤트페이지, 웹이벤트 슬라이드 위 > 아래
    let eSlide = setInterval ( evtSlide , 2800 );
    
    function evtSlide(){
        $("#et-web-slide").stop().animate( { top : "-250px"} , 2500, function(){
            $("#et-web-slide").prepend( $("#et-web-slide").children().last() );
            $("#et-web-slide").css( "top" , "-700px" );
        });
        // console.log("move?");
    }

    $("#et-web-slide >div").hover(
        function(){
            clearInterval( eSlide );
            $(this).children(".et-info").fadeIn().css("display" , "flex");
        }, 
        function(){
            eSlide = setInterval ( evtSlide , 2800 );
            $(".et-info").fadeOut();
        });

    // sns event slide 아래에서 위로
    let sSlide = setInterval ( snsSlide , 2800 );
    
    function snsSlide(){
        $("#et-sns-slide").stop().animate( { top : "-700px"} , 2500, function(){
            $("#et-sns-slide").append( $("#et-sns-slide").children().first() );
            $("#et-sns-slide").css( "top" , "-250px" );
        });
        // console.log("move?");
    }

    $("#et-sns-slide >div").hover(
        function(){
            clearInterval( sSlide );
            $(this).children(".et-info").fadeIn().css("display" , "flex");
        }, 
        function(){
            sSlide = setInterval ( snsSlide , 2800 );
            $(".et-info").fadeOut();
        });
});//All END
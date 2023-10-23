$(document).on("pagecreate", "#layout" , function(){
    console.log("%c@kimseoha", "font-size:20px; color:white; background:#6667aa; font-family: 'InkLipquid'; font-weight : bold; padding:5px 10px;")
    
    const  winW = $(window).width();
    /*//한 섹션 씩 스크롤 되게 하기 
    const scStop = $("#container .move");
    
  $(scStop).each(function(){
        if( $("#big-content").css("display","none")  && winW > 820 ){ 
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
                else {    
                    if($(this) == $("#home") ) {          
                            moveTop = 0;    
                        }
                        else {
                            moveTop = $(this).prev().offset(),top;      
                        }
                    }//end else
    
                    $("html, body").stop().animate({ 
                        scrollTop : moveTop + "px"},
                        { duration : 300, complete: function(){
                        }
                    });
            });// end this.on 
        }// if
        else {
           
        }
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
            $("#side-btn").text("menu");
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
    
    $("#side h3 a").click(function(){
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

    const homeTop = $("#home").offset().top;
    const aboutTop = $("#about").offset().top -100;
    let scrollTop = 0;

    // 스크롤에 반응하는 스크립트
    $(document).scroll(function(){
        scrollTop = $(window).scrollTop();
        if ( scrollTop >= homeTop ){
            $("#side").hide();
        }
        if ( scrollTop >= aboutTop ){
            $("#side").show();
            $("#side").css("display","flex");
            $("#photo progress").delay(200).animate({ value : 93 });
            $("#ai progress").delay(300).animate( {value : 83 });
            $("#proto progress").delay(300).animate({ value : 78 });
            $("#html progress").delay(300).animate({ value : 89 });
            $("#css progress").delay(300).animate({ value : 88 });
            $("#js progress").delay(300).animate({ value : 85 });
        }
    });//end window.scroll

    if ( winW > 1280 ){          
        // <web>이미지 슬라이드 우>좌
        let slide = setInterval( webSlide , 2800 );

        function webSlide(){
            $("#slideArea").stop().animate( { left : "-1400px"} , 2700, function(){
                $("#slideArea").append( $("#slideArea").children().first() );
                $("#slideArea").css( "left" , "0" );
            });
        }
        $("#slideArea").hover(
            function(){
                clearInterval ( slide );
            },function(){
                slide = setInterval( webSlide , 2800 );
            });

                // 이벤트페이지, 웹이벤트 슬라이드 위 > 아래
        let eSlide = setInterval ( evtSlide , 2800 );
        
        function evtSlide(){
            $("#et-web-slide").stop().animate( { top : "-200px"} , 2500, function(){
                $("#et-web-slide").prepend( $("#et-web-slide").children().last() );
                $("#et-web-slide").css( "top" , "-575px" );
            });    
        }

        $("#et-web-slide >div").hover(
            function(){
                clearInterval( eSlide );
                $(this).children(".et-info").stop().fadeIn().css("display" , "flex");
            }, 
            function(){
                eSlide = setInterval ( evtSlide , 2800 );
                $(".et-info").stop().fadeOut();
            });

        // sns event slide 아래에서 위로
        let sSlide = setInterval ( snsSlide , 2800 );
        
        function snsSlide(){
            $("#et-sns-slide").stop().animate( { top : "-575px"} , 2500, function(){
                $("#et-sns-slide").append( $("#et-sns-slide").children().first() );
                $("#et-sns-slide").css( "top" , "-200px" );
            });
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
    }
    // 상세페이지 이미지에 마우스를 올리면, 큰 화면
    
    if( winW > 820 ){
        $("#dt-info").hide();
        $("#big").on("mouseenter focus",function(){
            $("#dt-info").fadeIn();
        });
        $("#dt-info").mouseleave(function(){
            $("#dt-info").fadeOut();
        });
    } //end if
        $("#small button").on("mouseenter focus", function(){
            const smallSrc = $(this).children().attr("src");
            const smallAlt = $(this).children().attr("alt");
            $("#big img").attr({ src : smallSrc , alt : smallAlt });
        });
    
    // 큰 화면에서 자세히 보기를 누르면 원본 사진이 뜬다(디테일 디자인)
    $("#dt-info").click(function(){
        const dtBigImgSrc = $(this).prev().children().attr("src");
        const dtBigImgSrcChan = dtBigImgSrc.replace( ".jpg" , "-big.jpg" );
        const dtBigImgAlt = $(this).prev().children().attr("alt");
    
        $("#side").hide();
        $("#big-content").fadeIn();
        $("#big-content h4").text( dtBigImgAlt );
        $("#big-content img").attr({ "src" : dtBigImgSrcChan, "alt" : dtBigImgAlt });
        $("body").css("overflow-y" , "hidden" );
        $("#big-content").css("overflow-y" , "auto" );

        const dtH2height = $("#detail h2").position().top;
        $("#big-content").css("top" , dtH2height );
    });

    // 자세히 보기를 누르면 원본 사진이 뜬다 (이벤트 디자인)
    $(".et-info").click(function(){
        const etBigImgSrc = $(this).prev().attr("src");
        const etBigImgSrcChan = etBigImgSrc.replace( ".jpg" , "-big.jpg" );
        const etBigImgAlt = $(this).prev().attr("alt");

        $("#side").hide();
        $("#big-content").fadeIn();
        $("#big-content h4").text( etBigImgAlt );
        $("#big-content img").attr({ "src" : etBigImgSrcChan, "alt" : etBigImgAlt });
        $("body").css("overflow-y" , "hidden" );
        $("#big-content").css("overflow-y" , "auto" );

        const etH2height = $("#event h2").position().top;
        $("#big-content").css("top" , etH2height );
    });

    $("#big-content-btn").click(function(){
        $("#big-content").fadeOut();
        $("#big-content").scrollTop(0);
        $("body").css("overflow-y" , "auto" );
        $("#side").show();
        $("#side").css("display","flex");
    });
    
    if( winW <= 1280 && winW > 820 ){
        // <web>이미지 슬라이드 우>좌
        let slide = setInterval( webSlide , 2800 );

        function webSlide(){
            $("#slideArea").stop().animate( { left : "-1000px"} , 2700, function(){
                $("#slideArea").append( $("#slideArea").children().first() );
                $("#slideArea").css( "left" , "0" );
            });
        }
        $("#slideArea").hover(
            function(){
                clearInterval ( slide );
            },function(){
                slide = setInterval( webSlide , 2800 );
            });

                // 이벤트페이지, 웹이벤트 슬라이드 위 > 아래
        let eSlide = setInterval ( evtSlide , 2800 );

        function evtSlide(){
            $("#et-web-slide").stop().animate( { top : "-175px"} , 2500, function(){
                $("#et-web-slide").prepend( $("#et-web-slide").children().last() );
                $("#et-web-slide").css( "top" , "-500px" );
            });    
        }

        $("#et-web-slide >div").hover(
            function(){
                clearInterval( eSlide );
                $(this).children(".et-info").stop().fadeIn().css("display" , "flex");
            }, 
            function(){
                eSlide = setInterval ( evtSlide , 2800 );
                $(".et-info").stop().fadeOut();
            });

        // sns event slide 아래에서 위로
        let sSlide = setInterval ( snsSlide , 2800 );

        function snsSlide(){
            $("#et-sns-slide").stop().animate( { top : "-500px"} , 2500, function(){
                $("#et-sns-slide").append( $("#et-sns-slide").children().first() );
                $("#et-sns-slide").css( "top" , "-175px" );
            });
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
    } // 1280px보다 작거나 같을 때

});//All END
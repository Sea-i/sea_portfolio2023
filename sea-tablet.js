$(document).on("pagecreate","#layout" , function(){
    const winW = $(window).width();
    
    if( winW <=820 && winW > 474 ){
        $("#abM h2").click(function(){
            // console.log("뜨나?");
            $("#abM h2 ").removeClass("abClick");
            $(this).addClass("abClick");
            $("#abM ul").stop().fadeOut();
            $(this).next().stop().fadeIn();
        });

        // <web> 왼쪽으로 이동하는 슬라이드 (스와이프도 가능)
        $("#slideArea").swipeleft(function(){
            TwebSlide();
        });
        $("#slideArea").swiperight(function(){
            TwebSlideRight();
        });

        let Tslide = setInterval( TwebSlide , 2800 );

        function TwebSlide(){
            clearInterval(Tslide);
            $("#slideArea").stop().animate( { left : "-1500px"} , 2700, function(){
                $("#slideArea").append( $("#slideArea").children().first() );
                $("#slideArea").css( "left" , "-750px" );
                Tslide = setInterval( TwebSlide , 2800 );
            });
        }// TwebSlide

        function TwebSlideRight(){
            clearInterval(Tslide);
            $("#slideArea").stop().animate( { left : "0"} , 2700 , function(){
                $("#slideArea").prepend( $("#slideArea").children().last() );
                $("#slideArea").css( "left" , "-750px" );
                Tslide = setInterval( TwebSlide , 2800 );
            });
        } //TwebSlideRight 

        $("#slideArea").click(function(){
            clearInterval( Tslide );
        });

        // <event> 좌우로 이동하는 슬라이드와 스와이프
        // <event - web >
        $("#et-web-slide").swipeleft(function(){
            etWebSwipe();
        });
        $("#et-web-slide").swiperight(function(){
            etWebSwipeRight();
        });
        let EWslide = setInterval( TetWebSlide , 2800 );

        function TetWebSlide(){ //자동슬라이드 오>왼
            $("#et-web-slide").stop().animate( { left : "-950px"} , 2700 , function(){
                $("#et-web-slide").append( $("#et-web-slide").children().first() );
                $("#et-web-slide").css("left" , "-575px" );
            });
        }

        function etWebSwipe(){
            clearInterval( EWslide );
            $("#et-web-slide").stop().animate( { left : "-950px"} , 100, function(){
                $("#et-web-slide").append( $("#et-web-slide").children().first() );
                $("#et-web-slide").css("left" , "-575px" );
                EWslide = setInterval( TetWebSlide , 2800 );
            });
        }
        function etWebSwipeRight(){
            clearInterval( EWslide );
            $("#et-web-slide").stop().animate( { left : "-200px"}, 100, function(){
                $("#et-web-slide").prepend( $("#et-web-slide").children().last() );
                $("#et-web-slide").css("left" , "-575px");
                EWslide = setInterval( TetWebSlide , 2800 );
            });
        }

        $("#et-web .et-slide-img img").click(function(){
            clearInterval( EWslide );
            $("#et-web .et-info").hide();
            $(this).next().show().css("display","flex");
        });

        // <event - sns >
        $("#et-sns-slide").swipeleft(function(){
            etSnsSwipe();
        });
        $("#et-sns-slide").swiperight(function(){
            etSnsSwipeRight();
        });
        let ESslide = setInterval( TetSnsSlide , 2800 );

        function TetSnsSlide(){ //자동슬라이드 오>왼
            $("#et-sns-slide").stop().animate( { left : "-200px"}, 2700, function(){
                $("#et-sns-slide").prepend( $("#et-sns-slide").children().last() );
                $("#et-sns-slide").css("left" , "-575px");
            });
        }

        function etSnsSwipe(){
            clearInterval( ESslide );
            $("#et-sns-slide").stop().animate( { left : "-950px"} , 100, function(){
                $("#et-sns-slide").append( $("#et-sns-slide").children().first() );
                $("#et-sns-slide").css("left" , "-575px" );
                ESslide = setInterval( TetSnsSlide , 2800 );
            });
        }
        function etSnsSwipeRight(){
            clearInterval( ESslide );
            $("#et-sns-slide").stop().animate( { left : "-200px"}, 100, function(){
                $("#et-sns-slide").prepend( $("#et-sns-slide").children().last() );
                $("#et-sns-slide").css("left" , "-575px");
                ESslide = setInterval( TetSnsSlide , 2800 );
            });
        }

        $("#et-sns .et-slide-img img").click(function(){
            clearInterval( ESslide );
            $("#et-sns .et-info").hide();
            $(this).next().show().css("display","flex");
        });
        
        // < 웹&SNS 공통 >
        $("#big-content-btn").click(function(){
            $(".et-info").hide();
            EWslide = setInterval( TetWebSlide , 2800 );
            ESslide = setInterval( TetSnsSlide , 2800 );
        });

        // <디테일 디자인>
        $("#dt-info").hide();

        $("#big").click(function(){
            $("#dt-info").show();
        });

    } // 태블릿전용 스크립트

    if ( winW <=474 ){
        $("#abM h2").click(function(){
            // console.log("뜨나?");
            $("#abM h2 ").removeClass("abClick");
            $(this).addClass("abClick");
            $("#abM ul").stop().fadeOut();
            $(this).next().stop().fadeIn();
        });
        $("#edu h2").click(function(){
            console.log("왜 또 안뜨는디");
        });

        // <web> 왼쪽으로 이동하는 슬라이드 (스와이프도 가능)
        $("#slideArea").swipeleft(function(){
            MwebSlide();
        });
        $("#slideArea").swiperight(function(){
            MwebSlideRight();
        });

        let Mslide = setInterval( MwebSlide , 2800 );

        function MwebSlide(){
            clearInterval(Mslide);
            $("#slideArea").stop().animate( { left : "-700px"} , 2700, function(){
                $("#slideArea").append( $("#slideArea").children().first() );
                $("#slideArea").css( "left" , "-350px" );
                Mslide = setInterval( MwebSlide , 2800 );
            });
        }// TwebSlide

        function MwebSlideRight(){
            clearInterval(Mslide);
            $("#slideArea").stop().animate( { left : "0"} , 2700 , function(){
                $("#slideArea").prepend( $("#slideArea").children().last() );
                $("#slideArea").css( "left" , "-350px" );
                Mslide = setInterval( MwebSlide , 2800 );
            });
        } //TwebSlideRight 

        $("#slideArea").click(function(){
            clearInterval( Mslide );
        });

        // <event> 좌우로 이동하는 슬라이드와 스와이프
        // <event - web >
        $("#et-web-slide").swipeleft(function(){
            MetWebSwipe();
        });
        $("#et-web-slide").swiperight(function(){
            MetWebSwipeRight();
        });
        let mEWslide = setInterval( MetWebSlide , 2800 );

        function MetWebSlide(){ //자동슬라이드 오>왼
            $("#et-web-slide").stop().animate( { left : "-450px"} , 2700 , function(){
                $("#et-web-slide").append( $("#et-web-slide").children().first() );
                $("#et-web-slide").css("left" , "-275px" );
            });
        }

        function MetWebSwipe(){
            clearInterval( mEWslide );
            $("#et-web-slide").stop().animate( { left : "-450px"} , 100, function(){
                $("#et-web-slide").append( $("#et-web-slide").children().first() );
                $("#et-web-slide").css("left" , "-275px" );
                mEWslide = setInterval( MetWebSlide , 2800 );
            });
        }
        function MetWebSwipeRight(){
            clearInterval( mEWslide );
            $("#et-web-slide").stop().animate( { left : "-100px"}, 100, function(){
                $("#et-web-slide").prepend( $("#et-web-slide").children().last() );
                $("#et-web-slide").css("left" , "-275px");
                mEWslide = setInterval( MetWebSlide , 2800 );
            });
        }

        $("#et-web .et-slide-img img").click(function(){
            clearInterval( mEWslide );
            $("#et-web .et-info").hide();
            $(this).next().show().css("display","flex");
        });

        // <event - sns >
        $("#et-sns-slide").swipeleft(function(){
            MetSnsSwipe();
        });
        $("#et-sns-slide").swiperight(function(){
            MetSnsSwipeRight();
        });
        let mESslide = setInterval( MetSnsSlide , 2800 );

        function MetSnsSlide(){ //자동슬라이드 오>왼
            $("#et-sns-slide").stop().animate( { left : "-100px"}, 2700, function(){
                $("#et-sns-slide").prepend( $("#et-sns-slide").children().last() );
                $("#et-sns-slide").css("left" , "-275px");
            });
        }

        function MetSnsSwipe(){
            clearInterval( mESslide );
            $("#et-sns-slide").stop().animate( { left : "-450px"} , 100, function(){
                $("#et-sns-slide").append( $("#et-sns-slide").children().first() );
                $("#et-sns-slide").css("left" , "-275px" );
                mESslide = setInterval( MetSnsSlide , 2800 );
            });
        }
        function MetSnsSwipeRight(){
            clearInterval( mESslide );
            $("#et-sns-slide").stop().animate( { left : "-100px"}, 100, function(){
                $("#et-sns-slide").prepend( $("#et-sns-slide").children().last() );
                $("#et-sns-slide").css("left" , "-275px");
                mESslide = setInterval( MetSnsSlide , 2800 );
            });
        }

        $("#et-sns .et-slide-img img").click(function(){
            clearInterval( mESslide );
            $("#et-sns .et-info").hide();
            $(this).next().show().css("display","flex");
        });
        
        // < 웹&SNS 공통 >
        $("#big-content-btn").click(function(){
            $(".et-info").hide();
            mEWslide = setInterval( MetWebSlide , 2800 );
            mESslide = setInterval( MetSnsSlide , 2800 );
        });

        // <디테일 디자인>
        $("#dt-info").hide();

        $("#big").click(function(){
            $("#dt-info").show();
        });

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
        });
    } 

});//END ALL
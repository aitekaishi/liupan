$(function(){
	$("#btn_1,#btn_2,#btn_3").hover(function  () {
		$(this).animate({backgroundColor:'#6F7BAB'})
	}).mouseout(function  () {
		$(this).animate({backgroundColor:'#4E5D98'})
	})
	$("#btn_e").mousemove(function  () {
		$(this).attr("style","animation: animations4 0.75s ease-in forwards;");
	}).mouseout(function  () {
		$(this).attr("style","width: 90px;color: white;background: #4E5D98;");
	}).click(function  () {
		$(this).attr("style","width: 120px;background: white;color: #4E5D98;");
		$(".divb").attr("style","visibility: visible;");
		$(".divc").attr("style","visibility: hidden;");
		$("#btn_f").attr("style","width: 90px;color: white;background: #4E5D98;");
		$(this).off("mousemove mouseout");
		$("#btn_f").on({
			mouseover:function(){$(this).attr("style","animation: animations4 0.35s ease-in forwards;");},
    		mouseout:function(){$(this).attr("style","animation: animations5 0.35s ease-in forwards;");}
		});
	});
	$("#btn_f").mousemove(function  () {
		$(this).attr("style","animation: animations4 0.75s ease-in forwards;");
	}).mouseout(function  () {
		$(this).attr("style","width: 90px;color: white;background: #4E5D98;");
	}).click(function  () {
		$(this).attr("style","width: 120px;background: white;color: #4E5D98;");
		$(".divb").attr("style","visibility: hidden;");
		$(".divc").attr("style","visibility: visible;");
		$("#btn_e").attr("style","width: 90px;color: white;background: #4E5D98;");
		$(this).off("mousemove mouseout");
		$("#btn_e").on({
			mouseover:function(){$(this).attr("style","animation: animations4 0.35s ease-in forwards;");},
    		mouseout:function(){$(this).attr("style","animation: animations5 0.35s ease-in forwards;");}
		});
	});
	$("#btn_xx").mousemove(function  () {
		$(this).attr("style","animation: animations4 0.75s ease-in forwards;");
	}).mouseout(function  () {
		$(this).attr("style","width: 90px;color: white;background: #4E5D98;");
	}).click(function  () {
		$(this).attr("style","width: 120px;background: white;color: #4E5D98;");
		$(".divd").attr("style","visibility: visible;");
		$(".dive,.divf,.divg").attr("style","visibility: hidden;");
		$("#btn_yy,#btn_zz,#btn_ww").attr("style","width: 90px;color: white;background: #4E5D98;");
		$(this).off("mousemove mouseout");
		$("#btn_yy,#btn_zz,#btn_ww").on({
			mouseover:function(){$(this).attr("style","animation: animations4 0.35s ease-in forwards;");},
    		mouseout:function(){$(this).attr("style","animation: animations5 0.35s ease-in forwards;");}
		});
	});
	$("#btn_yy").mousemove(function  () {
		$(this).attr("style","animation: animations4 0.75s ease-in forwards;");
	}).mouseout(function  () {
		$(this).attr("style","width: 90px;color: white;background: #4E5D98;");
	}).click(function  () {
		$(this).attr("style","width: 120px;background: white;color: #4E5D98;");
		$(".dive").attr("style","visibility: visible;");
		$(".divd,.divf,.divg").attr("style","visibility: hidden;");
		$("#btn_xx,#btn_zz,#btn_ww").attr("style","width: 90px;color: white;background: #4E5D98;");
		$(this).off("mousemove mouseout");
		$("#btn_xx,#btn_zz,#btn_ww").on({
			mouseover:function(){$(this).attr("style","animation: animations4 0.35s ease-in forwards;");},
    		mouseout:function(){$(this).attr("style","animation: animations5 0.35s ease-in forwards;");}
		});
	});
	$("#btn_zz").mousemove(function  () {
		$(this).attr("style","animation: animations4 0.75s ease-in forwards;");
	}).mouseout(function  () {
		$(this).attr("style","width: 90px;color: white;background: #4E5D98;");
	}).click(function  () {
		$(this).attr("style","width: 120px;background: white;color: #4E5D98;");
		$(".divf").attr("style","visibility: visible;");
		$(".dive,.divd,.divg").attr("style","visibility: hidden;");
		$("#btn_yy,#btn_xx,#btn_ww").attr("style","width: 90px;color: white;background: #4E5D98;");
		$(this).off("mousemove mouseout");
		$("#btn_yy,#btn_xx,#btn_ww").on({
			mouseover:function(){$(this).attr("style","animation: animations4 0.35s ease-in forwards;");},
    		mouseout:function(){$(this).attr("style","animation: animations5 0.35s ease-in forwards;");}
		});
	});
	$("#btn_ww").mousemove(function  () {
		$(this).attr("style","animation: animations4 0.75s ease-in forwards;");
	}).mouseout(function  () {
		$(this).attr("style","width: 90px;color: white;background: #4E5D98;");
	}).click(function  () {
		$(this).attr("style","width: 120px;background: white;color: #4E5D98;");
		$(".divg").attr("style","visibility: visible;");
		$(".dive,.divf,.divd").attr("style","visibility: hidden;");
		$("#btn_yy,#btn_zz,#btn_xx").attr("style","width: 90px;color: white;background: #4E5D98;");
		$(this).off("mousemove mouseout");
		$("#btn_yy,#btn_zz,#btn_xx").on({
			mouseover:function(){$(this).attr("style","animation: animations4 0.35s ease-in forwards;");},
    		mouseout:function(){$(this).attr("style","animation: animations5 0.35s ease-in forwards;");}
		});
	});

	$("#btn_g").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("#btn_h,#btn_i,#btn_j,#btn_k,#btn_l").attr("style","background: #F7F7F7;color: black;");
		$("#img_1").attr("style","display: inline-block;");
		$("#img_2,#img_3,#img_4,#img_5,#img_6").attr("style","display: none;");
		$("#div_h").attr("style","visibility: visible;");
		$("#div_i,#div_j,#div_k,#div_l,#div_m").attr("style","visibility: hidden;");
	});
	$("#btn_h").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("#btn_g,#btn_i,#btn_j,#btn_k,#btn_l").attr("style","background: #F7F7F7;color: black;");
		$("#img_2").attr("style","display: inline-block;");
		$("#img_1,#img_3,#img_4,#img_5,#img_6").attr("style","display: none;")
		$("#div_i").attr("style","visibility: visible;");
		$("#div_h,#div_j,#div_k,#div_l,#div_m").attr("style","visibility: hidden;");
	})
	$("#btn_i").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("#btn_h,#btn_g,#btn_j,#btn_k,#btn_l").attr("style","background: #F7F7F7;color: black;");
		$("#img_3").attr("style","display: inline-block;");
		$("#img_2,#img_1,#img_4,#img_5,#img_6").attr("style","display: none;")
		$("#div_j").attr("style","visibility: visible;");
		$("#div_i,#div_h,#div_k,#div_l,#div_m").attr("style","visibility: hidden;");
	})
	$("#btn_j").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("#btn_h,#btn_i,#btn_g,#btn_k,#btn_l").attr("style","background: #F7F7F7;color: black;");
		$("#img_4").attr("style","display: inline-block;");
		$("#img_2,#img_3,#img_1,#img_5,#img_6").attr("style","display: none;")
		$("#div_k").attr("style","visibility: visible;");
		$("#div_i,#div_j,#div_h,#div_l,#div_m").attr("style","visibility: hidden;");
	})
	$("#btn_k").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("#btn_h,#btn_i,#btn_j,#btn_g,#btn_l").attr("style","background: #F7F7F7;color: black;");
		$("#img_5").attr("style","display: inline-block;");
		$("#img_2,#img_3,#img_4,#img_1,#img_6").attr("style","display: none;")
		$("#div_l").attr("style","visibility: visible;");
		$("#div_i,#div_j,#div_k,#div_h,#div_m").attr("style","visibility: hidden;");
	})
	$("#btn_l").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("#btn_h,#btn_i,#btn_j,#btn_k,#btn_g").attr("style","background: #F7F7F7;color: black;");
		$("#img_6").attr("style","display: inline-block;");
		$("#img_2,#img_3,#img_4,#img_5,#img_1").attr("style","display: none;")
		$("#div_m").attr("style","visibility: visible;");
		$("#div_i,#div_j,#div_k,#div_l,#div_h").attr("style","visibility: hidden;");
	})
	
	
	
	$("#btn_m").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("#btn_n,#btn_o,#btn_p").attr("style","background: #F7F7F7;color: black;");
		$("#img_1 a").attr("style","display: inline-block;")
		$("#img_1 a:nth-of-type(13)").attr("style","display: none;")
	});
	$("#btn_n").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("#btn_m,#btn_o,#btn_p").attr("style","background: #F7F7F7;color: black;");
		$("#img_1 a").attr("style","display: inline-block;")
	});
	$("#btn_o").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("#btn_n,#btn_m,#btn_p").attr("style","background: #F7F7F7;color: black;");
		$("#img_1 a").attr("style","display: inline-block;")
		$("#img_1 a:nth-of-type(5),#img_1 a:nth-of-type(8),#img_1 a:nth-of-type(9),#img_1 a:nth-of-type(13)").attr("style","display: none;")
	});
	$("#btn_p").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("#btn_n,#btn_o,#btn_m").attr("style","background: #F7F7F7;color: black;");
		$("#img_1 a").attr("style","display: inline-block;")
		$("#img_1 a:nth-of-type(11)").attr("style","display: none;")
	});
	
	
	
	
	$(".head,#head_display").mouseover(function () {
		$("#head_display").attr("style","visibility: visible;");
	}).mouseout(function  () {
		$("#head_display").attr("style","visibility: hidden;");
	});
	$(".nav_a").hover(function  () {
		$("#nav_b").attr("style","display: block;");
		$("#nav_a").attr("style","display: none;");
	}).mouseleave(function  () {
		$("#nav_b").attr("style","display: none;");
		$("#nav_a").attr("style","display: block;");
	});
	$("#nav img:nth-of-type(1),img:nth-of-type(4)").hover(function  () {
		$("#nav img:nth-of-type(4)").attr("style","visibility: visible;");
	}).mouseleave(function  () {
		$("#nav img:nth-of-type(4)").attr("style","visibility: hidden;");
	});
	$("#nav img:nth-of-type(2),img:nth-of-type(5)").hover(function  () {
		$("#nav img:nth-of-type(5)").attr("style","visibility: visible;");
	}).mouseleave(function  () {
		$("#nav img:nth-of-type(5)").attr("style","visibility: hidden;");
	});
	$("#nav img:nth-of-type(3),img:nth-of-type(6)").hover(function  () {
		$("#nav img:nth-of-type(6)").attr("style","visibility: visible;");
	}).mouseleave(function  () {
		$("#nav img:nth-of-type(6)").attr("style","visibility: hidden;");
	});
	
	$("#tab_a1,#tab_div1").mouseover(function () {
		$("#tab_div1").attr("style","visibility: visible;");
	}).mouseout(function  () {
		$("#tab_div1").attr("style","visibility: hidden;");
	});
	$("#tab_a2,#tab_div2").mouseover(function () {
		$("#tab_div2").attr("style","visibility: visible;");
	}).mouseout(function  () {
		$("#tab_div2").attr("style","visibility: hidden;");
	});
	$("#tab_a3,#tab_div3").mouseover(function () {
		$("#tab_div3").attr("style","visibility: visible;");
	}).mouseout(function  () {
		$("#tab_div3").attr("style","visibility: hidden;");
	});
	
	
	$("#tab_a1,#tab_div1").mouseover(function () {
		$(".tab_b1").attr("style","visibility: visible;");
		$(".tab_a1").attr("style","visibility: hidden;");
	}).mouseout(function  () {
		$(".tab_b1").attr("style","visibility: hidden;");
		$(".tab_a1").attr("style","visibility: visible;");
	});
	$("#tab_a2,#tab_div2").mouseover(function () {
		$(".tab_b2").attr("style","visibility: visible;");
		$(".tab_a2").attr("style","visibility: hidden;");
	}).mouseout(function  () {
		$(".tab_b2").attr("style","visibility: hidden;");
		$(".tab_a2").attr("style","visibility: visible;");
	});
	$("#tab_a3,#tab_div3").mouseover(function () {
		$(".tab_b3").attr("style","visibility: visible;");
		$(".tab_a3").attr("style","visibility: hidden;");
	}).mouseout(function  () {
		$(".tab_b3").attr("style","visibility: hidden;");
		$(".tab_a3").attr("style","visibility: visible;");
	});
	
	$("#btn_a,#btn_b").mouseover(function () {
		$("#btn_b").attr("style","visibility: visible;");
		$("#btn_a").attr("style","visibility: hidden;");
	}).mouseout(function  () {
		$("#btn_b").attr("style","visibility: hidden;");
		$("#btn_a").attr("style","visibility: visible;");
	});
	$("#btn_c,#btn_d").mouseover(function () {
		$("#btn_d").attr("style","visibility: visible;");
		$("#btn_c").attr("style","visibility: hidden;");
	}).mouseout(function  () {
		$("#btn_d").attr("style","visibility: hidden;");
		$("#btn_c").attr("style","visibility: visible;");
	});
	
	$("#mycar,#mycar1").carousel({interval:4000});
	
	$("#animate_a,#pifu1,#pifu2,#div_o_a img").hover(function  () {
		$(this).attr("style","animation: animations1 0.75s ease-in forwards;")
	}).mouseleave(function  () {
		$(this).attr("style","animation: animations2 0.75s ease-in forwards;")
	});
	$("#div_bottom a,#div_bottom").hover(function  () {
		$("#div_bottom").attr("style","animation: animations3 0.5s ease-in forwards;")
		$("#div_bottom a").attr("style","animation: animations4 0.5s ease-in forwards;")
	}).mouseleave(function  () {
		$("#div_bottom").attr("style","background: #F7F7F7;")
		$("#div_bottom a").attr("style","color: black;")
	});
	$("#div_bottom1 a,#div_bottom1").hover(function  () {
		$("#div_bottom1").attr("style","animation: animations3 0.5s ease-in forwards;")
		$("#div_bottom1 a").attr("style","animation: animations4 0.5s ease-in forwards;")
	}).mouseleave(function  () {
		$("#div_bottom1").attr("style","background: #F7F7F7;")
		$("#div_bottom1 a").attr("style","color: black;")
	});
	$("#btn_a1").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("button:not(#btn_a1)").attr("style","background: #F7F7F7;color: black;");
		$("#ul_a,#dao1").attr("style","visibility: visible;")
		$("#ul_b,#ul_c,#ul_d,.dao:not(#dao1)").attr("style","visibility: hidden;")
	});
	$("#btn_b1").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("button:not(#btn_b1)").attr("style","background: #F7F7F7;color: black;");
		$("#ul_b,#dao2").attr("style","visibility: visible;")
		$("#ul_a,#ul_c,#ul_d,.dao:not(#dao2)").attr("style","visibility: hidden;")
	});
	$("#btn_c1").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("button:not(#btn_c1)").attr("style","background: #F7F7F7;color: black;");
		$("#ul_c,#dao3").attr("style","visibility: visible;")
		$("#ul_b,#ul_a,#ul_d,.dao:not(#dao3)").attr("style","visibility: hidden;")
	});
	$("#btn_d1").click(function  () {
		$(this).attr("style","background: #4E5D98;color: white;");
		$("button:not(#btn_d1)").attr("style","background: #F7F7F7;color: black;");
		$("#ul_d,#dao4").attr("style","visibility: visible;")
		$("#ul_b,#ul_c,#ul_a,.dao:not(#dao4)").attr("style","visibility: hidden;")
	});
});

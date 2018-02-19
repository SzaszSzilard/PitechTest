$(function(){
	
	let banner_index = 0; 
	
	$("#prev").click(function(){
		change_banner(0);
	})
	$("#next").click(function(){
		change_banner(1);
	})
	
	let imagetexts = ["FLOOR", "OFFICE"];
	let bannerimages = $('#bannerimages').children('img');
	
	function change_banner(direction){
		$(bannerimages).fadeOut(300);
		if (direction) {
			if (banner_index >= bannerimages.length-1)
				banner_index = -1;
			$(bannerimages[++banner_index]).fadeIn(300);
		} else {
			if (banner_index <= 0)
				banner_index = bannerimages.length;
			$(bannerimages[--banner_index]).fadeIn(300);
		}
		$('#bannertext').fadeOut(150, function(){
			$(bigtext).text(imagetexts[banner_index]);
			$(this).fadeIn(150);
		});
	}
	
	change_banner(1);
	
	
	$( "#banner" ).on( "swipeleft",  function(){
		change_banner(0) 
	});
	$( "#banner" ).on( "swiperight", function(){
		change_banner(1) 
	});
	
	
	// ------ create bigbutton ------
	function create_bigButton(counter, title, description){
		let h1			= $("<h2></h2>").text(title);
		let p 			= $("<p></p>").text(description);
		let plus		= $("<b></b>").text('+');
		
		let whiteRectangle	= $("<div class='whiterectangle'></div>").append(h1, plus, p)
		let bluebox 		= $("<div class='bluebox'></div>").text(counter);
		let clear			= $("<div class='clear'></div>");
		
		let bigButton 		= $("<div class='bigbutton'></div>").append(bluebox, whiteRectangle, clear);
		
		
		$("#BigButtOns").append(bigButton);
	}
	
	create_bigButton("01","Our services","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices sed neque maximus venenatis. In mi metus, volutpat consequat rutrum sed, vestibulum eu felis. Pellentesque sed semper ligula. Fusce mattis, neque nec molestie elementum, turpis odio placerat mi, sed cursus nisl tellus vel diam. Donec ac imperdiet nisl. Suspendisse eu dui eget metus feugiat dapibus. Aliquam rutrum consectetur velit, et finibus risus varius eu. Phasellus eget ex neque. Quisque quis nulla pellentesque, fringilla est quis, ultricies neque.");
	create_bigButton("02","Our rates","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices sed neque maximus venenatis. In mi metus, volutpat consequat rutrum sed, vestibulum eu felis. Pellentesque sed semper ligula. Fusce mattis, neque nec molestie elementum, turpis odio placerat mi, sed cursus nisl tellus vel diam. Donec ac imperdiet nisl. Suspendisse eu dui eget metus feugiat dapibus. Aliquam rutrum consectetur velit, et finibus risus varius eu. Phasellus eget ex neque. Quisque quis nulla pellentesque, fringilla est quis, ultricies neque.");
	create_bigButton("03","Case studies","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices sed neque maximus venenatis. In mi metus, volutpat consequat rutrum sed, vestibulum eu felis. Pellentesque sed semper ligula. Fusce mattis, neque nec molestie elementum, turpis odio placerat mi, sed cursus nisl tellus vel diam. Donec ac imperdiet nisl. Suspendisse eu dui eget metus feugiat dapibus. Aliquam rutrum consectetur velit, et finibus risus varius eu. Phasellus eget ex neque. Quisque quis nulla pellentesque, fringilla est quis, ultricies neque.");
	create_bigButton("04","Get a quote","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices sed neque maximus venenatis. In mi metus, volutpat consequat rutrum sed, vestibulum eu felis. Pellentesque sed semper ligula. Fusce mattis, neque nec molestie elementum, turpis odio placerat mi, sed cursus nisl tellus vel diam. Donec ac imperdiet nisl. Suspendisse eu dui eget metus feugiat dapibus. Aliquam rutrum consectetur velit, et finibus risus varius eu. Phasellus eget ex neque. Quisque quis nulla pellentesque, fringilla est quis, ultricies neque.");
	
	$("#BigButtOns").append($("<div class='clear'></div>"));
	
	$('.bigbutton').click(function(){
		$(this).addClass("bigopen");
		
		let p = $(this).children(".whiterectangle").children("p");
		let ptext = p.text();
		
		if ( $(this).children(".whiterectangle").children("span").text() == '' ){
			let tempspan = $("<span></span>").text(ptext);
			$(this).children(".whiterectangle").append(tempspan);
			let height = $(this).children(".whiterectangle").children("span").height();
			$(this).css('margin-bottom',height+ 40 +'px');
			
			$(this).children(".whiterectangle").children('b').text('-');
		} else {
			let temp = this;
			$(this).children(".whiterectangle").children("span").slideUp(300, function(){
				$(temp).children(".whiterectangle").children("span").remove();
				$(temp).css('margin-bottom', 15 +'px');
				
				$(temp).children(".whiterectangle").children('b').text('+');
			});
			$(this).removeClass("bigopen");
		}
	})
	// -----------------------------
	
	
	
	
	
	// ------ loginform ------
	$('#login').click(function(){
		$('#loginform').slideDown(300);
	})
	
	$('#loginform form button').click(function(event) {
		event.preventDefault()
		$('#loginform').slideUp(300);
		
		//event.submit();
	});
	
	function isEmail(email) {
		let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	
	function isPassword(password) {
		console.log(password.length);
		if ( (password.length <= 3) || (password.length > 12) )
			return false;
		
		if (password.search(/\d/) == -1)
			return false;
		
		return true;
	}
	// -------------------
	
	
	// ------ loginform validate ------
	
	$('#mail').focusout(function(){
		if ($(this).val()!='' && !isEmail($(this).val()))
			$(this).addClass("wronginput");
		else
			$(this).removeClass("wronginput");
	})
	
	$('#password').focusout(function(){
		if ($(this).val()!='' && !isPassword($(this).val()))
			$(this).addClass("wronginput");
		else
			$(this).removeClass("wronginput");
	})
	
	// -------------------
	
	
	// ------ create smallbutton ------
	function create_smallButton(text,hiddentext){
		let small_button_text = $("<span class='smallbuttontext'></span>").text(text);
		let smallbutton = $("<div class='smallbutton'></span>").html(small_button_text);
		smallbutton = $(smallbutton).append($('<b>+</b>'));
		smallbutton = $(smallbutton).append($('<p></p>').text(hiddentext));
		
		$(smallbutton).click(function(){
			if ( !$(this).hasClass("smallopen")) {
				$(this).addClass("smallopen");
				$(this).children('b').text("-");
				let height = $(this).children("p").height();
				$(this).css('margin-bottom',height + 40 +'px');
			} else {
				$(this).removeClass("smallopen");
				$(this).children('b').text("+");
				$(this).css('margin-bottom', 40 +'px');
			}
		})
		
		$('#SmallButtOns').append(smallbutton);
	}
	
	function view_more() {
		create_smallButton("Work about wut?","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices sed neque maximus venenatis. In mi metus, volutpat consequat rutrum sed, vestibulum eu felis. Pellentesque sed semper ligula. Fusce mattis, neque nec molestie elementum, turpis odio placerat mi, sed cursus nisl tellus vel diam. Donec ac imperdiet nisl. Suspendisse eu dui eget metus feugiat dapibus. Aliquam rutrum consectetur velit, et finibus risus varius eu. Phasellus eget ex neque. Quisque quis nulla pellentesque, fringilla est quis, ultricies neque.");
		create_smallButton("Test text is boring","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices sed neque maximus venenatis. In mi metus, volutpat consequat rutrum sed, vestibulum eu felis. Pellentesque sed semper ligula. Fusce mattis, neque nec molestie elementum, turpis odio placerat mi, sed cursus nisl tellus vel diam. Donec ac imperdiet nisl. Suspendisse eu dui eget metus feugiat dapibus. Aliquam rutrum consectetur velit, et finibus risus varius eu. Phasellus eget ex neque. Quisque quis nulla pellentesque, fringilla est quis, ultricies neque.");
		create_smallButton("Just a simple button","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices sed neque maximus venenatis. In mi metus, volutpat consequat rutrum sed, vestibulum eu felis. Pellentesque sed semper ligula. Fusce mattis, neque nec molestie elementum, turpis odio placerat mi, sed cursus nisl tellus vel diam. Donec ac imperdiet nisl. Suspendisse eu dui eget metus feugiat dapibus. Aliquam rutrum consectetur velit, et finibus risus varius eu. Phasellus eget ex neque. Quisque quis nulla pellentesque, fringilla est quis, ultricies neque.");
		create_smallButton("Nothing happening","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices sed neque maximus venenatis. In mi metus, volutpat consequat rutrum sed, vestibulum eu felis. Pellentesque sed semper ligula. Fusce mattis, neque nec molestie elementum, turpis odio placerat mi, sed cursus nisl tellus vel diam. Donec ac imperdiet nisl. Suspendisse eu dui eget metus feugiat dapibus. Aliquam rutrum consectetur velit, et finibus risus varius eu. Phasellus eget ex neque. Quisque quis nulla pellentesque, fringilla est quis, ultricies neque.");
	}
	view_more();
	
	$('#more').click(function(){
		view_more()}
	);
	// -------------------
	
	
})
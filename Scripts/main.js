var backLoaded = false;
$(function() {
	
	$("html").on("click", function(event) {
		if	(
			!$("#gears-menu").is(":hidden")
			&& !$(event.target).is("#gears-menu-link a#cmdMenuOpen") 
			&& !$(event.target).is("#gears-menu-link a#cmdMenuClose") 
			&& !$(event.target).closest("#gears-menu").length 
			&& !$(event.target).is("#gears-menu")
		) {
			$("#gears-menu-link a#cmdMenuClose").trigger("click");
		}
	});
	$("#gears-menu-link a#cmdMenuOpen").on("click", function() {
		$("#gears-menu").stop(true, true);
		$("#gears-menu").fadeIn(400);
		
		$("#gears-menu-link a#cmdMenuOpen").parent().hide("drop", { "direction": "right" }, 200, function() {
			$("#gears-menu-link a#cmdMenuClose").parent().show("drop", { "direction": "left" }, 200);
		});
	});
	$("#gears-menu-link a#cmdMenuClose").on("click", function() {
		$("#gears-menu").stop(true, true);
		$("#gears-menu").fadeOut(400);
		
		$("#gears-menu-link a#cmdMenuClose").parent().hide("drop", { "direction": "right" }, 200, function() {
			$("#gears-menu-link a#cmdMenuOpen").parent().show("drop", { "direction": "left" }, 200);	
		});
	});
	
	$(".gear-link").hover(function(){
		
		var gear = $(this).parent();
		var popup = gear.find(".gear-info");
		var direction = (gear.prop("id").split("_")[1] % 2 == 0) ? "right" : "left";
		popup.stop(true, true).show("drop", { "direction": direction }, 200);
		
	}, function(){
		
		var gear = $(this).parent();
		var popup = gear.find(".gear-info");
		var direction = (gear.prop("id").split("_")[1] % 2 == 0) ? "right" : "left";
		popup.stop(true, true).hide("drop", { "direction": direction }, 200);
		
	});
	
	$(".gear-link").on("click", function() {
		$("#gears-menu-link a#cmdMenuClose").trigger("click");
	});
	
	/* ------------------- fullPage --------------------- */
	var contentAnchors = [];
	for (var i = 0; i < contentScreens.length; i++) {
		contentAnchors.push(contentScreens[i].id);
	}
	
	$("#content").fullpage({
		menu: "#gears",
		/* paddingTop: 140, */
		/* responsiveWidth: 1000, */
		normalScrollElements: ".about-text-content",
		
		afterLoad: function(anchorLink, index){
			var section = $(this);
			
			function animate() {
				if (anchorLink == "portfolio") {
					showWorks();
				}
										
				section.find(".corners-tl-br, .corners-tr-bl").addClass("closed-in");
			}
			
			if (backLoaded) {
				animate();
			} else {
				$.ajax({
					url: SITE_URL + "Scripts/background.js",
					dataType: "script",
					cache : false,
					success: function(result) {
						backLoaded = true;
						$("#loader").fadeOut(1000, function() {
							animate();
						});
					}
				});
			}
			
		},					
		onLeave: function(index, nextIndex, direction){
			var section = $(this);
			section.find(".corners-tl-br, .corners-tr-bl").removeClass("closed-in");
		}
	});
	
});
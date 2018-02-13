<? global $portfolioWorks; ?>

<div class="works-list hidden">
	<div class="works-list-inner">
		<div class="title">Последние работы:</div>
		<? foreach ($portfolioWorks as $i => $portfolioWork) { ?>
			<a class="work-link" id="<?=$portfolioWork->id ?>" href="javascript: void(0);"><span class="label"><?=$portfolioWork->label ?></a>
		<? } ?>
	</div>
</div>

<div class="works-block">
	<? foreach ($portfolioWorks as $i => $portfolioWork) { ?>
		<? foreach ($portfolioWork->scr as $s => $screen) { ?>
			<div class="work-screen" id="<?=$portfolioWork->id ?>_scr_<?=$s ?>" data-id="<?=$portfolioWork->id ?>" data-idx="<?=$s ?>" style="background-image: url('<?=SITE_URL ?>Themes/images/works/<?=$screen ?>.jpg')"></div>
		<? } ?>
		
	<? } ?>
	
	<div class="work-controls">
		<? foreach ($portfolioWorks as $i => $portfolioWork) { ?>
			<div class="work-info" id="<?=$portfolioWork->id ?>_info"><div>
				<?=$portfolioWork->info ?>
			</div></div>
		<? } ?>
		
		<div id="cmdPrevScreen"></div>
		<div class="active" id="cmdToggleInfo">info</div>
		<div id="cmdNextScreen"></div>
		
	</div>
	
</div>

<script type="text/javascript">
	$(function() {
		
		var currentWork = $(".work-link:first").prop("id");
		$("#" + currentWork).addClass("active");
		
		var infoActive = true;
		
		$(".work-link").on("click", function() {
			$(".work-link").removeClass("active");
			$(this).addClass("active");
			
			$(".works-block").removeClass("animated");
			$(".work-controls").removeClass("animated");
			
			currentWork = $(this).prop("id");
			if (infoActive) $(".work-info div:visible").hide("fade", {}, 500);
			$(".work-controls").hide("fade", {}, 500);
			$(".work-screen:visible").hide("drop", { "direction": "right" }, 500, function() {
				$("#" + currentWork + "_scr_0").show("drop", { "direction": "right" }, 750, function() {
					$(".work-controls").show("drop", { "direction": "down" }, 750, function() {
						if (infoActive) $("#" + currentWork + "_info div").show("slide", { "direction": "down"}, 750);
						
						$(".works-block").addClass("animated");
						$(".work-controls").addClass("animated");					
					});
				});
			});
		});
		
		$("#cmdPrevScreen").on("click", function() {
			var count = $(".work-screen[data-id=" + currentWork + "]").length;
			var current = parseInt($(".work-screen:visible").attr("data-idx"));
			var next = (current != 0) ? (current - 1) : (count - 1);
			
			$("#" + currentWork + "_scr_" + current).hide("drop", { "direction": "right" }, 250, function() {
				$("#" + currentWork + "_scr_" + next).show("drop", { "direction": "left" }, 250);
			});
			
		});
		
		$("#cmdNextScreen").on("click", function() {
			var count = $(".work-screen[data-id=" + currentWork + "]").length;
			var current = parseInt($(".work-screen:visible").attr("data-idx"));
			var next = (current != (count - 1)) ? (current + 1) : 0;
			
			$("#" + currentWork + "_scr_" + current).hide("drop", { "direction": "left" }, 250, function() {
				$("#" + currentWork + "_scr_" + next).show("drop", { "direction": "right" }, 250);
			});
			
		});
		
		$("#cmdToggleInfo").on("click", function() {
			var current = $("#" + currentWork + "_info div");
			if (current.is(":visible")) {
				current.hide("slide", { "direction": "down" }, 500);
				$(this).removeClass("active");
				infoActive = false;
			} else {
				current.show("slide", { "direction": "down" }, 750);
				$(this).addClass("active");
				infoActive = true;
			}
		});
		
	});
	
	var worksShown = false;
	function showWorks() {
		if (!worksShown) {
			$(".works-list").show("drop", { "direction": "left" }, 750, function() {
				var id = $(".work-link.active").prop("id");
				$("#" + id + "_scr_0").show("drop", { "direction": "right" }, 750, function() {
					$(".work-controls").show("drop", { "direction": "down" }, 750, function() {
						$("#" + id + "_info div").show("slide", { "direction": "down" }, 750, function() {
							$(".works-block").addClass("animated");
							$(".work-controls").addClass("animated");
						});
					});
				});
			});
			
			worksShown = true;
		}
	}
</script>
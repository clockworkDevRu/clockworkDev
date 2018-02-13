<div class="content" id="content">

	<? foreach ($contentScreens as $i => $contentScreen) { ?>
		<div class="content-screen <?=$contentScreen->id ?>-content section" data-anchor="<?=$contentScreen->id ?>">
			<? include SITE_PATH . "Views" . DS . "Main" . DS . ucfirst($contentScreen->id) . ".php"; ?>
		</div>
	<? } ?>

</div>
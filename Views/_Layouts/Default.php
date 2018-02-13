<? global $contentScreens; ?>

<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="Content-Language" content="ru">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		
		<title>clockworkDev - Веб-разработчик</title>
		<meta name="description" content="clockworkDev - разработка сайтов и веб-приложений.">
        <meta name="keywords" content="веб-разработка,веб-приложение,разработка,верстка,создать сайт,создание сайтов,front-end,back-end">
		
		<link href="<?=SITE_URL ?>Themes/html5reset-1.6.1.css" rel="stylesheet" type="text/css" />
		<link href="<?=SITE_URL ?>Themes/jquery-ui.min.css" rel="stylesheet" type="text/css" />
		<link href="<?=SITE_URL ?>Themes/fonts.css" rel="stylesheet" type="text/css" />
		<link href="<?=SITE_URL ?>Themes/default.css" rel="stylesheet" type="text/css" />
		<link href="<?=SITE_URL ?>Themes/jquery.fullpage.css" rel="stylesheet" type="text/css" />
		
		<script type="text/javascript" src="<?=SITE_URL ?>Scripts/jquery-1.12.4.min.js"></script>
		<script type="text/javascript" src="<?=SITE_URL ?>Scripts/jquery-ui.min.js"></script>
		<script type="text/javascript" src="<?=SITE_URL ?>Scripts/jquery.fullpage.js"></script>
		<script type="text/javascript" src="<?=SITE_URL ?>Scripts/three.min.js"></script>
		
		<script type="text/javascript">
			var SITE_URL = '<?=SITE_URL ?>';
			var contentScreens = JSON.parse('<?=json_encode($contentScreens) ?>');
		</script>
		<script type="text/javascript" src="<?=SITE_URL ?>Scripts/main.js"></script>
	</head>
	<body>
		<div id="background"></div>
		
		<div id="loader">
			<div class="gear"><span></span></div>
			<div class="status">ЗАГРУЗКА</div>
		</div>
		
		<div class="header">
			<div class="logo"><a href="<?=SITE_URL ?>" target="_self"></a></div>
			<div class="gears-menu-link" id="gears-menu-link">
				<div class="gears-menu-link-wrap"><a id="cmdMenuOpen" href="javascript: void(0);">МЕНЮ</a></div>
				<div class="gears-menu-link-wrap hidden"><a id="cmdMenuClose" href="javascript: void(0);">×</a></div>
			</div>
		</div>
		
		<div class="gears-menu" id="gears-menu">
			<div class="gears" id="gears">

				<? foreach ($contentScreens as $i => $contentScreen) { ?>
					<div class="gear" id="gear_<?=$i ?>">
						<a class="gear-link" href="#<?=$contentScreen->id ?>" data-menuanchor="<?=$contentScreen->id ?>"><?=iconv_substr($contentScreen->label, 0, 1, 'UTF-8') ?></a>
						<div class="gear-info"><?=$contentScreen->label ?></div>
					</div>
				<? } ?>
				
			</div>
		</div>

		<? include $contentPage; ?>
		
		<div class="footer"><a href="<?=SITE_URL ?>" target="_self">by clockworkDev | 2016</a></div>
		
	</body>
</html>
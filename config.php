<?

$contentScreens = array( 
	new ContentScreen("main", "ГЛАВНАЯ"),
	new ContentScreen("portfolio", "РАБОТЫ"),
	new ContentScreen("about", "ОБО МНЕ"),
	new ContentScreen("contacts", "КОНТАКТЫ")
);

$portfolioWorks = array_reverse(array(
	
	new PortfolioWork(
		"ivr_phones_uploader", 
		"Загрузчик номеров для обзвона",
		"
			<p class=\"work-info-tags\">#ClassicASP #JScript #MSSQL #JQuery #JQueryUI</p>
			<p>Веб-интерфейс для загрузки телефонных номеров в IVR для автоматического обзвона.</p>
			<br />
			<p>Загрузка производится из файла .xls, с предварительной проверкой на корректность номера и наличие повторений.</p>
		",
		array("ivr_phones_uploader_1", "ivr_phones_uploader_2", "ivr_phones_uploader_3", "ivr_phones_uploader_4")
	),
	
	new PortfolioWork(
		"es_infoportal", 
		"Корпоративный портал", 
		"
			<p class=\"work-info-tags\">#ASP.NET #CSharp #MVC #EntityFramework #JQuery #JQueryUI</p>
			<p>Внутрикорпоративный портал, содержащий новостную ленту, видео раздел и каталог файлов.</p>
			<p>Наполнение обновляется через админ-панель.</p>
		",
		array("es_infoportal_1", "es_infoportal_2", "es_infoportal_3", "es_infoportal_4", "es_infoportal_5")
	),
	
	new PortfolioWork(
		"ivr_stats", 
		"Конструктор отчётов IVR", 
		"
			<p class=\"work-info-tags\">#ASP.NET #CSharp #MVC #EntityFramework #MSSQL #JQuery #JQueryUI</p>
			<p>Веб-интерфейс для вывода статистики IVR, с гибкими возможностями настройки итогового представления.</p>
			<br />
			<p>Ввиду большого количества собираемой информации, вся статистика хранится в виде кубов данных. Приложение получает срезы этих кубов, с произвольной комбинацией осей-парамметров, и выводит их в удобном формате, заданном пользователем.</p>
		",
		array("ivr_stats_1")
	),
	
	new PortfolioWork(
		"garantfinservis", 
		"Вёрстка LP", 
		"
			<p class=\"work-info-tags\">#HTML5 #CSS3 #JQuery</p>
			<p>Вёрстка LP-сайта компании по шаблону psd, с соблюдением принципа pixel-perfect.</p>
		",
		array("garantfinservis_1", "garantfinservis_2", "garantfinservis_3", "garantfinservis_4")
	),
	
	new PortfolioWork(
		"umuse", 
		"Коллекция виджетов<br />для Adobe Muse", 
		"
			<p class=\"work-info-tags\">#HTML5 #CSS3 #JQuery</p>
			<p>Разработка js-скриптов для ядер виджетов Adobe Muse с сайта <a href=\"http://umuse.ru\" target=\"_blank\">umuse.ru</a></p>
			<p>Виджеты позволяют в пару кликов добавить элементам страницы различный полезный или просто красивый функционал: \"резиновость\" контента, параллакс, постраничную навигацию, различные анимации переходов, 3d-эффекты, мощную галлерею и др.</p>
			<br />
			<p><a href=\"https://umuse.ru/ru/widgets-adobe-muse/\" target=\"_blank\">посмотреть</a></p>
		",
		array("umuse_1", "umuse_2", "umuse_3", "umuse_4", "umuse_5", "umuse_6", "umuse_7", "umuse_8", "umuse_9")
	),
	
	new PortfolioWork(
		"fc", 
		"FormsConstructor (alpha)", 
		"
			<p class=\"work-info-tags\">#PHP #Yii2 #Bootstrap #HTML5 #CSS3 #JQuery</p>
			<p><a href=\"https://fc.clockworkdev.ru/\" target=\"_blank\">FormsConstructor</a> - это визуальный онлайн конструктор форм для интеграции с внешними сайтами. Обладает широким набором элементов для размещения, вариантами их кастомизации и дополнительными возможностями, например, просмотром статистики по заполненным клиентами формам.</p>
			<br />
			<p>Проект находится в стадии alpha, и его функционал периодически расширяется.</p>
			<br />
			<p><a href=\"https://fc.clockworkdev.ru/constructor/\" target=\"_blank\">попробовать</a></p>
		",
		array("fc_1", "fc_2", "fc_3", "fc_4")
	)
	
));

?>
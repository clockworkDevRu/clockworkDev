<?
class MainController extends BaseController {
	
	public $layouts = "Default";
	
	function index() {
		$this->template->view('Index');
	}
	
}
?>
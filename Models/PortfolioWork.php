<?
class PortfolioWork {
	
	public $id;
	public $label;
	public $info;
	public $scr;
	
	function __construct($id, $label, $info, $scr) {
       $this->id = $id;
	   $this->label = $label;
	   $this->info = $info;
	   $this->scr = $scr;
	}
}
?>
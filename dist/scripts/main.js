$(document).ready(function(){
	$buttonExpand = $("#expand-to-menu");
	$imageUrl = $("#image-url");
	$caption = $("#caption");
	$imageForm = $("#image-form");
	var clicks = true;
	$imageForm.hide();

	$buttonExpand.on("click", function(){
		if(clicks){
			$imageForm.slideDown(1000);
			clicks = false;
		} else {
			$imageForm.slideUp(1000);
			clicks = true;
		}
	});
});
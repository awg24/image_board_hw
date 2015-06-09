$(document).ready(function(){
	$buttonExpand = $("#expand-to-menu");
	$imageUrl = $("#image-url");
	$caption = $("#caption");
	$imageForm = $("#image-form");
	var clicks = true;
	$imageForm.hide();
	
	var arrayOfObjImages = [];

	$.get("url here", function(data){
		for(var j = 0; j < data.length; j++){
			var newImage = new ImageHolder();
			newImage.set({
				imageUrl: data[j].imageUrl,
				theCaption: data[j].caption});
			arrayOfObjImages.push(newImage);
		}
	});

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
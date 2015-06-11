$(document).ready(function(){
	var imageBoard = new ImageBoard();
	var templateString = $("#image-holder").html();
	var imageHolderBuilder = _.template(templateString);

	imageBoard.fetch({
		success: function(imageObj){
			imageObj.forEach(function(model){
				$("#place-image-here").append(imageHolderBuilder(model.attributes));
				$("#place-image-here").fadeIn(3000);
			});
			imageBoard.on("add", function(image){
				$("#place-image-here").prepend(imageHolderBuilder(image.attributes));
				$("#place-image-here").fadeIn(3000);
			});
		}
	});

	$buttonExpand = $("#expand-to-menu");
	$imageUrl = $("#image-url");
	$caption = $("#caption");
	$imageForm = $("#image-form");
	$submitImage = $("#submit-image");
	$cancel = $("#cancel");
	$sendError = $("#error-message");
	$sendSuccess = $("#success-message");
	$imageForm.hide();

	$submitImage.on("click", function(){
		$sendError.html("");
		var anImage = new AnImage({
			imageUrl: $("#image-url").val(),
			theCaption: $("#caption").val()
		});

		if(anImage.isValid()){
			imageBoard.add(anImage);
			$("#image-url").val("");
			$("#caption").val("");
			$sendSuccess.hide().html("Successfully Uploaded!").fadeIn(1000);
			setTimeout(function(){
				$sendSuccess.fadeOut("slow")
			},3000);

			anImage.save();
		} else {
			$sendError.html(anImage.validationError);
		}
		
	});

	$cancel.on("click", function(){
		$imageForm.slideUp("slow");
	});
	
	$buttonExpand.on("click", function(){
		$imageForm.slideToggle("slow");		
	});
});
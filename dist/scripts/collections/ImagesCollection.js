var ImageBoard = Backbone.Collection.extend({
	model: AnImage,
	url: "https://tiny-pizza-server.herokuapp.com/collections/awg-imagboard/"
});
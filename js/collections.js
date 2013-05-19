Cult.Collections.Images = Backbone.Collection.extend({

  initialize: function() {},

  fetch: function(category, callback) {
    image = new Cult.Models.Image();
	var self = this;
	image.getImages(
      function(obj) { self.buildImages(obj, callback); }
     );
  },

  buildImages: function (data, callback) {
    var list = $('#images'),
        images = data.photos;
    this.images = data.photos;
    $.each(images, function(key, val) {
      var imageView = new Cult.Views.Image({
        key: key,
        val: val
      })
      list.append(imageView.render().el);
    });
	$('#images').prepend(list);
    callback(data.photos);
  },
  
  parseImagesByCategory: function (category, callback) {
    $('.event').remove();
    var list = $('#images'),
        images = this.images;
	list.empty();
    $.each(images, function(key, val) {
      var imageView = new Cult.Views.Image({
        key: key,
        val: val
      })
	  if(val.category == category || category == 0) {
		list.append(imageView.render().el);
	  }
    });
  }
});
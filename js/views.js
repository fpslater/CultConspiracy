Cult.Views.SelectorsList = Backbone.View.extend({

  tagName: 'div',
  className: 'selectors-list',

  events: {
    'click div' : 'onClick'
  },

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(JST['selectorsList']());
    $('#selector-panel').append(this.$el);
    return this;
  },

  onClick: function(e) {
	$(".selector").removeClass('selected');
	$("#"+e.currentTarget.id).addClass('selected');
	Cult.imagesCollection.parseImagesByCategory(parseInt(e.currentTarget.id));	
  }
});

Cult.Views.Image = Backbone.View.extend({
  
  tagName: 'div',
  className: 'image',

  initialize: function () {
    var emptyImageURL = "http://www.urti.org/images/no-image.gif";
        thumbURL = this.options.val.image_url;
    if (thumbURL != null){
       this.thumbURL = thumbURL;
    } else {
      this.thumbURL = emptyImageURL;
    }
    this.name = this.options.val.name;
  },

  render: function () {
    this.$el.html(JST['image']({
      thumbURL: this.thumbURL,
      displayName: this.name
    }));
    return this;
  }
  
});




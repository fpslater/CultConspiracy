var Cult = {
  Models:      {},
  Collections: {},
  Views:       {},

  init: function(options) {
    Cult.selectorsListView = new Cult.Views.SelectorsList();
    Cult.imagesCollection = new Cult.Collections.Images();
    Cult.viewPage();
    Cult.router = new Cult.Router();
	var list = $('.selectors-list'),
		title = $('#selector-panel .title');
	title.mouseenter(function() {
      list.css('visibility', 'visible');
	  list.addClass('active');
    });
    $('#selector-panel').mouseleave(function() {
      list.css('visibility', 'hidden');
	  list.removeClass('active');
    });
	title.click(function() {
      if (list.hasClass('active')){
        list.css('visibility', 'hidden');
	    list.removeClass('active');
	  } else {
        list.css('visibility', 'visible');
	    list.addClass('active');
	  }
    });
  },
  
  viewPage: function () {
	self = this;
    this.imagesCollection.fetch(-1, function(photos) {
		var selectorsList = $('.selectors-list');
			selectors = [];						
		$.each(photos, function(key, val) {
			if (selectors.indexOf(val.category) == -1){
				selectors.push(val.category);
			}
		});
		selectors.sort(function(a,b){return a - b})
		for (var i = 0; i < selectors.length; i++) {
			selectorsList.append("<div class='selector' id='"+selectors[i]+"'>"+self.categories[selectors[i]]+"</div>");
		}
		$('#selector-panel .title').css('visibility', 'visible');
		$('#0').addClass('selected');
		$('.loading-img').addClass('remove');
	});
  },
  
  categories: [
			  "Uncategorized",
			  "Celebrities",
			  "Film",
			  "Journalism",
			  "Nude",
			  "Black and White",
			  "Still Life",
			  "People",
			  "Landscapes",
			  "City and Architecture",
			  "Abstract",
			  "Animals",
			  "Macro",
			  "Travel",
			  "Fashion",
			  "Commercial",
			  "Concert",
			  "Sport",
			  "Nature",
			  "Performing Arts",
			  "Family",
			  "Street",
			  "Underwater",
			  "Food",
			  "Fine Art",
			  "Wedding",
			  "Transporation ",
			  "Urban Exploration"
			  ]					 
};
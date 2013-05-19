var Cult = {
  Models:      {},
  Collections: {},
  Views:       {},

  init: function(options) {
    Cult.selectorsListView = new Cult.Views.SelectorsList();
    Cult.imagesCollection = new Cult.Collections.Images();
    Cult.viewPage();
    Cult.router = new Cult.Router();
	
	$('#selector-panel .title').mouseenter(function() {
      $('.selectors-list').css('visibility', 'visible');
	  $('.selectors-list').addClass('active');
    });
    $('#selector-panel').mouseleave(function() {
      $('.selectors-list').css('visibility', 'hidden');
	  $('.selectors-list').removeClass('active');
    });
	$('#selector-panel .title').click(function() {
      if ($('.selectors-list').hasClass('active')){
        $('.selectors-list').css('visibility', 'hidden');
	    $('.selectors-list').removeClass('active');
	  } else {
        $('.selectors-list').css('visibility', 'visible');
	    $('.selectors-list').addClass('active');
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
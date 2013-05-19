Cult.Models.Image = Backbone.Model.extend({
  
  initialize: function () {},
  
  getImages: function (callback) {
 	var ninjaSauce = "http://jsonp.jit.su/?url=",
	    consumer_key = "5m5ALqjAbzAL1Cnszfu0DMUIZRL4jY2crYnDlGgt",
	    url = ninjaSauce + "https://api.500px.com/v1/photos?consumer_key="+consumer_key;
    $.ajax({
      url: url,
	  type: 'get',
      success: function(obj){
        callback(obj);
      },
      error: function(xhr, textStatus){
	    alert("fail");
        alert(textStatus);
      }
    });
  }
  
});

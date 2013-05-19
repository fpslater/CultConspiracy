** Run this program by opening the index.html file in the base directory **<br><br>



1) Category Selector (top-right)<br>
   -- Populates categories based on which images are returned by API.<br>
   -- To bring up categories list hover or click (for mobile browsers)<br> 
   -- "Uncategorized" category is equivalent to displaying all items<br>

2) Responsive Design <br>
   -- Supports from 320x480 up to 1920x1080<br>
   -- Not optimized for any particular width, 
      will continually re-centre based on how many images fit vertically <br>
	  
3) Loading Icon<br>
   -- Only appears on initial page load, 
      after that data is cached <br>
	 
4) 500px API request<br>
   -- API is accessed by using a 3rd party proxy and an access token<br>
   -- No parameters specified, 
      will bring back all available data "fresh_today" (default)  <br>
 
Performance Hindrance--<br>
  A scrollbar may appear when cycling through categories. <br>
  This causes content to suddenly shift.  <br>

Technology--<br>
JQuery, Backbone.js, HTML5, CSS3<br>

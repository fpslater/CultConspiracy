window.JST = {};

window.JST['selectorsList'] = _.template(
    ""
);

window.JST['image'] = _.template(
    "<img src='<%= thumbURL %>'/>\
     <div href='#' class='display-name'><%= displayName %></div>"
);
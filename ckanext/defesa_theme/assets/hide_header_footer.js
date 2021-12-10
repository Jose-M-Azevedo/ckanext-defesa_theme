"use strict";

ckan.module('hide_header_footer', function($) {
  return {
    initialize: function () {
         var params = new URLSearchParams(window.location.search)

         if (params.has('hide')) {
           console.log(params.get('hide'));
           document.getElementById("footer").style.display = 'none';
           document.getElementById("header").style.display = 'none';
         }

         else {
           console.log(params.get('hide'));
           document.getElementById("footer").style.display = 'initial';
           document.getElementById("header").style.display = 'initial';
         }
    }
  };
});

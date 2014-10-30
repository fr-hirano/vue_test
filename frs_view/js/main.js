Vue.component("textarea-template", {
    template: "<p><textarea rows='5' cols='50'></textarea></p>"
});

var vm = new Vue({
    el: '#sample',
    methods: {
      increment: function(){
        textarea.$appendTo($);
      }
    }
});

var textarea = new Vue({
  template: "<p><textarea rows='5' cols='50'></textarea></p>"
  });


textarea.$appendTo('#sample');


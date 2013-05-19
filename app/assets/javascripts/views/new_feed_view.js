NR.Views.FeedNewView = Backbone.View.extend({

  events:{
    "click btn#submit": "submit"
  },

  render: function() {
    var that = this;
    var renderedContent = JST["feeds/new"]()
    that.$el.html(renderedContent)
    return that;
  },

  submit: function() {
    var that = this;
    var url = that.$(".input-url").val();
    var title = that.$(".input-title").val();
    console.log(url)
    that.model.save({url: url, title: title}, {
      success: function(model) {
        Backbone.history.navigate('#/feeds/' + model.get('id'))
      }
    });
  }


});
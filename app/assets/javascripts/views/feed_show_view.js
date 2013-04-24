NR.Views.FeedShowView = Backbone.View.extend({
	events: {
		"click li.entry": "toggleExtraInfo"
	},

	initialize: function () {
		var that = this;

		// console.log("the ul: ", $(this.$el).find('ul'));
		// $(this.$el).on('click', 'ul#entries li', function () {
		// 	var entryID = $(this).attr('data-id');
		// 	console.log(entryID);
		// });
	},
	render: function() {
		var that = this;
		console.log("model:", this.model);

		that.model.get('entries').fetch({
			success: function(){
				console.log('entries', that.model.get('entries'));
				var renderedContent = JST["feeds/show"]({
					feed: that.model,
					entries: that.model.get('entries')
				});
				that.$el.html(renderedContent);
			}
		});
		return that;
	},

	toggleExtraInfo: function (event) {
		$(event.target).find('div').slideToggle('hidden');
	}

});
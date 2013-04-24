NR.Routers.FeedsRouter = Backbone.Router.extend({
	initialize: function ($content) {
		this.$rootEl = $content;
	},

	routes: {
		"": "index",
		"feeds/new": "new",
		"feeds/:id": "show"
	},

	index: function () {
		var that = this;

		that.$rootEl.empty();

	},

	new: function () {

	},

	show: function (id) {
		var that = this;

		var feed = NR.Store.Feeds.get(id);
		var feedShowView = new NR.Views.FeedShowView({
			model: feed
		});

		that.$rootEl.html(feedShowView.render().$el);
	}

});
window.NR = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Store: {},

	initialize: function($sidebar, $content, feedsData) {
		console.log(feedsData)
		NR.Store.Feeds = new NR.Collections.Feeds(feedsData);
		// feed.get("entries").fetch()

		this.installSidebar($sidebar);

		new NR.Routers.FeedsRouter($content);

		Backbone.history.start();
	},

	installSidebar: function ($sidebar) {

		// Why doesn't collection need to be in quotes?
		var feedsListView = new NR.Views.FeedsListView({
			collection: NR.Store.Feeds
		});

		$sidebar.html(feedsListView.render().$el);
		$sidebar.append("<button style='btn.btn-primary'>Add Feed</button>");
	}
};
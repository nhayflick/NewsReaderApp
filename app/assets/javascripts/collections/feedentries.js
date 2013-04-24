NR.Collections.FeedEntries = Backbone.Collection.extend({
	model: NR.Models.Entry,

	initialize: function(models, options) { // Do we need [] as first arg?
		this.feed = options.feed;
	},

	url: function () {
		return ("/feeds/" + this.feed.id + "/entries");
	}
});
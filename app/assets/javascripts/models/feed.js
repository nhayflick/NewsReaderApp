NR.Models.Feed = Backbone.RelationalModel.extend({
	relations: [{
		type: Backbone.HasMany,
		key: 'entries',
		relatedModel: 'NR.Models.Entry',
		collectionType: 'NR.Collections.FeedEntries',
		collectionOptions: function (feed) {
			return { feed: feed };
		},
		reverseRelation: {
			key: 'feed',
			keySource: 'feed_id'
			// includeInJSON: ''
		}

	}],

	urlRoot: "/feeds"
});

require 'open-uri'

class Feed < ActiveRecord::Base
  attr_accessible :url, :title
  validates :url, :title, :presence => true

  has_many :entries

  def self.get_entries(feed_id)
    feed = Feed.find(feed_id)
    feedObject = SimpleRSS.parse(open(feed.url))
    feedObject.entries.each do |entry|
      next if Entry.find_by_guid(entry[:guid])
      feed.entries.create!(
        title: entry[:title],
        link: entry[:link],
        description: entry[:description],
        comments: entry[:comments],
        pubDate: entry[:pubDate],
        guid: entry[:guid]
      )
    end

    feed.entries
  end
end

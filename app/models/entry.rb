class Entry < ActiveRecord::Base
  attr_accessible :feed_id, :title, :guid, :link, :description, :comments, :pubDate

  validates :title, :guid, :presence => true
  validates :guid, :uniqueness => { :scope => :feed_id }

  belongs_to :feed

end

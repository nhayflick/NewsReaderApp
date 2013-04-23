class Entry < ActiveRecord::Base
  attr_accessible :feed_id, :title, :body, :guid

  validates :title, :body, :presence => true
  validates :guid, :uniqueness => { :scope => :feed_id }

  belongs_to :feed

end

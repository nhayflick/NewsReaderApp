class Feed < ActiveRecord::Base
  attr_accessible :url, :name
  validates :url, :name, :presence => true

  has_many :entries
end

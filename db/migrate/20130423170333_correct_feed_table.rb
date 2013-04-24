class CorrectFeedTable < ActiveRecord::Migration
  def change
    rename_column :entries, :body, :description
    add_column :entries, :link, :string
    add_column :entries, :comments, :string
    add_column :entries, :pubDate, :datetime
  end
end

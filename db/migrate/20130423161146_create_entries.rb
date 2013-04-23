class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.integer :feed_id
      t.integer :string
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end

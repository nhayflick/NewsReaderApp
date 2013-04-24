class RestoreGuid < ActiveRecord::Migration
  def change
    add_column :entries, :guid, :string
  end
end

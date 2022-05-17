class AddIndexes < ActiveRecord::Migration[5.2]
  def change
    add_index :listings, :address, unique: true
  end
end

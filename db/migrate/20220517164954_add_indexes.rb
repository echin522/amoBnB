class AddIndexes < ActiveRecord::Migration[5.2]
  def change
    add_index :listings, :address, unique: true

    remove_column :listings, :location
    add_column :listings, :lat, :float
    add_column :listings, :lng, :float
  end
end

class AddAddressToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :address, :string, null: false
  end
end

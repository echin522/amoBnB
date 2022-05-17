class AddMaxGuestsToListing < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :max_guests, :integer, null: false
    add_column :listings, :owner_id, :integer, null: false
    add_column :listings, :price_per_night, :integer, null: false
    add_column :listings, :amenities, :text

    add_column :reviews, :reviewer_id, :integer, null: false
    
    add_index :listings, :owner_id

    add_index :reviews, :reviewer_id
    add_index :reviews, :listing_id

    add_index :reservations, :user_id
    add_index :reservations, :listing_id
  end
end

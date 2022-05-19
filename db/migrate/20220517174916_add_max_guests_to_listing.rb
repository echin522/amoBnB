class AddMaxGuestsToListing < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :max_guests, :integer, null: false
    add_column :listings, :num_rooms, :integer, null: false
    add_column :listings, :num_beds, :integer, null: false
    add_column :listings, :num_baths, :integer, null: false
    add_column :listings, :owner_id, :integer, null: false
    add_column :listings, :price_per_night, :integer, null: false
    add_column :listings, :amenities, :text

    add_column :reviews, :reviewer_id, :integer, null: false
    remove_column :reviews, :user_id
    remove_column :reviews, :listing_id
    add_column :reviews, :user_id, :integer
    add_column :reviews, :listing_id, :integer

    add_index :listings, :owner_id

    add_index :reviews, :reviewer_id
    add_index :reviews, :listing_id

    add_index :reservations, :user_id
    add_index :reservations, :listing_id
  end
end

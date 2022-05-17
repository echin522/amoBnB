class AddToReservation < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :listing_id, :integer, null: false
    add_column :reservations, :user_id, :integer, null: false

    add_column :reviews, :listing_id, :integer, null: false
    add_column :reviews, :user_id, :integer, null: false

  end
end

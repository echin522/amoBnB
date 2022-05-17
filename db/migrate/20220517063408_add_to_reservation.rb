class AddToReservation < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :num_guests, :integer, null: false
    add_column :reservations, :property_id, :integer, null: false
  end
end

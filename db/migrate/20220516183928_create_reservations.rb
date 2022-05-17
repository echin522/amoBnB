class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :num_guests, null: false
    end
  end
end

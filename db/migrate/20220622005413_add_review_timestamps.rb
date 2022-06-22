class AddReviewTimestamps < ActiveRecord::Migration[5.2]
  def change
    add_timestamps :reviews, null: true 
    add_timestamps :reservations, null: true 
    long_ago = DateTime.new(2000, 1, 1)
    Review.update_all(created_at: long_ago, updated_at: long_ago)
    Reservation.update_all(created_at: long_ago, updated_at: long_ago)

    # change to not null constraints
    change_column_null :reviews, :created_at, false
    change_column_null :reviews, :updated_at, false
    change_column_null :reservations, :created_at, false
    change_column_null :reservations, :updated_at, false
  end
end

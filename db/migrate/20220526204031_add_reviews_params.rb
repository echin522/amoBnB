class AddReviewsParams < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :cleanliness_rating, :integer, null: false
    add_column :reviews, :check_in_rating, :integer, null: false
    add_column :reviews, :location_rating, :integer, null: false
    add_column :reviews, :communication_rating, :integer, null: false
    add_column :reviews, :accuracy_rating, :integer, null: false
    add_column :reviews, :value_rating, :integer, null: false

    change_column :reviews, :rating, :float
  end
end

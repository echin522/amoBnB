class RemoveNullConstraints < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :user_id, true
    change_column_null :reviews, :listing_id, true

    add_column :listings, :location, :string, null: false
  end
end

# == Schema Information
#
# Table name: reservations
#
#  id         :bigint           not null, primary key
#  start_date :date             not null
#  end_date   :date             not null
#  num_guests :integer          not null
#  listing_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Reservation < ApplicationRecord
    validates :start_date, :end_date, :num_guests, :listing_id, :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end

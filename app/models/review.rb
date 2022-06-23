# == Schema Information
#
# Table name: reviews
#
#  id                   :bigint           not null, primary key
#  body                 :text
#  reviewer_id          :integer          not null
#  listing_id           :integer
#  cleanliness_rating   :integer          not null
#  check_in_rating      :integer          not null
#  location_rating      :integer          not null
#  communication_rating :integer          not null
#  accuracy_rating      :integer          not null
#  value_rating         :integer          not null
#  rating               :float
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
class Review < ApplicationRecord
    validates :cleanliness_rating, inclusion: { in: (1..5) }
    validates :check_in_rating, inclusion: { in: (1..5) }
    validates :location_rating, inclusion: { in: (1..5) }
    validates :communication_rating, inclusion: { in: (1..5) }
    validates :accuracy_rating, inclusion: { in: (1..5) }
    validates :value_rating, inclusion: { in: (1..5) }

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :reviewer,
        foreign_key: :reviewer_id,
        class_name: :User
end

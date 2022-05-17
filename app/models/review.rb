# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  rating     :integer          not null
#  body       :text
#  listing_id :integer          not null
#  user_id    :integer          not null
#
class Review < ApplicationRecord
    validates :rating, inclusion: { in: (1..5) }

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :reviewer,
        foreign_key: :reviewer_id,
        class_name: :User
end

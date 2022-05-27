# == Schema Information
#
# Table name: listings
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  description     :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  address         :string           not null
#  lat             :float
#  lng             :float
#  max_guests      :integer          not null
#  num_rooms       :integer          not null
#  num_beds        :integer          not null
#  num_baths       :integer          not null
#  owner_id        :integer          not null
#  price_per_night :integer          not null
#  amenities       :text
#  location        :string           not null
#

class Listing < ApplicationRecord

    validates :title, :description, :address, :max_guests, :price_per_night, presence: true
    validates :address, uniqueness: true

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :reviews,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Review
        
    has_many :reservations,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Reservation

    has_many_attached :photos

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
    end

    def average_rating
        return reviews.average(:rating)
    end

    def average_cleanliness_rating
        return reviews.average(:cleanliness_rating)
    end

    def average_check_in_rating
        return reviews.average(:check_in_rating)
    end

    def average_location_rating
        return reviews.average(:location_rating)
    end

    def average_communication_rating
        return reviews.average(:communication_rating)
    end

    def average_accuracy_rating
        return reviews.average(:accuracy_rating)
    end

    def average_value_rating
        return reviews.average(:value_rating)
    end

    def num_reviews
        return reviews.count
    end
end

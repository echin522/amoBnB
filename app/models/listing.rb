# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  location    :string           not null
#  address     :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Listing < ApplicationRecord
    validates :title, :description, :location, :address, presence: true
    validates :address, uniqueness: true

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User
end

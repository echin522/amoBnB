# == Schema Information
#
# Table name: reservations
#
#  id         :bigint           not null, primary key
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  num_guests :integer          not null
#
class Reservation < ApplicationRecord
    validates :start_date, :end_date, presence :true
end

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
require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

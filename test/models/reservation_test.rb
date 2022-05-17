# == Schema Information
#
# Table name: reservations
#
#  id         :bigint           not null, primary key
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  num_guests :integer          not null
#
require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

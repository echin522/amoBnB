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
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

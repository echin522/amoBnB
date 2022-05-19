# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  rating      :integer          not null
#  body        :text
#  listing_id  :integer
#  user_id     :integer
#  reviewer_id :integer          not null
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

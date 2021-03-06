json.extract! review, :id, :rating, :listing_id, :reviewer_id, :cleanliness_rating, :check_in_rating, :location_rating, :communication_rating, :accuracy_rating, :value_rating, :body, :created_at


json.reviewer do
    json.extract! User.find_by(id: review.reviewer_id),
        :fname
end
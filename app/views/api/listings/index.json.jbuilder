@listings.each do |listing|
    json.set! listing.id do
        json.partial '/api/reservations/reservation', reservation: reservation
        # json.average_rating listing.average_rating
        # json.num_reviews listing.num_reviews
    end
end
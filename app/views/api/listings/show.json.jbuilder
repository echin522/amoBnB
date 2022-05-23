json.listing do
    json.partial! "listing", listing: @listing
end

json.reviews do
    @listing.reviews.each do |review|
        json.set! review.id do
            json.partial! "/api/reviews/review", review: review
        end
    end
end
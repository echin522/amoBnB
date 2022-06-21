json.extract! reservation,
    :id,
    :listing_id,
    :start_date,
    :end_date,
    :user_id
    
json.listing do
    json.extract! reservation.listing,
        :address,
        :location,
        :id
    
    json.owner_name reservation.listing.owner.fname + " " + reservation.listing.owner.lname

    json.photoUrls do
        json.array! reservation.listing.photos.map { |photo| url_for(photo) }
    end

    # json.photo do
    #     url_for(reservation.listing.photos[0])
    # end
end
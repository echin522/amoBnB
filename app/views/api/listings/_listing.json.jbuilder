json.extract! listing, 
    :id,
    :title,
    :description,
    :address,
    :lat,
    :lng,
    :location,
    :max_guests,
    :num_rooms,
    :num_beds,
    :num_baths,
    :owner_id,
    :price_per_night,
    :amenities
json.owner User.find_by(id: listing.owner_id)
json.average_rating listing.average_rating
json.num_reviews listing.num_reviews

json.photoUrls do
    json.array! listing.photos.map { |photo| url_for(photo) }
end
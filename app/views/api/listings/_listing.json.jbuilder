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
# json.owner User.find_by(id: listing.owner_id).fname
json.num_reviews listing.num_reviews
json.average_rating listing.average_rating
json.average_cleanliness_rating listing.average_cleanliness_rating
json.average_check_in_rating listing.average_check_in_rating
json.average_location_rating listing.average_location_rating
json.average_communication_rating listing.average_communication_rating
json.average_accuracy_rating listing.average_accuracy_rating
json.average_value_rating listing.average_value_rating

json.photoUrls do
    json.array! listing.photos.map { |photo| url_for(photo) }
end
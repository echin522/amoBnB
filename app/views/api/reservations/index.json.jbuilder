@reservations.each do |reservation|
    json.set! reservation.id do
        json.partial! '/api/reservations/reservation', reservation: reservation
        # json.listing do
        #     json.partial! "/api/listings/listing", listing: listing
        # end
    end
end
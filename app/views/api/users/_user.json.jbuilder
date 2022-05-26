json.extract! user, :id, :email, :fname, :lname, :location, :about
json.proPicUrl url_for(user.photo)
json.array! @pins do |pin|
    json.extract! pin, :id, :pin_url, :description, :user_id 
    json.photoUrl url_for(pin.photo)
end
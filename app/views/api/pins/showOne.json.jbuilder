json.pin do
    json.extract! @pin, :id, :title, :pin_url, :description, :user_id, :photo, :owner_email
    json.photoUrl url_for(@pin.photo)
end
json.pins do
    @pins.each do |pin|
        json.set! pin.id do 
            json.extract! pin, :id, :title, :pin_url, :description, :user_id, :photo, :owner_email
            json.photoUrl url_for(pin.photo)
        end
    end
end

json.user do
    json.extract! @pinOwner, :id, :email
end

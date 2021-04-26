@pins.each do |pin|
    json.set! pin.id do
        json.extract! pin, :id, :title, :pin_url, :description, :user_id, :owner_email
        json.photoUrl url_for(pin.photo)
    end
end
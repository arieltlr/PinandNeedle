@pins.each do |pin|
    json.set! pin.id do
        json.extract! pin, :id, :title, :pin_url, :description, :user
        json.photoUrl url_for(pin.photo)
    end
end
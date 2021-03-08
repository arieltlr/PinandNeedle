json.extract! @board, :id, :name, :description, :user_id
json.user do
    json.extract! @board.user, :id, :email, :boards
end
json.pins do
    @board.pins.each do |pin|
        json.set! pin.id do
            json.extract! pin, :id, :title, :pin_url, :description, :user_id
            json.photoUrl url_for(pin.photo)
        end
    end
end
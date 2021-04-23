json.pin do
    json.extract! @pin, :id, :title, :pin_url, :description, :user_id, :photo, :owner_email
    json.photoUrl url_for(@pin.photo)
    json.board do 
        json.extract! @board, :id, :name, :owner_email
    end
end

json.user do
    json.extract! @pin.user, :id, :email
        json.boards do 
            @boards.each do |board|
                json.set! board.id do
                    json.extract! board, :id, :name, :user_id, :owner_email
                    json.pins board.pins.map { |pin| {id: pin.id, title: pin.title, pin_url: pin.pin_url, description: pin.description, user_id: pin.user_id, owner_email: pin.owner_email, photoUrl: url_for(pin.photo)}}
                end
            end
        end
    json.pins do
        @pins.each do |pin|
            json.set! pin.id do 
                json.extract! pin, :id
                json.photoUrl url_for(pin.photo)
            end
        end
    end
end




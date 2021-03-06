json.extract! @board, :id, :name, :description, :user_id, :owner_email

json.user do
    json.extract! @board.user, :id, :email
        json.boards do 
            @boards.each do |board|
                json.set! board.id do
                    json.extract! board, :id, :name, :user_id, :owner_email
                    json.pins board.pins.pluck(:id)
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

json.pins do
    @board.pins.each do |pin|
        json.set! pin.id do
            json.extract! pin, :id, :title, :pin_url, :description, :user_id, :owner_email
            json.photoUrl url_for(pin.photo)
        end
    end
end
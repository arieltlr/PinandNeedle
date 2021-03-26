json.extract! @boardsPin, :pin_id, :board_id
json.savedPin :true

json.user do 
    json.extract! @user, :id, :email
    json.boards do
        @user.boards.each do |board|
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
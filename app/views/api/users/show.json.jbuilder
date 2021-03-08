json.extract! @user, :id, :username, :email, :fname, :lname
json.boards do
    @user.boards.each do |board|
        json.set! board.id do
            json.extract! board, :id, :user_id, :name, :description, :created_at
        end
    end
end
json.pins do
    @user.pins.each do |pin|
        json.set! pin.id do
            json.extract! pin, :id, :title, :pin_url, :description, :user_id, :boards
            json.photoUrl url_for(pin.photo)
        end
    end
end

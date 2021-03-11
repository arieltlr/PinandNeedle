json.extract! @user, :id, :username, :email, :fname, :lname
debugger
json.boards do
    @user.boards.each do |board|
        json.set! board.id do
            json.extract! board, :id, :user_id, :name, :description, :created_at, :owner_email
            json.pins board.pins.pluck(:id)
        end
    end
end
json.pins do
    @pins.each do |pin|
        json.set! pin.id do
            json.extract! pin, :id, :title, :pin_url, :description, :user_id, :owner_email
            json.photoUrl url_for(pin.photo)
        end
    end
end
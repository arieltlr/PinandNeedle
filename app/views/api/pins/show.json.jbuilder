json.pin do
    json.extract! @pin, :id, :title, :pin_url, :description, :user_id, :photo
    json.photoUrl url_for(@pin.photo)
end
debugger
json.boards do 
    debugger
    @pin.boards.each do |board|
        debugger
        json.set! board.id do
            debugger
            json.extract! board, :id, :name
        end
    end
end
json.user do
    json.extract! @pin.user, :id, :email, :boards
end



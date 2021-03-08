json.pin do
    json.extract! @pin, :id, :title, :pin_url, :description, :user_id, :photo
    json.photoUrl url_for(@pin.photo)
end
# json.boards do 
#     @pin.boards.each do |board|
#         json.set! board.id do
#             json.extract! board, :id, :name
#         end
#     end
# end
json.user do
    json.extract! @pin.user, :id, :email
        json.boards do 
            @pin.user.boards.each do |board|
                json.set! board.id do
                    json.extract! board, :id, :name, :user_id, :user
                end
            end
        end
end



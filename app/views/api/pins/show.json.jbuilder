json.pin do
    json.extract! @pin, :id, :title, :pin_url, :description, :user_id, :board_id, :photo
    json.photoUrl url_for(@pin.photo)
end
json.board do 
    json.extract! @pin.board, :id, :name
end
json.user do
    json.extract! @pin.user, :id, :email, :boards
end



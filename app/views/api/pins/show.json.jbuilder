debugger
json.extract! @pin, :id, :pin_url, :description, :user_id, :board
json.photoUrl url_for(@pin.photo)

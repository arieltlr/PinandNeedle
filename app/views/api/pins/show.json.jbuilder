json.extract! @pin, :id, :pin_url, :description, :user_id, :boards
json.photoUrl url_for(@pin.photo)


json.extract! @pin, :id, :title, :pin_url, :description, :user_id, :board
json.photoUrl url_for(@pin.photo)


json.extract! user, :id, :username, :email, :fname, :lname
json.boards do
    user.boards.each do |board|
        json.set! board.id do
            json.extract! board, :id, :user_id, :name, :description, :created_at, :owner_email
            json.pins board.pins.map { |pin| {id: pin.id, title: pin.title, pin_url: pin.pin_url, description: pin.description, user_id: pin.user_id, owner_email: pin.owner_email, photoUrl: url_for(pin.photo)}}
        end
    end
end
json.pins do
    user.pins.each do |pin|
        json.set! pin.id do
            json.extract! pin, :id, :title, :pin_url, :description, :user_id, :owner_email
            json.photoUrl url_for(pin.photo)
        end
    end
end
 
json.followers do 
    user.followers.pluck(:follower_id)
end
json.users_followed do 
    user.users_followed.pluck(:user_id)
end
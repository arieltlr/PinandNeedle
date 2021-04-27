json.extract! @user, :id, :username, :email, :fname, :lname

json.boards do
    @user.boards.each do |board|
        json.set! board.id do
            json.extract! board, :id, :user_id, :name, :description, :created_at, :owner_email
            json.pins board.pins.map { |pin| {id: pin.id, photoUrl: url_for(pin.photo)}}
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

json.followers do 
    @followers.each do |follower|
        json.set! follower.id do 
            :id, :username, :email, :fname, :lname
        end
    end
end
json.users_followed do 
    @users_followed.each do |user_followed|
        json.set! follower.id do 
            :id, :username, :email, :fname, :lname
        end
    end
end
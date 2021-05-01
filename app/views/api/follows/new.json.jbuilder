json.current_user do 
    json.extract! @current_user, :id, :username, :email, :fname, :lname
    json.boards do
        @current_user.boards.each do |board|
            json.set! board.id do
                json.extract! board, :id, :user_id, :name, :description, :created_at, :owner_email
                json.pins board.pins.map { |pin| {id: pin.id, photoUrl: url_for(pin.photo)}}
            end
        end
    end

    json.pins do
        @current_user_pins.each do |pin|
            json.set! pin.id do
                json.extract! pin, :id, :title, :pin_url, :description, :user_id, :owner_email
                json.photoUrl url_for(pin.photo)
            end
        end
    end

    json.followers do 
        @current_user_followers.each do |follower|
            json.set! follower.id do 
                json.extract! follower, :id, :username, :email, :fname, :lname
                json.followers follower.followers.pluck(:user_id)
            end
        end
    end

    json.users_followed do 
        @current_user_following .each do |user_followed|
            json.set! user_followed.id do 
            json.extract! user_followed, :id, :username, :email, :fname, :lname
            json.followers user_followed.followers.pluck(:follower_id)
            end
        end
    end
end
json.current_profile do 
    json.extract! @current_profile, :id, :username, :email, :fname, :lname
    json.boards do
        @current_profile.boards.each do |board|
            json.set! board.id do
                json.extract! board, :id, :user_id, :name, :description, :created_at, :owner_email
                json.pins board.pins.map { |pin| {id: pin.id, photoUrl: url_for(pin.photo)}}
            end
        end
    end

    json.pins do
        @current_profile_pins.each do |pin|
            json.set! pin.id do
                json.extract! pin, :id, :title, :pin_url, :description, :user_id, :owner_email
                json.photoUrl url_for(pin.photo)
            end
        end
    end

    json.followers do 
        @current_profile_followers.each do |follower|
            json.set! follower.id do 
                json.extract! follower, :id, :username, :email, :fname, :lname
                json.followers follower.followers.pluck(:user_id)
            end
        end
    end

    json.users_followed do 
        @current_profile_following .each do |user_followed|
            json.set! user_followed.id do 
            json.extract! user_followed, :id, :username, :email, :fname, :lname
            json.followers user_followed.followers.pluck(:follower_id)
            end
        end
    end
end
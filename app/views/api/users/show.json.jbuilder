# json.partial! "api/user/user", user: @user
json.extract! @user, :id, :username, :email
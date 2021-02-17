json.extract! @user, :id, :username, :email, :fname, :lname, :boards


# @boards.each do |board|
#     json.set! board.id do
#         json.id board.id
#         json.user_id board.user_id
#         json.name board.name
#         json.description board.description
#         json.created_at board.created_at
#     end
# end
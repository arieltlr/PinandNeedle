class Board < ApplicationRecord
    validates :user_id, presence: true
    validates :name, uniqueness: { scope: :user_id, message: "Could not save board. Try a different board name (you've already got one like this)"}, 
        presence: true
    validates :description, length: {maximum: 500}, allow_blank: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_many :pins,
    foreign_key: :board_id, 
    class_name: :Pin

end




class Pin < ApplicationRecord
    validates :user_id, presence: true
    validates :board_id, presence: true

    belongs_to :user, 
    foreign_key: :user_id, 
    class_name: :User
    
    has_one_attached :photo

    belongs_to :board, 
    foreign_key: :board_id, 
    class_name: :Board

end

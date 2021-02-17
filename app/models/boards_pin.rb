class BoardsPin < ApplicationRecord
    validates :pin_id, presence: true
    validates :board_id, presence: true

end

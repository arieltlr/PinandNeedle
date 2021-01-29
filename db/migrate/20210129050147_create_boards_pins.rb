class CreateBoardsPins < ActiveRecord::Migration[5.2]
  def change
    create_table :boards_pins do |t|
      t.integer :pin_id, null: false, index: true
      t.integer :board_id, null: false, index: true
      t.timestamps
    end
  end
end

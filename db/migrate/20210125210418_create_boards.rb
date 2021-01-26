class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.integer :user_id, index: true, null: false
      t.string :name, uniqueness: { scope: :user_id, message: "Could not save board. Try a different board name (you've already got one like this)"}, null: false
      t.text :description
      t.timestamps
    end
  end
end

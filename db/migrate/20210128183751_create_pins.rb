class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :pin_url 
      t.text :description
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end

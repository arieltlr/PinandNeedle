class AddEmailPinsAndBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :owner_email, :string
    add_column :boards, :owner_email, :string
  end
end

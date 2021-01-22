class ChangeNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :username, true
    change_column_null :users, :country, true
    change_column_null :users, :language, true
  end
end

class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: true, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: true, unique: true
      t.string :fname
      t.string :lname
      t.string :username, null: false, index: true, unique: true
      t.string :about
      t.string :gender
      t.string :location, index: true
      t.string :country, null: false
      t.string :language, null: false
      t.timestamps
    end
  end
end

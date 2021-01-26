# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Board.delete_all

demouser = User.create!({email: "demouser@email.com", age: 25, username: "Demo User", password: "password123", 
country: "United States (US)", language: "English (US)", gender: "Female"})

user1 = User.create!({email: "gemma@email.com", age: 4, username: "Gemma", password: "password123", 
country: "United States (US)", language: "English (US)", gender: "Female"})

user2 = User.create!({email: "luca@email.com", age: 1, username: "Luca", password: "password123", 
country: "United States (US)", language: "English (US)", gender: "Male"})

board1 = Board.create!({user_id: demouser.id, name: "Beautiful Threads", description: "Threads so pretty you'd think they were made of gold"})
board2 = Board.create!({user_id: demouser.id, name: "World Textiles", description: "Weaving and knitting traditions from around the world"})
board3 = Board.create!({user_id: demouser.id, name: "Costume Inspiration", description: "DIY costumes to try someday"})
board4 = Board.create!({user_id: demouser.id, name: "Fashion Construction", description: "How garments are put together"})
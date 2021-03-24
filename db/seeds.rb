# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Board.delete_all
Pin.delete_all
BoardsPin.delete_all

demouser = User.create!({email: "demouser@email.com", age: 25, username: "Demo User", password: "password123", 
country: "United States (US)", language: "English (US)", gender: "Female"})

user1 = User.create!({email: "gemma@email.com", age: 4, username: "Gemma", password: "password123", 
country: "United States (US)", language: "English (US)", gender: "Female"})

user2 = User.create!({email: "luca@email.com", age: 1, username: "Luca", password: "password123", 
country: "United States (US)", language: "English (US)", gender: "Male"})

board1 = Board.create!({user_id: demouser.id, name: "Beautiful Threads", description: "Threads so pretty you'd think they were made of gold", owner_email: demouser.email})
board2 = Board.create!({user_id: demouser.id, name: "World Textiles", description: "Weaving and knitting traditions from around the world", owner_email: demouser.email})
board3 = Board.create!({user_id: user1.id, name: "Costume Inspiration", description: "DIY costumes to try someday", owner_email: user1.email})
board4 = Board.create!({user_id: user2.id, name: "Fashion Construction", description: "How garments are put together", owner_email: user2.email})

pin1 = Pin.create!({pin_url: "https://unsplash.com/photos/nWAlCB1tyvc", description: "Old beautiful threads", title: "Studio thread storage", owner_email: demouser.email, user_id: demouser.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/annie-spratt-spools.jpg')
pin1.photo.attach(io: file, filename: 'annie-spratt-spools.jpg')
BoardsPin.create!(board_id: board1.id, pin_id: pin1.id)

pin2 = Pin.create!({pin_url: "https://unsplash.com/photos/2bPy3t1rc7A", description: "Completed garments in a bright studio", title: "Sewing Studio Goals", owner_email: user2.email, user_id: user2.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/alexandra-lammerink-unsplash.jpg')
pin2.photo.attach(io: file, filename: 'alexandra-lammerink-unsplash.jpg')
BoardsPin.create!(board_id: board4.id, pin_id: pin2.id)

# pin3 = Pin.create!({pin_url: "https://unsplash.com/photos/tX62O5F3AfU", description: "Sewing desk", title: "Station Goals", owner_email: demouser.email, user_id: demouser.id})
# pin4 = Pin.create!({pin_url: "https://unsplash.com/photos/tX62O5F3AfU", description: "Sewing desk", title: "Station Goals", owner_email: demouser.email, user_id: demouser.id})
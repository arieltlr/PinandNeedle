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

pin3 = Pin.create!({pin_url: "https://unsplash.com/photos/4byBtNuIyIg", description: "Folded linen fabric", title: "Soft linen", owner_email: demouser.email, user_id: demouser.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/mel-poole-unsplash.jpg')
pin3.photo.attach(io: file, filename: 'mel-poole-unsplash.jpg')
BoardsPin.create!(board_id: board2.id, pin_id: pin3.id)


pin4 = Pin.create!({pin_url: "https://unsplash.com/photos/V6T99SnUCyA", description: "Rack of serger threads", title: "Jewel tone thread", owner_email: demouser.email, user_id: demouser.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/vishal-banik-unsplash.jpg')
pin4.photo.attach(io: file, filename: 'mel-poole-unsplash.jpg')
BoardsPin.create!(board_id: board1.id, pin_id: pin4.id)

pin5 = Pin.create!({pin_url: "https://unsplash.com/@heftiba", description: "Stacks of textiles from Turkey", title: "Turkish Tapestries", owner_email: demouser.email, user_id: demouser.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/toa-heftiba-textiles-unsplash.jpg')
pin5.photo.attach(io: file, filename: 'toa-heftiba-textiles-unsplash.jpg')
BoardsPin.create!(board_id: board2.id, pin_id: pin5.id)

pin6 = Pin.create!({pin_url: "https://unsplash.com/photos/tp8qeCAFBrw", description: "A man applying fabric prints by hand", title: "Pattern printing", owner_email: user2.email, user_id: user2.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/francisco-arnela-unsplash.jpg')
pin6.photo.attach(io: file, filename: 'francisco-arnela-unsplash.jpg')
BoardsPin.create!(board_id: board4.id, pin_id: pin6.id)

pin7 = Pin.create!({pin_url: "https://unsplash.com/photos/E7zsz8JA8FM", description: "Thread in all the colors of the rainbow", title: "Embroidery thread", owner_email: demouser.email, user_id: demouser.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/embroidery_thread.jpg')
pin7.photo.attach(io: file, filename: 'annie-spratt-spools.jpg')
BoardsPin.create!(board_id: board1.id, pin_id: pin7.id)


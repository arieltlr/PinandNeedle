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

pin8 = Pin.create!({pin_url: "https://unsplash.com/photos/jGXBpAKGkfI", description: "Organic cotton yarn", title: "Sweater knitting", owner_email: user1.email, user_id: user1.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/brown_sweater_knit.jpg')
pin8.photo.attach(io: file, filename: 'brown_sweater_knit.jpg')
BoardsPin.create!(board_id: board1.id, pin_id: pin8.id)

pin9 = Pin.create!({pin_url: "https://unsplash.com/photos/jGXBpAKGkfI", description: "Colorful inspiration", title: "Milan fashion sketches", owner_email: demouser.email, user_id: demouser.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/charlota-blunarova-unsplash.jpg')
pin9.photo.attach(io: file, filename: 'charlota-blunarova-unsplash.jpg')
BoardsPin.create!(board_id: board3.id, pin_id: pin9.id)

pin10 = Pin.create!({pin_url: "https://unsplash.com/photos/5FTXPrP2k3c", description: "Pins are the most essential part of a successful sewing project", title: "Pastel pincushion", owner_email: demouser.email, user_id: demouser.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/pin_cusion.jpg')
pin10.photo.attach(io: file, filename: 'pin_cusion.jpg')
BoardsPin.create!(board_id: board3.id, pin_id: pin10.id)

pin11 = Pin.create!({pin_url: "https://unsplash.com/photos/ksLWYYmK-0k", description: "A tailor has to be very meticulous", title: "Suit tailoring", owner_email: user2.email, user_id: user2.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/salvador-godoy-unsplash.jpg')
pin11.photo.attach(io: file, filename: 'salvador-godoy-unsplash.jpg')
BoardsPin.create!(board_id: board4.id, pin_id: pin11.id)

pin12 = Pin.create!({pin_url: "https://unsplash.com/photos/tX62O5F3AfU", description: "Sewing supplies on my desk", title: "Bright and cheery desk space", owner_email: demouser.email, user_id: demouser.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/serger_spool.jpg')
pin12.photo.attach(io: file, filename: 'serger_spool.jpg')
BoardsPin.create!(board_id: board1.id, pin_id: pin12.id)

#done
pin13 = Pin.create!({pin_url: "https://unsplash.com/photos/YX3fLvm9jZ4", description: "Legs for miles", title: "Pink power suit", owner_email: user1.email, user_id: user1.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/juan-ordonez.jpg')
pin13.photo.attach(io: file, filename: 'juan-ordonez.jpg')
BoardsPin.create!(board_id: board3.id, pin_id: pin13.id)

#done
pin14 = Pin.create!({pin_url: "https://unsplash.com/photos/Jdga-nyrIcc", description: "Feathers, jewels, and glamour", title: "Fancy ostrich costume", owner_email: user1.email, user_id: user1.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/naeim-jafari.jpg')
pin14.photo.attach(io: file, filename: 'naeim-jafari.jpg')
BoardsPin.create!(board_id: board3.id, pin_id: pin14.id)

#done
pin15 = Pin.create!({pin_url: "https://unsplash.com/photos/fRM17bgG5nQ", description: "Delicate details", title: "Ballerina costume", owner_email: user1.email, user_id: user1.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/michele-seghieri.jpg')
pin15.photo.attach(io: file, filename: 'michele-seghieri.jpg')
BoardsPin.create!(board_id: board3.id, pin_id: pin15.id)

#done
pin16 = Pin.create!({pin_url: "https://unsplash.com/photos/MQebYgPVHEY", description: "Up up and away!", title: "Super hero", owner_email: user1.email, user_id: user1.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/michelle-cassar-blue-super.jpg')
pin16.photo.attach(io: file, filename: 'michelle-cassar-blue-super.jpg')
BoardsPin.create!(board_id: board3.id, pin_id: pin16.id)

#done
pin17 = Pin.create!({pin_url: "https://unsplash.com/photos/_KCrSolz6FI", description: "Natural threads on a loom", title: "Loom work", owner_email: demouser.email, user_id: demouser.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/nickolas-nikolic-natural-loom.jpg')
pin17.photo.attach(io: file, filename: 'nickolas-nikolic-natural-loom.jpg')
BoardsPin.create!(board_id: board1.id, pin_id: pin17.id)

#done
pin18 = Pin.create!({pin_url: "https://unsplash.com/photos/dl-Lb5TMxF0", description: "Colorful blankets from the market", title: "Peruvian textiles", owner_email: demouser.email, user_id: demouser.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/megan-markham-peruvian.jpg')
pin18.photo.attach(io: file, filename: 'megan-markham-peruvian.jpg')
BoardsPin.create!(board_id: board2.id, pin_id: pin18.id)

#done
pin19 = Pin.create!({pin_url: "https://unsplash.com/photos/upJFoyr7BBA", description: "Textures and colors from Morocco", title: "Moroccan market textiles", owner_email: demouser.email, user_id: demouser.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/annie-spratt-morocco-market.jpg')
pin19.photo.attach(io: file, filename: 'annie-spratt-morocco-market.jpg')
BoardsPin.create!(board_id: board2.id, pin_id: pin19.id)

#done
pin20 = Pin.create!({pin_url: "https://unsplash.com/photos/mpFsCX5FqZ8", description: "Glimpse into the rug market", title: "Rug stack", owner_email: demouser.email, user_id: demouser.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/juli-kosolapova-rug-stack.jpg')
pin20.photo.attach(io: file, filename: 'juli-kosolapova-rug-stack.jpg')
BoardsPin.create!(board_id: board2.id, pin_id: pin20.id)

#done
pin21 = Pin.create!({pin_url: "https://unsplash.com/photos/ZgMMjAR9b20", description: "Work by hand", title: "Couture details", owner_email: user2.email, user_id: user2.id})
file = open('https://pinandneedle-seeds.s3-us-west-1.amazonaws.com/kris-atomic-couture.jpg')
pin21.photo.attach(io: file, filename: 'kris-atomic-couture.jpg')
BoardsPin.create!(board_id: board4.id, pin_id: pin21.id)



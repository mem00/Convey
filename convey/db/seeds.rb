# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


mem = User.create(username:"mem", phone_number:"55555555", password:"123456")
rob = User.create(username:"rob", phone_number:"111111", password:"123456")
jill = User.create(username:"jill", phone_number:"22222222", password:"123456")


chat1 = Chat.create(to_id: mem.id, from_id: rob.id)
chat2 = Chat.create(to_id: rob.id, from_id: mem.id)
chat3 = Chat.create(to_id: mem.id, from_id: jill.id)
chat4 = Chat.create(to_id: jill.id, from_id: mem.id)
chat5 = Chat.create(to_id: rob.id, from_id: jill.id)
chat6 = Chat.create(to_id: jill.id, from_id: rob.id)

message1 = Message.create(content:"hello", chat: chat1)
message2 = Message.create(content:"hey", chat: chat2)
message3 = Message.create(content:"whatsup", chat: chat1)
message4 = Message.create(content:"nm whats up with you", chat: chat2)
message5 = Message.create(content:"yo is this jill", chat: chat3)
message6 = Message.create(content:"hey it is who is this", chat: chat4)

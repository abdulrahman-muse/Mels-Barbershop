# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating barbers"

b1 = Barber.create(name: "Miguel Ramos", phone: "763-827-2829", image: "https://www.uh.edu/news-events/images/pexels-barber-720.png", experience: 7)
b2 = Barber.create(name: "David Anderson", phone: "952-447-4246", image: "https://images.squarespace-cdn.com/content/v1/5a9d7cd5b98a78ffe3670848/1529453733503-93J486XSXATY3R0ECZFZ/DSC_3666.jpg", experience: 11)
b3 = Barber.create(name: "Hakim Davis", phone: "612-792-0976", image: "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2020/03/barbershop-e1583544536263.png", experience: 15)

puts "creating users"

user1 = User.create(username: "abdulm15", email:"abdul@gmail.com", password:"password", password_confirmation:"password")

puts "creating services"

s1 = Service.create(name: "Regular Haircut", price: 25 , about: "This service is typically for tapers, fades, etc")
s2 = Service.create(name: "Haircut + Trim", price: 30 , about: "This service includes any regular haircut plus a trim")
s4 = Service.create(name: "Lineup Only", price: 10 , about: "This service is for lineups only")
s5 = Service.create(name: "Beard Trim and Lineup" , price: 20, about: "This service comes with a wash and beard massage before the trim and lineup")
s6 = Service.create(name: "Kid's Haircut", price: 15 , about: "This service is only for kid's under the age of 12")



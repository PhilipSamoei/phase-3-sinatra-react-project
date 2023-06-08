require 'faker'

User.destroy_all
Movie.destroy_all

puts "Seeding spices..."

Faker::Config.locale = 'en'

10.times do
  User.create(
    username: Faker::Internet.username(specifier: 8..12),
    email: Faker::Internet.email,
    password: Faker::Internet.password(min_length: 8)
  )
end

users = User.all

10.times do
  Movie.create(
    title: Faker::Movie.title,
    category: Faker::Book.genre,
    description: Faker::Lorem.paragraph(sentence_count: 4),
    image_url: Faker::LoremPixel.image(size: "300x400", is_gray: false, category: 'abstract'),
    user_id: users.sample.id
  )
end

puts "Seeding complete!"



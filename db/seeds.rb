require 'faker'

User.destroy_all
Movie.destroy_all

puts "Seeding movies..."

Faker::Config.locale = 'en'

10.times do
  User.create(
    username: Faker::Internet.username(specifier: 8..12),
    email: Faker::Internet.email,
    password: Faker::Internet.password(min_length: 8)
  )
end

users = User.all

movies = [
  {
    "id": 1,
    "title": "Time Chasers",
    "description": "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/23342/p23342_v_v8_ab.jpg",
    "category": "Sci-Fi"
  },
  {
    "id": 2,
    "title": "The Touch Of Satan",
    "description": "A young man meets a farm girl who is actually a witch.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/43468/p43468_v_v8_aa.jpg",
    "category": "Horror"
  },
  {
    "id": 3,
    "title": "Santa Claus Conquers The Martians",
    "description": "The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/4232/p4232_v_v8_aa.jpg",
    "category": "Family"
  },
  {
    "id": 4,
    "title": "Track Of The Moon Beast",
    "description": "A young man is transformed into a hideous 'moon beast' due to a meteor fragment lodged in his body.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/39804/p39804_v_v8_ab.jpg",
    "category": "Sci-Fi"
  },
  {
    "id": 5,
    "title": "The Skydivers",
    "description": "A woman seeks revenge on her former lover, who owns a skydiving business.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/40518/p40518_v_v8_aa.jpg",
    "category": "Drama"
  },
  {
    "id": 6,
    "title": "The Killer Shrews",
    "description": "On an isolated island, a small group of people are terrorized by giant voracious shrews in the midst of a hurricane.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg",
    "category": "Horror"
  },
  {
    "id": 7,
    "title": "Project Moon Base",
    "description": "A saboteur posing as a scientist strives to destroy the world's first space station.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/46755/p46755_v_v8_aa.jpg",
    "category": "Sci-Fi"
  },
  {
    "id": 8,
    "title": "The Giant Spider Invasion",
    "description": "Giant spiders from another dimension invade Wisconsin.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/42171/p42171_v_v8_ab.jpg",
    "category": "Horror"
  },
  {
    "id": 9,
    "title": "Catalina Caper",
    "description": "A group of swingin' teens take time out from having fun in the sun to try to foil a group of crooks searching for a stolen scroll.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/58122/p58122_v_v8_aa.jpg",
    "category": "Comedy"
  },
  {
    "id": 10,
    "title": "Secret Agent Super Dragon",
    "description": "A series of murders in Michigan lead an American secret agent to Amsterdam, where he uncovers a plot to imperil the world with a potent new drug.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/93417/p93417_v_v8_aa.jpg",
    "category": "Action"
  },
  {
    "id": 11,
    "title": "Wild Rebels",
    "description": "A stock car driver goes undercover as the wheel man for a motorcycle gang.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/45367/p45367_v_v8_aa.jpg",
    "category": "Action"
  },
  {
    "id": 12,
    "title": "Danger: Diabolik",
    "description": "International man of mystery Diabolik and his lover pull off heist after heist, all while European cops led by Inspector Ginko and envious mobsters led by Ralph Valmont are closing in on them.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/11850/p11850_v_v8_aa.jpg",
    "category": "Action"
  },
  {
    "id": 13,
    "title": "Village Of The Giants",
    "description": "Delinquent teen-agers ingest a substance and grow thirty feet tall, then proceed to take over a small town.",
    "image_url": "https://www.gstatic.com/tv/thumb/v22vodart/37991/p37991_v_v8_aa.jpg",
    "category": "Sci-Fi"
  }
]

movies.each do |movie_data|
  Movie.create(
    title: movie_data[:title],
    description: movie_data[:description],
    image_url: movie_data[:image_url],
    category: movie_data[:category],
    user_id: users.sample.id
  )
end

puts "Seeding complete!"

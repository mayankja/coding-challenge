100.times do |num|
  Apartment.create(
    title: "Apartment #{num}",
    price: Faker::Number.number(digits: 3),
    sqm: Faker::Number.number(digits: 3),
    total_bedroom: Faker::Number.number(digits: 1),
    total_bathroom: Faker::Number.number(digits: 1),
    picture: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
  )
end

puts 'Successfully created records.'

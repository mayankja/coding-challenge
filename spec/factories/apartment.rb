FactoryBot.define do
  factory :apartment do
    sequence :title do |num|
      "Apartment #{num}"
    end

    price { Faker::Number.number(digits: 3) }
    sqm { Faker::Number.number(digits: 3) }
    total_bedroom { Faker::Number.number(digits: 1) }
    total_bathroom { Faker::Number.number(digits: 1) }
    picture { Faker::Avatar.image(slug: 'apartment', format: 'jpg') }
  end
end

FactoryGirl.define do

  factory :message do
    message Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/images/decoy.png")
    user
    group
  end
end

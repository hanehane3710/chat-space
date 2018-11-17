FactoryGirl.define do

  factory :message do
    message Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/uploads/message/image/2/decoy.png")
    user
    group
  end
end

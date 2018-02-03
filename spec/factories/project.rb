FactoryBot.define do
  factory :project do
    sequence(:title) {|n| "Project #{n}" }
    sequence(:slug) {|n| "project-#{n}"}
    description "awesome test project"
    youtube_id "SAXRJPbT-5M"
  end
end

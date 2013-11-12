# == Schema Information
#
# Table name: projects
#
#  id                     :integer          not null, primary key
#  title                  :string(255)
#  description            :text
#  youtube_id             :string(255)
#  created_at             :datetime
#  updated_at             :datetime
#  client                 :string(255)
#  tasks                  :string(255)
#  year                   :integer
#  thumbnail_file_name    :string(255)
#  thumbnail_content_type :string(255)
#  thumbnail_file_size    :integer
#  thumbnail_updated_at   :datetime
#

class Project < ActiveRecord::Base
  attr_accessible :thumbnail
  has_attached_file :thumbnail, :styles => { :medium => "240x135>" }


  rails_admin do
    configure :thumbnail, :jcrop

    field :title do end
    field :description do end
    field :youtube_id do end
    field :client do end
    field :tasks do end
    field :year do end

    field :thumbnail do
      fit_image true
      jcrop_options aspectRatio: 16.0/9.0
    end
  end
end

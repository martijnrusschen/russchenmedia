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
  has_attached_file :thumbnail, :styles => { :medium => "300x300>", :thumb => "100x100>" }
end

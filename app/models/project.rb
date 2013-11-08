# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  description :text
#  youtube_id  :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  client      :string(255)
#  tasks       :string(255)
#  year        :integer
#

class Project < ActiveRecord::Base
end

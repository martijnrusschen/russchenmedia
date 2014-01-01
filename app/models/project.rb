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
  default_scope { order('year DESC, id DESC') }

  has_attached_file :thumbnail, :styles => {
    :small => "240x135#",
    :medium => "320x180#",
    :large => "640x360#"
  }

  def self.all_except_current(project_id)
    where.not(id: project_id)
  def related
    Project.where.not(id: id)
      .limit(4)
  end

  def to_param
    [id, title.parameterize].join("-")
  end

  def previous
    Project.where(["id < ?", id]).last
  end

  def next
    Project.where(["id > ?", id]).first
  end
end

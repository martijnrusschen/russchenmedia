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

class Project < ApplicationRecord
  default_scope { order('finished_at DESC') }

  has_attached_file :thumbnail, :styles => {
    :small => "240x135#",
    :medium => "320x180#",
    :large => "640x360#"
  }

  validates_attachment :thumbnail, content_type: {
    content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  }

  def related
    Project.where.not(id: id)
      .reorder("TS_RANK_CD(TO_TSVECTOR(tasks), PLAINTO_TSQUERY('#{tasks}')) DESC")
      .limit(4)
  end

  def to_param
    slug
  end

  def previous
    Project.where("finished_at > ?", finished_at).last
  end

  def next
    Project.where("finished_at < ?", finished_at).first
  end
end

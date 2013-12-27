class AddAttachmentThumbnailToProjects < ActiveRecord::Migration
  def self.up
    puts "old migration"
  end

  def self.down
    remove_attachment :projects, :thumbnail
  end
end

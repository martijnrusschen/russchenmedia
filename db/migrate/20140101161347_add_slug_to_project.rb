class AddSlugToProject < ActiveRecord::Migration
  def up
    add_column :projects, :slug, :string

    Project.all.each do |project|
      Project.update project.id, slug: project.title.parameterize
    end
  end

  def down
    remove_column :projects, :slug
  end
end

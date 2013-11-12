class AddFieldToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :client, :string
    add_column :projects, :tasks, :string
    add_column :projects, :year, :interger
  end
end

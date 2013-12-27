class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :youtube_id
      t.string :client
      t.string :tasks
      t.interger :year

      t.timestamps
    end
  end
end

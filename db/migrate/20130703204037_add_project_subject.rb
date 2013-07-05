class AddProjectSubject < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.references :subject, polymorphic: true
  end
end

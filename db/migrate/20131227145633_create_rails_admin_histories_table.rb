class CreateRailsAdminHistoriesTable < ActiveRecord::Migration
   def self.up
      puts "old migration"
    end

  def self.down
    drop_table :rails_admin_histories
  end
end

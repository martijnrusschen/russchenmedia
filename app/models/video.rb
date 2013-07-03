class Video < ActiveRecord::Base
  belongs_to :project, as: :subject
end

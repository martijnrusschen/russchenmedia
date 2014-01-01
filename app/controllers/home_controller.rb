class HomeController < ApplicationController
  def index
    @projects = Project.limit(16)
  end
end

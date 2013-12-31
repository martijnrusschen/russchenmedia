class HomeController < ApplicationController
  def index
    @projects = Project.limit(16).order('Year DESC, id DESC')
  end
end

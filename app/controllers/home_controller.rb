class HomeController < ApplicationController
  def index
    @projects = Project.order('Year DESC')
  end
end

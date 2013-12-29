class HomeController < ApplicationController
  def index
    @projects = Project.order('Year ASC')
  end
end

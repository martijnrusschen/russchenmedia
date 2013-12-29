class HomeController < ApplicationController
  def index
    @projects = Project.order('Year DESC, id DESC')
  end
end

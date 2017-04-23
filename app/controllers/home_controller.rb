class HomeController < ApplicationController
  def index
    @projects = Project.limit(16)

    respond_to do |format|
      format.html
      format.json { render json: @projects }
    end
  end
end

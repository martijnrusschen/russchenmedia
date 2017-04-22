class ProjectsController < ApplicationController
  def show
    @project = Project.find_by_slug params[:id]

    respond_to do |format|
      format.html
      format.json { render json: @project }
    end
  end
end

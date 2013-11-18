class ProjectsController < ApplicationController
  def show
    @project = Project.find(params[:id])
    @other_projects = Project.last(5)
  end
end

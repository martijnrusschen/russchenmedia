class ProjectsController < ApplicationController
  def show
    @project = Project.find(params[:id])
    @other_projects = Project.all_except_current(@project.id)
                             .limit(4)
                             .order('Year DESC, id DESC')
  end
end

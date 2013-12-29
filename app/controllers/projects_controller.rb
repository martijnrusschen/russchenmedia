class ProjectsController < ApplicationController
  def all_except_current(project_id)
    where.not(id: project_id)
  end

  def show
    @project = Project.find(params[:id])
    @other_projects = Project.all_except_current(@project)
                             .order('Year ASC')
                             .last(5)
  end
end

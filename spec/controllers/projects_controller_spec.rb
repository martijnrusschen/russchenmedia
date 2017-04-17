require 'spec_helper'

describe ProjectsController, type: :controller do
  describe '#show' do
    render_views
    let(:project) { create :project }

    subject { get :show, params: { id: project.slug } }

    it { is_expected.to render_template 'projects/show' }
    it { expect(subject.status).to eq 200 }
    it { expect(subject.body).to include project.title }
  end
end

require 'spec_helper'

describe ProjectsController, type: :controller do
  describe '#show' do
    render_views

    let(:project) { create :project, title: 'Project 1', slug: 'project-1' }

    subject { get :show, params: { id: project.slug, format: format } }

    context 'format html' do
      let(:format) { :html }

      it { is_expected.to render_template 'projects/show' }
      it { expect(subject.status).to eq 200 }
      it { expect(subject.body).to include project.title }
    end

    context 'format json' do
      let(:format) { :json }

      before do
        Timecop.freeze(Time.local(1990))
      end

      after do
        Timecop.return
      end

      it 'works' do
        verify fomat: :json do
          subject.body
        end
      end
    end
  end
end

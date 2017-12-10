require 'spec_helper'

describe ProjectsController, type: :controller do
  describe '#show' do
    render_views

    before { Timecop.freeze(Time.local(1990)) }
    after { Timecop.return }

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

      it 'works' do
        verify fomat: :json do
          subject.body
        end
      end
    end
  end
end

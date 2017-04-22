require 'spec_helper'

describe HomeController, type: :controller do
  render_views

  subject { get :index, format: format }

  describe 'GET index' do
    context 'format HTML' do
      let(:format) { :html }
      let!(:projects) { 3.times { create :project } }

      it 'renders the index' do
        expect(subject.status).to eq 200
      end
    end

    context 'format JSON' do
      let(:format) { :json }
      let!(:project) { create :project, title: 'Project 1', slug: 'project-1' }

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

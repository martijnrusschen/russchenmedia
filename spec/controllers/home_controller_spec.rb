require 'spec_helper'

describe HomeController, type: :controller do
  render_views

  before { Timecop.freeze(Time.local(1990)) }
  after { Timecop.return }

  subject { get :index, format: format }

  describe 'GET index' do
    context 'format HTML' do
      let(:format) { :html }

      it 'renders the index' do
        3.times { create :project }
        expect(subject.status).to eq 200
      end
    end

    context 'format JSON' do
      let(:format) { :json }

      it 'works' do
        create :project, title: 'Project 1', slug: 'project-1'
        verify fomat: :json { subject.body }
      end
    end
  end
end

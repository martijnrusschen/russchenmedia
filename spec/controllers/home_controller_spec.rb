require 'spec_helper'

describe HomeController, type: :controller do
  render_views

  describe 'GET index' do
    it 'renders the index' do
      3.times { create :project }
      get :index

      expect(response.status).to eq 200
    end
  end
end

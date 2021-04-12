require 'rails_helper'

RSpec.describe 'Apartments API', type: :request do
  # Initialize the test data
  let!(:apartments) { create_list(:apartment, 10) }
  let!(:apartment_id) { apartments.first.id }

  # Test suite for GET /api/v1/apartments
  describe 'GET /api/v1/apartments' do
    it 'returns status code 200' do
      get '/api/v1/apartments'

      expect(response).to have_http_status(200)
    end

    context 'with filters params' do
      it 'when price=1000-1100' do
        in_range = create(:apartment, price: 1050)
        get '/api/v1/apartments', params: { price: '1000-1100' }

        expect(json.map { |a| a['id'] }).to include(in_range.id)
      end

      it 'when sqm=1200-1400' do
        in_range = create(:apartment, sqm: 1300)
        get '/api/v1/apartments', params: { sqm: '1200-1400' }

        expect(json.map { |a| a['id'] }).to include(in_range.id)
      end

      it 'when bedroom=2' do
        in_range = create(:apartment, total_bedroom: 2)
        get '/api/v1/apartments', params: { bedroom: 2 }

        expect(json.map { |a| a['id'] }).to include(in_range.id)
      end

      it 'when bathroom=2' do
        in_range = create(:apartment, total_bathroom: 2)
        get '/api/v1/apartments', params: { total_bathroom: 2 }

        expect(json.map { |a| a['id'] }).to include(in_range.id)
      end
    end
  end

  # Test suit for GET /apartments/:id -SHOW A ONE RECORD
  describe 'GET api/v1/apartments/:id' do
    before { get "/api/v1/apartments/#{apartment_id}" }

    context 'when the record exists' do
      it 'returns apartment' do
        # get "/api/v1/apartments/#{apartment_id}"
        expect(json).not_to be_empty
        expect(json['id']).to eq(apartment_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record not exists' do
      let(:apartment_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(json['message']).to match(/Couldn't find Apartment with 'id'=100/)
      end
    end
  end

  # Test suite for PUT /apartments/:id - UPDATE RECORD
  describe 'PUT api/v1/apartments/:id' do
    let(:valid_attributes) { { title: 'Apartment title updated', price: 400 } }

    context 'when is sucesfully updated' do
      before { put "/api/v1/apartments/#{apartment_id}", params: valid_attributes }

      it 'returns status code 200' do
        expect(response).to have_http_status(204)
      end

      it 'updates record' do
        apartment = Apartment.find(apartment_id)

        expect(apartment.title).to eq('Apartment title updated')
        expect(apartment.price).to eq(400)
      end
    end
  end

  # Tes suit for DELETE /apartments/:id
  describe 'DELETE /apartments/:id' do
    before { delete "/api/v1/apartments/#{apartment_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end

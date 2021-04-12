# frozen_string_literal: true

module Api
  module V1
    class ApartmentsController < ApplicationController
      protect_from_forgery with: :null_session

      before_action :set_apartment, only: %i[show destroy update]

      def index
        render json: Apartment.filter(params), status: :ok
      end

      def create
        Apartment.create!(apartment_params)
        json_response(@apartment, :created)
      end

      def show
        json_response(@apartment)
      end

      def update
        apartment.update(apartment_params)
        head :no_content
      end

      def destroy
        @apartment.destroy
        head :no_content
      end

      private

      def set_apartment
        @apartment = Apartment.find(params[:id])
      end

      # A list of the param names that can be used for filtering the Product list
      def filtering_params(params)
        params.slice(:bedrooms, :bathrooms)
      end

      def apartment_params
        params.permit(:title, :price, :sqm, :total_bedroom, :total_bathroom, :picture)
      end
    end
  end
end

module Filterable
  extend ActiveSupport::Concern

  module ClassMethods
    def filter(params)
      results = where(nil)
      filters_params = filtering_params(params)

      # return if filter are not present
      return results if filters_params.keys.blank?

      filters_params.each do |key, value|
        next if attr_nil?(value)

        # filtering by range
        if %w[price sqm].include?(key)
          min = value.split('-').first
          max = value.split('-').last

          results = results.public_send("filter_by_#{key}", min, max)
        else
          results = results.public_send("filter_by_#{key}", value)
        end
      end

      page = page(params)
      results.paginate(page: page, per_page: 5)
    rescue Exception => e
      Rails.logger.debug "Apartment filter error raise #{e.messages}"
      results.paginate(page: page, per_page: 5)
    end

    # A list of the param names that can be used for filtering the Apartment list
    def filtering_params(params)
      params.slice(:bedrooms, :bathrooms, :price, :sqm)
    end

    def page(params)
      return 1 if attr_nil?(params[:page])

      params[:page]
    end

    def attr_nil?(value)
      value.blank? || value.include?('null')
    end
  end
end

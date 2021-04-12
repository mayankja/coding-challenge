class Apartment < ApplicationRecord
  include Filterable

  scope :filter_by_price, ->(min, max) { where('price >= :min AND price <= :max', min: min, max: max) }
  scope :filter_by_sqm, ->(min, max) { where('sqm >= :min AND sqm <= :max', min: min, max: max) }
  scope :filter_by_bedrooms, ->(bedroom) { where(total_bedroom: bedroom) }
  scope :filter_by_bathrooms, ->(bathroom) { where(total_bathroom: bathroom) }
end

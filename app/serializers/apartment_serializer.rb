class ApartmentSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :sqm, :picture, :total_bedroom, :total_bathroom, :created_at, :updated_at
end

class BarberSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :image, :experience
end

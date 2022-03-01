class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :service, :date, :time, :user_id, :barber_id
end

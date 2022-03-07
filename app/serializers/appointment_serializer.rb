class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :service, :date, :time, :user_id, :barber

  def barber
    Barber.find_by_id(self.object.barber_id).name
  end
end

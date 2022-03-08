class Appointment < ApplicationRecord
    belongs_to :barber
    belongs_to :user
    validates :date, presence: true
    validates :time, presence: true
    validates :barber, presence: true
    validates :service, presence: true
end

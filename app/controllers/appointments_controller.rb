class AppointmentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]

    def index
        appointments = Appointment.all
        render json: appointments
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment
    end

private

def appointment_params
    params.permit(:service, :date, :time, :barber_id, :user_id)
end

end

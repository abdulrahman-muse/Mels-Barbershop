class AppointmentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create, :destroy]

    def index
        appointments = current.appointments
        render json: appointments
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment
    end

    def destroy
        appt = Appointment.find_by(id: params[:id])
        appt.destroy
    end

private

def appointment_params
    params.permit(:service, :date, :time, :barber_id, :user_id)
end

end

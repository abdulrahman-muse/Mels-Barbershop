class BarbersController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        barbers = Barber.all
        render json: barbers
    end

    def show
        barber = find_barber
        render json: barber
    end

      private 

      def find_barber
        Barber.find(params[:id])
      end


end

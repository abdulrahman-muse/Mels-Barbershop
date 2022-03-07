class ServicesController < ApplicationController
    skip_before_action :authorize, only: [:index]


    def index
        services = Service.all
        render json: services
    end

end

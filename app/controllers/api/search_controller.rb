class Api::SearchController < ApplicationController

    def search 
        @pins ||= []
        
        @pins = Pin.where("title ILIKE ? OR description ILIKE ?", "%#{params[:search]}%", "%#{params[:search]}%").includes(photo_attachment: :blob).to_a
        
        render :results
        
    end
end
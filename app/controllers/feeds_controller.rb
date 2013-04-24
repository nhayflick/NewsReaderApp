class FeedsController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]

  def index
    @feeds = Feed.all
    respond_to do |format|
      format.html {render :index}
      format.json {render :json => @feeds}
    end
  end

  def create
    @feed = Feed.new(params[:feed])
    if @feed.save
      render :json => @feed
    else
      render :json => @feed.errors, :status => 422
    end
  end

  def show
    render :json => Feed.find(params[:id])
  end

end

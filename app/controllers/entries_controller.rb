class EntriesController < ApplicationController
  def index
    @entries = Feed.get_entries(params[:feed_id])

    render :json => @entries
  end
end

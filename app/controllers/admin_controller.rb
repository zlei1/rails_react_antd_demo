class AdminController < ApplicationController
  layout 'adminreactapp'
  before_action :__set_global_config

  def index; end

  private
    def __set_global_config
      @global_config = {}
    end
end

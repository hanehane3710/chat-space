class UsersController < ApplicationController
  before_action :set_current_user, only: :edit

  def edit
  end

  def update
    if set_current_user
      @user.update(user_params)
      redirect_to root_url
    else
      render :edit
    end
  end

   private
    def set_current_user
      @user = User.find(current_user.id)
    end

    def user_params
      params.require(:users).permit(:name,:email)
    end
end

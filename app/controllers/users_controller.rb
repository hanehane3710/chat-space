class UsersController < ApplicationController

  def index
    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%").where.not(id: current_user.id)
  end

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

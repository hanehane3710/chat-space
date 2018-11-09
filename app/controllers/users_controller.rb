class UsersController < ApplicationController
  def edit
    @user = User.find(current_user.id)
  end

  def update
    if @user = User.find(current_user.id)
      @user.update(user_params)
      redirect_to root_url
    else
      render :edit
    end
  end

   private
    def user_params
      params.require(:users).permit(:name,:email)
    end
end

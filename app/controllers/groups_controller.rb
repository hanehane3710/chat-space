class GroupsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_group, only: [:edit,:update,:destroy]

  def index
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    @group.users << current_user
    if @group.save
      redirect_to group_messages_path(@group)
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @group.update(group_params)
      redirect_to group_messages_path(@group), notice: "グループを編集しました"
    else
      render :edit
    end
  end

  def destroy
  end

   private
    def group_params
      params.require(:group).permit(:name, user_ids: [])
    end

    def set_group
    @group = Group.find(params[:id])
   end

end

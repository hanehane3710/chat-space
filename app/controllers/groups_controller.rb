class GroupsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_group, only: [:edit,:update,:destroy]

  def index
  end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_url
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @group.update(group_params)
      respond_to do |format|
        format.html {redirect_to group_messages_path(@group), notice: "グループを編集しました"}
        format.json
      end
    else
      render :edit
    end
  end

  def destroy
  end

   private
    def group_params
      params.require(:group).permit(:name, {:user_ids => []})
    end

    def set_group
    @group = Group.find(params[:id])
   end

end

# frozen_string_literal: true

class ClassGroupsController < ApplicationController
  def index
    @class_groups = current_user.class_groups
  end

  def new
    @class_group = ClassGroup.new
  end

  def create_new
    binding.pry
    @class_group = ClassGroup.new(class_group_params)
    # if @class_group.save
    #   current_user.id = @class_group.user_id
    # else
    #   render new_class_group_path
    # end
  end

    private

    def class_group_params
        params.require(:class_group).permit(:name)
    end

end
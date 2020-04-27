# frozen_string_literal: true

class ClassGroupsController < ApplicationController
    def index
        @class_groups = current_user.class_groups
    end

    def new
        @class_group = ClassGroup.new
    end

end
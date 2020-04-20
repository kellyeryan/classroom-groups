# frozen_string_literal: true

class ClassGroupsController < ApplicationController
    def new
        @class_group = ClassGroup.new
    end
end
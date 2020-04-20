# frozen_string_literal: true

class ClassnamesController < ApplicationController
    def new
        @classname = Classname.new
    end
end
# frozen_string_literal: true

class TeachersController < ApplicationController
    def new
        @teacher = Teacher.new
    end
end
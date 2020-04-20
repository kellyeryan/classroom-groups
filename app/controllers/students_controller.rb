# frozen_string_literal: true

class StudentsController < ApplicationController
    def new
        @student = Student.new
    end
end
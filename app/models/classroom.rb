#frozen_string_literal: true

class Classroom < ApplicationRecord
    has_many: students
    has_one: teacher
end
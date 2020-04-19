#frozen_string_literal: true

class Teacher < ApplicationRecord
    has_many: students
    has_many: classrooms
end
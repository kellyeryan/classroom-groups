#frozen_string_literal: true

class Teacher < ApplicationRecord
    has_many: classnames
    has_many: students, through: :classnames
end
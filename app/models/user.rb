class User < ApplicationRecord
  validates :google_id, uniqueness: true
  validates :email, uniqueness: true
end

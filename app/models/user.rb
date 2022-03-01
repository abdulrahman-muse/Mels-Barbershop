class User < ApplicationRecord
    has_many :appointments
    has_many :barbers, through: :appointments
    has_secure_password
    validates :username, presence: true, uniqueness: true
end

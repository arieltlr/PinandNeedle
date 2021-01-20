class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true
    validates :username, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :password_digest, presence: true
    validates :country, presence: true
    validates :launguage, presence: true
    
    def set_username(email)
        self.username = email.split('@')[0]
    end

    after_initialize :ensure_session_token

    attr_reader :password

    def self.find_user_by_credentials(email, password)
        @user = User.find_by(email: email)
        if @user && @user.is_password?(password)
            @user
        else
            return nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token 
        SecureRandom.urlsafe_base64(16)
    end

    def password=(password)
        @password  = password
        self.password_digest = BCrypt::Password.create(password);

    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

end

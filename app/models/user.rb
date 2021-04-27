class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :password_digest, presence: true
    validates :about, allow_blank: true, length: {maximum: 160}
    validates :country, allow_blank: true, inclusion: ["Afghanistan",
                                                    "Albania",
                                                    "Algeria",
                                                    "Andorra",
                                                    "Angola",
                                                    "Anguilla",
                                                    "Antigua & Barbuda",
                                                    "Argentina",
                                                    "Armenia",
                                                    "Australia",
                                                    "Austria",
                                                    "Azerbaijan",
                                                    "Bahamas",
                                                    "Bahrain",
                                                    "Bangladesh",
                                                    "Barbados",
                                                    "Belarus",
                                                    "Belgium",
                                                    "Belize",
                                                    "Benin",
                                                    "Bermuda",
                                                    "Bhutan",
                                                    "Bolivia",
                                                    "Bosnia & Herzegovina",
                                                    "Botswana",
                                                    "Brazil",
                                                    "Brunei Darussalam",
                                                    "Bulgaria",
                                                    "Burkina Faso",
                                                    "Burundi",
                                                    "Cambodia",
                                                    "Cameroon",
                                                    "Canada",
                                                    "Cape Verde",
                                                    "Cayman Islands",
                                                    "Central African Republic",
                                                    "Chad",
                                                    "Chile",
                                                    "China",
                                                    "China - Hong Kong / Macau",
                                                    "Colombia",
                                                    "Comoros",
                                                    "Congo",
                                                    "Congo, Democratic Republic of (DRC)",
                                                    "Costa Rica",
                                                    "Croatia",
                                                    "Cuba",
                                                    "Cyprus",
                                                    "Czech Republic",
                                                    "Denmark",
                                                    "Djibouti",
                                                    "Dominica",
                                                    "Dominican Republic",
                                                    "Ecuador",
                                                    "Egypt",
                                                    "El Salvador",
                                                    "Equatorial Guinea",
                                                    "Eritrea",
                                                    "Estonia",
                                                    "Eswatini",
                                                    "Ethiopia",
                                                    "Fiji",
                                                    "Finland",
                                                    "France",
                                                    "French Guiana",
                                                    "Gabon",
                                                    "Gambia, Republic of The",
                                                    "Georgia",
                                                    "Germany",
                                                    "Ghana",
                                                    "Great Britain",
                                                    "Greece",
                                                    "Grenada",
                                                    "Guadeloupe",
                                                    "Guatemala",
                                                    "Guinea",
                                                    "Guinea-Bissau",
                                                    "Guyana",
                                                    "Haiti",
                                                    "Honduras",
                                                    "Hungary",
                                                    "Iceland",
                                                    "India",
                                                    "Indonesia",
                                                    "Iran",
                                                    "Iraq",
                                                    "Israel and the Occupied Territories",
                                                    "Italy",
                                                    "Ivory Coast (Cote d'Ivoire)",
                                                    "Jamaica",
                                                    "Japan",
                                                    "Jordan",
                                                    "Kazakhstan",
                                                    "Kenya",
                                                    "Korea, Republic of (South Korea)",
                                                    "Kosovo",
                                                    "Kuwait",
                                                    "Kyrgyz Republic (Kyrgyzstan)",
                                                    "Laos",
                                                    "Latvia",
                                                    "Lebanon",
                                                    "Lesotho",
                                                    "Liberia",
                                                    "Libya",
                                                    "Liechtenstein",
                                                    "Lithuania",
                                                    "Luxembourg",
                                                    "Madagascar",
                                                    "Malawi",
                                                    "Malaysia",
                                                    "Maldives",
                                                    "Mali",
                                                    "Malta",
                                                    "Martinique",
                                                    "Mauritania",
                                                    "Mauritius",
                                                    "Mayotte",
                                                    "Mexico",
                                                    "Moldova, Republic of",
                                                    "Monaco",
                                                    "Mongolia",
                                                    "Montenegro",
                                                    "Montserrat",
                                                    "Morocco",
                                                    "Mozambique",
                                                    "Myanmar/Burma",
                                                    "Namibia",
                                                    "Nepal",
                                                    "Netherlands",
                                                    "New Zealand",
                                                    "Nicaragua",
                                                    "Niger",
                                                    "Nigeria",
                                                    "North Macedonia, Republic of",
                                                    "Norway",
                                                    "Oman",
                                                    "Pacific Islands",
                                                    "Pakistan",
                                                    "Panama",
                                                    "Papua New Guinea",
                                                    "Paraguay",
                                                    "Peru",
                                                    "Philippines",
                                                    "Poland",
                                                    "Portugal",
                                                    "Puerto Rico",
                                                    "Qatar",
                                                    "Reunion",
                                                    "Romania",
                                                    "Russian Federation",
                                                    "Rwanda",
                                                    "Saint Kitts and Nevis",
                                                    "Saint Lucia",
                                                    "Saint Vincent and the Grenadines",
                                                    "Samoa",
                                                    "Sao Tome and Principe",
                                                    "Saudi Arabia",
                                                    "Senegal",
                                                    "Serbia",
                                                    "Seychelles",
                                                    "Sierra Leone",
                                                    "Singapore",
                                                    "Slovak Republic (Slovakia)",
                                                    "Slovenia",
                                                    "Solomon Islands",
                                                    "Somalia",
                                                    "South Africa",
                                                    "South Sudan",
                                                    "Spain",
                                                    "Sri Lanka",
                                                    "Sudan",
                                                    "Suriname",
                                                    "Sweden",
                                                    "Switzerland",
                                                    "Syria",
                                                    "Tajikistan",
                                                    "Tanzania",
                                                    "Thailand",
                                                    "Timor Leste",
                                                    "Togo",
                                                    "Trinidad & Tobago",
                                                    "Tunisia",
                                                    "Turkey",
                                                    "Turkmenistan",
                                                    "Turks & Caicos Islands",
                                                    "Uganda",
                                                    "Ukraine",
                                                    "United Arab Emirates",
                                                    "United States (US)",
                                                    "Uruguay",
                                                    "Uzbekistan",
                                                    "Venezuela",
                                                    "Vietnam",
                                                    "Virgin Islands (UK)",
                                                    "Virgin Islands (US)",
                                                    "Yemen",
                                                    "Zambia",
                                                    "Zimbabwe"]
    validates :language, allow_blank: true, inclusion: ["Bahasa Indonesia",
                                                    "Bahasa Malaysia",
                                                    "Cestina",
                                                    "Chinese ",
                                                    "Dansk",
                                                    "Deutch",
                                                    "English (US)",
                                                    "English (UK)",
                                                    "English (India)",
                                                    "English (Australia)",
                                                    "Espanol (Americas)",
                                                    "Espanol (Argentina)",
                                                    "Espanol (Espana)",
                                                    "Espanol (Mexico)",
                                                    "Francais",
                                                    "Italiano",
                                                    "Japanese",
                                                    "Korean",
                                                    "Magyer",
                                                    "Nederlands",
                                                    "Norsk Bacmal",
                                                    "Polski",
                                                    "Portugues (Brasil)",
                                                    "Portugues (Europeu)",
                                                    "Romana ",
                                                    "Slovencina",
                                                    "Suomi",
                                                    "Svenska",
                                                    "Tagalog",
                                                    "Tieng Viet",
                                                    "Turkce"]
    
    validates :gender, inclusion: ['Male', 'Female','Non-binary' ], allow_blank: true
    validates :age, presence: true
    
    after_initialize :ensure_session_token

    attr_reader :password
    
    has_many :boards,
    foreign_key: :user_id,
    class_name: :Board

    has_many :pins,
    foreign_key: :user_id,
    class_name: :Pin

    has_many :followers, 
        foreign_key: :user_id, 
        class_name: :Follow
    
    has_many :users_followed, 
        foreign_key: :follower_id, 
        class_name: :Follow


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




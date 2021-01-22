# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# validates :email, presence: true, uniqueness: true, valid_email?: true 
#     validates :username, presence: true, uniqueness: true
#     validates :session_token, presence: true, uniqueness: true
#     validates :password, length: {minimum: 6}, allow_nil: true
#     validates :password_digest, presence: true
#     validates :about, allow_blank: true, length: {maximum: 160}
#     validates :country, presence: true, inclusion: ["Afghanistan",
#                                                     "Albania",
#                                                     "Algeria",
#                                                     "Andorra",
#                                                     "Angola",
#                                                     "Anguilla",
#                                                     "Antigua & Barbuda",
#                                                     "Argentina",
#                                                     "Armenia",
#                                                     "Australia",
#                                                     "Austria",
#                                                     "Azerbaijan",
#                                                     "Bahamas",
#                                                     "Bahrain",
#                                                     "Bangladesh",
#                                                     "Barbados",
#                                                     "Belarus",
#                                                     "Belgium",
#                                                     "Belize",
#                                                     "Benin",
#                                                     "Bermuda",
#                                                     "Bhutan",
#                                                     "Bolivia",
#                                                     "Bosnia & Herzegovina",
#                                                     "Botswana",
#                                                     "Brazil",
#                                                     "Brunei Darussalam",
#                                                     "Bulgaria",
#                                                     "Burkina Faso",
#                                                     "Burundi",
#                                                     "Cambodia",
#                                                     "Cameroon",
#                                                     "Canada",
#                                                     "Cape Verde",
#                                                     "Cayman Islands",
#                                                     "Central African Republic",
#                                                     "Chad",
#                                                     "Chile",
#                                                     "China",
#                                                     "China - Hong Kong / Macau",
#                                                     "Colombia",
#                                                     "Comoros",
#                                                     "Congo",
#                                                     "Congo, Democratic Republic of (DRC)",
#                                                     "Costa Rica",
#                                                     "Croatia",
#                                                     "Cuba",
#                                                     "Cyprus",
#                                                     "Czech Republic",
#                                                     "Denmark",
#                                                     "Djibouti",
#                                                     "Dominica",
#                                                     "Dominican Republic",
#                                                     "Ecuador",
#                                                     "Egypt",
#                                                     "El Salvador",
#                                                     "Equatorial Guinea",
#                                                     "Eritrea",
#                                                     "Estonia",
#                                                     "Eswatini",
#                                                     "Ethiopia",
#                                                     "Fiji",
#                                                     "Finland",
#                                                     "France",
#                                                     "French Guiana",
#                                                     "Gabon",
#                                                     "Gambia, Republic of The",
#                                                     "Georgia",
#                                                     "Germany",
#                                                     "Ghana",
#                                                     "Great Britain",
#                                                     "Greece",
#                                                     "Grenada",
#                                                     "Guadeloupe",
#                                                     "Guatemala",
#                                                     "Guinea",
#                                                     "Guinea-Bissau",
#                                                     "Guyana",
#                                                     "Haiti",
#                                                     "Honduras",
#                                                     "Hungary",
#                                                     "Iceland",
#                                                     "India",
#                                                     "Indonesia",
#                                                     "Iran",
#                                                     "Iraq",
#                                                     "Israel and the Occupied Territories",
#                                                     "Italy",
#                                                     "Ivory Coast (Cote d'Ivoire)",
#                                                     "Jamaica",
#                                                     "Japan",
#                                                     "Jordan",
#                                                     "Kazakhstan",
#                                                     "Kenya",
#                                                     "Korea, Republic of (South Korea)",
#                                                     "Kosovo",
#                                                     "Kuwait",
#                                                     "Kyrgyz Republic (Kyrgyzstan)",
#                                                     "Laos",
#                                                     "Latvia",
#                                                     "Lebanon",
#                                                     "Lesotho",
#                                                     "Liberia",
#                                                     "Libya",
#                                                     "Liechtenstein",
#                                                     "Lithuania",
#                                                     "Luxembourg",
#                                                     "Madagascar",
#                                                     "Malawi",
#                                                     "Malaysia",
#                                                     "Maldives",
#                                                     "Mali",
#                                                     "Malta",
#                                                     "Martinique",
#                                                     "Mauritania",
#                                                     "Mauritius",
#                                                     "Mayotte",
#                                                     "Mexico",
#                                                     "Moldova, Republic of",
#                                                     "Monaco",
#                                                     "Mongolia",
#                                                     "Montenegro",
#                                                     "Montserrat",
#                                                     "Morocco",
#                                                     "Mozambique",
#                                                     "Myanmar/Burma",
#                                                     "Namibia",
#                                                     "Nepal",
#                                                     "Netherlands",
#                                                     "New Zealand",
#                                                     "Nicaragua",
#                                                     "Niger",
#                                                     "Nigeria",
#                                                     "North Macedonia, Republic of",
#                                                     "Norway",
#                                                     "Oman",
#                                                     "Pacific Islands",
#                                                     "Pakistan",
#                                                     "Panama",
#                                                     "Papua New Guinea",
#                                                     "Paraguay",
#                                                     "Peru",
#                                                     "Philippines",
#                                                     "Poland",
#                                                     "Portugal",
#                                                     "Puerto Rico",
#                                                     "Qatar",
#                                                     "Reunion",
#                                                     "Romania",
#                                                     "Russian Federation",
#                                                     "Rwanda",
#                                                     "Saint Kitts and Nevis",
#                                                     "Saint Lucia",
#                                                     "Saint Vincent and the Grenadines",
#                                                     "Samoa",
#                                                     "Sao Tome and Principe",
#                                                     "Saudi Arabia",
#                                                     "Senegal",
#                                                     "Serbia",
#                                                     "Seychelles",
#                                                     "Sierra Leone",
#                                                     "Singapore",
#                                                     "Slovak Republic (Slovakia)",
#                                                     "Slovenia",
#                                                     "Solomon Islands",
#                                                     "Somalia",
#                                                     "South Africa",
#                                                     "South Sudan",
#                                                     "Spain",
#                                                     "Sri Lanka",
#                                                     "Sudan",
#                                                     "Suriname",
#                                                     "Sweden",
#                                                     "Switzerland",
#                                                     "Syria",
#                                                     "Tajikistan",
#                                                     "Tanzania",
#                                                     "Thailand",
#                                                     "Timor Leste",
#                                                     "Togo",
#                                                     "Trinidad & Tobago",
#                                                     "Tunisia",
#                                                     "Turkey",
#                                                     "Turkmenistan",
#                                                     "Turks & Caicos Islands",
#                                                     "Uganda",
#                                                     "Ukraine",
#                                                     "United Arab Emirates",
#                                                     "United States of America (USA)",
#                                                     "Uruguay",
#                                                     "Uzbekistan",
#                                                     "Venezuela",
#                                                     "Vietnam",
#                                                     "Virgin Islands (UK)",
#                                                     "Virgin Islands (US)",
#                                                     "Yemen",
#                                                     "Zambia",
#                                                     "Zimbabwe"]
#     validates :launguage, presence: true, inclusion: ["Bahasa Indonesia",
#                                                     "Bahasa Malaysia",
#                                                     "Cestina",
#                                                     "Chinese ",
#                                                     "Dansk",
#                                                     "Deutch",
#                                                     "English (US)",
#                                                     "English (UK)",
#                                                     "English (India)",
#                                                     "English (Australia)",
#                                                     "Espanol (Americas)",
#                                                     "Espanol (Argentina)",
#                                                     "Espanol (Espana)",
#                                                     "Espanol (Mexico)",
#                                                     "Francais",
#                                                     "Italiano",
#                                                     "Japanese",
#                                                     "Korean",
#                                                     "Magyer",
#                                                     "Nederlands",
#                                                     "Norsk Bacmal",
#                                                     "Polski",
#                                                     "Portugues (Brasil)",
#                                                     "Portugues (Europeu)",
#                                                     "Romana ",
#                                                     "Slovencina",
#                                                     "Suomi",
#                                                     "Svenska",
#                                                     "Tagalog",
#                                                     "Tieng Viet",
#                                                     "Turkce"]
    
#     validates :gender, inclusion: ['Male', 'Female','Non-binary' ]

#     user1 = {email: "email@email.com", username: "user123", password: "password", country: "United States of America (USA)", language: "English (US)", gender: "Female"}
# window.dispatch(login(user))
#let user2 = {email: "user2@email.com", username: "user2", password: "password", country: "United States of America (USA)", language: "English (US)", gender: "Female"}
demouser = User.create!({email: "demouser@email.com", age: 25, username: "Demo User", password: "password123", country: "United States (US)", language: "English (US)", gender: "Female"}
)
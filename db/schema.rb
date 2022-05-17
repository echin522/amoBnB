# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_17_174916) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "address", null: false
    t.float "lat"
    t.float "lng"
    t.integer "max_guests", null: false
    t.integer "owner_id", null: false
    t.integer "price_per_night", null: false
    t.text "amenities"
    t.index ["address"], name: "index_listings_on_address", unique: true
    t.index ["owner_id"], name: "index_listings_on_owner_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.datetime "start_date", null: false
    t.datetime "end_date", null: false
    t.integer "num_guests", null: false
    t.integer "listing_id", null: false
    t.integer "user_id", null: false
    t.index ["listing_id"], name: "index_reservations_on_listing_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating", null: false
    t.text "body"
    t.integer "listing_id", null: false
    t.integer "user_id", null: false
    t.integer "reviewer_id", null: false
    t.index ["listing_id"], name: "index_reviews_on_listing_id"
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.text "about"
    t.string "location"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end

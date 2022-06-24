require 'faker'
require 'open-uri'

# Reset the database
User.destroy_all
Listing.destroy_all
Reservation.destroy_all
Review.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('listings')
ApplicationRecord.connection.reset_pk_sequence!('reservations')
ApplicationRecord.connection.reset_pk_sequence!('reviews')

# Plant our seeds
demo_user = User.create!(
    fname: "Demo",
    lname: "User",
    email: "demo@email.com",
    password: "asdf1234",
    about: "Thank you for coming to my website! I hope you enjoy your stay :)",
    location: "San Francisco"
)

amenities = [
    "Beach view","Sea view","Sunset view","Courtyard view","Kitchen","Air conditioning","Essential toiletries","Cleaning products","Hot water","Bed linens","Pillows","Closet","Washing machine","Dryer","Fireplace","Heating","Smoke alarm","Fire alarm","Fire extinguisher","Refrigerator","Microwave","Silverware","Oven","Stove","Coffee maker","Wine glasses","Blender","Free parking","Pets allowed","Wifi","TV"
]

these_amenities = []

test_listing = Listing.create!(
    title: "Big house",
    description: "Morbius is a fantasy-action film set in modern times, which is based off of Morbius, the Living Vampire made by Roy Thomas and Gil Kane from the Marvel Comics. The film was directed by Daniel Espinosa and had Jared Leto star as Dr. Micheal Morbius.123The film is about a successful doctor who has cured many diseases, except for the disease he and his friend Milo have. Fortunately, he has found a cure for the disease, with the drawback being that he turns into a vampire and needs to consume blood to survive.123For Morbius, this is a problem since he doesn’t want people to get hurt, however Milo sees it differently, and takes the cure to become a vampire. Because of this, the two of the friends soon become enemies. The film was very beautiful and there was a lot of impressive cinematography. The voice acting by all of the actors was perfect. My favourite part of the movie was when Morbius said “It’s Morbin’ time!”.",
    max_guests: 10,
    num_rooms: 4,
    num_beds: 6,
    num_baths: 3,
    price_per_night: 117,
    lat: 37.804, lng: -122.419651,
    amenities: these_amenities.push(amenities.shuffle!.pop),
    address: "404 0th Street",
    location: "San Francisco",
    owner_id: 1
)

demo_user.photo.attach(io: open("https://i.kym-cdn.com/photos/images/newsfeed/001/248/318/ae2.jpg"), filename: "demoProPic")

test_listing.photos.attach(io: open("https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_architecturaldigest.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1645135325/architecturaldigest_on-the-market-inside-a-23-dollars-million-mega-mansion-surrounded-by-a-lake.jpg"), filename: "testListingExterior")
test_listing.photos.attach(io: open("https://www.impressiveinteriordesign.com/wp-content/uploads/2019/08/Textural-Balance-Suite-Master.jpg"), filename: "testListingInterior")
test_listing.photos.attach(io: open("https://media.istockphoto.com/photos/contemporary-island-villa-picture-id154952872?k=20&m=154952872&s=612x612&w=0&h=u9cCS_5SxbVlU227abjUC9cyG0FrCFeM2BwfMYA62Fc="), filename: "testListingInterior3")
test_listing.photos.attach(io: open("https://i.imgur.com/HRxo7lY.jpg"), filename: "testListingInterior4")
test_listing.photos.attach(io: open("https://s.wsj.net/public/resources/images/BN-IG334_0507MR_M_20150505130415.jpg"), filename: "testListingInterior5")
test_listing.photos.attach(io: open("http://cdn.home-designing.com/wp-content/uploads/2018/03/Retractable-doors-1.jpg"), filename: "testListingInterior6")
test_listing.photos.attach(io: open("https://dailydesignews.com/wp-content/uploads/2021/03/4-8.jpg"), filename: "testListingInterior7")

num_users = 5
num_listings_per_city = 2 #30
num_reviews_per_listing = 6 #10
num_reservations_per_listing = 1 #5
today = Date.today

review_bodies = [
    "This home and it’s hosts have thought of everything that a high-expectation traveler could ever want. This place is cozy, chic, welcoming, romantic and the ideal get-away. We travelled with our two children, aged 9 and 11, and it comfortably hosted us all. We made s’mores, hikes volcano (only a three minute drive), enjoyed the hot tub, and relaxed completely. I only wish we could have stayed longer.",
    "Wonderful escape!",
    "Thanks, great stay! A little pricey per night but the spot was fantastic.",
    "Exactly what you would expect looking at the photos. Demo's place is outstanding. Just book it.",
    "I give this place a 5/7. A perfect score",
    "Sus",
    "Very nice! I like a lot!"
]

locations = {
    "San Francisco" => "CA",
    "Los Angeles" => "CA",
    "San Diego" => "CA",
    "New York" => "NY",
    "Seattle" => "WA",
    "Austin" => "TX",
    "Las Vegas" => "NV",
    "Tampa" => "FL",
    "Chicago" => "IL"
}

city_coords = {
    "San Francisco" => {:lat => (37.753001..37.805001), :lng =>(-122.447897..-122.391135)},
    "Los Angeles" => {:lat => (33.91635..33.93599), :lng => (-118.181554..-118.210061)},
    "San Diego" => {:lat => (32.63916..32.852512), :lng => (-117.246096..-116.9247)},
    "Seattle" => {:lat => (47.29385..47.8699), :lng => (-122.62334..-121.99999)},
    "Austin" => {:lat => (30.0984..30.5973), :lng => (-97.92339..-97.51296)},
    "Las Vegas" => {:lat => (36.0071..36.2849), :lng => (-115.293881..-115.073374)},
    "Tampa" => {:lat => (27.9123..28.05641), :lng => (-82.525..-82.35343)},
    "Chicago" => {:lat => (41.5923..41.9821), :lng => (-88.0225..-87.5023)},
    "New York" => {:lat => (40.61154..40.78739), :lng => (-74.030482..-73.78242)}
}

profile_pictures = [
    'https://i.kym-cdn.com/photos/images/facebook/000/848/178/9f9.png',
    'https://cdn.vox-cdn.com/thumbor/EgPEeyYA5jezoZI6t96t9MshGXk=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/10528279/Screen_Shot_2018_03_26_at_9.32.57_AM.png',
    'http://static.demilked.com/wp-content/uploads/2019/04/5cb6d34f775c2-stock-models-share-weirdest-stories-photo-use-102-5cb5c725bc378__700.jpg',
    'https://thumbs.dreamstime.com/b/portrait-young-african-american-business-woman-black-peop-people-51712509.jpg',
    'https://media.istockphoto.com/photos/happy-smiling-man-looking-away-picture-id1158245623?k=20&m=1158245623&s=612x612&w=0&h=rGmn02kNdoQySPEoQmbbDBxOayL4sdW3QWqP9rjgxCg=',
    'https://image.shutterstock.com/mosaic_250/2780032/1606121245/stock-photo-happy-young-indian-woman-blogger-applicant-teacher-sit-at-home-office-look-at-camera-doing-online-1606121245.jpg',
    'https://media.istockphoto.com/photos/portrait-of-a-successful-malay-muslim-man-picture-id1148380353?k=20&m=1148380353&s=612x612&w=0&h=svhVFjShpRc16s2_Nh5WpdkNFuU321jY2LiSBZYllAY=',
    'https://robertrosenthal.typepad.com/photos/uncategorized/ist_2.jpg',
    'https://st.depositphotos.com/1224365/2498/i/450/depositphotos_24980235-stock-photo-portrait-of-a-normal-man.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrO5dmObUx0dRh5ho5RuAlCF0RYGkFApUrA0uquFuVU5j3d9RS7FG7BnE5IZx4z9Wp_c&usqp=CAU',
    'https://media.istockphoto.com/photos/mature-businessman-smiling-over-white-background-picture-id685132245?k=20&m=685132245&s=612x612&w=0&h=oKxgMF_dOhoGJtd_YxhbmpK4qFvcl-0s0NFmxuh7IKA=',
    'https://image.shutterstock.com/mosaic_250/101595/1123160147/stock-photo-portrait-of-beautiful-african-american-woman-smiling-and-looking-away-at-park-during-sunset-1123160147.jpg',
    'https://www.stockphotosecrets.com/wp-content/uploads/2018/11/dreamstime2.jpg',
    'https://images.pexels.com/photos/8035299/pexels-photo-8035299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=20&m=1009749608&s=612x612&w=0&h=3bnVp0Y1625uKkSwnp7Uh2_y_prWbgRBH6a_6jRew3g=',
    'https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://www.freedigitalphotos.net/images/category-images/397.jpg',
    'https://media.istockphoto.com/photos/productivity-powered-by-digital-technology-picture-id1330965067?b=1&k=20&m=1330965067&s=170667a&w=0&h=ys_MV3zYkn2HJCtHC4s_03Sz1MUC2BZv6PcDdk__XSc=',
    'https://media.gettyimages.com/photos/smiling-african-american-woman-wearing-glasses-and-wireless-earphones-picture-id1287492741?s=612x612',
    'https://static.wikia.nocookie.net/141d1a9b-2dcc-41c1-8328-eb79c7c5ffa6',
    'https://image1.masterfile.com/getImage/NjQwLTAzMjYyNTIyZW4uMDAwMDAwMDA=AMitEr/640-03262522en_Masterfile.jpg',
    'https://static9.depositphotos.com/1005893/1189/i/600/depositphotos_11897391-stock-photo-thumb-up-southeast-asian-man.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3PUktMckoXSEItSMbNDaFNZwiMJ0w00KAdMMo1dfzy3VcdbzbvSmQmdsdwcpJ1JOI2c&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dyxfpnYfFjyeg1YvjJiaeaY-m0Uh92kAcp1yiEUErg2cGZb8-uwsJCaULcmbQb6eulc&usqp=CAU',
    'https://image.shutterstock.com/mosaic_250/2939305/1545395876/stock-photo-teenager-asian-woman-feeling-happy-smiling-and-looking-to-camera-while-relax-in-living-room-at-home-1545395876.jpg',
    'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1632812918000/photosp/7fc519d0-430f-47bc-9e91-00c0b5f90f7f/stock-photo-outdoors-portrait-one-person-smiling-chinese-real-people-asian-man-asian-people-real-portraits-7fc519d0-430f-47bc-9e91-00c0b5f90f7f.jpg',
    'https://media.istockphoto.com/photos/japanese-woman-outdoors-in-the-city-picture-id922663578?k=20&m=922663578&s=612x612&w=0&h=u6o8tcRQWAmUDksW-6SiZvV3NWB3vHAWbQrGNuGX1ws=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN1YCzmeJ-c2hPwZV4vOwWT5nG53M9wfa3uqhQOErByZJzJFHSmjvBuVY-85C7Zss5xF8&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXiu2KQpy8Nn3MRBfZesJkq1NpFpa8RlQPw&usqp=CAU',
    'https://www.creativeboom.com/uploads/articles/07/076a72cc349f89bdb32276285a07e2a2d99d51e1_810.jpeg',
    'https://images.stockfreeimages.com/858/sfi226w/8585833.jpg',
    'https://static.wikia.nocookie.net/twitch_gamepedia/images/1/1a/Imaqtpie.PNG/revision/latest/scale-to-width-down/1200?cb=20150520213424'
]

listing_exterior_images = [
    'http://cdn.home-designing.com/wp-content/uploads/2017/05/wood-white-and-charcoal-modern-exterior-paint-themes.jpg',
    'https://www.homestratosphere.com/wp-content/uploads/2017/12/blue-house-exterior-dec21.jpg',
    'https://www.jameshardie.com/JamesHardieNorthAmerica/media/BlogPost/2021-design-trends/exterior-design-and-home-color-trends-for-2021.jpg',
    'https://i.pinimg.com/originals/82/61/7a/82617ab59bb7bcc43e05335e2235476a.jpg',
    'https://www.thespruce.com/thmb/KTNQ8vamKvpvTJD6M45OS1bQWWg=/1500x844/smart/filters:no_upscale()/best-exterior-house-colors-3990375-hero-d3c123ce71ec4e0d9161b2ca6b2f14e3.jpg',
    'https://cdn.houseplansservices.com/content/98tbl8e736nqpe5k89c3urpdms/w991x660.jpg?v=10',
    'https://cdn.vox-cdn.com/thumbor/myGshFoucO0CQjZQVgOufIVveA0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21849222/iStock_1223022367.jpg',
    'https://empire-s3-production.bobvila.com/slides/18126/original/best_exterior_paint_colors_wheat.jpg?1600126241',
    'https://www.houselogic.com/wp-content/uploads/2011/08/exterior-house-colors-hello-kitty_17d1b2fc2a10209bfd51976639334d6d-1.jpg?crop&resize=960%2C540',
    'https://sebringdesignbuild.com/wp-content/uploads/2020/06/modern-contemporary-house-ideas-exteriors-sebring-design-build-0-1024x481.png',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/analisse-taft-house-exterior-1587586144.jpg',
    'https://www.homebunch.com/wp-content/uploads/2020/09/interior-design-ideas-gra171103c_323.jpg',
    'https://www.homestratosphere.com/wp-content/uploads/2020/06/black-house-july062020-min.jpg',
    'https://images.squarespace-cdn.com/content/v1/5e691825dc255b04972c472d/1586303763491-T151FVLTDHEMCXNQ2WVJ/Country%2BClub%2BExterior.jpeg',
    'https://www.nichiha.com/uploads/7-Modern-Homes-Using-Wall-Paneling-Right/Nichiha-ArchitecturalBlock-Modern.jpg?t=1629137943',
    'https://i.ytimg.com/vi/EzWUlzr6koM/maxresdefault.jpg',
    'https://www.sunset.com/wp-content/uploads/4_3_horizontal_inbody_900x506/exteriors-contemporary-craftsman-sun-60787-1118.jpg',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2UlMjBleHRlcmlvcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://tillydesign.com/blog/wp-content/uploads/2021/08/26868-Paint-FR-scaled-1-1024x760.jpg',
    'https://cdn.decoist.com/wp-content/uploads/2021/06/Modular-black-house-with-balcony-49706.jpg',
    'https://res.cloudinary.com/brickandbatten/images/w_2560,h_1370/v1640973465/wordpress_assets/53642-Anonymous-A/53642-Anonymous-A.jpg?_i=AA',
    'https://d1gcvgm4klzto4.cloudfront.net/web/general-images/banners/new_thumbnail.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=630&q=100&w=1200&s=cb693c063724402cb30b556d77fbc862'
]

listing_interior_images = [
    'https://media.architecturaldigest.com/photos/571e97c5741fcddb16b559c9/2:1/w_5127,h_2563,c_limit/modernist-decor-inspiration-01.jpg',
    'https://media.istockphoto.com/photos/beautiful-living-room-interior-with-hardwood-floors-and-and-view-of-picture-id1208205959?k=20&m=1208205959&s=612x612&w=0&h=bd4L_M7u2hPksL11njclcxgMWezFgSnKW1gBs9K-Xn0=',
    'https://www.decorilla.com/online-decorating/wp-content/uploads/2020/07/Coastal-house-interior-design.jpg',
    'https://media-exp1.licdn.com/dms/image/C4E1BAQGzjeqz5bcWtg/company-background_10000/0/1600902984865?e=2147483647&v=beta&t=FTJlBjCSWDBVcYEbojJ58xmsSM4RV-jUPCRVrYPAfxI',
    'https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg',
    'https://media.architecturaldigest.com/photos/571e97ce818277135ff91620/master/w_2626,h_1821,c_limit/modernist-decor-inspiration-07.jpg',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    'https://i.ytimg.com/vi/EkpYgepycN4/maxresdefault.jpg',
    'https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2012/5/30/0/Original-colonial-den_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1405413131585.jpeg',
    'https://cdn.vox-cdn.com/thumbor/teCEQIxlj9RbCj6P_vlwMopAptQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11545893/House_Calls_Brooklyn_Zames_Williams_living_room_2_Matthew_Williams.jpg',
    'http://cdn.home-designing.com/wp-content/uploads/2017/07/beige-sofa.jpg',
    'https://media.houseandgarden.co.uk/photos/626906af7d715a587e7533db/16:9/w_1600%2Cc_limit/Alice%2520Palmer-9700FINAL.jpg',
    'http://cdn.home-designing.com/wp-content/uploads/2020/12/green-accent-chair.jpg',
    'https://as2.ftcdn.net/v2/jpg/02/61/89/29/1000_F_261892957_6jyBXvEgM79iYr1eEiJKCosnVPJdvHHr.jpg',
    'https://cayugaent.com/wp-content/uploads/2015/10/house-interior.jpg',
    'https://carlislehomes.com.au/assets/Uploads/8b2be161ec/Modern-Mediterranean.jpg',
    'https://foyr.com/learn/wp-content/uploads/2021/03/home-design-apps.png',
    'https://ellecordesign.com/wp-content/uploads/2020/03/house-on-the-hill-13.jpg',
    'https://cdnassets.hw.net/ab/75/a4bc752f41f288d3e45c29454cdb/9b03a91b55f5408980862881d9255102.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBG0Tub40ylM-aE1oyte7lpawPvi_SfWkkGw&usqp=CAU',
    'https://s3images.coroflot.com/user_files/individual_files/large_444208_m_hlsgxamutawrmhlrpqu2omb.jpg',
    'http://twhinteriors.com/wp-content/uploads/2020/02/TWHI-Store-PhotosFeb20-scaled.jpg',
    'https://media.istockphoto.com/photos/modern-luxury-home-interior-picture-id1311356176?b=1&k=20&m=1311356176&s=170667a&w=0&h=qBWA2Tf3PzXV8MlClXYYGzZV1kelXzI2EDc41mInMo0=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS205umBCuDb-Ae58EU1Y7flj1S9PRKjQ4a6A&usqp=CAU',
    'https://archiadvisor.com/wp-content/uploads/2019/02/interior-layout.jpg',
    'https://archello.s3.eu-central-1.amazonaws.com/images/2019/09/06/1-Modern-Luxury-House-Interior-Design.1567798821.779.jpg',
    'https://images.adsttc.com/media/images/5ebf/0d12/b357/658b/d400/032f/large_jpg/FEATURE.jpg?1589578984',
    'https://www.decorilla.com/online-decorating/wp-content/uploads/2020/07/Eclectic-house-interior-design-ideas.jpg',
    'https://i.pinimg.com/736x/8f/f7/aa/8ff7aa135210b48853b421df2eb35d31.jpg',
    'https://www.yankodesign.com/images/design_news/2020/06/all-black-interior-designs-that-will-inspire-you-to-adapt-this-modern-minimal-trend/01-Black-Interior-Design-Inspiration_yankodesign3.jpg',
    'https://media.istockphoto.com/photos/scandinavian-concept-of-living-room-interior-with-design-sofa-coffee-picture-id1251694108?k=20&m=1251694108&s=612x612&w=0&h=8zH7jqtg_QgLMJMxUq3uBpA7l47LUht32_xT4RHn1EI=',
    'https://static.turbosquid.com/Preview/2019/05/22__07_49_56/Mekan____0000.jpg7D6A7251-8E11-429D-85F3-9452813F286DLarge.jpg',
    'http://88designbox.com/upload/2016/01/26/3-story-house.jpg',
    'https://www.mymove.com/wp-content/uploads/2020/07/GettyImages-523468730.jpg',
    'https://i.ytimg.com/vi/y7_Spedf2BI/maxresdefault.jpg',
    'https://media.angi.com/s3fs-public/room-with-painted-trim.jpg?impolicy=leadImage',
    'https://www.wow1day.com/sites/default/files/national-blog/W1D_BlogPosts_760x560_interior5.png',
    'http://cdn.home-designing.com/wp-content/uploads/2018/11/Rustic-modern-living-room.jpg',
    'https://interiordesign.net/wp-content/uploads/2022/03/Interior-Design-Andrea-Rodman-Interiors-Victoria-British-Columbia-1.-AndreaRodman_OakBay-_1442-EDITED.jpg',
    'https://www.extraspace.com/blog/wp-content/uploads/2019/11/plant-decor-design-tiny-homes.jpg',
    'https://www.impressiveinteriordesign.com/wp-content/uploads/2018/05/Parkwood-Road-Residence-Living-Room-by-Martha-OHara-Interiors.jpg',
    'https://static.dezeen.com/uploads/2021/01/highgate-house-house-of-grey-interior_dezeen_2364_col_5-scaled.jpg',
    'https://labamsrl.com/wp-content/uploads/2018/08/modern-interior-design-houses-small-cottage-plan-designs-cabin-ranch-house-interior-design-ranch-house-interior-design-boulder-co.jpg',
    'https://archello.s3.eu-central-1.amazonaws.com/images/2018/03/31/American-style-house-interior-design-in-Dammam-2.1522524114.1883.jpg',
    'https://en.pimg.jp/057/134/965/1/57134965.jp',
    'https://www.decorilla.com/online-decorating/wp-content/uploads/2020/07/Beach-house-interior-design-style-for-a-bedroom.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYOoAJSTfqyUXSpHaIbKJ5OEtHrS0lkpTEg&usqp=CAU',
    'https://st.focusedcollection.com/16485780/i/650/focused_199365374-stock-photo-interior-living-room-modern-house.jpg',
    'https://comoorganizarlacasa.com/en/wp-content/uploads/2017/07/interior-decoration-modern-houses-16-1280x720.jpg',
    'https://www.whistles.com/on/demandware.static/-/Library-Sites-WHSharedLibrary/default/dw3e66f246/images/inspiration/Klein-House-The-Modern-House-2-1440x960.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaxx_ZO4QIfZL6hxwOMxG1iNVcRUVUtQJcA&usqp=CAU',
    'https://www.futuristarchitecture.com/wp-content/uploads/2018/11/Gentle-House-5.jpg',
    'https://static.planetminecraft.com/files/image/minecraft/project/2020/471/12699542-c-fd-b-a-e_l.webp',
    'https://mir-s3-cdn-cf.behance.net/project_modules/fs/89508e103978163.5f58e50124e3f.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKRU19aP8_plNpoaCplPCSS47emgwxT_Xkl9e1janbLUfUt7b1SyfW9YiytHd0U8O9ro&usqp=CAU',
    'https://amazingarchitecture.com/storage/files/1/Architecture%20firms/Kireeva%20Anna/Black%20house%20in%20the%20woods/Black-house-in-the-woods-Kireeva-Anna-USA-005.jpg',
    'https://amazingarchitecture.com/storage/files/1/Architecture%20firms/Kireeva%20Anna/Black%20house%20in%20the%20woods/Black-house-in-the-woods-Kireeva-Anna-USA-020.jpg',
    'https://www.pinoyhouseplans.com/wp-content/uploads/2017/09/staircase-design.jpg',
    'https://hommes.studio/wp-content/uploads/2022/01/teletubby-style-modern-house-hidden-in-the-landscape-7.jpg',
    'https://cgifurniture.com/wp-content/uploads/2020/12/modern-interior-design-6-styles-View04.jpg',
    'https://worldofarchi.com/wp-content/uploads/2022/01/Modern_Interior_Design_For_Small_Homes-D58_House_on_world_of_architecture_02-3427348.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQLqy09PgWnQiw4XzAHjevFgjyUz26k5jnwQ&usqp=CAU',
    'https://as1.ftcdn.net/v2/jpg/00/57/52/40/1000_F_57524039_SQ32pfkPaVFmrrSbS33HlHSv3FrODV1W.jpg',
    'https://cdn.decoratorist.com/wp-content/uploads/modern-futuristic-dark-bar-interior-design-353402.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy97IjnrF7EVhDw0COXJJEl16tCGB3M93SGA&usqp=CAU',
    'https://artfasad.com/wp-content/uploads/2021/01/white-modern-house-interior-23-991x1000.jpg',
    'https://www.lushome.com/wp-content/uploads/2013/06/modern-interior-design-glass-walls-contemporary-decor-1.jpg',
    'https://cdn.vox-cdn.com/thumbor/jbZIg3pLxSX5Ou-WeCKtzBDdUZM=/0x0:6886x4596/1200x0/filters:focal(0x0:6886x4596):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19864899/Flint_The_Modern_House__7_.jpg',
    'https://www.tollbrothers.com/blog/wp-content/uploads/2020/06/6-Viewpoint-Keystone_Great-Room-from-Kitchen.jpg',
    'https://www.architectureartdesigns.com/wp-content/uploads/2013/09/94-630x419.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXoSS5i1p3pznBeSZd_HxR01ULtgJYyTyWcg&usqp=CAU',
    'https://www.interiorzine.com/wp-content/uploads/2012/08/elegant-modern-interior-living-room.jpg',
    'https://comoorganizarlacasa.com/en/wp-content/uploads/2017/07/interior-decoration-modern-houses-9.jpg',
    'https://4.bp.blogspot.com/-ogQ7YCG_HQ8/UU6uiIo_QRI/AAAAAAAAA7M/Y9eM_mR_xOU/s1600/Modern-Interior-Design-Ideas.jpg',
    'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/3/2021/10/28081848/modern-house-cover.png',
    'https://www.digsdigs.com/photos/really-modern-pool-house-2-554x371.jpg',
    'https://www.extraspace.com/blog/wp-content/uploads/2021/09/modern-home-features-popular.jpg',
    'https://roohome.com/wp-content/uploads/2016/08/contemporary-two-storey-house-design-1280x720.jpg',
    'https://i.ytimg.com/vi/YUzm5rxwbM4/hqdefault.jpg',
    'https://media.architecturaldigest.com/photos/5eb9a47a56ef867fb13cb69e/master/w_2000,h_1333,c_limit/5%20T3_055.jpg',
    'http://cdn.home-designing.com/wp-content/uploads/2021/10/pink-sofa.jpg',
    'https://i.pinimg.com/originals/aa/57/cd/aa57cd1ea66596f4674388a038380355.jpg',
    'http://cdn.home-designing.com/wp-content/uploads/2013/09/sunken-patio.jpeg',
    'http://cdn.home-designing.com/wp-content/uploads/2012/12/open-plan-living-area.jpg',
    'https://tricitypropertysearches.com/wp-content/uploads/2022/03/Japanese-Interior-Design-Style-Featured-Image.jpg',
    'https://lifestyleasia.com/sg/wp-content/uploads/2019/12/lookboxliving-806x517.jpg',
    'https://preview.redd.it/d2xz96j0pp311.jpg?auto=webp&s=53af779a3aaac2393b0b2d905906039615d22d91',
    'https://foyr.com/learn/wp-content/uploads/2018/10/interior-design-1682392_960_720-1.jpg',
    'https://res.cloudinary.com/larq/w_936,h_1310,c_fit/auto-mapping-folder/2021/03/Cross-Stitch-House_FMD-Architects_dezeen_936_6.jpeg',
    'https://www.mymove.com/wp-content/uploads/2020/07/AdobeStock_147640718.jpg',
    'https://i.ytimg.com/vi/sSh9JdJhjCY/maxresdefault.jpg',
    'http://cdn.home-designing.com/wp-content/uploads/2012/12/city-living-room.jpg',
    'https://i.pinimg.com/originals/09/50/c4/0950c4705635d36b951168460eec1113.jpg',
    'https://www.digsdigs.com/photos/2016/10/04-modern-small-living-room-with-an-extensive-use-of-light-wood-and-cream-walls.jpg',
    'https://www.contemporist.com/wp-content/uploads/2020/10/modern-grey-wood-interior-design-161020-1233-01.jpg',
    'https://i.ytimg.com/vi/jTGxxD3XNDs/maxresdefault.jpg',
    'https://cdn.decoist.com/wp-content/uploads/2017/11/Living-room-of-the-Japanese-home-connected-with-the-wooden-deck-outside.jpg',
    'https://www.scullyandscully.com/blog/wp-content/uploads/2020/03/roomideasnet.png',
    'https://www.homebunch.com/wp-content/uploads/2020/12/interior-design-ideas-Classic-interior-design.jpg',
    'https://i.pinimg.com/originals/36/4c/c2/364cc2f934dd4c5f57aa17469f5b708b.jpg',
    'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2007/12/17/1/hdivd-1109-after-living.jpg.rend.hgtvcom.1280.960.suffix/1400942543326.jpeg',
    'https://www.impressiveinteriordesign.com/wp-content/uploads/2016/08/Modern-European-Style-And-European-Interior-Design4.jpg',
    'https://i.pinimg.com/736x/b3/59/1f/b3591fd3bf5192b52746bb3467a7457d.jpg',
    'https://www.impressiveinteriordesign.com/wp-content/uploads/2016/08/Modern-European-Style-And-European-Interior-Design2.jpg',
    'https://somuchbetterwithage.com/wp-content/uploads/2021/05/vogue-marie-flanigan-2-700x1050.jpeg',
    'https://www.homebunch.com/wp-content/uploads/2020/12/interior-design-ideas-Benjamin-Moore-popular-paint-color.jpg',
    'https://i.ytimg.com/vi/rqUk-x06_HY/hqdefault.jpg',
    'https://www.hellolovelystudio.com/wp-content/uploads/2020/06/004-fixer-upper-tudor-cottage-kitchen-breakfast-nook-hgtv-joanna-gaines.jpg',
    'https://i.pinimg.com/originals/b2/62/1d/b2621d2c73de5ccbe26e01e54da3c10a.jpg',
    'https://www.impressiveinteriordesign.com/wp-content/uploads/2016/08/Modern-European-Style-And-European-Interior-Design5.jpg',
    'https://bhgrelife.beta.cyberitas.com/bhgrelife/wp-content/uploads/2016/01/CountryFrench_featuredimage.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrwLD2n98kwocRP9w7chDvoArITFJ-YViPw&usqp=CAU',
    'https://www.homebunch.com/wp-content/uploads/2020/12/interior-design-ideas-Benjamin-Moore-liivng-room-paint-color.jpg',
    'https://i.imgur.com/mtDkNct.jpg',
    'https://i.pinimg.com/236x/6b/c6/0d/6bc60da6cadf34bbd38ecc13e572db26--farmhouse-living-rooms-country-living-rooms.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAt4VkknRu4uF2hI-z6D14UmSaxFLBzSguqg&usqp=CAU',
    'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2011/2/25/0/DP_Thomas-Oppelt-old-world-master-retreat-with-chandelier-fireplace_s4s3.jpg.rend.hgtvcom.966.725.suffix/1400961682821.jpeg',
    'https://st.hzcdn.com/simgs/d151fd750baf32e6_4-8493/home-design.jpg',
    'https://weandthecolor.com/wp-content/uploads/2019/12/Interior-Design-Around-Europe-Image-by-Scandinavian-Homes.jpg',
    'https://media.remodelista.com/wp-content/uploads/2016/06/Ellen-Hamilton-Spring-Hill-2-Remodelista.jpg',
    'https://s30965.pcdn.co/blogs/the-study/wp-content/uploads/contemporary-living-room-paris-france-by-isabelle-stanislas-architecture-2.jpg',
    'https://www.hellolovelystudio.com/wp-content/uploads/2020/06/001-eleanor-cummings-modern-french-farmhouse-living-room-round-top-milieu.jpg',
    'https://somuchbetterwithage.com/wp-content/uploads/2021/05/paige-kontrafouris-interiors2.jpeg',
    'https://st.hzcdn.com/simgs/88011ede00a35ab1_4-8450/contemporary.jpg',
    'https://www.impressiveinteriordesign.com/wp-content/uploads/2016/08/Modern-European-Style-And-European-Interior-Design13.jpg',
    'https://cdn.onekindesign.com/wp-content/uploads/2019/09/European-Cottage-Style-Home-JCD-Custom-Home-Design-16-1-Kindesign.jpg',
    'https://europeword.com/wp-content/uploads/2021/02/fe96e9bde68f3ab35b25f881b1cb7a89.jpg',
    'https://uploads-ssl.webflow.com/5894a32730554b620f7bf36d/5fa13aaef9f406482ab1de11_Interior-Design-Differences-Between-Europe-and-the-United-States.jpg',
    'https://freedesignfile.com/upload/2018/11/Modern-European-interior-design-Stock-Photo-06.jpg',
    'https://bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2021/03/06_800.jpg',
    'https://s30965.pcdn.co/blogs/the-study/wp-content/uploads/hubert_living_4.jpg',
    'https://www.impressiveinteriordesign.com/wp-content/uploads/2016/08/Modern-European-Style-And-European-Interior-Design7.jpg',
    'https://previews.123rf.com/images/zstockphotos/zstockphotos1706/zstockphotos170600181/81557144-empty-freshly-renovated-old-style-european-home-interior.jpg',
    'https://i.pinimg.com/736x/84/25/80/842580136814df12f3e9038cbd8bfe68.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVElR5TNYBLlQ13Qg7zFBcvhSL0jzOMkonw&usqp=CAU',
    'https://christinamariablog.com/wp-content/uploads/2021/03/mg-0595_3b1c326e-768x1024.jpeg',
    'https://www.europeanhome.com/wp-content/uploads/2018/05/Lookbooks_4-e1527620603696-1360x670.jpg',
    'https://i.pinimg.com/564x/9a/6d/95/9a6d95e07eccb05d5d41b749fd834b2a.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-9kUjIqwwDL1nXerf1AA_tqw_YnmyvrefA&usqp=CAU',
    'https://www.pufikhomes.com/wp-content/uploads/2017/09/family-home-with-athmosphere-of-old-Europe-pufikhomes-4.jpg'
]

house_descriptions = [
    "Make memories with family and friends with the pine forests and clear waters of Lake Tahoe as a backdrop at Villa De Lago. This expansive waterfront vacation rental, whose name means “the lake house,” gives you the quintessential experience: a private dock for dipping your feet, a bouldered shoreline to explore and a quiet location near South Lake Tahoe, north of Cave Rock, Nevada.123
    Whether you want to relax by the water or get out and explore the lake, Villa De Lago makes it easy with a convenient dock, provided kayaks, and a furnished terrace with space for lounging and dining, plus a barbecue. After the sun sets over the mountains on the other side of the lake, gather around the pool table, flip on the streaming TV or share holiday photos via Wi-Fi.123
    The villa’s incredible great room puts a modern spin on the classic California mountain lodge. Vaulted ceilings soar over the open-concept living room, dining room and fully equipped kitchen. Floor-to-ceiling windows overlooking the lake steal focus during the day; at night, the double-height fireplace becomes the focal point.123
    While Villa De Lago has its own access to the lake, it’s also easy to drive to nearby sights, shopping, dining and more. The villa is a 10-minute drive to the waterfront village of Zephyr Cove, and a 10-minute drive or less to both Zephyr Cove and Nevada beaches. In the summer, golfers will find three courses within 16 miles; in the winter, plan to spend your stay skiing at one of several nearby resorts.",
    "With walls of windows that soar above the lake, this light-filled villa looks like it's floating on water. Wander from the full cinema, wet bar, and pool table to a deluxe spa with a sauna, hot tub, salt room, and even a nail and hair salon. A large terrace lead to a pool, sandy beach and private pier, and the balconies seem endless. You're just minutes from Zephyr Cove Beach and Edgewood Tahoe Golf Course.",
    "A private pier, swim platform, and fire pit fill 200 feet of lake frontage at this secluded villa built in the mold of a classic Old Tahoe manor. Awake to panoramic lake and mountain views from a round room atop a tower, then play shuffleboard in the games room or billiards in the library. You're just steps from a plunge in the water, 10 minutes to Tahoe City, and 15 to multiple ski resorts.",
    "Gorgeous luxury smart cabin complete with gourmet kitchen, extremely large outdoor deck, paved driveway and hot tub.123
    Gas fireplace, mini bar, surround sound, beautiful furnishings, and perks of the lake make this cabin a true Tahoe gem! Upstairs bedroom with queen bed, pull out sofa bed and pull out twin bed in the loft.123
    Please note NO PETS and NO SMOKING",
    "Beautiful 3 bedroom lake home with amazing views of the lake year around. Central location with close by access to several ski resorts, public beaches, hiking/walking trails, shopping, dining and water sports.123
    The space123
    Nicely appointed living spaces with fully stocked kitchen, K-cup or ground style pot coffee maker, BBQ grill as well out outdoor dining and lounge area. Enjoy views of the lake from nearly all areas inside as well as outside. Enjoy some quiet time while lounging in a cozy hillside hammock or Adirondack seating scattered up the hillside.123
    Excellent wifi thru Spectrum with 200 mbps makes it easy to work if you need to while on your getaway.123
    Guest access123
    Full home, please do not attempt to enter local private HOA pier.",
    "Unique Property situated in a very private location at the end of one of the only points on the Lake in the vibrant town of Lakeport.123
    The home provides every amenity that you would have in your own home including a private Hot Tub and dock",
    "RIVERFRONT dog friendly 1.5 acre oasis on the Russian River. The property is private, lush, serene & sunny. The backyard is a quarter mile long stretch of beach. The house is modern yet rustic and is said to be magical. It has gorgeous river/redwood/bridge views, decks, boats, spa, fireplace, serious kitchen, fruit trees, grapevines & wildlife. Centrally located between Healdsburg, Sebastopol & the Coast. There are fantastic wineries and redwoods minutes away. 4 beaches & a park are steps away.",
    "Need to unplug? Burned out? Crave quiet and beauty? Summerset is the cure. Lakehouse on private 3 acres. Exquisite top of the world panoramic water views, magical Mt. Konocti, epic sunsets and stars. 2B 2Bath, open great room, stocked kitchen. Designed for rest and recharging the soul. Do absolutely nothing...or visit wineries, yoga on the deck, (mats provided) fish, hike, bike and boat. Enhanced cleaning, peaceful surroundings for sound sleeping. Park the car and your cell. Time to reboot.123
    The space123
    Summerset sits on a plateau above and overlooking water and the mountain purposely isolated from neighbors. Your companions are birds, water, fresh air breezes and stars.123
    The expansive sundeck and garden provide a second living area complete with comfy furniture for lazy days.123
    The courtyard is the backdrop for BBQ dining.123
    Magnificent outdoor views are enjoyed inside through walls of glass and french doors in every room. Simple, clean, biophilic design, modern farmhouse decor, art filled with creative touches, central air and heat in case open windows and a fireplace isn't enough.123
    A fully stocked kitchen including all appliances, spices and oils, BBQ tools and coal, linens galore, movies, books, games, telescope, fishing rods, picnic basket, beach towels, sundries, extra toiletries and more.123
    Enhanced cleaning and disinfecting before and after each guest is standard procedure. The 2 bedrooms, each with your own private bathroom, have queen beds.123
    Fifteen minutes away, you'll find a boat launch, fishing pier, gas pump and the nearest town for shopping.123
    The focus is on you, family and friends and yes, one well behaved pet is allowed with a pet fee of 65.00 for the stay. Waste baggies and food bowls provided.123
    Summerset is meant to bring together the people you care about to reconnect and create happy lasting memories in your own private natural setting.123
    Guest access123
    The entire main house and its grounds are yours to roam. The garage and caretaker's cottage are locked off for private use.123
    Although I continue to add amenities or refresh the art filled decor, I purposely keep Summerset slow, calm, and restful. A place to unplug from technology and recharge the soul.123
    Picnic on the hill, lunch in the courtyard, nap in the middle of the day, sip wine on the deck at sunset.123
    No matter which direction you decide to travel, the road to Summerset is paved, winding and scenic with a short dirt road to the main gate.",
    "MAXIMUM OCCUPANCY LIMIT IS FIRM.123
    Sleeps up to 10 in beds.123
    Maximum occupancy 10, which includes children & infants of any age.123
    AGE RESTRICTION IS FIRM.123
    Due to local laws or HOA requirements, guests must be at least 25 years of age at the time of booking.123
    Guests under 25 must be accompanied by a parent or legal guardian for the duration of the reservation.123
    A copy of your drivers license will be required within 24 hours of booking.123
    PONTOON BOAT IN THE PHOTOS:123
    The pontoon boat is not available for guest use.123
    HOT TUB IN THE PHOTOS:123
    The hot tub is not available for Summer 2022.123
    NO SHOES INSIDE THE HOME PLEASE:123
    Please remove shoes inside the house at all times.",
    "Experience Frank Lloyd Wright's modern architecture in this grand mansion overlooking the hills of Sonoma. With a lighted, scalloped roof, multicolored tile work, and a cascading pool fountain, entering “Iconia” is like stepping into the 1960’s.123
    Amenities include: brand new furnishings, gas-heated saltwater pool, 100 palm trees, 9 bedrooms, large chef's kitchen, 7 desks, gigabit internet with enterprise wifi, 120 inch 4K projector, dining room for 18, 2 gas fireplaces, and playroom with 65 inch 4K TV.",
    "Welcome to the Tumbleweed Room of our boutique hotel, located right in the heart of Sedona! This one of a kind room features cozy touches, unbeatable Red Rock views, and classic Southwest-themes throughout. When you're here, you'll experience Sedona like you never have before. Join us for a romantic weekend getaway or use our space as a relaxing stop during your travels.123
    Our common areas include the best amenities around, such as our large firepit for nighttime relaxation, our pebble-textured hot tub for unwinding after a long day, or our large patio for a scenic cup of coffee in the morning.",
    "Contemporary farmhouse chic - the Peacock Room is an airy and bright getaway. Enjoy your own private bedroom with a private entryway and parking as well as a stunning bathroom. Self- check in.123
    We maintain clean and sterilized environments for our guests, using current industry standards for sterilizing hard surfaces, appliances and guest areas.123
    We are a licensed short term rental."123
]

# Create a bunch of random users
num_users.times do
    rand_user = User.create!({
        fname: Faker::Name.unique.first_name,
        lname: Faker::Name.unique.last_name,
        email: Faker::Internet.unique.email,
        password: "password",
        about: Faker::Games::LeagueOfLegends.quote
    })
    # rand_user.photo.attach(io: open(profile_pictures.pop()), filename: "#{rand_user.fname + rand_user.lname}ProPic")
end


review_bodies.each do |review|
    cleanliness_rating = rand(4..5)
    check_in_rating = rand(3..5)
    location_rating = rand(4..5)
    communication_rating = rand(4..5)
    accuracy_rating = rand(4..5)
    value_rating = rand(3..5)
    rating = (cleanliness_rating + check_in_rating + location_rating + communication_rating + accuracy_rating + value_rating) / 6.0
    Review.create!(
        body: review,
        listing_id: 1,
        reviewer_id: rand(2...num_users),
        cleanliness_rating: cleanliness_rating,
        check_in_rating: check_in_rating,
        location_rating: location_rating,
        communication_rating: communication_rating,
        accuracy_rating: accuracy_rating,
        value_rating: value_rating,
        rating: rating
    )
end

5.times do |i|
    start_date = (rand(1..23) + (i * 30))
    end_date = start_date + rand(1..7)
    Reservation.create!(
        start_date: today - start_date,
        end_date: today - end_date,
        num_guests: rand(1..10),
        listing_id: rand(2..(num_listings_per_city * locations.length()),
        user_id: 1
    )
end

# Create random listings
locations.each_key do |city|
    num_listings_per_city.times do
        amenities = [
            "Beach view","Sea view","Sunset view","Courtyard view","Kitchen","Air conditioning","Essential toiletries","Cleaning products","Hot water","Bed linens","Pillows","Closet","Washing machine","Dryer","Fireplace","Heating","Smoke alarm","Fire alarm","Fire extinguisher","Refrigerator","Microwave","Silverware","Oven","Stove","Coffee maker","Wine glasses","Blender","Free parking","Pets allowed","Wifi","TV"
        ]
        guests = rand(1..15)
        beds = rand(1..guests)
        rooms = rand(1..beds)
        baths = rand(1..rooms)
        description = []
        these_amenities = []

        rand(1..5).times do 
            description.push(house_descriptions.sample())
        end

        8.times do
            these_amenities.push(amenities.shuffle!.pop)
        end

        curr_listing = Listing.create!(
            title: "#{Faker::Space.meteorite} #{Faker::Space.star_cluster}",
            description: description.join(""),
            address: "#{Faker::Address.street_address}, #{city}, #{locations[city]}, #{Faker::Address.zip}",
            lat: rand(city_coords[city][:lat]),
            lng: rand(city_coords[city][:lng]),
            amenities: these_amenities.join(","),
            max_guests: guests,
            num_rooms: rooms,
            num_beds: beds,
            num_baths: baths,
            owner_id: rand(2..num_users),
            price_per_night: rand(50..500),
            location: city
        )

        curr_listing.photos.attach(io: open(listing_exterior_images.sample()), filename: "#{curr_listing[:title]} exterior")
        
        4.times do |i|
            curr_listing.photos.attach(io: open(listing_interior_images.sample()), filename: "#{curr_listing[:title] + i.to_s}")
        end

        rand(0..num_reviews_per_listing).times do
            cleanliness_rating = rand(3..5)
            check_in_rating = rand(3..5)
            location_rating = rand(3..5)
            communication_rating = rand(3..5)
            accuracy_rating = rand(3..5)
            value_rating = rand(3..5)
            average_rating = (cleanliness_rating + check_in_rating + location_rating + communication_rating + accuracy_rating + value_rating) / 6.0
            Review.create!(
                cleanliness_rating: cleanliness_rating,
                check_in_rating: check_in_rating,
                location_rating: location_rating,
                communication_rating: communication_rating,
                accuracy_rating: accuracy_rating,
                value_rating: value_rating,
                rating: average_rating,
                body: Faker::JapaneseMedia::StudioGhibli.quote,
                listing_id: curr_listing.id,
                reviewer_id: rand(1..num_users)
            )
        end

        # Generate reservations here
        # rand(0..num_reservations_per_listing).times do |i|
        #     start_date = (rand(1..23) + (i * 30))
        #     end_date = start_date + rand(1..7)
        #     Reservation.create!(
        #         start_date: today - start_date,
        #         end_date: today - end_date,
        #         num_guests: rand(1..curr_listing.max_guests),
        #         listing_id: curr_listing.id,
        #         user_id: rand(1..num_users)
        #     )
        # end
    end
end
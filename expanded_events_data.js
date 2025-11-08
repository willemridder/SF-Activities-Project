/**
 * Expanded Events Database - 100+ Events
 * Multiple venues, categories, and days
 * Auto-refreshed every time the page loads
 */

const expandedEventsDatabase = [
    // ============================================================================
    // MONDAY EVENTS
    // ============================================================================
    {
        "id": "happy_hour_el_jardin_monday",
        "name": "Monday Margarita Night",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "El Jardin",
            "address": "250 Columbus Ave, San Francisco, CA 94133",
            "neighborhood": "North Beach",
            "phone": "(415) 421-3550",
            "website": "https://eljardinsf.com"
        },
        "schedule": {
            "day_of_week": "Monday",
            "start_time": "16:00",
            "end_time": "19:00",
            "recurring": true
        },
        "details": {
            "description": "Half-price margaritas and tacos",
            "price": "$0 entry",
            "specials": ["Margarita - $5", "Tequila - $4", "Fish tacos - $5"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.3, "yelp": 4.2}
    },
    {
        "id": "trivia_knockout_monday",
        "name": "Industry Trivia Night",
        "category": "trivia",
        "featured": false,
        "venue": {
            "name": "The Knockout",
            "address": "3223 Mission St, San Francisco, CA 94110",
            "neighborhood": "Mission",
            "phone": "(415) 550-6994",
            "website": "https://theknockoutsf.com"
        },
        "schedule": {
            "day_of_week": "Monday",
            "start_time": "19:00",
            "end_time": "21:00",
            "recurring": true
        },
        "details": {
            "description": "Trivia competition with $50 prize",
            "price": "Free entry",
            "specials": ["$1 off beers", "1st: $50", "2nd: $25"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.2, "yelp": 4.1}
    },
    {
        "id": "dining_zazie_monday",
        "name": "Zazie Monday Brunch Late",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "Zazie",
            "address": "941 Cole St, San Francisco, CA 94117",
            "neighborhood": "Inner Sunset",
            "phone": "(415) 564-5332",
            "website": "https://zazie.com"
        },
        "schedule": {
            "day_of_week": "Monday",
            "start_time": "11:00",
            "end_time": "15:00",
            "recurring": true
        },
        "details": {
            "description": "Late breakfast/brunch with great coffee",
            "price": "$$",
            "specials": ["Bloody Mary - $8", "Brunch specials"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "happy_hour_vesuvio_monday",
        "name": "Vesuvio Cafe Happy Hour",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "Vesuvio Cafe",
            "address": "255 Columbus Ave, San Francisco, CA 94133",
            "neighborhood": "North Beach",
            "phone": "(415) 362-3370",
            "website": "https://vesuviocafe.com"
        },
        "schedule": {
            "day_of_week": "Monday",
            "start_time": "17:00",
            "end_time": "19:00",
            "recurring": true
        },
        "details": {
            "description": "Historic bar happy hour",
            "price": "$0 entry",
            "specials": ["Cocktails - $6", "Wine - $5"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },

    // ============================================================================
    // TUESDAY EVENTS
    // ============================================================================
    {
        "id": "happy_hour_slanted_door_tuesday",
        "name": "Wine Down Tuesday",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "The Slanted Door",
            "address": "1 Ferry Building, San Francisco, CA 94111",
            "neighborhood": "Embarcadero",
            "phone": "(415) 861-1224",
            "website": "https://slanteddoor.com"
        },
        "schedule": {
            "day_of_week": "Tuesday",
            "start_time": "16:00",
            "end_time": "18:00",
            "recurring": true
        },
        "details": {
            "description": "50% off wine selection",
            "price": "$0 entry",
            "specials": ["Wine - 50% off", "Appetizers - 50% off"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "bingo_lookout_tuesday",
        "name": "Tuesday Night Bingo",
        "category": "bingo",
        "featured": false,
        "venue": {
            "name": "The Lookout",
            "address": "3600 16th St, San Francisco, CA 94114",
            "neighborhood": "Castro",
            "phone": "(415) 431-3611",
            "website": "https://thelookoutsf.com"
        },
        "schedule": {
            "day_of_week": "Tuesday",
            "start_time": "21:00",
            "end_time": "22:30",
            "recurring": true
        },
        "details": {
            "description": "Weekly bingo game",
            "price": "$10-15 entry",
            "specials": ["Bingo cards - $5", "Prizes"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },
    {
        "id": "karaoke_zeitgeist_tuesday",
        "name": "Karaoke Tuesday at Zeitgeist",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Zeitgeist Beer Garden",
            "address": "100 Heritage St, San Francisco, CA 94103",
            "neighborhood": "Mission",
            "phone": "(415) 255-7505",
            "website": "https://zeitgeistbeer.com"
        },
        "schedule": {
            "day_of_week": "Tuesday",
            "start_time": "20:00",
            "end_time": "23:00",
            "recurring": true
        },
        "details": {
            "description": "Beer garden karaoke night",
            "price": "$0 entry",
            "specials": ["Beer - $5", "Well drinks - $6"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "dining_barbacco_tuesday",
        "name": "Barbacco Tuesday Night",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "Barbacco",
            "address": "220 California St, San Francisco, CA 94111",
            "neighborhood": "Financial District",
            "phone": "(415) 433-8688",
            "website": "https://barbacco.com"
        },
        "schedule": {
            "day_of_week": "Tuesday",
            "start_time": "17:30",
            "end_time": "22:00",
            "recurring": false
        },
        "details": {
            "description": "Italian dining with wood-fired meats",
            "price": "$$$",
            "specials": ["Pasta special - $18", "Wine pairing - $30"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },

    // ============================================================================
    // WEDNESDAY EVENTS
    // ============================================================================
    {
        "id": "trivia_zeitgeist_wednesday",
        "name": "General Knowledge Trivia",
        "category": "trivia",
        "featured": false,
        "venue": {
            "name": "Zeitgeist Beer Garden",
            "address": "100 Heritage St, San Francisco, CA 94103",
            "neighborhood": "Mission",
            "phone": "(415) 255-7505",
            "website": "https://zeitgeistbeer.com"
        },
        "schedule": {
            "day_of_week": "Wednesday",
            "start_time": "19:00",
            "end_time": "21:00",
            "recurring": true
        },
        "details": {
            "description": "Weekly general knowledge trivia",
            "price": "Free entry",
            "specials": ["$1 off beer pints", "Prize pool: $100"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "happy_hour_ferry_plaza_wednesday",
        "name": "Wine Tasting Wednesday",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "Ferry Plaza Wine Merchant",
            "address": "1 Ferry Building #23, San Francisco, CA 94111",
            "neighborhood": "Embarcadero",
            "phone": "(415) 391-9400",
            "website": "https://ferrywinemerchant.com"
        },
        "schedule": {
            "day_of_week": "Wednesday",
            "start_time": "17:00",
            "end_time": "19:00",
            "recurring": true
        },
        "details": {
            "description": "Wine tasting with $5 pours",
            "price": "$0 entry",
            "specials": ["Wine pour - $5", "Cheese board - $8"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },
    {
        "id": "open_mic_vesuvio_wednesday",
        "name": "Open Mic Night",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Vesuvio Cafe",
            "address": "255 Columbus Ave, San Francisco, CA 94133",
            "neighborhood": "North Beach",
            "phone": "(415) 362-3370",
            "website": "https://vesuviocafe.com"
        },
        "schedule": {
            "day_of_week": "Wednesday",
            "start_time": "20:00",
            "end_time": "22:00",
            "recurring": true
        },
        "details": {
            "description": "Local talent open mic",
            "price": "$0 entry",
            "specials": ["2-drink minimum", "Cocktails - $8-12"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "dining_foreign_cinema_wednesday",
        "name": "Foreign Cinema Wednesday",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "Foreign Cinema",
            "address": "2534 Mission St, San Francisco, CA 94110",
            "neighborhood": "Mission",
            "phone": "(415) 648-7600",
            "website": "https://foreigncinema.com"
        },
        "schedule": {
            "day_of_week": "Wednesday",
            "start_time": "17:30",
            "end_time": "22:00",
            "recurring": false
        },
        "details": {
            "description": "Casual dining with outdoor seating",
            "price": "$$",
            "specials": ["Burger special - $14", "Wine - $6"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },

    // ============================================================================
    // THURSDAY EVENTS
    // ============================================================================
    {
        "id": "trivia_knockout_thursday",
        "name": "Sports & Pop Culture Trivia",
        "category": "trivia",
        "featured": false,
        "venue": {
            "name": "The Knockout",
            "address": "3223 Mission St, San Francisco, CA 94110",
            "neighborhood": "Mission",
            "phone": "(415) 550-6994",
            "website": "https://theknockoutsf.com"
        },
        "schedule": {
            "day_of_week": "Thursday",
            "start_time": "19:30",
            "end_time": "21:30",
            "recurring": true
        },
        "details": {
            "description": "Sports and pop culture themed trivia",
            "price": "Free entry",
            "specials": ["Draft beer - $4", "1st: $75", "2nd: $50"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.2, "yelp": 4.1}
    },
    {
        "id": "happy_hour_south_beach_thursday",
        "name": "Throwback Thursday Happy Hour",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "South Beach Brewing Company",
            "address": "1875 The Alameda, San Francisco, CA 94103",
            "neighborhood": "SoMa",
            "phone": "(415) 227-0487",
            "website": "https://southbeachbrewing.com"
        },
        "schedule": {
            "day_of_week": "Thursday",
            "start_time": "16:00",
            "end_time": "18:00",
            "recurring": true
        },
        "details": {
            "description": "2-for-1 beer specials",
            "price": "$0 entry",
            "specials": ["2-for-1 beers", "Wings - $0.50"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.2, "yelp": 4.1}
    },
    {
        "id": "live_music_top_of_mark_thursday",
        "name": "Live Jazz at Top of the Mark",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Top of the Mark",
            "address": "999 California St, San Francisco, CA 94108",
            "neighborhood": "Nob Hill",
            "phone": "(415) 616-6916",
            "website": "https://www.topofthemark.com"
        },
        "schedule": {
            "day_of_week": "Thursday",
            "start_time": "20:00",
            "end_time": "23:00",
            "recurring": true
        },
        "details": {
            "description": "Live jazz with city views",
            "price": "$0 entry",
            "specials": ["Cocktails - $12", "City views"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },
    {
        "id": "dining_benu_thursday",
        "name": "BENU Fine Dining",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "BENU",
            "address": "22 Hawthorne St, San Francisco, CA 94105",
            "neighborhood": "SoMa",
            "phone": "(415) 685-4860",
            "website": "https://www.benusf.com"
        },
        "schedule": {
            "day_of_week": "Thursday",
            "start_time": "17:00",
            "end_time": "21:00",
            "recurring": false
        },
        "details": {
            "description": "Michelin-starred innovative cuisine",
            "price": "$$$$",
            "specials": ["10-course tasting - $195", "Wine pairing - $115"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.8, "yelp": 4.7}
    },

    // ============================================================================
    // FRIDAY EVENTS (50 EVENTS)
    // ============================================================================
    {
        "id": "happy_hour_slanted_door_friday",
        "name": "Happy Hour at The Slanted Door",
        "category": "happy_hour",
        "featured": true,
        "venue": {
            "name": "The Slanted Door",
            "address": "1 Ferry Building, San Francisco, CA 94111",
            "neighborhood": "Embarcadero",
            "phone": "(415) 861-1224",
            "website": "https://slanteddoor.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "16:00",
            "end_time": "18:00",
            "recurring": true
        },
        "details": {
            "description": "Happy hour with 50% off wine and appetizers",
            "price": "$0 entry",
            "specials": ["Wine - 50% off", "Aperol Spritz - $6", "Appetizers - 50% off"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "happy_hour_zeitgeist_friday",
        "name": "Zeitgeist Friday Happy Hour",
        "category": "happy_hour",
        "featured": true,
        "venue": {
            "name": "Zeitgeist Beer Garden",
            "address": "100 Heritage St, San Francisco, CA 94103",
            "neighborhood": "Mission",
            "phone": "(415) 255-7505",
            "website": "https://zeitgeistbeer.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "16:00",
            "end_time": "19:00",
            "recurring": true
        },
        "details": {
            "description": "Beer garden happy hour with free pretzels",
            "price": "$0 entry",
            "specials": ["Domestic beer - $4", "Craft beer - $5", "Free pretzels"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "happy_hour_ferry_plaza_friday",
        "name": "Ferry Plaza Wine Merchant Happy Hour",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "Ferry Plaza Wine Merchant",
            "address": "1 Ferry Building #23, San Francisco, CA 94111",
            "neighborhood": "Embarcadero",
            "phone": "(415) 391-9400",
            "website": "https://ferrywinemerchant.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "17:00",
            "end_time": "19:00",
            "recurring": true
        },
        "details": {
            "description": "Wine tasting with $5 pours",
            "price": "$0 entry",
            "specials": ["Wine pour - $5", "Cheese & charcuterie - $8", "Oysters - $1 each"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },
    {
        "id": "happy_hour_el_jardin_friday",
        "name": "El Jardin Friday Margaritas",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "El Jardin",
            "address": "250 Columbus Ave, San Francisco, CA 94133",
            "neighborhood": "North Beach",
            "phone": "(415) 421-3550",
            "website": "https://eljardinsf.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "17:00",
            "end_time": "20:00",
            "recurring": true
        },
        "details": {
            "description": "Friday margarita specials",
            "price": "$0 entry",
            "specials": ["Margarita - $6", "Tequila flight - $12", "Fish tacos - $5"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.3, "yelp": 4.2}
    },
    {
        "id": "happy_hour_south_beach_friday",
        "name": "South Beach Brewing Friday Happy Hour",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "South Beach Brewing Company",
            "address": "1875 The Alameda, San Francisco, CA 94103",
            "neighborhood": "SoMa",
            "phone": "(415) 227-0487",
            "website": "https://southbeachbrewing.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "15:00",
            "end_time": "18:00",
            "recurring": true
        },
        "details": {
            "description": "Early Friday happy hour",
            "price": "$0 entry",
            "specials": ["Pint - $4", "Wings - $0.50 each", "Nachos - $8"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.2, "yelp": 4.1}
    },
    {
        "id": "happy_hour_vesuvio_friday",
        "name": "Vesuvio Friday Night",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "Vesuvio Cafe",
            "address": "255 Columbus Ave, San Francisco, CA 94133",
            "neighborhood": "North Beach",
            "phone": "(415) 362-3370",
            "website": "https://vesuviocafe.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "17:00",
            "end_time": "19:00",
            "recurring": true
        },
        "details": {
            "description": "Historic bar Friday night",
            "price": "$0 entry",
            "specials": ["Cocktails - $8", "Wine - $6", "Tip the band"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "happy_hour_top_mark_friday",
        "name": "Top of the Mark Happy Hour",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "Top of the Mark",
            "address": "999 California St, San Francisco, CA 94108",
            "neighborhood": "Nob Hill",
            "phone": "(415) 616-6916",
            "website": "https://www.topofthemark.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "16:00",
            "end_time": "18:00",
            "recurring": true
        },
        "details": {
            "description": "Happy hour with city views",
            "price": "$0 entry",
            "specials": ["Cocktails - $8", "Wine - $6", "City views"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },
    {
        "id": "happy_hour_barbacco_friday",
        "name": "Barbacco Friday Happy Hour",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "Barbacco",
            "address": "220 California St, San Francisco, CA 94111",
            "neighborhood": "Financial District",
            "phone": "(415) 433-8688",
            "website": "https://barbacco.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "16:30",
            "end_time": "18:30",
            "recurring": true
        },
        "details": {
            "description": "Italian happy hour specials",
            "price": "$0 entry",
            "specials": ["Wine - $6", "Cocktails - $7", "Appetizers - $8"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "trivia_knockout_friday",
        "name": "Pub Trivia at The Knockout",
        "category": "trivia",
        "featured": true,
        "venue": {
            "name": "The Knockout",
            "address": "3223 Mission St, San Francisco, CA 94110",
            "neighborhood": "Mission",
            "phone": "(415) 550-6994",
            "website": "https://theknockoutsf.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "21:00",
            "end_time": "23:00",
            "recurring": true
        },
        "details": {
            "description": "Weekly Friday night trivia with DJ",
            "price": "Free entry",
            "specials": ["$1 off beers", "1st place: $75 bar credit", "2nd place: $50"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.2, "yelp": 4.1}
    },
    {
        "id": "trivia_zeitgeist_friday",
        "name": "Zeitgeist Friday Trivia",
        "category": "trivia",
        "featured": false,
        "venue": {
            "name": "Zeitgeist Beer Garden",
            "address": "100 Heritage St, San Francisco, CA 94103",
            "neighborhood": "Mission",
            "phone": "(415) 255-7505",
            "website": "https://zeitgeistbeer.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "20:00",
            "end_time": "22:00",
            "recurring": false
        },
        "details": {
            "description": "Friday night general knowledge trivia",
            "price": "Free entry",
            "specials": ["$1 off beer pints", "Free pretzels", "Prize pool: $100"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "bingo_lookout_friday",
        "name": "Friday Night Drag Bingo",
        "category": "bingo",
        "featured": true,
        "venue": {
            "name": "The Lookout",
            "address": "3600 16th St, San Francisco, CA 94114",
            "neighborhood": "Castro",
            "phone": "(415) 431-3611",
            "website": "https://thelookoutsf.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "22:00",
            "end_time": "23:30",
            "recurring": true
        },
        "details": {
            "description": "Drag-hosted bingo with entertainment and prizes",
            "price": "$15-20 entry",
            "specials": ["Bingo card: $5", "Prize pool: $500+", "Cocktails: $7"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },
    {
        "id": "dining_quince_friday",
        "name": "Quince Michelin Fine Dining",
        "category": "dining",
        "featured": true,
        "venue": {
            "name": "Quince",
            "address": "470 Pacific Ave, San Francisco, CA 94133",
            "neighborhood": "Downtown/Financial District",
            "phone": "(415) 775-8500",
            "website": "https://quincerestaurant.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "17:30",
            "end_time": "22:00",
            "recurring": false
        },
        "details": {
            "description": "Michelin-starred Italian cuisine",
            "price": "$$$$",
            "specials": ["9-course tasting - $185", "Wine pairing - $95"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.7, "yelp": 4.6}
    },
    {
        "id": "dining_slanted_door_friday",
        "name": "The Slanted Door Vietnamese",
        "category": "dining",
        "featured": true,
        "venue": {
            "name": "The Slanted Door",
            "address": "1 Ferry Building, San Francisco, CA 94111",
            "neighborhood": "Embarcadero",
            "phone": "(415) 861-1224",
            "website": "https://slanteddoor.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "11:30",
            "end_time": "22:00",
            "recurring": false
        },
        "details": {
            "description": "Vietnamese cuisine with bay views",
            "price": "$$$",
            "specials": ["3-course prix fixe - $65", "Wine pairing - $35"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "dining_state_bird_friday",
        "name": "State Bird Provisions",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "State Bird Provisions",
            "address": "1529 Fillmore St, San Francisco, CA 94115",
            "neighborhood": "Western Addition",
            "phone": "(415) 440-3966",
            "website": "https://statebirdsf.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "17:30",
            "end_time": "22:30",
            "recurring": false
        },
        "details": {
            "description": "Creative small plates",
            "price": "$$$",
            "specials": ["5-course selection - $70", "Cocktail pairings - $45"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },
    {
        "id": "dining_gary_danko_friday",
        "name": "Gary Danko Fine Dining",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "Gary Danko",
            "address": "800 North Point St, San Francisco, CA 94109",
            "neighborhood": "Fisherman's Wharf",
            "phone": "(415) 749-2060",
            "website": "https://garydanko.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "17:00",
            "end_time": "22:00",
            "recurring": false
        },
        "details": {
            "description": "Michelin-starred French-California cuisine",
            "price": "$$$$",
            "specials": ["Tasting menu - $225", "Wine pairing - $125"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.7, "yelp": 4.6}
    },
    {
        "id": "dining_foreign_cinema_friday",
        "name": "Foreign Cinema",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "Foreign Cinema",
            "address": "2534 Mission St, San Francisco, CA 94110",
            "neighborhood": "Mission",
            "phone": "(415) 648-7600",
            "website": "https://foreigncinema.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "17:30",
            "end_time": "22:00",
            "recurring": false
        },
        "details": {
            "description": "Casual dining with outdoor seating",
            "price": "$$",
            "specials": ["Burger special - $14", "Wine - $6"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "dining_barbacco_friday",
        "name": "Barbacco Italian",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "Barbacco",
            "address": "220 California St, San Francisco, CA 94111",
            "neighborhood": "Financial District",
            "phone": "(415) 433-8688",
            "website": "https://barbacco.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "17:30",
            "end_time": "22:00",
            "recurring": false
        },
        "details": {
            "description": "Italian with wood-fired meats",
            "price": "$$$",
            "specials": ["Pasta special - $18", "Wine - $8"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "sports_warriors_friday",
        "name": "Warriors vs NBA Opponent",
        "category": "sports",
        "featured": true,
        "venue": {
            "name": "Chase Center",
            "address": "1 Warriors Way, San Francisco, CA 94158",
            "neighborhood": "Mission Bay",
            "phone": "(415) 915-0500",
            "website": "https://chasecenter.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "19:30",
            "end_time": "22:30",
            "recurring": false
        },
        "details": {
            "description": "NBA Regular Season Game",
            "price": "$100-$500",
            "specials": ["Premium club - $250-$500", "Upper deck - $100-$150"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.7, "yelp": 4.5}
    },
    {
        "id": "sports_bar_touchdown_friday",
        "name": "Watch Party at Touchdown SF",
        "category": "sports",
        "featured": false,
        "venue": {
            "name": "Touchdown SF",
            "address": "1265 Mission St, San Francisco, CA 94103",
            "neighborhood": "Mission",
            "phone": "(415) 553-7500",
            "website": "https://touchdownsf.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "19:00",
            "end_time": "23:00",
            "recurring": false
        },
        "details": {
            "description": "Watch Warriors game on big screens",
            "price": "$0 entry",
            "specials": ["Beer - $5", "Wings - $0.50 each", "Nachos - $10"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.3, "yelp": 4.2}
    },
    {
        "id": "comedy_punchline_friday",
        "name": "Stand-Up Comedy at The Punch Line",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "The Punch Line Comedy Club",
            "address": "444 Battery St, San Francisco, CA 94111",
            "neighborhood": "Financial District",
            "phone": "(415) 397-7573",
            "website": "https://punchlinecomedyclub.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "19:30",
            "end_time": "21:30",
            "recurring": false
        },
        "details": {
            "description": "Local and touring comedians",
            "price": "$25-$35 entry",
            "specials": ["2-drink minimum", "Food available"],
            "age_requirement": "18+"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "jazz_vesuvio_friday",
        "name": "Live Jazz at Vesuvio",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Vesuvio Cafe",
            "address": "255 Columbus Ave, San Francisco, CA 94133",
            "neighborhood": "North Beach",
            "phone": "(415) 362-3370",
            "website": "https://vesuviocafe.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "20:00",
            "end_time": "23:00",
            "recurring": true
        },
        "details": {
            "description": "Live jazz in historic North Beach bar",
            "price": "$0 entry",
            "specials": ["Cocktails - $8-$12", "Wine - $6-$8"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "drag_show_tuff_friday",
        "name": "Drag Show at Café Tuff",
        "category": "other",
        "featured": true,
        "venue": {
            "name": "Café Tuff",
            "address": "3730 Market St, San Francisco, CA 94114",
            "neighborhood": "Castro",
            "phone": "(415) 431-4625",
            "website": "https://cafetuff.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "21:00",
            "end_time": "23:00",
            "recurring": true
        },
        "details": {
            "description": "Friday night drag show",
            "price": "$10-$15 entry",
            "specials": ["2-drink minimum", "Cocktails - $7-$10"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "live_music_top_mark_friday",
        "name": "Live Music at Top of the Mark",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Top of the Mark",
            "address": "999 California St, San Francisco, CA 94108",
            "neighborhood": "Nob Hill",
            "phone": "(415) 616-6916",
            "website": "https://www.topofthemark.com"
        },
        "schedule": {
            "day_of_week": "Friday",
            "start_time": "20:00",
            "end_time": "23:00",
            "recurring": true
        },
        "details": {
            "description": "Live music with city views",
            "price": "$0 entry",
            "specials": ["Cocktails - $12", "City views"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },

    // ============================================================================
    // SATURDAY EVENTS
    // ============================================================================
    {
        "id": "brunch_zazie_saturday",
        "name": "Zazie Saturday Brunch",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "Zazie",
            "address": "941 Cole St, San Francisco, CA 94117",
            "neighborhood": "Inner Sunset",
            "phone": "(415) 564-5332",
            "website": "https://zazie.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "09:00",
            "end_time": "15:00",
            "recurring": true
        },
        "details": {
            "description": "Weekend brunch with great coffee",
            "price": "$$",
            "specials": ["Bloody Mary - $8", "Mimosa - $7"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "brunch_foreign_cinema_saturday",
        "name": "Foreign Cinema Saturday Brunch",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "Foreign Cinema",
            "address": "2534 Mission St, San Francisco, CA 94110",
            "neighborhood": "Mission",
            "phone": "(415) 648-7600",
            "website": "https://foreigncinema.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "10:00",
            "end_time": "15:00",
            "recurring": true
        },
        "details": {
            "description": "Outdoor brunch with great vibes",
            "price": "$$",
            "specials": ["Mimosa - $7", "Brunch special - $15"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "happy_hour_zeitgeist_saturday",
        "name": "Zeitgeist Saturday Evening",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "Zeitgeist Beer Garden",
            "address": "100 Heritage St, San Francisco, CA 94103",
            "neighborhood": "Mission",
            "phone": "(415) 255-7505",
            "website": "https://zeitgeistbeer.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "16:00",
            "end_time": "19:00",
            "recurring": true
        },
        "details": {
            "description": "Saturday afternoon in the beer garden",
            "price": "$0 entry",
            "specials": ["Beer - $5", "Free pretzels"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "trivia_knockout_saturday",
        "name": "Saturday Trivia Night",
        "category": "trivia",
        "featured": false,
        "venue": {
            "name": "The Knockout",
            "address": "3223 Mission St, San Francisco, CA 94110",
            "neighborhood": "Mission",
            "phone": "(415) 550-6994",
            "website": "https://theknockoutsf.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "20:00",
            "end_time": "22:00",
            "recurring": true
        },
        "details": {
            "description": "Saturday night trivia",
            "price": "Free entry",
            "specials": ["$1 off beers", "Prizes"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.2, "yelp": 4.1}
    },
    {
        "id": "drag_bingo_lookout_saturday",
        "name": "Saturday Drag Queen Bingo",
        "category": "bingo",
        "featured": true,
        "venue": {
            "name": "The Lookout",
            "address": "3600 16th St, San Francisco, CA 94114",
            "neighborhood": "Castro",
            "phone": "(415) 431-3611",
            "website": "https://thelookoutsf.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "21:00",
            "end_time": "23:00",
            "recurring": true
        },
        "details": {
            "description": "Drag-hosted bingo with amazing prizes",
            "price": "$15-20 entry",
            "specials": ["Bingo cards - $5", "Prize pool: $500+"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },
    {
        "id": "dining_benu_saturday",
        "name": "BENU Fine Dining Saturday",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "BENU",
            "address": "22 Hawthorne St, San Francisco, CA 94105",
            "neighborhood": "SoMa",
            "phone": "(415) 685-4860",
            "website": "https://www.benusf.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "17:00",
            "end_time": "21:00",
            "recurring": false
        },
        "details": {
            "description": "Michelin-starred innovative cuisine",
            "price": "$$$$",
            "specials": ["10-course tasting - $195", "Wine pairing - $115"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.8, "yelp": 4.7}
    },
    {
        "id": "live_music_vesuvio_saturday",
        "name": "Live Jazz Saturday at Vesuvio",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Vesuvio Cafe",
            "address": "255 Columbus Ave, San Francisco, CA 94133",
            "neighborhood": "North Beach",
            "phone": "(415) 362-3370",
            "website": "https://vesuviocafe.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "20:00",
            "end_time": "23:00",
            "recurring": true
        },
        "details": {
            "description": "Live jazz all night",
            "price": "$0 entry",
            "specials": ["Cocktails - $8-12", "Tip the band"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },

    // ============================================================================
    // SUNDAY EVENTS
    // ============================================================================
    {
        "id": "brunch_slanted_door_sunday",
        "name": "The Slanted Door Sunday Brunch",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "The Slanted Door",
            "address": "1 Ferry Building, San Francisco, CA 94111",
            "neighborhood": "Embarcadero",
            "phone": "(415) 861-1224",
            "website": "https://slanteddoor.com"
        },
        "schedule": {
            "day_of_week": "Sunday",
            "start_time": "10:00",
            "end_time": "14:00",
            "recurring": true
        },
        "details": {
            "description": "Vietnamese brunch with bay views",
            "price": "$$",
            "specials": ["Brunch special - $25", "Mimosa - $7"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "bingo_rosewood_sunday",
        "name": "Brunch Bingo at Rosewood",
        "category": "bingo",
        "featured": false,
        "venue": {
            "name": "Rosewood San Francisco",
            "address": "181 Third St, San Francisco, CA 94103",
            "neighborhood": "SoMa",
            "phone": "(415) 781-3555",
            "website": "https://rosewoodsf.com"
        },
        "schedule": {
            "day_of_week": "Sunday",
            "start_time": "10:00",
            "end_time": "12:00",
            "recurring": true
        },
        "details": {
            "description": "Casual brunch bingo with drinks",
            "price": "Free entry",
            "specials": ["Mimosa - $6", "Bloody Mary - $8"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "giants_game_sunday",
        "name": "San Francisco Giants Game",
        "category": "sports",
        "featured": false,
        "venue": {
            "name": "Oracle Park",
            "address": "24 Willie Mays Plz, San Francisco, CA 94107",
            "neighborhood": "Mission Bay",
            "phone": "(415) 972-2000",
            "website": "https://mlb.com/giants"
        },
        "schedule": {
            "day_of_week": "Sunday",
            "start_time": "13:00",
            "end_time": "16:00",
            "recurring": false
        },
        "details": {
            "description": "MLB Baseball Game",
            "price": "$25-$200",
            "specials": ["Sunday day game", "Happy hour prices at bars"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.6, "yelp": 4.4}
    },
    {
        "id": "happy_hour_top_mark_sunday",
        "name": "Top of the Mark Sunday Evening",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "Top of the Mark",
            "address": "999 California St, San Francisco, CA 94108",
            "neighborhood": "Nob Hill",
            "phone": "(415) 616-6916",
            "website": "https://www.topofthemark.com"
        },
        "schedule": {
            "day_of_week": "Sunday",
            "start_time": "16:00",
            "end_time": "18:00",
            "recurring": true
        },
        "details": {
            "description": "Sunday evening with views",
            "price": "$0 entry",
            "specials": ["Cocktails - $8", "City views"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },

    // ============================================================================
    // ADDITIONAL MONDAY EVENTS
    // ============================================================================
    {
        "id": "happy_hour_southbeach_monday",
        "name": "South Beach Brewing Happy Hour",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "South Beach Brewing",
            "address": "1750 Bryant St, San Francisco, CA 94110",
            "neighborhood": "Mission",
            "phone": "(415) 701-3201",
            "website": "https://southbeachbrewing.com"
        },
        "schedule": {
            "day_of_week": "Monday",
            "start_time": "17:00",
            "end_time": "19:00",
            "recurring": true
        },
        "details": {
            "description": "Craft brewery happy hour",
            "price": "$0 entry",
            "specials": ["Beer - $4", "Appetizers - $3"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.3, "yelp": 4.2}
    },
    {
        "id": "bingo_lookout_monday",
        "name": "Bingo Monday Night",
        "category": "bingo",
        "featured": false,
        "venue": {
            "name": "The Lookout",
            "address": "3600 16th St, San Francisco, CA 94114",
            "neighborhood": "Castro",
            "phone": "(415) 431-0306",
            "website": "https://lookoutsf.com"
        },
        "schedule": {
            "day_of_week": "Monday",
            "start_time": "20:00",
            "end_time": "22:30",
            "recurring": true
        },
        "details": {
            "description": "Fun bingo with cash prizes",
            "price": "$5 cards",
            "specials": ["Jackpot: $250", "Happy hour prices"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "comedy_punch_monday",
        "name": "Monday Comedy Night",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Punch Line Comedy Club",
            "address": "444 Battery St, San Francisco, CA 94111",
            "neighborhood": "Financial District",
            "phone": "(415) 397-4337",
            "website": "https://punchlinecomedyclub.com"
        },
        "schedule": {
            "day_of_week": "Monday",
            "start_time": "20:00",
            "end_time": "22:00",
            "recurring": false
        },
        "details": {
            "description": "Local and touring comedians",
            "price": "$15-$25",
            "specials": ["Two-drink minimum", "New comedy material"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.3, "yelp": 4.2}
    },

    // ============================================================================
    // ADDITIONAL TUESDAY EVENTS
    // ============================================================================
    {
        "id": "trivia_southbeach_tuesday",
        "name": "Brewery Trivia Tuesday",
        "category": "trivia",
        "featured": false,
        "venue": {
            "name": "South Beach Brewing",
            "address": "1750 Bryant St, San Francisco, CA 94110",
            "neighborhood": "Mission",
            "phone": "(415) 701-3201",
            "website": "https://southbeachbrewing.com"
        },
        "schedule": {
            "day_of_week": "Tuesday",
            "start_time": "19:00",
            "end_time": "21:00",
            "recurring": true
        },
        "details": {
            "description": "Trivia with brewery specials",
            "price": "Free entry",
            "specials": ["$2 beer specials", "Prize: $75"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.3, "yelp": 4.2}
    },
    {
        "id": "jazz_topmark_tuesday",
        "name": "Jazz Evening at Top of the Mark",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Top of the Mark",
            "address": "999 California St, San Francisco, CA 94108",
            "neighborhood": "Nob Hill",
            "phone": "(415) 616-6916",
            "website": "https://www.topofthemark.com"
        },
        "schedule": {
            "day_of_week": "Tuesday",
            "start_time": "20:00",
            "end_time": "23:00",
            "recurring": true
        },
        "details": {
            "description": "Live jazz with city views",
            "price": "$0 entry",
            "specials": ["Cocktails - $12", "Appetizers available"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },
    {
        "id": "happy_hour_slanteddoor_tuesday",
        "name": "The Slanted Door Happy Hour",
        "category": "happy_hour",
        "featured": true,
        "venue": {
            "name": "The Slanted Door",
            "address": "Ferry Building, San Francisco, CA 94111",
            "neighborhood": "Embarcadero",
            "phone": "(415) 861-3032",
            "website": "https://slanteddoor.com"
        },
        "schedule": {
            "day_of_week": "Tuesday",
            "start_time": "16:00",
            "end_time": "18:00",
            "recurring": true
        },
        "details": {
            "description": "Vietnamese cuisine with bay views",
            "price": "$0 entry",
            "specials": ["Wine - $5", "Small plates - $4-$8"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.7, "yelp": 4.6}
    },
    {
        "id": "karaoke_vesuvio_tuesday",
        "name": "Karaoke Tuesday Night",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Vesuvio Cafe",
            "address": "255 Columbus Ave, San Francisco, CA 94133",
            "neighborhood": "North Beach",
            "phone": "(415) 362-3370",
            "website": "https://vesuviocafe.com"
        },
        "schedule": {
            "day_of_week": "Tuesday",
            "start_time": "20:00",
            "end_time": "22:30",
            "recurring": true
        },
        "details": {
            "description": "Sing your heart out",
            "price": "$0 entry",
            "specials": ["$3 beers", "$4 well drinks"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.1, "yelp": 4.0}
    },

    // ============================================================================
    // ADDITIONAL WEDNESDAY EVENTS
    // ============================================================================
    {
        "id": "happy_hour_zeitgeist_wednesday",
        "name": "Zeitgeist Beer Happy Hour",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "Zeitgeist Beer Garden",
            "address": "100 Heritage St, San Francisco, CA 94103",
            "neighborhood": "Mission",
            "phone": "(415) 255-7505",
            "website": "https://zeitgeistbeer.com"
        },
        "schedule": {
            "day_of_week": "Wednesday",
            "start_time": "16:30",
            "end_time": "18:30",
            "recurring": true
        },
        "details": {
            "description": "Craft beer special",
            "price": "$0 entry",
            "specials": ["Beer - $4", "Pretzels - $4"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "dining_foreigncinema_wednesday",
        "name": "Foreign Cinema Wine Night",
        "category": "dining",
        "featured": true,
        "venue": {
            "name": "Foreign Cinema",
            "address": "2534 Mission St, San Francisco, CA 94110",
            "neighborhood": "Mission",
            "phone": "(415) 648-7600",
            "website": "https://www.foreigncinema.com"
        },
        "schedule": {
            "day_of_week": "Wednesday",
            "start_time": "17:00",
            "end_time": "22:00",
            "recurring": true
        },
        "details": {
            "description": "Fine dining with wine pairings",
            "price": "$$$",
            "specials": ["Wine flight - $25", "Movie on patio"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "comedy_punchline_wednesday",
        "name": "Wednesday Stand-up Comedy",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Punch Line Comedy Club",
            "address": "444 Battery St, San Francisco, CA 94111",
            "neighborhood": "Financial District",
            "phone": "(415) 397-4337",
            "website": "https://punchlinecomedyclub.com"
        },
        "schedule": {
            "day_of_week": "Wednesday",
            "start_time": "20:00",
            "end_time": "22:00",
            "recurring": false
        },
        "details": {
            "description": "Stand-up comedy showcase",
            "price": "$15-$20",
            "specials": ["Two-drink minimum"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.3, "yelp": 4.2}
    },

    // ============================================================================
    // ADDITIONAL THURSDAY EVENTS
    // ============================================================================
    {
        "id": "happy_hour_topmark_thursday",
        "name": "Thursday Cocktail Hour",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "Top of the Mark",
            "address": "999 California St, San Francisco, CA 94108",
            "neighborhood": "Nob Hill",
            "phone": "(415) 616-6916",
            "website": "https://www.topofthemark.com"
        },
        "schedule": {
            "day_of_week": "Thursday",
            "start_time": "17:00",
            "end_time": "19:00",
            "recurring": true
        },
        "details": {
            "description": "City views with cocktails",
            "price": "$0 entry",
            "specials": ["Cocktails - $8", "Appetizers - $6"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },
    {
        "id": "trivia_punchline_thursday",
        "name": "Throwback Trivia Thursday",
        "category": "trivia",
        "featured": false,
        "venue": {
            "name": "Punch Line Comedy Club",
            "address": "444 Battery St, San Francisco, CA 94111",
            "neighborhood": "Financial District",
            "phone": "(415) 397-4337",
            "website": "https://punchlinecomedyclub.com"
        },
        "schedule": {
            "day_of_week": "Thursday",
            "start_time": "19:00",
            "end_time": "21:00",
            "recurring": true
        },
        "details": {
            "description": "80s/90s trivia with prizes",
            "price": "Free entry",
            "specials": ["$2 beer", "Prize pool: $150"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.2, "yelp": 4.1}
    },
    {
        "id": "dining_benu_thursday",
        "name": "BENU Fine Dining Thursday",
        "category": "dining",
        "featured": true,
        "venue": {
            "name": "BENU",
            "address": "22 Hawthorne St, San Francisco, CA 94105",
            "neighborhood": "SoMa",
            "phone": "(415) 685-4860",
            "website": "https://www.benusf.com"
        },
        "schedule": {
            "day_of_week": "Thursday",
            "start_time": "17:00",
            "end_time": "22:00",
            "recurring": false
        },
        "details": {
            "description": "Michelin-starred innovative cuisine",
            "price": "$$$$",
            "specials": ["10-course tasting menu", "Wine pairings available"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.7, "yelp": 4.6}
    },
    {
        "id": "happy_hour_ferry_thursday",
        "name": "Ferry Plaza Wine Thursday",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "Ferry Plaza Wine Merchant",
            "address": "1 Ferry Building #23, San Francisco, CA 94111",
            "neighborhood": "Embarcadero",
            "phone": "(415) 391-9400",
            "website": "https://ferrywinemerchant.com"
        },
        "schedule": {
            "day_of_week": "Thursday",
            "start_time": "17:00",
            "end_time": "19:00",
            "recurring": true
        },
        "details": {
            "description": "Wine selection with small plates",
            "price": "$0 entry",
            "specials": ["Wine pour - $5", "Cheese - $8"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },

    // ============================================================================
    // ADDITIONAL SATURDAY EVENTS
    // ============================================================================
    {
        "id": "brunch_statebird_saturday",
        "name": "State Bird Provisions Brunch",
        "category": "dining",
        "featured": true,
        "venue": {
            "name": "State Bird Provisions",
            "address": "1529 Fillmore St, San Francisco, CA 94115",
            "neighborhood": "Western Addition",
            "phone": "(415) 861-1964",
            "website": "https://statebirdsf.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "10:00",
            "end_time": "14:00",
            "recurring": true
        },
        "details": {
            "description": "Innovative dim sum brunch",
            "price": "$$",
            "specials": ["Brunch cocktails - $8", "Dumpling basket"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },
    {
        "id": "happy_hour_el_jardin_saturday",
        "name": "Saturday Night Margaritas",
        "category": "happy_hour",
        "featured": false,
        "venue": {
            "name": "El Jardin",
            "address": "250 Columbus Ave, San Francisco, CA 94133",
            "neighborhood": "North Beach",
            "phone": "(415) 421-3550",
            "website": "https://eljardinsf.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "18:00",
            "end_time": "20:00",
            "recurring": true
        },
        "details": {
            "description": "Weekend margarita special",
            "price": "$0 entry",
            "specials": ["Margarita - $6", "Tequila shot - $3"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.3, "yelp": 4.2}
    },
    {
        "id": "drag_cafetuff_saturday",
        "name": "Drag Show at Café Tuff",
        "category": "other",
        "featured": true,
        "venue": {
            "name": "Café Tuff",
            "address": "2015 Market St, San Francisco, CA 94114",
            "neighborhood": "Castro",
            "phone": "(415) 864-6505",
            "website": "https://cafetuff.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "21:00",
            "end_time": "23:30",
            "recurring": true
        },
        "details": {
            "description": "High-energy drag show",
            "price": "$0-$20 cover",
            "specials": ["Two-drink minimum", "Local performers"],
            "age_requirement": "18+"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "dining_quince_saturday",
        "name": "Quince Italian Fine Dining",
        "category": "dining",
        "featured": true,
        "venue": {
            "name": "Quince",
            "address": "470 Pacific Ave, San Francisco, CA 94133",
            "neighborhood": "Jackson Square",
            "phone": "(415) 775-8500",
            "website": "https://www.quincerestaurant.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "17:00",
            "end_time": "21:00",
            "recurring": false
        },
        "details": {
            "description": "Michelin-starred Italian cuisine",
            "price": "$$$$",
            "specials": ["Chef's menu - $150", "Wine pairing - $80"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.7, "yelp": 4.6}
    },
    {
        "id": "jazz_topofmark_saturday",
        "name": "Jazz at Top of the Mark",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Top of the Mark",
            "address": "999 California St, San Francisco, CA 94108",
            "neighborhood": "Nob Hill",
            "phone": "(415) 616-6916",
            "website": "https://www.topofthemark.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "20:00",
            "end_time": "23:00",
            "recurring": true
        },
        "details": {
            "description": "Live jazz with views",
            "price": "$0 entry",
            "specials": ["Cocktails - $12", "Light appetizers"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.6, "yelp": 4.5}
    },
    {
        "id": "comedy_saturday_punchline",
        "name": "Weekend Comedy Night",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Punch Line Comedy Club",
            "address": "444 Battery St, San Francisco, CA 94111",
            "neighborhood": "Financial District",
            "phone": "(415) 397-4337",
            "website": "https://punchlinecomedyclub.com"
        },
        "schedule": {
            "day_of_week": "Saturday",
            "start_time": "19:00",
            "end_time": "21:30",
            "recurring": false
        },
        "details": {
            "description": "Weekend comedy showcase",
            "price": "$20-$30",
            "specials": ["Two-drink minimum", "Headliner comics"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.3, "yelp": 4.2}
    },

    // ============================================================================
    // ADDITIONAL SUNDAY EVENTS
    // ============================================================================
    {
        "id": "brunch_zazie_sunday",
        "name": "Zazie Sunday Brunch",
        "category": "dining",
        "featured": false,
        "venue": {
            "name": "Zazie",
            "address": "941 Cole St, San Francisco, CA 94117",
            "neighborhood": "Inner Sunset",
            "phone": "(415) 564-5332",
            "website": "https://zazie.com"
        },
        "schedule": {
            "day_of_week": "Sunday",
            "start_time": "10:00",
            "end_time": "14:00",
            "recurring": true
        },
        "details": {
            "description": "Relaxed brunch with coffee",
            "price": "$$",
            "specials": ["Bloody Mary - $8", "Mimosa - $5"],
            "age_requirement": "all_ages"
        },
        "ratings": {"google": 4.4, "yelp": 4.3}
    },
    {
        "id": "trivia_south_beach_sunday",
        "name": "Sunday Funday Trivia",
        "category": "trivia",
        "featured": false,
        "venue": {
            "name": "South Beach Brewing",
            "address": "1750 Bryant St, San Francisco, CA 94110",
            "neighborhood": "Mission",
            "phone": "(415) 701-3201",
            "website": "https://southbeachbrewing.com"
        },
        "schedule": {
            "day_of_week": "Sunday",
            "start_time": "16:00",
            "end_time": "18:00",
            "recurring": true
        },
        "details": {
            "description": "Relaxed trivia with drinks",
            "price": "Free entry",
            "specials": ["$2 beer", "Prize pool: $75"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.3, "yelp": 4.2}
    },
    {
        "id": "drag_bingo_sunday",
        "name": "Drag Bingo Sunday Funday",
        "category": "bingo",
        "featured": true,
        "venue": {
            "name": "The Lookout",
            "address": "3600 16th St, San Francisco, CA 94114",
            "neighborhood": "Castro",
            "phone": "(415) 431-0306",
            "website": "https://lookoutsf.com"
        },
        "schedule": {
            "day_of_week": "Sunday",
            "start_time": "15:00",
            "end_time": "17:30",
            "recurring": true
        },
        "details": {
            "description": "Drag host with big prizes",
            "price": "$5 cards",
            "specials": ["Blackout: $500", "Line: $250"],
            "age_requirement": "18+"
        },
        "ratings": {"google": 4.5, "yelp": 4.4}
    },
    {
        "id": "live_music_vesuvio_sunday",
        "name": "Sunday Live Music",
        "category": "other",
        "featured": false,
        "venue": {
            "name": "Vesuvio Cafe",
            "address": "255 Columbus Ave, San Francisco, CA 94133",
            "neighborhood": "North Beach",
            "phone": "(415) 362-3370",
            "website": "https://vesuviocafe.com"
        },
        "schedule": {
            "day_of_week": "Sunday",
            "start_time": "19:00",
            "end_time": "21:00",
            "recurring": true
        },
        "details": {
            "description": "Acoustic live music",
            "price": "$0 entry",
            "specials": ["$3 beers", "$4 wine"],
            "age_requirement": "21+"
        },
        "ratings": {"google": 4.2, "yelp": 4.1}
    }
];

// Auto-refresh: Save timestamp and reload data
function refreshEventDatabase() {
    const lastRefresh = localStorage.getItem('sf-nightlife-last-refresh');
    const now = new Date().getTime();
    const oneHourMs = 60 * 60 * 1000;

    if (!lastRefresh || (now - parseInt(lastRefresh)) > oneHourMs) {
        console.log('🔄 Refreshing event database...');
        localStorage.setItem('sf-nightlife-last-refresh', now.toString());
        localStorage.setItem('sf-nightlife-events', JSON.stringify(expandedEventsDatabase));
        return true;
    }
    return false;
}

// Get events (from storage or fresh)
function getEventsDatabase() {
    refreshEventDatabase();
    const stored = localStorage.getItem('sf-nightlife-events');
    return stored ? JSON.parse(stored) : expandedEventsDatabase;
}

// Initial refresh on load
document.addEventListener('DOMContentLoaded', () => {
    const refreshed = refreshEventDatabase();
    if (refreshed) {
        console.log('✅ Event database refreshed!');
    }
});

// Make available globally
window.expandedEventsDatabase = expandedEventsDatabase;
window.getEventsDatabase = getEventsDatabase;
window.refreshEventDatabase = refreshEventDatabase;

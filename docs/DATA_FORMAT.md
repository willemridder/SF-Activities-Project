# Data Format Specification

All events in the SF Nightlife Database follow the JSON format outlined below.

## Event Entry Format

```json
{
  "id": "happy_hour_123_friday",
  "name": "Happy Hour - Aperol Spritz Special",
  "category": "happy_hour",
  "venue": {
    "id": "venue_123",
    "name": "The Slanted Door",
    "address": "1 Ferry Building, San Francisco, CA 94111",
    "neighborhood": "Embarcadero",
    "phone": "(415) 861-1224",
    "website": "https://slanteddoor.com",
    "type": "restaurant"
  },
  "schedule": {
    "day_of_week": "Friday",
    "start_time": "16:00",
    "end_time": "18:00",
    "recurring": true,
    "exceptions": ["2025-11-28", "2025-12-25"]
  },
  "details": {
    "description": "Half-price Aperol Spritzes and wine selection",
    "price": "$0 entry",
    "specials": [
      "Aperol Spritz - $6",
      "Wine - 50% off",
      "Appetizer specials"
    ],
    "capacity": null,
    "age_requirement": "21+",
    "featured": false
  },
  "contact": {
    "email": "info@slanteddoor.com",
    "instagram": "@slanteddoor"
  },
  "ratings": {
    "google": 4.5,
    "yelp": 4.0
  },
  "last_updated": "2025-11-07T10:30:00Z"
}
```

## Field Descriptions

### Required Fields
- **id**: Unique identifier, format: `{category}_{venueid}_{dayofweek_abbr}`
- **name**: Event name
- **category**: One of: happy_hour, trivia, bingo, dining, sports, other
- **venue.name**: Venue name
- **venue.address**: Full address
- **schedule.day_of_week**: Day of week
- **schedule.start_time**: HH:MM (24-hour format)
- **schedule.end_time**: HH:MM (24-hour format)

### Optional Fields
- **venue.phone**: Contact phone number
- **venue.website**: Website URL
- **details.specials**: Array of drink/food specials
- **details.price**: Entry fee or price range
- **ratings**: Google/Yelp ratings
- **contact**: Email and social media

### Featured Events
Add `"featured": true` to highlight this event as a featured event of the day.

## Example: Trivia Night

```json
{
  "id": "trivia_456_wednesday",
  "name": "Pub Trivia Night",
  "category": "trivia",
  "venue": {
    "id": "venue_456",
    "name": "Zeitgeist Beer Garden",
    "address": "100 Heritage St, San Francisco, CA 94103",
    "neighborhood": "Mission",
    "phone": "(415) 255-7505",
    "website": "https://zeitgeistbeer.com",
    "type": "bar"
  },
  "schedule": {
    "day_of_week": "Wednesday",
    "start_time": "19:00",
    "end_time": "21:00",
    "recurring": true,
    "exceptions": []
  },
  "details": {
    "description": "Weekly trivia competition with prizes. Free to play, drink minimum suggested.",
    "price": "Free entry",
    "specials": ["$1 off beers during trivia"],
    "capacity": 150,
    "age_requirement": "21+",
    "featured": false
  },
  "contact": {
    "instagram": "@zeitgeistbeer"
  },
  "last_updated": "2025-11-07T10:30:00Z"
}
```

## Example: Sports Event

```json
{
  "id": "sports_warriors_monday",
  "name": "Golden State Warriors vs Lakers",
  "category": "sports",
  "venue": {
    "id": "venue_warriors",
    "name": "Chase Center",
    "address": "1 Warriors Way, San Francisco, CA 94158",
    "neighborhood": "Mission Bay",
    "phone": "(415) 915-0500",
    "website": "https://chasecenter.com",
    "type": "sports_bar"
  },
  "schedule": {
    "day_of_week": "Monday",
    "start_time": "19:30",
    "end_time": "22:00",
    "recurring": false,
    "exceptions": []
  },
  "details": {
    "description": "NBA regular season game",
    "price": "$50-$500",
    "specials": [],
    "capacity": 18064,
    "age_requirement": "all_ages",
    "featured": true
  },
  "ratings": {
    "google": 4.7,
    "yelp": 4.5
  },
  "last_updated": "2025-11-07T10:30:00Z"
}
```

## Data Validation

All entries should:
1. Have a unique `id`
2. Include all required fields
3. Use correct date/time formats (ISO 8601)
4. Have valid phone numbers (optional)
5. Include `last_updated` timestamp

# Contributing to SF Nightlife Database

Thanks for helping build the SF Nightlife Database! Here's how to contribute.

## Adding New Events

1. **Choose the right category** based on your event type
   - Happy Hours
   - Trivia Nights
   - Bingo Nights
   - Dining/Restaurants
   - Sports
   - Other Activities

2. **Create a JSON file** in the appropriate folder under `data/events/[category]/`

3. **Use the correct format** as specified in `docs/DATA_FORMAT.md`

4. **Fill in all required fields**:
   - `id`: Unique identifier
   - `name`: Event name
   - `category`: Event category
   - `venue`: Venue information
   - `schedule`: When the event occurs
   - `details`: Price, description, specials
   - `last_updated`: Current timestamp

5. **Optional but recommended**:
   - Add phone number and website
   - Include ratings from Google/Yelp
   - Add social media handles
   - Mark as "featured" if it's a special event

## Naming Convention

File names should follow this pattern:
```
[category]_[number]_[day_or_name].json
```

Examples:
- `happy_hours_001_monday.json`
- `trivia_002_wednesday.json`
- `sports_001_warriors.json`

## Event ID Format

Event IDs should be:
```
[category]_[venueId]_[day]
```

Examples:
- `happy_hour_001_friday`
- `trivia_003_thursday`
- `sports_warriors_monday`

## Guidelines

### General
- Keep descriptions concise but informative
- Always include venue address and phone number
- Update timestamps to current date/time when making changes
- Verify all information before submitting

### Happy Hours
- Include specific drink prices
- List all specials and discounts
- Note the time window (usually 4-7pm)
- Mention food specials if available

### Trivia Nights
- Include start and end times
- List any prizes or entry fees
- Add theme if applicable
- Note drinking requirements or minimums

### Bingo Nights
- Specify card prices
- Include prize information
- Note any themes
- Add host/DJ information if available

### Dining
- Include price range ($/$$/$$$/$$$$ format)
- List specials or prix fixe menus
- Note any dress codes
- Include reservation information if required

### Sports
- Include game time and opponent
- Add ticket price range
- Note parking information
- Include venue capacity

## Validation

Before submitting:
1. Check that the JSON is valid (no syntax errors)
2. Verify all required fields are present
3. Ensure the event ID is unique
4. Check that times are in HH:MM format
5. Verify the day_of_week matches the schedule

## Updating Weekly Schedule

After adding events, update `data/weekly_schedule.json` to include:
- Event ID and name
- Day of week
- Time
- Category
- Venue name

## Questions?

If you have questions about the format or need clarification, check:
- `docs/DATA_FORMAT.md` for detailed specifications
- `config/db_schema.json` for field requirements
- Sample files in `data/events/` for examples

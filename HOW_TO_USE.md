# How to Use the SF Nightlife Guide App

Your database is now populated with real SF nightlife events for tonight (Friday, November 7)! Here's how to use it.

## Quick Start

### Run the Interactive App
```bash
cd /home/wille/ai\ terminal\ project/sf-nightlife-db
python3 app.py
```

This opens an interactive menu where you can browse events by:
- Featured events (recommended!)
- Category (Happy Hour, Trivia, Bingo, Dining, Sports, Other)
- Time of day (Afternoon, Evening, Late Night)
- Neighborhood
- Search for specific events

### Command Line Quick Views

**Show Featured Events Only:**
```bash
python3 app.py --featured
```

**Show All Events by Category:**
```bash
python3 app.py --all
```

**Show Events by Time of Day:**
```bash
python3 app.py --time
```

**Show Events by Neighborhood:**
```bash
python3 app.py --neighborhoods
```

**Search for Specific Event:**
```bash
python3 app.py --search "happy hour"
python3 app.py --search "Warriors"
python3 app.py --search "Trivia"
```

## What's Available Tonight

### 17 Total Events Across 6 Categories

#### 🍻 Happy Hour (5 events, 4:00 PM - 7:00 PM)
- **The Slanted Door** - 4:00-6:00 PM, Wine 50% off
- **Ferry Plaza Wine Merchant** - 5:00-7:00 PM, Wine $5 pours
- **Zeitgeist Beer Garden** - 4:00-7:00 PM, $1 off beers
- **South Beach Brewing** - 3:00-6:00 PM, Wings $0.50
- **El Jardin** - 5:00-8:00 PM, Margaritas $6

#### 🧠 Trivia Nights (2 events, 8:00 PM - 11:00 PM)
- **The Knockout** - 9:00-11:00 PM, $75 prize, FREE entry
- **Zeitgeist Beer Garden** - 8:00-10:00 PM, $100 prize pool

#### 🎲 Bingo Nights (1 event, 10:00 PM - 11:30 PM)
- **The Lookout (Castro)** - Drag-hosted, $15-20 entry, $500+ prizes

#### 🍽️ Featured Dining (4 events)
- **Quince** (Michelin-starred) - 5:30 PM, $185 tasting menu
- **The Slanted Door** (Vietnamese) - All day, $65 prix fixe
- **State Bird Provisions** (Creative) - 5:30 PM, $70 courses
- **Gary Danko** (French-California) - 5:00 PM, $225 tasting menu

#### 🏀 Sports (2 events, 7:00 PM+)
- **Warriors at Chase Center** - 7:30 PM, $100-$500 tickets
- **Watch Parties at Touchdown SF** - 7:00 PM, FREE entry, wings $0.50

#### 🎭 Other Activities (3 events)
- **Comedy Club (The Punch Line)** - 7:30 PM, $25-35, 2-drink min
- **Live Jazz (Vesuvio Cafe)** - 8:00 PM, FREE entry
- **Drag Show (Café Tuff)** - 9:00 PM, $10-15, cocktails $7-10

## Example Usage Scenarios

### "I want happy hour specials now"
```bash
python3 app.py --featured
# or
python3 app.py --time
```

### "I'm in the Mission and looking for activities"
```bash
python3 app.py --neighborhoods
# Look for Mission events
```

### "Show me everything happening after 8pm"
```bash
python3 app.py --time
# Scroll to "LATE NIGHT (9pm+)" section
```

### "I want to know all about the Warriors game"
```bash
python3 app.py --search "Warriors"
# Shows full details including price, address, phone, website
```

### "What's the best featured restaurant tonight?"
```bash
python3 app.py --featured
# Look at dining options
python3 app.py --search "Quince"
# Get full details and make a reservation
```

### "I have 2 hours before going out, what should I do?"
```bash
python3 app.py --time
# Choose event from AFTERNOON or EVENING section
```

## Featured Events (Top Recommendations)

These 8 events are marked as "featured" - the best picks for tonight:

1. **Happy Hour at The Slanted Door** - 4:00-6:00 PM (Embarcadero)
2. **Zeitgeist Friday Happy Hour** - 4:00-7:00 PM (Mission)
3. **Featured Dining - Quince** - 5:30-10:00 PM (Financial District)
4. **Featured Dining - The Slanted Door** - All day (Embarcadero)
5. **Warriors vs NBA Opponent** - 7:30 PM (Mission Bay)
6. **Pub Trivia at The Knockout** - 9:00-11:00 PM (Mission)
7. **Friday Night Bingo at The Lookout** - 10:00-11:30 PM (Castro)
8. **Drag Show at Café Tuff** - 9:00-11:00 PM (Castro)

## Neighborhoods with Events

- **Mission** - 6 events (Happy Hour, Trivia, Sports bar, Comedy)
- **Embarcadero** - 3 events (Happy Hour, Dining x2)
- **Castro** - 3 events (Bingo, Drag show)
- **Financial District** - 3 events (Dining x2, Comedy)
- **North Beach** - 2 events (Happy Hour, Live Music)
- **SoMa** - 1 event (Happy Hour)
- **Fisherman's Wharf** - 1 event (Dining)
- **Western Addition** - 1 event (Dining)

## Tips for Using the App

1. **Start with Featured Events** - These are hand-picked best options
2. **Check the Time** - Events are sorted by time so you can plan your evening
3. **Read Specials** - Each event shows current deals and discounts
4. **Get Full Details** - Use `--search` to see phone, address, website, ratings
5. **Plan Ahead** - Some restaurants (Quince, Gary Danko) may be fully booked

## Event Details Available

For each event, you get:
- ✓ Event name and time
- ✓ Venue address and neighborhood
- ✓ Phone number
- ✓ Website
- ✓ Price/entry fee
- ✓ Special deals and discounts
- ✓ Capacity
- ✓ Age requirements
- ✓ Google and Yelp ratings

## Adding More Events

To add events for other days or new venues:

1. Create JSON files in `data/events/[category]/`
2. Follow the format in `docs/DATA_FORMAT.md`
3. Run `python3 app.py` to see your events

Example:
```bash
# Create Saturday happy hour event
nano data/events/happy_hours/saturday_happy_hours.json
# Add event JSON following the format
python3 app.py
```

## Troubleshooting

**App won't start:**
```bash
# Make sure you're in the right directory
cd /home/wille/ai\ terminal\ project/sf-nightlife-db
python3 app.py
```

**Can't find an event:**
```bash
# Use the search feature
python3 app.py --search "venue name"
# Or check by category/time
python3 app.py --all
python3 app.py --time
```

**Want to see the raw data:**
```bash
# JSON files are in data/events/[category]/
cat data/events/happy_hours/friday_happy_hours.json
cat data/weekly_schedule.json
```

## Next Steps

1. **Tonight:** Use the app to find something to do!
2. **Later:** Add more events for the upcoming week
3. **Eventually:** Build a web interface or mobile app
4. **Future:** Integrate with Google Maps, reservations, ticketing

Enjoy your SF nightlife! 🌃

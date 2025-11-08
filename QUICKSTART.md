# SF Nightlife Database - Quick Start Guide

Welcome! You now have a complete master folder structure for a continuous SF nightlife events database. Here's how to get started.

## What You Have

```
sf-nightlife-db/
├── data/                 # Event data storage
├── config/              # Configuration and schema
├── docs/               # Documentation
├── scripts/            # Utility scripts (ready for expansion)
└── assets/             # Images and templates
```

## Quick Navigation

### 📖 Documentation
- **README.md** - Overview and folder structure
- **QUICKSTART.md** (this file) - Get started quickly
- **docs/DATA_FORMAT.md** - How to format event entries
- **docs/CONTRIBUTING.md** - Guidelines for adding events
- **docs/ARCHITECTURE.md** - App architecture and tech stack
- **docs/API.md** - Query examples and code snippets

### ⚙️ Configuration
- **config/db_schema.json** - Database structure definition
- **config/categories.json** - Event categories and neighborhoods
- **config/settings.json** - App settings

### 📊 Data
- **data/events/** - Event files organized by category
  - happy_hours/
  - trivia_nights/
  - bingo_nights/
  - dining/
  - sports/
- **data/weekly_schedule.json** - Consolidated weekly view
- **data/venues/** - Venue master list (ready for expansion)

### 📝 Sample Data

Sample events are included in each category:
- Happy Hours: Monday margaritas, Tuesday wine down
- Trivia: Wednesday general knowledge, Thursday sports
- Bingo: Saturday drag bingo, Sunday brunch
- Dining: Featured restaurants
- Sports: Warriors and Giants games

## Adding Your First Event

### Step 1: Choose a Category
Pick from: happy_hours, trivia_nights, bingo_nights, dining, or sports

### Step 2: Create Event File
Add a JSON file to the appropriate folder:
```
data/events/[category]/[name].json
```

### Step 3: Use the Right Format
Follow the template in `docs/DATA_FORMAT.md`. Minimum required:

```json
{
  "id": "happy_hour_001_friday",
  "name": "Event Name",
  "category": "happy_hour",
  "venue": {
    "id": "venue_001",
    "name": "Venue Name",
    "address": "123 Main St, SF, CA 94101",
    "neighborhood": "Downtown/Financial District",
    "type": "bar"
  },
  "schedule": {
    "day_of_week": "Friday",
    "start_time": "16:00",
    "end_time": "18:00",
    "recurring": true
  },
  "details": {
    "description": "What happens here",
    "price": "$0 entry",
    "specials": ["Special 1", "Special 2"],
    "age_requirement": "21+",
    "featured": false
  },
  "last_updated": "2025-11-07T10:30:00Z"
}
```

### Step 4: Validate
Check the JSON is valid and all required fields are present.

### Step 5: Update Weekly Schedule (Optional)
Add event reference to `data/weekly_schedule.json` for consolidated view.

## Example Workflows

### Add Happy Hour Event
1. Create: `data/events/happy_hours/my_happy_hour.json`
2. Use EVENT template with category: `happy_hour`
3. Include drink specials in "specials" array
4. Mark `recurring: true` if it's every week

### Add Trivia Night
1. Create: `data/events/trivia_nights/my_trivia.json`
2. Include prizes and entry fee
3. Set time to evening (19:00-21:00)
4. Add optional theme

### Add Featured Restaurant
1. Create: `data/events/dining/restaurant_name.json`
2. Use category: `dining`
3. Include price range and special menu
4. Mark `featured: true` for day's special

### Add Sports Event
1. Create: `data/events/sports/game_name.json`
2. Use category: `sports`
3. Include venue capacity and ticket prices
4. Note game opponent and time

## Next Steps: Building the App

Once your database is populated, you can:

### Option 1: CLI App (Python)
```bash
python app.py --day friday --category happy_hour
```

### Option 2: Web App (JavaScript/React)
Interactive dashboard showing today's events by category

### Option 3: Mobile App (React Native/Flutter)
Mobile-friendly event guide with notifications

See **docs/ARCHITECTURE.md** for detailed tech recommendations.

## File Structure Tips

- Keep event files focused (one event per file or array)
- Use consistent naming: `[category]_[name]_[day].json`
- Store large files separately (>100 entries)
- Archive old events to `data/archived/`
- Update timestamps when modifying events

## Data Best Practices

- ✅ Always include venue phone and address
- ✅ Add ratings when available
- ✅ Include social media handles
- ✅ Mark featured events appropriately
- ✅ Keep descriptions concise
- ✅ Use proper date/time formats (ISO 8601)

## Validation Checklist

Before going live with events:
- [ ] JSON is valid (no syntax errors)
- [ ] All required fields present
- [ ] Event ID is unique
- [ ] Times in HH:MM 24-hour format
- [ ] Venue address is complete
- [ ] Phone number is valid
- [ ] Website URL is correct
- [ ] Last updated timestamp is current

## Common Questions

**Q: Can I bulk import events?**
A: Create script in `scripts/` folder to parse and validate CSV/JSON. See `docs/API.md` for examples.

**Q: How do I update the weekly schedule?**
A: Update `data/weekly_schedule.json` with event references, or create automation script in `scripts/`.

**Q: Can this work with a database instead of JSON?**
A: Yes! The schema is database-agnostic. Migrate to PostgreSQL when you're ready.

**Q: How do I handle events that don't happen every week?**
A: Set `recurring: false` in the schedule object, or add specific dates.

## Resources

- **JSON Validator**: https://jsonlint.com/
- **Regex Tester** (for validation): https://regex101.com/
- **ISO 8601 Format**: https://en.wikipedia.org/wiki/ISO_8601

## Support

For questions about the format or structure:
1. Check `docs/DATA_FORMAT.md` for specifications
2. Review sample files in `data/events/`
3. Look at `config/db_schema.json` for field requirements
4. See `docs/CONTRIBUTING.md` for guidelines

## Ready to Build?

1. Populate your database with SF events
2. Choose your tech stack (CLI, Web, or Mobile)
3. Build the UI using the architecture guidelines
4. Deploy and collect user feedback!

Happy building! 🎉

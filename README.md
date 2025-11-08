# SF Nightlife Database

A comprehensive, continuously updated database of weekly nightlife events in San Francisco. Includes happy hours, trivia nights, bingo events, featured restaurants/bars, and local sports activities.

## Folder Structure

```
sf-nightlife-db/
├── data/                    # Main data storage
│   ├── events/             # Individual event files by category
│   │   ├── happy_hours/
│   │   ├── trivia_nights/
│   │   ├── bingo_nights/
│   │   ├── dining/
│   │   └── sports/
│   ├── venues/             # Venue information and metadata
│   ├── weekly_schedule.json # Master weekly schedule
│   └── archived/           # Historical event data
├── config/                 # Configuration files
│   ├── db_schema.json      # Database structure definition
│   ├── categories.json     # Event categories
│   └── settings.json       # App settings
├── docs/                   # Documentation
│   ├── API.md             # API documentation
│   ├── DATA_FORMAT.md     # Data format specifications
│   └── CONTRIBUTING.md    # Contribution guidelines
├── assets/                # Static assets
│   ├── images/
│   └── templates/
├── scripts/               # Utility scripts
│   ├── import.py
│   ├── validate.py
│   └── export.py
└── README.md             # This file
```

## Data Categories

- **Happy Hours**: Time-specific drink deals and specials
- **Trivia Nights**: Weekly trivia competitions with venues and times
- **Bingo Nights**: Bingo events with themes and prize information
- **Dining**: Featured restaurants with special menus/deals
- **Sports**: Local games (Warriors, 49ers, Giants, Earthquakes, etc.)
- **Other Activities**: Comedy shows, music events, etc.

## Getting Started

1. See `docs/DATA_FORMAT.md` for the structure of event entries
2. Check `config/db_schema.json` for database schema
3. Add events to appropriate category folders in `data/events/`
4. Run validation scripts to ensure data integrity
5. Update `data/weekly_schedule.json` with current week's consolidated data

## Data Format

Events follow a consistent JSON format. See `docs/DATA_FORMAT.md` for detailed specifications.

## Contributing

See `CONTRIBUTING.md` for guidelines on adding or updating event information.

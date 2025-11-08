# SF Nightlife Database API Documentation

This document outlines how to query and use the SF Nightlife Database.

## Overview

The database is organized as JSON files that can be:
- Parsed and loaded directly
- Queried with simple file operations
- Aggregated into a weekly schedule
- Filtered by category, neighborhood, or day

## Database Structure

```
data/
├── events/
│   ├── happy_hours/
│   ├── trivia_nights/
│   ├── bingo_nights/
│   ├── dining/
│   ├── sports/
│   └── [other]/
├── venues/
├── weekly_schedule.json
└── archived/
```

## Querying Events

### Get All Events by Category

```python
import json

def get_events_by_category(category):
    """Get all events in a specific category"""
    with open(f'data/events/{category}/{category}.json', 'r') as f:
        return json.load(f)
```

### Get Events by Day of Week

```python
def get_events_by_day(day_of_week):
    """Get all events on a specific day"""
    with open('data/weekly_schedule.json', 'r') as f:
        schedule = json.load(f)
    return schedule['daily_breakdown'][day_of_week]['events']
```

### Get Featured Events

```python
def get_featured_events():
    """Get all featured events for the week"""
    with open('data/weekly_schedule.json', 'r') as f:
        schedule = json.load(f)
    return schedule['summary']['featured_events']
```

### Get Events by Neighborhood

```python
def get_events_by_neighborhood(neighborhood):
    """Get all events in a specific neighborhood"""
    events = []
    categories = ['happy_hours', 'trivia_nights', 'bingo_nights', 'dining', 'sports']

    for category in categories:
        try:
            with open(f'data/events/{category}/{category}.json', 'r') as f:
                category_events = json.load(f)
                for event in category_events:
                    if event['venue']['neighborhood'] == neighborhood:
                        events.append(event)
        except FileNotFoundError:
            continue

    return events
```

### Get Events by Time Range

```python
def get_events_by_time(day, start_time, end_time):
    """Get events within a specific time range on a given day"""
    # Convert times to comparable format
    def time_to_minutes(time_str):
        h, m = map(int, time_str.split(':'))
        return h * 60 + m

    start_mins = time_to_minutes(start_time)
    end_mins = time_to_minutes(end_time)

    with open('data/weekly_schedule.json', 'r') as f:
        schedule = json.load(f)

    events = schedule['daily_breakdown'][day]['events']
    matching_events = []

    for event_id in events:
        # Load event details and check time
        # (implementation depends on event storage structure)
        pass

    return matching_events
```

## Weekly Schedule Format

The `weekly_schedule.json` provides a consolidated view:

```json
{
  "week_starting": "2025-11-10",
  "summary": {
    "total_events": 45,
    "featured_events": [
      {
        "id": "event_id",
        "name": "Event Name",
        "day": "Friday",
        "time": "19:00"
      }
    ]
  },
  "daily_breakdown": {
    "Monday": {
      "events": ["event_id_1", "event_id_2"],
      "total": 2
    }
  }
}
```

## Venue API

### Get Venue Information

```python
def get_venue(venue_id):
    """Get detailed information about a venue"""
    with open(f'data/venues/{venue_id}.json', 'r') as f:
        return json.load(f)
```

### Get All Events at a Venue

```python
def get_events_at_venue(venue_name):
    """Get all events at a specific venue"""
    events = []
    categories = ['happy_hours', 'trivia_nights', 'bingo_nights', 'dining', 'sports']

    for category in categories:
        try:
            with open(f'data/events/{category}/{category}.json', 'r') as f:
                category_events = json.load(f)
                for event in category_events:
                    if event['venue']['name'] == venue_name:
                        events.append(event)
        except FileNotFoundError:
            continue

    return events
```

## Filtering and Sorting

### Filter Events by Age Requirement

```python
def get_all_ages_events(day=None):
    """Get all events that are open to all ages"""
    events = []
    categories = ['happy_hours', 'trivia_nights', 'bingo_nights', 'dining', 'sports']

    for category in categories:
        try:
            with open(f'data/events/{category}/{category}.json', 'r') as f:
                category_events = json.load(f)
                for event in category_events:
                    if event['details']['age_requirement'] == 'all_ages':
                        if day is None or event['schedule']['day_of_week'] == day:
                            events.append(event)
        except FileNotFoundError:
            continue

    return events
```

### Filter by Price Range

```python
def get_free_events(day=None):
    """Get all free entry events"""
    events = []
    categories = ['happy_hours', 'trivia_nights', 'bingo_nights', 'dining', 'sports']

    for category in categories:
        try:
            with open(f'data/events/{category}/{category}.json', 'r') as f:
                category_events = json.load(f)
                for event in category_events:
                    if '$0' in event['details'].get('price', ''):
                        if day is None or event['schedule']['day_of_week'] == day:
                            events.append(event)
        except FileNotFoundError:
            continue

    return events
```

## Data Validation

### Validate Event Structure

```python
def validate_event(event):
    """Validate that an event follows the schema"""
    required_fields = ['id', 'name', 'category', 'venue', 'schedule', 'details']

    for field in required_fields:
        if field not in event:
            return False, f"Missing required field: {field}"

    # Validate nested fields
    if 'name' not in event['venue']:
        return False, "Venue must have a name"

    if 'day_of_week' not in event['schedule']:
        return False, "Schedule must have day_of_week"

    return True, "Valid"
```

## Import/Export

### Export Events to CSV

```python
import csv

def export_to_csv(filename='events.csv'):
    """Export all events to CSV format"""
    with open(filename, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['ID', 'Name', 'Category', 'Venue', 'Day', 'Time', 'Price'])

        # Load and write events...
```

### Import from External Source

```python
def import_events(source_file):
    """Import events from external JSON or CSV file"""
    # Parse source file and validate
    # Map to database format
    # Write to appropriate category folder
    pass
```

## Performance Considerations

- Keep individual event files under 100 entries each
- Archive old events to the `archived/` folder periodically
- Use the weekly schedule for frequently accessed data
- Cache results when querying multiple categories

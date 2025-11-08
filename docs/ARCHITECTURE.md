# SF Nightlife App Architecture

## Overview

The SF Nightlife Database is designed to power an interactive web/mobile app that shows "nightlife of the day in SF" with featured events, happy hours, trivia nights, bingo nights, sports, and dining options.

## Architecture Layers

### 1. Data Layer
**Location**: `/data/`

- **Structure**: JSON files organized by event category
- **Storage**: File-based (can upgrade to database later)
- **Weekly Schedule**: Consolidated view in `weekly_schedule.json`
- **Venues**: Master venue registry for reference

**Features**:
- Category-based organization (happy_hours, trivia_nights, bingo_nights, dining, sports)
- Recurring event support with exception handling
- Neighborhood-based filtering
- Rating integration (Google/Yelp)

### 2. Configuration Layer
**Location**: `/config/`

- `db_schema.json`: Defines data structure and validation rules
- `categories.json`: Event categories with icons, colors, and metadata
- `settings.json`: App configuration (to be created)

### 3. API/Business Logic Layer
**Location**: Could be `/scripts/` or a separate app backend

**Responsibilities**:
- Load and parse event data
- Filter/sort events by:
  - Day of week
  - Category
  - Neighborhood
  - Time range
  - Featured status
  - Price/Free
  - Age requirement
- Aggregate weekly schedule
- Validate data integrity
- Generate daily/weekly views

### 4. Presentation Layer
**Location**: Frontend (web, mobile, or CLI)

**Views**:
- Daily view: All events for selected day
- Featured view: Highlighted events
- Category view: All events in a category
- Neighborhood view: Events near user
- Search/filter: Advanced filtering
- Venue detail: Full venue information

## App Flow

```
User Opens App
    ↓
Load Today's Date & Events
    ↓
Display Daily View with:
  - Featured Events (highlighted)
  - Happy Hours
  - Trivia Nights
  - Bingo Nights
  - Featured Restaurants
  - Featured Bars
  - Sports Games
    ↓
User Can:
  - Filter by category
  - Filter by neighborhood
  - View by different day
  - Search for venues
  - See event details
  - Get directions/contact info
```

## Data Flow Example: Daily View

```
1. Frontend requests events for 2025-11-07 (Friday)
2. API loads weekly_schedule.json
3. API retrieves event IDs for Friday
4. API loads individual event files
5. API filters by featured status, sorts by time
6. API returns:
   - Featured events (pinned at top)
   - Happy hours (4pm-7pm)
   - Trivia nights (evening)
   - Bingo nights (late evening)
   - Featured restaurants (dinner times)
   - Featured bars (evening/night)
   - Sports games (various times)
7. Frontend renders with colors, icons, and details
8. User can click for more info (address, phone, website, ratings)
```

## Tech Stack Recommendations

### For CLI/Terminal App
- **Framework**: Python with Click or Typer for menu system
- **Data**: JSON parsing with built-in json library
- **Display**: Rich library for tables/formatting
- **Features**: Interactive menus, color output, search

### For Web App
- **Frontend**: React, Vue, or plain HTML/CSS/JS
- **Backend**: Node.js/Express, Python/Flask, or static files
- **Database**: Keep JSON files or migrate to PostgreSQL
- **API**: REST endpoints for filtering/searching

### For Mobile App
- **Framework**: React Native or Flutter
- **Local Data**: Bundle JSON or fetch from API
- **Features**: Push notifications for featured events

## Feature Priorities

### Phase 1: MVP
- [ ] Display today's events by category
- [ ] Show featured events
- [ ] Filter by category
- [ ] Basic venue information (name, address, time)

### Phase 2: Enhancement
- [ ] Search by neighborhood
- [ ] Multi-day view
- [ ] Full venue details (ratings, phone, website)
- [ ] Event details (prices, specials, capacity)

### Phase 3: Advanced
- [ ] Favorite/save events
- [ ] Map view with locations
- [ ] Integration with Google Maps/Uber
- [ ] Push notifications for featured events
- [ ] User preferences/personalization

### Phase 4: Community
- [ ] User reviews/ratings
- [ ] Event submission by venues
- [ ] Community event calendar
- [ ] Social sharing

## Database Design Considerations

### Current (File-based)
**Pros**:
- Easy to start and manage
- No database setup required
- Version control friendly
- Easy to archive/backup

**Cons**:
- Limited query capabilities
- Not ideal for complex filtering
- Concurrent updates risky

### Future (Database)
**When to migrate**:
- User base > 10,000
- Real-time updates needed
- Complex analytics required

**Recommended**: PostgreSQL with JSON columns to preserve flexibility

## Scaling Path

1. **Current**: JSON files + simple API
2. **Phase 1**: Add database layer, keep JSON for backup
3. **Phase 2**: Full PostgreSQL, JSON as cache layer
4. **Phase 3**: Add caching layer (Redis), CDN for images
5. **Phase 4**: Microservices for different features

## Integration Points

### External APIs (Future)
- **Google Maps**: Venue locations and directions
- **Eventbrite**: Event listings
- **Yelp/Google**: Ratings and reviews
- **Ticketmaster**: Sports and concert tickets
- **Uber Eats**: Restaurant reservations

### Data Sources
- Manual entry (venues submit)
- Web scraping (restaurant websites)
- API integration (sports leagues)
- User submissions (community events)

## Security Considerations

- Validate all event data before storing
- Sanitize venue contact information
- Rate limit API endpoints
- HTTPS for production app
- User authentication for favorites/saves
- Privacy policy for location tracking

## Success Metrics

- Daily active users
- Conversion rate (users booking/attending events)
- User retention
- Event diversity (new events per week)
- Coverage (neighborhoods, venues, categories)
- User satisfaction (ratings/reviews)

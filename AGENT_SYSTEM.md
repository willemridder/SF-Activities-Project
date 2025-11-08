# SF Nightlife Agent System Documentation

## Overview

Your SF Nightlife app now features an intelligent **multi-agent system** that powers different aspects of the UI. Each agent is a specialized module responsible for specific functionality.

## 🤖 The Five Specialized Agents

### 1. 🏀 Sports Research Agent
**Responsibility**: Research and manage all sports-related events

**Capabilities**:
- Track Warriors, Giants, 49ers, and Earthquakes home games
- Research upcoming sports events (7-day, 30-day outlook)
- Identify sports bars and watch parties
- Analyze game impact on the area (crowd levels, parking, pricing)
- Provide game recommendations based on interests

**Key Methods**:
```javascript
agents.agents.sports.researchUpcomingSports(days)  // Research next N days
agents.agents.sports.getSportsBars(events)         // Find sports bars
agents.agents.sports.analyzeGameImpact(date)       // Predict impact
```

**Data Tracked**:
- Team schedules
- Home game locations
- Expected crowds
- Parking difficulty
- Bar closures
- Price changes

---

### 2. 🍽️ Bars & Restaurants Agent
**Responsibility**: Manage dining and drinking venues

**Capabilities**:
- Track happy hour deals by day
- Organize restaurants by cuisine
- Identify Michelin-starred restaurants
- Check availability for reservations
- Monitor price ranges and ratings
- Organize by venue type (bar, brewery, wine bar, restaurant)

**Key Methods**:
```javascript
agents.agents.dining.getHappyHourDeals(day)        // Get HH by day
agents.agents.dining.getRestaurantsByCuisine(type) // Filter by cuisine
agents.agents.dining.getMichelinRestaurants()      // Fine dining
agents.agents.dining.getAvailableReservations(date) // Check availability
```

**Data Tracked**:
- Happy hour times and discounts
- Restaurant cuisine types
- Michelin ratings
- Price ranges
- Reservation requirements
- Operating hours
- Specialty dishes

---

### 3. 🎭 Activities Agent
**Responsibility**: Manage entertainment and activities

**Capabilities**:
- Catalog nightlife events (drag shows, comedy, etc.)
- Track live entertainment
- Monitor cultural events
- Filter by type and neighborhood
- Identify featured activities
- Age-appropriate recommendations

**Key Methods**:
```javascript
agents.agents.activities.getActivitiesByType(type)        // Filter by type
agents.agents.activities.getEntertainmentOptions(day)     // Get by day
agents.agents.activities.getActivitiesByNeighborhood(area) // Filter by area
agents.agents.activities.getFeaturedActivities()          // Best picks
agents.agents.activities.getActivityRecommendations(age)  // Age-based filter
```

**Data Tracked**:
- Event types
- Venues and neighborhoods
- Showtimes
- Pricing
- Ratings
- Featured status
- Age restrictions

---

### 4. ⏰ Update & Projection Agent
**Responsibility**: Project upcoming events and manage app updates

**Capabilities**:
- Project the next available event
- Calculate time until events
- Schedule periodic updates
- Find events starting soon
- Provide real-time recommendations
- Alert when to leave

**Key Methods**:
```javascript
agents.agents.updates.projectNextAvailableEvent(events)  // What's next?
agents.agents.updates.scheduleUpdates(intervalMinutes)   // Set update frequency
agents.agents.updates.checkUpdateNeeded()                // Time to update?
agents.agents.updates.getEventsSoon(events, minutes)     // Events within X minutes
agents.agents.updates.getRecommendation(minutesUntil)    // Smart suggestions
```

**Smart Features**:
- Calculates minutes until events
- Provides formatted time ("2h 30m", "45 minutes", "Now!")
- Gives recommendations:
  - "Leave now to arrive on time!"
  - "Consider leaving in 15 minutes"
  - "Start preparing to go"
  - "Plenty of time to plan"

**Auto-Updates**:
- Checks if app needs updating
- Refreshes every hour (configurable)
- Updates next event projection
- Refreshes agent status

---

### 5. 📊 Event History & Repeating Events Agent
**Responsibility**: Track user behavior and manage recurring events

**Capabilities**:
- Track user attendance/interest
- Identify repeating events (weekly trivia, drag show, etc.)
- Create event logs for recurring series
- Generate user preference profiles
- Predict likely next events
- Store history in browser (localStorage)

**Key Methods**:
```javascript
agents.agents.history.trackAttendance(eventId, name, venue, date)     // Log attendance
agents.agents.history.trackInterest(eventId, name, interested)        // Mark as interested
agents.agents.history.identifyRepeatingEvents(events)                // Find recurring
agents.agents.history.getNextOccurrence(eventSeries, startDate)      // When's it again?
agents.agents.history.getAttendanceHistory(limit)                    // View history
agents.agents.history.getUserPreferences()                           // What do you like?
agents.agents.history.createEventLog(eventSeriesKey)                 // Create recurring log
agents.agents.history.predictNextEvent(allEvents)                    // What's your next event?
```

**Data Tracked** (in localStorage):
- Events attended
- Events marked as interested
- Favorite venues
- Usage patterns
- Recurring event preferences
- Attendance history
- User preference profile

**Repeating Events**:
- Automatically identifies recurring events (weekly trivia, drag bingo, etc.)
- Creates 12-week look-ahead for each recurring series
- Tracks attendance for each occurrence
- Generates attendance logs

---

## 🔄 How Agents Coordinate

### Agent Manager

The **AgentManager** class coordinates all agents:

```javascript
const agents = agentManager;

// Get comprehensive data from all agents
const data = agents.getComprehensiveEventData(events, 'Friday');

// Returns:
// {
//   happyHours: [...],          // From dining agent
//   activities: [...],           // From activities agent
//   nextEvent: {...},            // From updates agent
//   eventsSoon: [...],           // From updates agent
//   repeatingEvents: {...},      // From history agent
//   agentReports: {...}          // Status from all agents
// }

// Check health of all agents
const health = agents.getAgentHealth();
// Returns status, last update time, seconds since update
```

### Multi-Agent Workflow

```
User Opens App
    ↓
Agents Initialize
    ├─ Sports Agent: Load team schedules
    ├─ Dining Agent: Load venue data
    ├─ Activities Agent: Load event catalog
    ├─ Updates Agent: Set update schedule
    └─ History Agent: Load user history from localStorage
    ↓
App Requests Comprehensive Data
    ↓
Agents Coordinate (Agent Manager)
    ├─ Dining Agent: Get happy hours for Friday
    ├─ Activities Agent: Get entertainment for Friday
    ├─ Updates Agent: Project next event
    ├─ Updates Agent: Find events starting soon
    └─ History Agent: Identify repeating events
    ↓
UI Renders with Agent Data
    ├─ Next Event Widget (Updates Agent)
    ├─ Happy Hour Tab (Dining Agent)
    ├─ Activities Tab (Activities Agent)
    ├─ Repeating Events Tab (History Agent)
    └─ History/Preferences Tab (History Agent)
    ↓
Every Minute: Update next event widget
Every Hour: Check if full update needed
Continuously: Track user interactions
```

---

## 🎯 Key Features Powered by Agents

### 1. Multi-Day Look-Ahead
**Agent**: Updates & History Agents

Users can now browse events for the next 7 days:
- Click day buttons (Friday, Saturday, Sunday, etc.)
- Each day shows available events
- History agent learns preferences
- Updates agent projects next available for each day

### 2. Next Event Widget
**Agent**: Updates Agent

- **Real-time**: Shows event starting soonest
- **Smart Timing**: Calculates exact time until event
- **Recommendations**: "Leave now", "Start preparing", etc.
- **Updates**: Refreshes every minute

### 3. Happy Hour by Day
**Agent**: Dining Agent

- Automatically filters happy hours by selected day
- Shows all deals for that day
- Organized by venue and time

### 4. Repeating Events Tracking
**Agent**: History Agent

- 🔄 Badge shows recurring events
- "Weekly Series" tab shows all recurring patterns
- Creates 12-week schedule for each series
- Tracks attendance for each occurrence

### 5. User Preference Learning
**Agent**: History Agent

- Tracks which events user is interested in
- Learns favorite venues
- Predicts next event based on history
- Shows statistics (total tracked, unique venues)

### 6. Intelligent Update Scheduling
**Agent**: Updates Agent

- Checks every hour if update needed
- Refreshes stale data
- Updates next event widget
- Configurable intervals

---

## 📊 Agent Status Display

The app shows real-time agent health:

```
🤖 Agent Status
├─ sports ✅ (updated 5 minutes ago)
├─ dining ✅ (updated 2 minutes ago)
├─ activities ✅ (updated 8 minutes ago)
├─ updates ✅ (updated 1 minute ago)
└─ history ✅ (updated 30 seconds ago)
```

---

## 💾 Data Persistence

### LocalStorage Keys

The History Agent stores data in browser's localStorage:

```javascript
// Attendance/interest records
localStorage.getItem('sf-nightlife-history')

// Repeating events identified
localStorage.getItem('sf-nightlife-repeating')
```

**Data survives**:
- Browser refresh
- New tab/window
- Session restart

**Data cleared when**:
- User clears browser data
- User uninstalls/reinstalls app

---

## 🔧 Using the Agents

### In Your Code

```javascript
// Access individual agents
agents.agents.sports        // Sports Research Agent
agents.agents.dining        // Bars & Restaurants Agent
agents.agents.activities    // Activities Agent
agents.agents.updates       // Update & Projection Agent
agents.agents.history       // Event History Agent

// Example: Get happy hours
const happyHours = agents.agents.dining.getHappyHourDeals('Friday');

// Example: Get next event
const nextEvent = agents.agents.updates.projectNextAvailableEvent(allEvents);

// Example: Track attendance
agents.agents.history.trackAttendance('event_id', 'Event Name', 'Venue', new Date());

// Example: Get user preferences
const prefs = agents.agents.history.getUserPreferences();
```

### Agent Reports

```javascript
// Get report from any agent
agents.agents.dining.getReport();

// Returns:
// {
//   agent: "🍽️ Bars & Restaurants Agent",
//   venues: {
//     totalBars: 5,
//     totalRestaurants: 4,
//     totalBreweries: 2,
//     totalWineBars: 1
//   },
//   lastUpdated: Date
// }
```

---

## 🚀 Agent Features in the UI

### Tab Navigation

- **All Events**: Default view with filters
- **Happy Hour**: Agent-powered happy hour deals
- **Dining**: Restaurant and bar database
- **Activities**: Entertainment and events
- **Repeating Events**: 🔄 Weekly series with schedules
- **History**: Your preferences and statistics

### Day Navigation

- Browse next 7 days
- Each day updates event displays
- History agent learns your patterns

### Next Event Widget

- Shows event starting soonest
- Updates every minute
- Smart recommendation based on time until start

### Event Cards

- **⭐ FEATURED**: Hand-picked best events
- **🔄 WEEKLY**: Recurring events from History Agent

---

## 📈 Future Agent Enhancements

Potential expansions:

```javascript
// Social Agent (not yet implemented)
// - Track which events your friends are going to
// - Coordinate group outings
// - Social media integration

// Weather Agent (not yet implemented)
// - Factor in weather for outdoor events
// - Recommend indoor activities on rainy days
// - Seasonal event awareness

// Budget Agent (not yet implemented)
// - Track spending on events
// - Find free/cheap activities
// - Budget recommendations

// Traffic Agent (not yet implemented)
// - Calculate travel time to events
// - Suggest departure time
// - Find parking availability

// Notification Agent (not yet implemented)
// - Push notifications for upcoming events
// - Remind about favorite venues
// - Alert when new recurring events added
```

---

## 🎮 Quick Start with Agents

### To Use the Agent-Powered Version

```html
<!-- Use this file instead of original index.html -->
index_with_agents.html
```

### To Access Agents in Console

```javascript
// Open browser console (F12)

// Get sports agent
agents.agents.sports

// Get next event
const next = agents.agents.updates.projectNextAvailableEvent(allEvents);
console.log(next);

// Get user preferences
const prefs = agents.agents.history.getUserPreferences();
console.log(prefs);

// Get all agent reports
console.log(agents.getAllReports());

// Check agent health
console.log(agents.getAgentHealth());
```

---

## 📚 Agent Classes Reference

### BaseAgent
All agents inherit from this base class:
- `log()` - Log messages with agent name
- `warn()` - Log warnings
- `error()` - Log errors
- `getReport()` - Get agent status report

### Agent-Specific Properties
- **SportsResearchAgent**: `sportsData`, `lastUpdated`
- **BarsRestaurantsAgent**: `venues` (bars, restaurants, breweries, wineBars)
- **ActivitiesAgent**: `activities` (nightlife, entertainment, sports, cultural)
- **UpdateProjectionAgent**: `projections`, `updateSchedule`
- **EventHistoryAgent**: `history`, `repeatingEvents`, `patterns`

---

## 🎊 Summary

Your agent system provides:

✅ **Specialized Intelligence**: Each agent is an expert in its domain
✅ **Coordination**: Agents work together for comprehensive data
✅ **Learning**: History agent learns user preferences
✅ **Real-time Updates**: Auto-updating next event widget
✅ **Persistence**: User data saved in browser
✅ **Scalability**: Easy to add new agents
✅ **Monitoring**: Health checks and reports

The agent system makes your SF Nightlife Guide truly intelligent! 🤖

---

## Questions?

- See **index_with_agents.html** for UI integration
- See **agents_system.js** for implementation details
- Open browser console to inspect agent data
- Check agent status widget in the app

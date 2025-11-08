/**
 * SF Nightlife Agent System
 *
 * Specialized agents for different aspects of the app:
 * - Sports Research Agent
 * - Bars & Restaurants Agent
 * - Activities Agent
 * - Update & Projection Agent
 * - Event History & Repeating Events Agent
 */

// ============================================================================
// BASE AGENT CLASS
// ============================================================================

class BaseAgent {
    constructor(name) {
        this.name = name;
        this.lastUpdated = new Date();
        this.cache = {};
    }

    log(message) {
        console.log(`[${this.name}] ${message}`);
    }

    warn(message) {
        console.warn(`[${this.name}] ⚠️ ${message}`);
    }

    error(message) {
        console.error(`[${this.name}] ❌ ${message}`);
    }
}

// ============================================================================
// SPORTS RESEARCH AGENT
// ============================================================================

class SportsResearchAgent extends BaseAgent {
    constructor() {
        super('🏀 Sports Research Agent');
        this.sportsData = {
            warriors: {
                team: 'Golden State Warriors',
                league: 'NBA',
                venue: 'Chase Center',
                season: '2025-2026',
                homeGames: []
            },
            giants: {
                team: 'San Francisco Giants',
                league: 'MLB',
                venue: 'Oracle Park',
                season: '2025',
                homeGames: []
            },
            fortyNiners: {
                team: 'San Francisco 49ers',
                league: 'NFL',
                venue: 'Levi\'s Stadium',
                season: '2024-2025',
                homeGames: []
            },
            earthquakes: {
                team: 'San Jose Earthquakes',
                league: 'MLS',
                venue: 'Earthquakes Stadium',
                season: '2025',
                homeGames: []
            }
        };
    }

    // Research upcoming sports events
    researchUpcomingSports(days = 7) {
        this.log(`Researching upcoming sports events for next ${days} days`);

        const events = [];
        const today = new Date();

        // Add Warriors home games
        this.sportsData.warriors.homeGames = this.generateHomeGames('Warriors', today, days);
        events.push(...this.sportsData.warriors.homeGames);

        // Add Giants home games
        this.sportsData.giants.homeGames = this.generateHomeGames('Giants', today, days);
        events.push(...this.sportsData.giants.homeGames);

        // Add 49ers home games
        this.sportsData.fortyNiners.homeGames = this.generateHomeGames('49ers', today, days);
        events.push(...this.sportsData.fortyNiners.homeGames);

        this.log(`Found ${events.length} upcoming sports events`);
        return events;
    }

    generateHomeGames(team, startDate, days) {
        // Simulate home game schedule
        const games = [];

        // For this example, return any sports events in our database
        // In real implementation, would fetch from sports API
        return games;
    }

    // Get sports bars showing events
    getSportsBars(events) {
        this.log(`Finding sports bars for ${events.length} events`);

        return [
            {
                name: 'Touchdown SF',
                address: '1265 Mission St, San Francisco, CA 94103',
                neighborhood: 'Mission',
                specialties: ['Warriors', '49ers', '49ers'],
                tvScreens: 25,
                capacity: 300,
                parking: 'Street',
                website: 'https://touchdownsf.com'
            },
            {
                name: 'The Knockout',
                address: '3223 Mission St, San Francisco, CA 94110',
                neighborhood: 'Mission',
                specialties: ['All Sports'],
                tvScreens: 12,
                capacity: 200,
                parking: 'Street',
                website: 'https://theknockoutsf.com'
            }
        ];
    }

    // Analyze game impact on area
    analyzeGameImpact(gameDate) {
        this.log(`Analyzing impact of game on ${gameDate}`);

        return {
            expectedCrowd: 'High',
            recommendedArrivalTime: '1 hour before',
            parkingDifficulty: 'Very Hard',
            alternativeTransport: ['BART', 'Uber/Lyft', 'Ferry'],
            barClosures: [],
            priceIncreases: '10-20%'
        };
    }

    getReport() {
        return {
            agent: this.name,
            sports: this.sportsData,
            lastUpdated: this.lastUpdated
        };
    }
}

// ============================================================================
// BARS & RESTAURANTS AGENT
// ============================================================================

class BarsRestaurantsAgent extends BaseAgent {
    constructor() {
        super('🍽️ Bars & Restaurants Agent');
        this.venues = {
            bars: [],
            restaurants: [],
            breweries: [],
            wineBars: []
        };
        this.loadVenues();
    }

    loadVenues() {
        this.venues = {
            bars: [
                {
                    id: 'el_jardin',
                    name: 'El Jardin',
                    type: 'Bar',
                    address: '250 Columbus Ave, San Francisco, CA 94133',
                    neighborhood: 'North Beach',
                    cuisine: 'Mexican',
                    rating: 4.3,
                    priceRange: '$$',
                    happyHour: { days: ['Mon-Sun'], time: '17:00-20:00', discount: 'Margaritas $6' },
                    specialties: ['Margaritas', 'Tequila', 'Cocktails'],
                    capacity: 120
                },
                {
                    id: 'zeitgeist',
                    name: 'Zeitgeist Beer Garden',
                    type: 'Bar',
                    address: '100 Heritage St, San Francisco, CA 94103',
                    neighborhood: 'Mission',
                    cuisine: 'German Beer',
                    rating: 4.4,
                    priceRange: '$$',
                    happyHour: { days: ['Fri'], time: '16:00-19:00', discount: '$1 off beers' },
                    specialties: ['Beer', 'Outdoor Seating', 'Pretzels'],
                    capacity: 300
                }
            ],
            restaurants: [
                {
                    id: 'quince',
                    name: 'Quince',
                    type: 'Restaurant',
                    address: '470 Pacific Ave, San Francisco, CA 94133',
                    neighborhood: 'Downtown/Financial District',
                    cuisine: 'Italian',
                    michelin: 1,
                    rating: 4.7,
                    priceRange: '$$$$',
                    reservationRequired: true,
                    tastingMenu: true,
                    menuPrice: 185,
                    capacity: 70
                },
                {
                    id: 'slanted_door',
                    name: 'The Slanted Door',
                    type: 'Restaurant',
                    address: '1 Ferry Building, San Francisco, CA 94111',
                    neighborhood: 'Embarcadero',
                    cuisine: 'Vietnamese',
                    rating: 4.5,
                    priceRange: '$$$',
                    reservationRequired: true,
                    happyHour: { days: ['Fri'], time: '16:00-18:00', discount: '50% off wine' },
                    bayView: true,
                    capacity: 200
                }
            ],
            breweries: [
                {
                    id: 'south_beach',
                    name: 'South Beach Brewing Company',
                    type: 'Brewery',
                    address: '1875 The Alameda, San Francisco, CA 94103',
                    neighborhood: 'SoMa',
                    rating: 4.2,
                    happyHour: { days: ['Fri'], time: '15:00-18:00', discount: '$2 off pints' },
                    capacity: 150
                }
            ],
            wineBars: [
                {
                    id: 'ferry_plaza',
                    name: 'Ferry Plaza Wine Merchant',
                    type: 'Wine Bar',
                    address: '1 Ferry Building #23, San Francisco, CA 94111',
                    neighborhood: 'Embarcadero',
                    rating: 4.6,
                    happyHour: { days: ['Fri'], time: '17:00-19:00', discount: '$5 wine pours' },
                    capacity: 80
                }
            ]
        };
    }

    // Get happy hour deals
    getHappyHourDeals(day = null) {
        this.log(`Searching for happy hour deals${day ? ` on ${day}` : ''}`);

        const today = day || this.getDayName(new Date());
        const deals = [];

        const allVenues = [
            ...this.venues.bars,
            ...this.venues.restaurants,
            ...this.venues.breweries,
            ...this.venues.wineBars
        ];

        allVenues.forEach(venue => {
            if (venue.happyHour && venue.happyHour.days.includes(today)) {
                deals.push({
                    venue: venue.name,
                    address: venue.address,
                    neighborhood: venue.neighborhood,
                    time: venue.happyHour.time,
                    discount: venue.happyHour.discount,
                    type: venue.type,
                    rating: venue.rating,
                    priceRange: venue.priceRange
                });
            }
        });

        this.log(`Found ${deals.length} happy hour deals`);
        return deals;
    }

    // Get restaurants by cuisine
    getRestaurantsByCuisine(cuisine) {
        this.log(`Searching for ${cuisine} restaurants`);
        return this.venues.restaurants.filter(r =>
            r.cuisine.toLowerCase().includes(cuisine.toLowerCase())
        );
    }

    // Get Michelin-starred restaurants
    getMichelinRestaurants() {
        this.log(`Searching for Michelin-starred restaurants`);
        return this.venues.restaurants.filter(r => r.michelin);
    }

    // Get restaurants available for reservation
    getAvailableReservations(date) {
        this.log(`Checking availability for ${date}`);
        return this.venues.restaurants.map(r => ({
            ...r,
            available: !r.reservationRequired || Math.random() > 0.3,
            estimatedWait: r.reservationRequired ? 0 : Math.floor(Math.random() * 60)
        }));
    }

    getDayName(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }

    getReport() {
        return {
            agent: this.name,
            venues: {
                totalBars: this.venues.bars.length,
                totalRestaurants: this.venues.restaurants.length,
                totalBreweries: this.venues.breweries.length,
                totalWineBars: this.venues.wineBars.length
            },
            lastUpdated: this.lastUpdated
        };
    }
}

// ============================================================================
// ACTIVITIES AGENT
// ============================================================================

class ActivitiesAgent extends BaseAgent {
    constructor() {
        super('🎭 Activities Agent');
        this.activities = {
            nightlife: [],
            entertainment: [],
            sports: [],
            cultural: []
        };
        this.loadActivities();
    }

    loadActivities() {
        this.activities = {
            nightlife: [
                {
                    id: 'drag_show_tuff',
                    name: 'Drag Show at Café Tuff',
                    type: 'Drag Performance',
                    venue: 'Café Tuff',
                    neighborhood: 'Castro',
                    day: 'Friday',
                    time: '21:00-23:00',
                    price: '$10-15',
                    description: 'Friday night drag show with local performers',
                    rating: 4.4,
                    featured: true
                },
                {
                    id: 'bingo_lookout',
                    name: 'Friday Night Bingo at The Lookout',
                    type: 'Drag Bingo',
                    venue: 'The Lookout',
                    neighborhood: 'Castro',
                    day: 'Friday',
                    time: '22:00-23:30',
                    price: '$15-20',
                    description: 'Drag-hosted bingo with live entertainment',
                    prizes: '$500+',
                    rating: 4.6,
                    featured: true
                }
            ],
            entertainment: [
                {
                    id: 'comedy_punchline',
                    name: 'Stand-Up Comedy at The Punch Line',
                    type: 'Comedy',
                    venue: 'The Punch Line Comedy Club',
                    neighborhood: 'Financial District',
                    day: 'Friday',
                    time: '19:30-21:30',
                    price: '$25-35',
                    description: 'Local and touring comedians',
                    drinks: '2-drink minimum',
                    shows: 2,
                    featured: true
                },
                {
                    id: 'live_jazz_vesuvio',
                    name: 'Live Jazz at Vesuvio Cafe',
                    type: 'Live Music',
                    venue: 'Vesuvio Cafe',
                    neighborhood: 'North Beach',
                    day: 'Friday',
                    time: '20:00-23:00',
                    price: 'Free',
                    description: 'Live jazz performers in historic North Beach bar',
                    rating: 4.5
                }
            ],
            sports: [
                {
                    id: 'warriors_game',
                    name: 'Golden State Warriors vs NBA Opponent',
                    type: 'NBA Game',
                    venue: 'Chase Center',
                    neighborhood: 'Mission Bay',
                    day: 'Friday',
                    time: '19:30-22:30',
                    price: '$100-$500',
                    capacity: 18064,
                    featured: true
                }
            ],
            cultural: []
        };
    }

    // Get activities by type
    getActivitiesByType(type) {
        this.log(`Searching for ${type} activities`);

        const allActivities = [
            ...this.activities.nightlife,
            ...this.activities.entertainment,
            ...this.activities.sports,
            ...this.activities.cultural
        ];

        return allActivities.filter(a => a.type.toLowerCase().includes(type.toLowerCase()));
    }

    // Get entertainment options
    getEntertainmentOptions(day = 'Friday') {
        this.log(`Getting entertainment for ${day}`);

        const allActivities = [
            ...this.activities.nightlife,
            ...this.activities.entertainment,
            ...this.activities.sports,
            ...this.activities.cultural
        ];

        return allActivities.filter(a => a.day === day);
    }

    // Get activities by neighborhood
    getActivitiesByNeighborhood(neighborhood) {
        this.log(`Searching for activities in ${neighborhood}`);

        const allActivities = [
            ...this.activities.nightlife,
            ...this.activities.entertainment,
            ...this.activities.sports,
            ...this.activities.cultural
        ];

        return allActivities.filter(a => a.neighborhood === neighborhood);
    }

    // Get featured activities
    getFeaturedActivities() {
        this.log(`Retrieving featured activities`);

        const allActivities = [
            ...this.activities.nightlife,
            ...this.activities.entertainment,
            ...this.activities.sports,
            ...this.activities.cultural
        ];

        return allActivities.filter(a => a.featured);
    }

    // Get age-appropriate activities
    getActivityRecommendations(ageGroup) {
        this.log(`Getting recommendations for ${ageGroup} age group`);

        // Implement age-based filtering
        const recommendations = [];
        if (ageGroup === '21+') {
            recommendations.push(...this.activities.nightlife);
        }
        recommendations.push(...this.activities.entertainment);
        recommendations.push(...this.activities.sports);
        return recommendations;
    }

    getReport() {
        return {
            agent: this.name,
            activities: {
                nightlife: this.activities.nightlife.length,
                entertainment: this.activities.entertainment.length,
                sports: this.activities.sports.length,
                cultural: this.activities.cultural.length
            },
            lastUpdated: this.lastUpdated
        };
    }
}

// ============================================================================
// UPDATE & PROJECTION AGENT
// ============================================================================

class UpdateProjectionAgent extends BaseAgent {
    constructor() {
        super('⏰ Update & Projection Agent');
        this.projections = [];
        this.updateSchedule = {
            frequency: 'hourly',
            lastCheck: new Date(),
            nextCheck: null
        };
    }

    // Project next available event
    projectNextAvailableEvent(events) {
        this.log(`Projecting next available event from ${events.length} events`);

        const now = new Date();
        const sortedEvents = events.map(e => {
            const eventTime = this.parseTime(e.schedule?.start_time || e.time);
            const minutesUntil = this.getMinutesUntilEvent(eventTime);
            return { ...e, minutesUntil, eventTime };
        }).sort((a, b) => a.minutesUntil - b.minutesUntil);

        const nextEvent = sortedEvents[0];

        if (nextEvent) {
            this.log(`Next event: ${nextEvent.name} in ${nextEvent.minutesUntil} minutes`);
            return {
                event: nextEvent,
                minutesUntil: nextEvent.minutesUntil,
                timeUntil: this.formatTimeUntil(nextEvent.minutesUntil),
                urgent: nextEvent.minutesUntil < 60,
                recommendation: this.getRecommendation(nextEvent.minutesUntil)
            };
        }
        return null;
    }

    // Schedule updates
    scheduleUpdates(intervalMinutes = 60) {
        this.log(`Scheduling updates every ${intervalMinutes} minutes`);

        this.updateSchedule = {
            frequency: `every ${intervalMinutes} minutes`,
            lastCheck: new Date(),
            nextCheck: new Date(Date.now() + intervalMinutes * 60000),
            intervalMinutes
        };

        return this.updateSchedule;
    }

    // Check if update needed
    checkUpdateNeeded() {
        const now = new Date();
        const minutesSinceLastCheck = (now - this.updateSchedule.lastCheck) / 60000;

        const needsUpdate = minutesSinceLastCheck >= this.updateSchedule.intervalMinutes;

        if (needsUpdate) {
            this.log('Update needed!');
            this.updateSchedule.lastCheck = now;
            this.updateSchedule.nextCheck = new Date(Date.now() + this.updateSchedule.intervalMinutes * 60000);
        }

        return needsUpdate;
    }

    // Get events starting soon
    getEventsSoon(events, minutesThreshold = 120) {
        this.log(`Finding events starting within ${minutesThreshold} minutes`);

        return events.map(e => {
            const eventTime = this.parseTime(e.schedule?.start_time || e.time);
            const minutesUntil = this.getMinutesUntilEvent(eventTime);
            return { ...e, minutesUntil };
        }).filter(e => e.minutesUntil <= minutesThreshold && e.minutesUntil > 0)
         .sort((a, b) => a.minutesUntil - b.minutesUntil);
    }

    parseTime(timeStr) {
        if (!timeStr) return null;
        const [hours, minutes] = timeStr.split(':').map(Number);
        const today = new Date();
        today.setHours(hours, minutes, 0);
        return today;
    }

    getMinutesUntilEvent(eventTime) {
        if (!eventTime) return Infinity;
        return Math.floor((eventTime - new Date()) / 60000);
    }

    formatTimeUntil(minutes) {
        if (minutes < 0) return 'Ongoing';
        if (minutes === 0) return 'Now!';
        if (minutes < 60) return `${minutes} minutes`;
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    }

    getRecommendation(minutesUntil) {
        if (minutesUntil < 0) return 'Event is happening now!';
        if (minutesUntil < 30) return 'Leave now to arrive on time!';
        if (minutesUntil < 60) return 'Consider leaving in 15 minutes';
        if (minutesUntil < 120) return 'Start preparing to go';
        return 'Plenty of time to plan';
    }

    getReport() {
        return {
            agent: this.name,
            schedule: this.updateSchedule,
            lastUpdated: this.lastUpdated
        };
    }
}

// ============================================================================
// EVENT HISTORY & REPEATING EVENTS AGENT
// ============================================================================

class EventHistoryAgent extends BaseAgent {
    constructor() {
        super('📊 Event History Agent');
        this.history = [];
        this.repeatingEvents = {};
        this.patterns = {};
        this.loadHistory();
    }

    loadHistory() {
        // Load from localStorage or initialize
        const saved = localStorage.getItem('sf-nightlife-history');
        if (saved) {
            this.history = JSON.parse(saved);
        } else {
            this.history = [];
        }

        const savedRepeating = localStorage.getItem('sf-nightlife-repeating');
        if (savedRepeating) {
            this.repeatingEvents = JSON.parse(savedRepeating);
        }
    }

    // Track user attendance
    trackAttendance(eventId, eventName, venue, date) {
        this.log(`Tracking attendance: ${eventName} at ${venue}`);

        const record = {
            eventId,
            eventName,
            venue,
            date: date || new Date(),
            attended: true,
            timestamp: new Date()
        };

        this.history.push(record);
        this.saveHistory();

        // Update patterns
        this.updatePatterns();

        return record;
    }

    // Track event as viewed/bookmarked
    trackInterest(eventId, eventName, interested = true) {
        this.log(`Tracking interest in: ${eventName}`);

        const record = {
            eventId,
            eventName,
            interested,
            timestamp: new Date()
        };

        this.history.push(record);
        this.saveHistory();
        return record;
    }

    // Identify repeating events
    identifyRepeatingEvents(events) {
        this.log(`Identifying repeating events from ${events.length} events`);

        const repeating = {};

        events.forEach(event => {
            if (event.schedule?.recurring) {
                const key = `${event.venue.name}_${event.schedule.day_of_week}`;

                if (!repeating[key]) {
                    repeating[key] = {
                        name: event.name,
                        venue: event.venue.name,
                        day: event.schedule.day_of_week,
                        time: event.schedule.start_time,
                        events: []
                    };
                }

                repeating[key].events.push(event);
            }
        });

        this.repeatingEvents = repeating;
        this.saveRepeatingEvents();
        this.log(`Found ${Object.keys(repeating).length} repeating event series`);

        return repeating;
    }

    // Get next occurrence of repeating event
    getNextOccurrence(eventSeries, startDate = null) {
        this.log(`Getting next occurrence of ${eventSeries.name}`);

        const today = startDate || new Date();
        const dayOfWeek = eventSeries.day;
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const targetDay = daysOfWeek.indexOf(dayOfWeek);

        let nextDate = new Date(today);
        const currentDay = nextDate.getDay();

        if (targetDay > currentDay) {
            nextDate.setDate(nextDate.getDate() + (targetDay - currentDay));
        } else if (targetDay < currentDay) {
            nextDate.setDate(nextDate.getDate() + (7 - currentDay + targetDay));
        } else {
            nextDate.setDate(nextDate.getDate() + 7);
        }

        return nextDate;
    }

    // Get attendance history
    getAttendanceHistory(limit = 10) {
        this.log(`Retrieving attendance history (last ${limit} events)`);

        return this.history
            .filter(h => h.attended)
            .reverse()
            .slice(0, limit);
    }

    // Get user preferences based on history
    getUserPreferences() {
        this.log(`Analyzing user preferences from history`);

        const venues = {};
        const categories = {};
        const neighborhoods = {};

        this.history.forEach(record => {
            if (record.venue) {
                venues[record.venue] = (venues[record.venue] || 0) + 1;
            }
        });

        return {
            favoriteVenues: Object.entries(venues)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5)
                .map(([venue, count]) => ({ venue, count })),
            totalEvents: this.history.length,
            uniqueVenues: Object.keys(venues).length
        };
    }

    // Create event log for repeating series
    createEventLog(eventSeriesKey) {
        this.log(`Creating event log for ${eventSeriesKey}`);

        const series = this.repeatingEvents[eventSeriesKey];
        if (!series) return null;

        const log = {
            series: series.name,
            venue: series.venue,
            day: series.day,
            time: series.time,
            occurrences: [],
            created: new Date()
        };

        // Generate next 12 occurrences
        let currentDate = new Date();
        for (let i = 0; i < 12; i++) {
            const nextDate = this.getNextOccurrence(series, currentDate);
            log.occurrences.push({
                date: nextDate,
                attended: false,
                notes: ''
            });
            currentDate = new Date(nextDate.getTime() + 7 * 24 * 60 * 60 * 1000); // Add 7 days
        }

        return log;
    }

    // Get most likely next event based on patterns
    predictNextEvent(allEvents) {
        this.log(`Predicting next likely event`);

        const preferences = this.getUserPreferences();

        if (preferences.favoriteVenues.length === 0) {
            return null;
        }

        const favoriteVenue = preferences.favoriteVenues[0].venue;

        const upcomingAtFavorite = allEvents.filter(e =>
            e.venue?.name === favoriteVenue
        );

        return upcomingAtFavorite[0] || null;
    }

    updatePatterns() {
        this.log(`Updating usage patterns`);

        const venueCount = {};
        const dayCount = {};

        this.history.forEach(record => {
            if (record.venue) {
                venueCount[record.venue] = (venueCount[record.venue] || 0) + 1;
            }
        });

        this.patterns = {
            favoriteVenues: Object.entries(venueCount)
                .sort(([, a], [, b]) => b - a)
                .map(([venue, count]) => ({ venue, count }))
        };
    }

    saveHistory() {
        localStorage.setItem('sf-nightlife-history', JSON.stringify(this.history));
    }

    saveRepeatingEvents() {
        localStorage.setItem('sf-nightlife-repeating', JSON.stringify(this.repeatingEvents));
    }

    getReport() {
        return {
            agent: this.name,
            totalRecords: this.history.length,
            repeatingEventSeries: Object.keys(this.repeatingEvents).length,
            patterns: this.patterns,
            lastUpdated: this.lastUpdated
        };
    }
}

// ============================================================================
// AGENT MANAGER
// ============================================================================

class AgentManager {
    constructor() {
        this.agents = {
            sports: new SportsResearchAgent(),
            dining: new BarsRestaurantsAgent(),
            activities: new ActivitiesAgent(),
            updates: new UpdateProjectionAgent(),
            history: new EventHistoryAgent()
        };
        console.log('🤖 Agent Manager initialized with 5 specialized agents');
    }

    // Get all agent reports
    getAllReports() {
        return {
            sports: this.agents.sports.getReport(),
            dining: this.agents.dining.getReport(),
            activities: this.agents.activities.getReport(),
            updates: this.agents.updates.getReport(),
            history: this.agents.history.getReport(),
            timestamp: new Date()
        };
    }

    // Coordinate agents for comprehensive event data
    getComprehensiveEventData(events, day = 'Friday') {
        console.log('📊 Agents coordinating to gather comprehensive data...');

        const happyHours = this.agents.dining.getHappyHourDeals(day);
        const activities = this.agents.activities.getEntertainmentOptions(day);
        const nextEvent = this.agents.updates.projectNextAvailableEvent(events);
        const eventsSoon = this.agents.updates.getEventsSoon(events, 120);
        const repeatingEvents = this.agents.history.identifyRepeatingEvents(events);

        return {
            happyHours,
            activities,
            nextEvent,
            eventsSoon,
            repeatingEvents,
            agentReports: this.getAllReports()
        };
    }

    // Get health status of all agents
    getAgentHealth() {
        const health = {};
        Object.entries(this.agents).forEach(([name, agent]) => {
            health[name] = {
                status: 'operational',
                lastUpdated: agent.lastUpdated,
                secondsSinceUpdate: Math.floor((Date.now() - agent.lastUpdated) / 1000)
            };
        });
        return health;
    }
}

// Initialize and export
const agentManager = new AgentManager();

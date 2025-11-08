#!/usr/bin/env python3
"""
SF Nightlife Guide - Interactive CLI App
Shows what's happening tonight in San Francisco by category
"""

import json
import os
import sys
from pathlib import Path
from datetime import datetime
from typing import List, Dict, Any

class SFNightlifeApp:
    def __init__(self):
        self.base_path = Path(__file__).parent / "data"
        self.config_path = Path(__file__).parent / "config"
        self.events = {}
        self.load_all_events()

    def load_all_events(self):
        """Load all events from the database"""
        events_dir = self.base_path / "events"

        for category_dir in events_dir.iterdir():
            if category_dir.is_dir():
                category = category_dir.name.replace("_nights", "").replace("_", " ").title()
                self.events[category] = []

                for file in category_dir.glob("*.json"):
                    try:
                        with open(file, 'r') as f:
                            data = json.load(f)
                            if isinstance(data, list):
                                self.events[category].extend(data)
                            else:
                                self.events[category].append(data)
                    except json.JSONDecodeError:
                        print(f"Error loading {file}")

    def get_events_by_category(self, category: str) -> List[Dict]:
        """Get events for a specific category"""
        return self.events.get(category, [])

    def get_today_events(self) -> Dict[str, List[Dict]]:
        """Filter events for today (Friday)"""
        today_events = {}

        for category, events in self.events.items():
            today_list = [e for e in events if e.get('schedule', {}).get('day_of_week') == 'Friday']
            if today_list:
                today_events[category] = today_list

        return today_events

    def get_featured_events(self) -> List[Dict]:
        """Get all featured events for today"""
        featured = []
        for category, events in self.get_today_events().items():
            for event in events:
                if event.get('details', {}).get('featured'):
                    featured.append(event)

        # Sort by start time
        featured.sort(key=lambda x: x.get('schedule', {}).get('start_time', '00:00'))
        return featured

    def format_time(self, time_str: str) -> str:
        """Convert 24-hour to 12-hour format"""
        try:
            time_obj = datetime.strptime(time_str, '%H:%M')
            return time_obj.strftime('%I:%M %p').lstrip('0')
        except:
            return time_str

    def print_header(self):
        """Print app header"""
        print("\n" + "="*80)
        print("🌃 SF NIGHTLIFE GUIDE - WHAT TO DO TONIGHT (Friday, Nov 7)")
        print("="*80 + "\n")

    def print_featured_events(self):
        """Display featured events"""
        featured = self.get_featured_events()
        if not featured:
            return

        print("⭐ FEATURED EVENTS")
        print("-" * 80)

        for event in featured[:8]:
            name = event.get('name', 'N/A')
            venue = event.get('venue', {}).get('name', 'N/A')
            start_time = self.format_time(event.get('schedule', {}).get('start_time', ''))
            end_time = self.format_time(event.get('schedule', {}).get('end_time', ''))
            category = event.get('category', '').title()

            print(f"\n  {name}")
            print(f"  📍 {venue}")
            print(f"  🕐 {start_time} - {end_time}")
            print(f"  📌 {category}")

        print("\n" + "-" * 80 + "\n")

    def print_category_section(self, category: str, events: List[Dict]):
        """Print events for a category"""
        print(f"\n🍻 {category.upper()}")
        print("-" * 80)

        # Sort by start time
        sorted_events = sorted(
            events,
            key=lambda x: x.get('schedule', {}).get('start_time', '00:00')
        )

        for event in sorted_events:
            name = event.get('name', 'N/A')
            venue = event.get('venue', {}).get('name', 'N/A')
            neighborhood = event.get('venue', {}).get('neighborhood', '')
            start_time = self.format_time(event.get('schedule', {}).get('start_time', ''))
            end_time = self.format_time(event.get('schedule', {}).get('end_time', ''))
            price = event.get('details', {}).get('price', 'N/A')
            featured = "⭐ " if event.get('details', {}).get('featured') else "  "

            print(f"\n{featured}{name}")
            print(f"   📍 {venue} ({neighborhood})")
            print(f"   🕐 {start_time} - {end_time} | 💰 {price}")

            specials = event.get('details', {}).get('specials', [])
            if specials:
                print(f"   🎉 {', '.join(specials[:2])}")

    def display_by_time(self):
        """Display events organized by time"""
        print("\n⏰ EVENTS BY TIME")
        print("-" * 80)

        today_events = self.get_today_events()
        all_events = []

        for category, events in today_events.items():
            all_events.extend(events)

        # Sort by start time
        all_events.sort(key=lambda x: x.get('schedule', {}).get('start_time', '00:00'))

        current_period = None
        for event in all_events:
            start_time = event.get('schedule', {}).get('start_time', '00:00')
            hour = int(start_time.split(':')[0])

            if hour < 17:
                period = "AFTERNOON (Before 5pm)"
            elif hour < 21:
                period = "EVENING (5pm - 9pm)"
            else:
                period = "LATE NIGHT (9pm+)"

            if period != current_period:
                print(f"\n{period}")
                current_period = period

            name = event.get('name', 'N/A')
            venue = event.get('venue', {}).get('name', 'N/A')
            category = event.get('category', '').title()
            time_str = f"{self.format_time(start_time)}"

            print(f"  {time_str:12} | {name:30} @ {venue:25} ({category})")

    def display_by_neighborhood(self):
        """Show events by neighborhood"""
        print("\n📍 EVENTS BY NEIGHBORHOOD")
        print("-" * 80)

        today_events = self.get_today_events()
        neighborhoods = {}

        for category, events in today_events.items():
            for event in events:
                neighborhood = event.get('venue', {}).get('neighborhood', 'Unknown')
                if neighborhood not in neighborhoods:
                    neighborhoods[neighborhood] = []
                neighborhoods[neighborhood].append(event)

        for neighborhood in sorted(neighborhoods.keys()):
            events = neighborhoods[neighborhood]
            print(f"\n{neighborhood} ({len(events)} events)")
            for event in events:
                name = event.get('name', 'N/A')
                time_str = self.format_time(event.get('schedule', {}).get('start_time', ''))
                print(f"  • {time_str:12} {name}")

    def display_all_by_category(self):
        """Display all events organized by category"""
        today_events = self.get_today_events()

        # Category order
        category_order = ['Happy Hour', 'Trivia', 'Bingo', 'Dining', 'Sports', 'Other']

        for category in category_order:
            if category in today_events:
                self.print_category_section(category, today_events[category])

    def show_event_details(self, event_name: str):
        """Show detailed information about an event"""
        today_events = self.get_today_events()

        for category, events in today_events.items():
            for event in events:
                if event_name.lower() in event.get('name', '').lower():
                    print(f"\n{'='*80}")
                    print(f"📌 {event.get('name')}")
                    print('='*80)

                    # Venue
                    venue = event.get('venue', {})
                    print(f"\n📍 VENUE")
                    print(f"   Name: {venue.get('name')}")
                    print(f"   Address: {venue.get('address')}")
                    print(f"   Neighborhood: {venue.get('neighborhood')}")
                    print(f"   Phone: {venue.get('phone')}")
                    print(f"   Website: {venue.get('website')}")
                    print(f"   Type: {venue.get('type')}")

                    # Schedule
                    schedule = event.get('schedule', {})
                    print(f"\n🕐 SCHEDULE")
                    print(f"   Time: {self.format_time(schedule.get('start_time'))} - {self.format_time(schedule.get('end_time'))}")
                    print(f"   Day: {schedule.get('day_of_week')}")
                    print(f"   Recurring: {'Yes' if schedule.get('recurring') else 'No'}")

                    # Details
                    details = event.get('details', {})
                    print(f"\n📋 DETAILS")
                    print(f"   Description: {details.get('description')}")
                    print(f"   Price: {details.get('price')}")
                    print(f"   Age Requirement: {details.get('age_requirement')}")
                    print(f"   Capacity: {details.get('capacity', 'N/A')}")

                    # Specials
                    specials = details.get('specials', [])
                    if specials:
                        print(f"\n🎉 SPECIALS")
                        for special in specials:
                            print(f"   • {special}")

                    # Ratings
                    ratings = event.get('ratings', {})
                    if ratings:
                        print(f"\n⭐ RATINGS")
                        if ratings.get('google'):
                            print(f"   Google: {ratings.get('google')}/5")
                        if ratings.get('yelp'):
                            print(f"   Yelp: {ratings.get('yelp')}/5")

                    return

        print(f"\nEvent '{event_name}' not found.")

    def run_interactive(self):
        """Run interactive menu"""
        while True:
            self.print_header()
            print("What would you like to do?")
            print("  1. View FEATURED events (recommended!)")
            print("  2. View all events by category")
            print("  3. View events by time of day")
            print("  4. View events by neighborhood")
            print("  5. Search for specific event")
            print("  6. Exit")
            print()

            choice = input("Enter choice (1-6): ").strip()

            if choice == '1':
                self.print_header()
                self.print_featured_events()
                input("Press Enter to continue...")

            elif choice == '2':
                self.print_header()
                self.display_all_by_category()
                input("\nPress Enter to continue...")

            elif choice == '3':
                self.print_header()
                self.display_by_time()
                input("\nPress Enter to continue...")

            elif choice == '4':
                self.print_header()
                self.display_by_neighborhood()
                input("\nPress Enter to continue...")

            elif choice == '5':
                self.print_header()
                search = input("Search for event: ").strip()
                self.show_event_details(search)
                input("\nPress Enter to continue...")

            elif choice == '6':
                print("\nThanks for using SF Nightlife Guide! Have a great night! 🌃")
                break

            else:
                print("Invalid choice. Please try again.")
                input("Press Enter to continue...")

def main():
    """Main entry point"""
    app = SFNightlifeApp()

    # Check for command line arguments
    if len(sys.argv) > 1:
        arg = sys.argv[1].lower()

        if arg == '--featured':
            app.print_header()
            app.print_featured_events()

        elif arg == '--all':
            app.print_header()
            app.display_all_by_category()

        elif arg == '--time':
            app.print_header()
            app.display_by_time()

        elif arg == '--neighborhoods':
            app.print_header()
            app.display_by_neighborhood()

        elif arg == '--search' and len(sys.argv) > 2:
            search_term = ' '.join(sys.argv[2:])
            app.show_event_details(search_term)

        else:
            print("Usage:")
            print("  python app.py --featured     (Show featured events)")
            print("  python app.py --all          (Show all events by category)")
            print("  python app.py --time         (Show events by time)")
            print("  python app.py --neighborhoods (Show events by neighborhood)")
            print("  python app.py --search EVENT  (Search for specific event)")
            print("  python app.py                (Interactive menu)")

    else:
        # Run interactive mode
        app.run_interactive()

if __name__ == '__main__':
    main()

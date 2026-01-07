# GES Calendar - Quick Feature Guide

## 🎯 Quick Start

### Accessing the Calendar
Navigate to `/academic-calendar` or click "GES Calendar" in the navigation menu.

## 📱 View Modes

### 1️⃣ Month View
```
┌─────────────────────────────────────┐
│  ◄  January 2026  ►   [Today]      │
├─────────────────────────────────────┤
│ Sun Mon Tue Wed Thu Fri Sat         │
├─────────────────────────────────────┤
│          1   2   3   4   5          │
│  6   7   8   9  10  11  12          │
│ 13  14  15  16  17  18  19          │
│ 20  21  22  23  24  25  26          │
│ 27  28  29  30  31                  │
└─────────────────────────────────────┘
```
- Full month grid
- Up to 2 events per day visible
- Color-coded event badges
- Click any day to see details

### 2️⃣ Week View
```
┌─────────────────────────────────────┐
│  ◄  Week of Jan 5, 2026  ►         │
├─────────────────────────────────────┤
│ Sun Mon Tue Wed Thu Fri Sat         │
│  5   6   7   8   9  10  11          │
│                                     │
│ [Detailed event view for each day]  │
└─────────────────────────────────────┘
```
- 7-day focused view
- More detail per day
- Navigate week by week

### 3️⃣ List View
```
┌─────────────────────────────────────┐
│ Academic: Midterm Exams             │
│ 📅 Jan 15, 2026  🕐 9:00 AM         │
│ 📍 Main Hall                        │
│ [Details...]                        │
├─────────────────────────────────────┤
│ Sports: Basketball Tournament       │
│ 📅 Jan 20, 2026  🕐 2:00 PM         │
│ 📍 Sports Complex                   │
│ [Details...]                        │
└─────────────────────────────────────┘
```
- Chronological event list
- All details visible
- Quick export/share buttons

## 🔍 Search & Filter

### Search Bar
```
┌──────────────────────────────┐
│ 🔍 Search events...          │
└──────────────────────────────┘
```
Searches across:
- Event titles
- Descriptions
- Locations

### Category Filter
```
┌─────────────────────────────────────┐
│ Filter by Category                  │
├─────────────────────────────────────┤
│ [All] [Academic] [Sports]           │
│ [Cultural] [Administrative] [Other] │
└─────────────────────────────────────┘
```

## 🎨 Event Categories & Colors

| Category       | Color  | Badge |
|---------------|--------|-------|
| Academic      | Blue   | 🔵    |
| Sports        | Green  | 🟢    |
| Cultural      | Purple | 🟣    |
| Administrative| Orange | 🟠    |
| Other         | Teal   | 🔷    |

## 🎬 Animation Highlights

### Interactive Elements
- **Day hover**: Smooth background gradient
- **Event click**: Scale and highlight
- **Navigation**: Slide transitions
- **Modal open**: Zoom effect with backdrop blur

### Visual Feedback
- Today's date: Gold circular badge
- Selected date: Teal ring highlight
- Event hover: Subtle lift effect
- Button press: Scale down animation

## 📤 Export & Share Features

### Export Event
```
Click Event → [⬇️ Export]
```
Downloads `.ics` file compatible with:
- Google Calendar
- Apple Calendar
- Outlook
- Any iCalendar app

### Share Event
```
Click Event → [📤 Share]
```
- Mobile: Native share sheet
- Desktop: Copy to clipboard

## 🎯 Quick Actions

### Navigation Shortcuts
- **Today Button**: Jump to current date instantly
- **◄ Previous**: Go back (month/week)
- **► Next**: Go forward (month/week)
- **Click Date**: View day's events

### Toolbar Actions
```
┌──────────────────────────────────────────────┐
│ [Month] [Week] [List]  🔍[Search] 🔧[Filter] │
└──────────────────────────────────────────────┘
```

## 💡 Pro Tips

### 1. Multi-Event Days
Days with 3+ events show "+X more" indicator. Click the day to see all events.

### 2. Event Details
Click any event to open detailed modal with:
- Full description
- Category badge
- Date/time/location
- Export & share buttons

### 3. Quick Navigation
- Use Week View for detailed planning
- Use List View for overview
- Use Month View for scheduling

### 4. Filtering Workflow
1. Open filter panel (🔧 button)
2. Select category
3. Combine with search for precision
4. Clear filters anytime (select "All Events")

### 5. Mobile Experience
- Swipe-friendly interface
- Responsive touch targets
- Native share on mobile devices
- Optimized for small screens

## 🎨 Visual Hierarchy

### Priority Levels
1. **Today** - Gold badge, ring highlight
2. **Selected Date** - Teal ring, gradient background
3. **Event Days** - Bold text, colored badges
4. **Other Days** - Standard appearance
5. **Adjacent Months** - Muted gray

### Color Meaning
- **Gold**: Current/today emphasis
- **Teal**: Selection/active state
- **Category Colors**: Event types
- **White/Cream**: Base containers
- **Navy**: Primary text

## 🔄 State Management

### Current State Indicators
- **View Mode**: Active button highlighted
- **Selected Date**: Ring around date
- **Active Event**: Gradient background in list
- **Filters Active**: Blue filter button

## ⌨️ Keyboard Shortcuts (Future)
Coming soon:
- Arrow keys for navigation
- Enter to select event
- Esc to close modal
- Tab for keyboard navigation

## 📱 Responsive Breakpoints

- **Mobile** (< 640px): Stacked layout, condensed view
- **Tablet** (640px - 1024px): Partial sidebar
- **Desktop** (> 1024px): Full 4-column layout

## 🎯 Best Practices

### For Administrators
1. Add event categories for better organization
2. Include time and location when available
3. Write clear, concise descriptions
4. Use consistent date formatting

### For Users
1. Use search for quick lookups
2. Filter by category for specific event types
3. Export important events to personal calendar
4. Check List View for upcoming events overview

---

## 🆘 Troubleshooting

### Events Not Showing
- Check active filters
- Clear search query
- Verify correct month selected

### Export Not Working
- Check browser download settings
- Try different browser
- Ensure popup blockers disabled

### Share Not Working
- On mobile: Grant share permissions
- On desktop: Check clipboard access
- Fallback: Manually copy event details

---

**Quick Access**: `/academic-calendar`
**Version**: 2.0.0
**Updated**: January 7, 2026

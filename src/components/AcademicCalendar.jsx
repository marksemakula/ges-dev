import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CMSContext } from '../cms/CMSProvider';
import { LuChevronLeft, LuChevronRight, LuCalendar, LuClock, LuMapPin } from 'react-icons/lu';

// Get all days in a month with proper padding for calendar grid
function getCalendarDays(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  const days = [];
  
  // Add padding days from previous month
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthLastDay - i),
      isCurrentMonth: false
    });
  }
  
  // Add current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: new Date(year, month, i),
      isCurrentMonth: true
    });
  }
  
  // Add padding days from next month
  const remainingDays = 42 - days.length; // 6 rows * 7 days
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      isCurrentMonth: false
    });
  }
  
  return days;
}

export default function AcademicCalendar() {
  const { calendarEvents, fetchCalendarEvents } = useContext(CMSContext);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchCalendarEvents && fetchCalendarEvents();
  }, [fetchCalendarEvents]);

  const days = getCalendarDays(currentMonth.getFullYear(), currentMonth.getMonth());
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleDayClick = (dayInfo) => {
    setSelectedDate(dayInfo.date);
    const events = eventsForDay(dayInfo.date);
    if (events.length > 0) {
      setSelectedEvent(events[0]);
    } else {
      setSelectedEvent(null);
    }
  };

  const eventsForDay = (date) => {
    if (!calendarEvents) return [];
    const dateStr = date.toISOString().split('T')[0];
    return calendarEvents.filter(ev => ev.date === dateStr);
  };

  const getEventsForMonth = () => {
    if (!calendarEvents) return [];
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    return calendarEvents.filter(ev => {
      const eventDate = new Date(ev.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const monthEvents = getEventsForMonth();

  const isToday = (date) => {
    return date.getTime() === today.getTime();
  };

  const isSelected = (date) => {
    return selectedDate && date.getTime() === selectedDate.getTime();
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="min-h-screen bg-gray-400 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-ges-navy mb-4">GES Calendar</h1>
          <p className="text-ges-slate text-lg">Stay updated with all important events and dates</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-gradient-to-r from-ges-navy to-ges-teal p-6">
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                    className="text-white hover:text-ges-gold transition-colors p-2"
                  >
                    <LuChevronLeft className="w-8 h-8" />
                  </motion.button>
                  
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">
                      {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h2>
                    <p className="text-ges-gold mt-1">{monthEvents.length} events this month</p>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                    className="text-white hover:text-ges-gold transition-colors p-2"
                  >
                    <LuChevronRight className="w-8 h-8" />
                  </motion.button>
                </div>
              </div>

              {/* Week Days Header */}
              <div className="grid grid-cols-7 bg-ges-cream border-b border-gray-200">
                {weekDays.map(day => (
                  <div key={day} className="p-4 text-center font-semibold text-ges-navy">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">
                <AnimatePresence mode="wait">
                  {days.map((dayInfo, index) => {
                    const events = eventsForDay(dayInfo.date);
                    const hasEvents = events.length > 0;
                    const isTodayDate = isToday(dayInfo.date);
                    const isSelectedDate = isSelected(dayInfo.date);

                    return (
                      <motion.div
                        key={`${dayInfo.date.toISOString()}-${index}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.01 }}
                        onClick={() => dayInfo.isCurrentMonth && handleDayClick(dayInfo)}
                        className={`
                          min-h-[100px] p-3 border border-gray-100 cursor-pointer transition-all duration-300
                          ${!dayInfo.isCurrentMonth ? 'bg-gray-50 text-gray-400' : 'bg-white hover:bg-ges-cream/50'}
                          ${isTodayDate ? 'ring-2 ring-ges-gold' : ''}
                          ${isSelectedDate ? 'bg-ges-teal/10' : ''}
                        `}
                      >
                        <div className="flex flex-col h-full">
                          <div className={`
                            text-sm font-semibold mb-2
                            ${isTodayDate ? 'bg-ges-gold text-white rounded-full w-8 h-8 flex items-center justify-center' : ''}
                            ${!dayInfo.isCurrentMonth ? 'text-gray-400' : 'text-ges-navy'}
                          `}>
                            {dayInfo.date.getDate()}
                          </div>
                          
                          <div className="flex-1 space-y-1">
                            {events.slice(0, 2).map((event, idx) => (
                              <motion.div
                                key={event.id}
                                whileHover={{ scale: 1.05 }}
                                className="text-xs bg-ges-teal text-white rounded px-2 py-1 truncate"
                              >
                                {event.title}
                              </motion.div>
                            ))}
                            {events.length > 2 && (
                              <div className="text-xs text-ges-slate">
                                +{events.length - 2} more
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Sidebar - Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-ges-navy mb-4 flex items-center">
                <LuCalendar className="w-6 h-6 mr-2 text-ges-gold" />
                Upcoming Events
              </h3>
              
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {monthEvents.length > 0 ? (
                  monthEvents.map((event, idx) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => {
                        setSelectedEvent(event);
                        setSelectedDate(new Date(event.date));
                      }}
                      className={`
                        p-4 rounded-xl cursor-pointer transition-all duration-300
                        ${selectedEvent?.id === event.id ? 'bg-ges-teal text-white' : 'bg-ges-cream hover:bg-ges-gold/20'}
                      `}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`
                          flex-shrink-0 w-12 h-12 rounded-lg flex flex-col items-center justify-center
                          ${selectedEvent?.id === event.id ? 'bg-white/20' : 'bg-white'}
                        `}>
                          <div className={`text-xs font-semibold ${selectedEvent?.id === event.id ? 'text-white' : 'text-ges-navy'}`}>
                            {new Date(event.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
                          </div>
                          <div className={`text-lg font-bold ${selectedEvent?.id === event.id ? 'text-white' : 'text-ges-navy'}`}>
                            {new Date(event.date).getDate()}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${selectedEvent?.id === event.id ? 'text-white' : 'text-ges-navy'}`}>
                            {event.title}
                          </h4>
                          {event.description && (
                            <p className={`text-sm mt-1 ${selectedEvent?.id === event.id ? 'text-white/80' : 'text-ges-slate'}`}>
                              {event.description.substring(0, 60)}...
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8 text-ges-slate">
                    <LuCalendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No events scheduled for this month</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Event Details Section Below */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8"
            >
              <div className="bg-gradient-to-r from-ges-navy to-ges-teal rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h2 className="text-4xl font-bold text-white mb-4">{selectedEvent.title}</h2>
                      <div className="flex flex-wrap gap-4 text-ges-gold">
                        <div className="flex items-center">
                          <LuCalendar className="w-5 h-5 mr-2" />
                          <span>{new Date(selectedEvent.date).toLocaleDateString('default', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        {selectedEvent.time && (
                          <div className="flex items-center">
                            <LuClock className="w-5 h-5 mr-2" />
                            <span>{selectedEvent.time}</span>
                          </div>
                        )}
                        {selectedEvent.location && (
                          <div className="flex items-center">
                            <LuMapPin className="w-5 h-5 mr-2" />
                            <span>{selectedEvent.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedEvent(null)}
                      className="mt-4 md:mt-0 bg-white text-ges-navy px-6 py-2 rounded-full font-semibold hover:bg-ges-gold transition-colors"
                    >
                      Close
                    </motion.button>
                  </div>
                  
                  {selectedEvent.description && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Event Details</h3>
                      <p className="text-white/90 leading-relaxed">{selectedEvent.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

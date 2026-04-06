<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <p class="page-hero__eyebrow">GES Academic Calendar</p>
        <h1 class="page-hero__title">Academic Calendar {{ currentYear }}/{{ currentYear + 1 }}</h1>
        <p class="page-hero__subtitle">Key dates, terms, and events across all GES institutions.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="terms-grid">
          <div v-for="term in terms" :key="term.name" class="term-card">
            <div class="term-card__header">
              <h3 class="term-card__name">{{ term.name }}</h3>
              <span class="term-card__dates">{{ term.dates }}</span>
            </div>
            <ul class="term-card__events">
              <li v-for="event in term.events" :key="event.date" class="term-event">
                <span class="term-event__date">{{ event.date }}</span>
                <span class="term-event__name">{{ event.name }}</span>
                <span :class="['term-event__tag', `term-event__tag--${event.type}`]">{{ event.type }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const terms = [
  {
    name: 'Term 1',
    dates: 'February – April',
    events: [
      { date: '5 Feb', name: 'Term Opens', type: 'opening' },
      { date: '14 Feb', name: 'Inter-House Sports Begin', type: 'event' },
      { date: '15–19 Mar', name: 'Mid-Term Break', type: 'holiday' },
      { date: '12 Apr', name: 'End of Term Exams', type: 'exam' },
      { date: '26 Apr', name: 'Term Closes', type: 'closing' },
    ],
  },
  {
    name: 'Term 2',
    dates: 'May – August',
    events: [
      { date: '3 May', name: 'Term Opens', type: 'opening' },
      { date: '10–14 Jun', name: 'Mock Examinations (S4/S6)', type: 'exam' },
      { date: '16–20 Jun', name: 'Mid-Term Break', type: 'holiday' },
      { date: '15 Jul', name: 'Annual Science Fair', type: 'event' },
      { date: '9 Aug', name: 'Term Closes', type: 'closing' },
    ],
  },
  {
    name: 'Term 3',
    dates: 'September – December',
    events: [
      { date: '6 Sep', name: 'Term Opens', type: 'opening' },
      { date: '10 Oct', name: 'GES Annual Day', type: 'event' },
      { date: '20–24 Oct', name: 'Mid-Term Break', type: 'holiday' },
      { date: '1–12 Nov', name: 'National Examinations (UNEB)', type: 'exam' },
      { date: '5 Dec', name: 'Prize-Giving & Graduation', type: 'event' },
      { date: '14 Dec', name: 'Term Closes', type: 'closing' },
    ],
  },
];
</script>

<style scoped>
.page { min-height: 100vh; }
.page-hero { background: #0A2342; padding: 7rem 0 4rem; text-align: center; }
.page-hero__eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #00C7B7; margin-bottom: 0.75rem; }
.page-hero__title { font-size: clamp(2.25rem, 5vw, 3.5rem); font-weight: 700; color: #fff; margin-bottom: 1rem; }
.page-hero__subtitle { font-size: 1rem; color: rgba(255,255,255,0.7); max-width: 560px; margin: 0 auto; line-height: 1.7; }
.section { padding: 5rem 0; }
.container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.terms-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
@media (min-width: 1024px) { .terms-grid { grid-template-columns: repeat(3, 1fr); } }

.term-card { border: 1px solid #e5e9f0; border-radius: 12px; overflow: hidden; background: #fff; }
.term-card__header { background: #0A2342; padding: 1.25rem 1.5rem; }
.term-card__name { font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 0.2rem; }
.term-card__dates { font-size: 0.8rem; color: #00C7B7; font-weight: 500; }
.term-card__events { list-style: none; padding: 0; margin: 0; }
.term-event { display: flex; align-items: center; gap: 0.625rem; padding: 0.875rem 1.25rem; border-bottom: 1px solid #f0f2f6; }
.term-event:last-child { border-bottom: none; }
.term-event__date { font-size: 0.75rem; font-weight: 700; color: #0A2342; min-width: 52px; }
.term-event__name { font-size: 0.875rem; color: #374151; flex: 1; }
.term-event__tag { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; padding: 0.18rem 0.5rem; border-radius: 4px; white-space: nowrap; }
.term-event__tag--opening { background: #d1fae5; color: #065f46; }
.term-event__tag--closing { background: #fce7f3; color: #9d174d; }
.term-event__tag--exam { background: #fef3c7; color: #92400e; }
.term-event__tag--event { background: #e0e7ff; color: #3730a3; }
.term-event__tag--holiday { background: #f3f4f6; color: #4b5563; }
</style>

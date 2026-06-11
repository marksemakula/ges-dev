<template>
  <InstitutionLayout
    name="Gombe Junior School – Boarding"
    short-name="GJS Boarding"
    type="Boarding Primary School · Pre-Primary to P7"
    tagline="A home away from home where every child thrives academically and personally."
    description="Gombe Junior School – Boarding offers a distinctive residential primary education experience. Our boarding environment provides structured routines, supervised study, and a rich co-curricular programme that builds independence and resilience from an early age."
    logo="/images/Gombe Junior School logo.png"
    email="boarding@gjs.ac.ug"
    accent="#1A1A1A"
    accent-dark="#000000"
    :quick-info="quickInfo"
    :highlights="highlights"
    :programmes="programmes"
  />
</template>

<script setup lang="ts">
import InstitutionLayout from '../components/InstitutionLayout.vue';

const quickInfo = [
  { label: 'Location', value: 'Gombe, Butebo', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
  { label: 'Ages', value: '5–13 years', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
  { label: 'Setting', value: 'Full Boarding', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>' },
  { label: 'Curriculum', value: 'Uganda National', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/></svg>' },
];
const highlights = [
  { title: 'Supervised Study', description: 'Structured daily study sessions with teacher support seven days a week.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
  { title: 'Nutritious Meals', description: 'Balanced, freshly prepared meals provided throughout the school term.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>' },
  { title: 'Character Building', description: 'Strong pastoral care developing integrity, responsibility, and resilience.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
];
const programmes = [
  { name: 'Kindergarten', level: 'Ages 5–6', description: 'Play-based learning with structured literacy and numeracy foundations.' },
  { name: 'Primary Education', level: 'P1–P7', description: 'Full Uganda Primary Curriculum with PLE preparation in upper primary.' },
];
</script>

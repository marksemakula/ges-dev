<template>
  <InstitutionLayout
    name="Gombe Junior School – About"
    short-name="Gombe Junior School"
    type="About Our Junior Schools"
    tagline="Learn about the vision, values, and history behind Gombe Junior School."
    description="Gombe Junior School has been shaping young minds across two campuses – Kikajjo and Boarding – since its founding. Rooted in GES's commitment to academic excellence and holistic development, our junior schools set the stage for lifelong learning."
    logo="/images/Gombe Junior School logo.png"
    email="info@gjs.ac.ug"
    :quick-info="quickInfo"
    :highlights="highlights"
    :programmes="programmes"
  />
</template>

<script setup lang="ts">
import InstitutionLayout from '../components/InstitutionLayout.vue';

const quickInfo = [
  { label: 'Campuses', value: '2', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>' },
  { label: 'Total Students', value: '1,000+', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
  { label: 'Part of GES', value: 'Since 1998', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' },
  { label: 'Levels', value: 'Pre-Primary to P7', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/></svg>' },
];
const highlights = [
  { title: 'PLE Excellence', description: 'Consistently strong Primary Leaving Examination results year on year.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>' },
  { title: 'Qualified Teachers', description: 'All teachers are professionally trained and regularly upskilled through GES CPD programmes.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
  { title: 'Two Campus Options', description: 'Choose between day school (Kikajjo) and full boarding (Boarding Campus) based on your needs.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>' },
];
const programmes = [
  { name: 'Kikajjo Day Campus', level: 'Kampala', description: 'Day school offering Pre-Primary through P7 with small classes and individual attention.' },
  { name: 'Boarding Campus', level: 'Gombe', description: 'Residential primary school providing supervised study and a structured environment.' },
];
</script>

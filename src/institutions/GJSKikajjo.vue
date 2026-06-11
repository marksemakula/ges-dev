<template>
  <InstitutionLayout
    name="Gombe Junior School – Kikajjo"
    short-name="GJS Kikajjo"
    type="Primary School · Pre-Primary to P7"
    tagline="Laying strong foundations for lifelong learning in a caring environment."
    description="Gombe Junior School – Kikajjo provides exceptional early childhood and primary education. Our child-centred approach ensures every learner develops confidence, curiosity, and the academic skills needed for secondary school and beyond."
    logo="/images/Gombe Junior School logo.png"
    email="kikajjo@gjs.ac.ug"
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
  { label: 'Location', value: 'Kikajjo, Kampala', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
  { label: 'Ages', value: '3–13 years', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
  { label: 'Class Sizes', value: 'Max 30', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/></svg>' },
  { label: 'Type', value: 'Day School', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>' },
];
const highlights = [
  { title: 'Child-Centred Learning', description: 'Play-based and inquiry learning approaches that ignite natural curiosity.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
  { title: 'Safe Environment', description: 'Fully secured campus with qualified child protection staff.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
  { title: 'Holistic Development', description: 'Music, art, PE, and clubs complementing academic learning.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' },
];
const programmes = [
  { name: 'Pre-Primary (Baby Class & Kindergarten)', level: 'Ages 3–5', description: 'Structured play and early literacy and numeracy in a nurturing setting.' },
  { name: 'Lower Primary', level: 'P1–P4 (Ages 6–10)', description: 'Core subjects: English, Mathematics, Science, Social Studies, and CRE.' },
  { name: 'Upper Primary', level: 'P5–P7 (Ages 11–13)', description: 'PLE preparation with specialist teaching and enrichment activities.' },
];
</script>

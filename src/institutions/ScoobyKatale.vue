<template>
  <InstitutionLayout
    name="Scooby Doo International School Uganda – Katale"
    short-name="SISU Katale"
    type="International School · Pre-School to A-Level"
    tagline="An international education experience that opens doors to the world."
    description="Scooby Doo International School Uganda (SISU) – Katale Campus delivers a world-class international curriculum in the heart of Uganda. With a diverse student body and globally experienced teachers, SISU prepares students for international universities and careers."
    logo="/images/scooby-logo.png"
    email="katale@sisu.ac.ug"
    accent="#3D3D3D"
    accent-dark="#111111"
    :quick-info="quickInfo"
    :highlights="highlights"
    :programmes="programmes"
  />
</template>

<script setup lang="ts">
import InstitutionLayout from '../components/InstitutionLayout.vue';

const quickInfo = [
  { label: 'Location', value: 'Katale, Kampala', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
  { label: 'Students', value: '450+', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
  { label: 'Nationalities', value: '20+', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' },
  { label: 'Curriculum', value: 'International', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
];
const highlights = [
  { title: 'International Curriculum', description: 'Globally recognised programme preparing students for universities worldwide.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>' },
  { title: 'Diverse Community', description: 'Students and teachers from over 20 countries providing a rich global perspective.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>' },
  { title: 'Modern Facilities', description: 'State-of-the-art classrooms, ICT labs, sports courts, and creative arts studios.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
];
const programmes = [
  { name: 'Early Years Foundation', level: 'Ages 3–5', description: 'International early years curriculum fostering curiosity and communication.' },
  { name: 'International Primary', level: 'Ages 6–11', description: 'Inquiry-based learning across core subjects with global contexts.' },
  { name: 'International Secondary', level: 'Ages 12–16', description: 'Internationally benchmarked O-Level equivalent programme.' },
  { name: 'International A-Level', level: 'Ages 17–18', description: 'Advanced studies preparing students for global university entry.' },
];
</script>

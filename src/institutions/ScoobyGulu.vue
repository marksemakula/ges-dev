<template>
  <InstitutionLayout
    name="Scooby Doo International School Uganda – Gulu"
    short-name="SISU Gulu"
    type="International School · Pre-School to O-Level"
    tagline="Bringing world-class international education to Northern Uganda."
    description="SISU Gulu Campus extends the GES international school network to Northern Uganda. Serving the Gulu community and beyond, SISU Gulu provides internationally benchmarked education in a welcoming, multicultural environment, creating pathways to global opportunities."
    logo="/images/scooby-logo.png"
    email="gulu@sisu.ac.ug"
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
  { label: 'Location', value: 'Gulu City', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
  { label: 'Students', value: '300+', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
  { label: 'Established', value: '2018', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' },
  { label: 'Curriculum', value: 'International', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>' },
];
const highlights = [
  { title: 'Regional Leadership', description: 'The only international school offering a globally recognised curriculum in North Uganda.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>' },
  { title: 'Community Integration', description: 'Deep ties with the Gulu community, including outreach and scholarship programmes.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
  { title: 'Bilingual Education', description: 'English and Acholi language support ensuring inclusive learning for all students.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
];
const programmes = [
  { name: 'Early Years & Kindergarten', level: 'Ages 3–6', description: 'Internationally inspired early childhood education in a warm, supportive setting.' },
  { name: 'International Primary', level: 'Ages 6–11', description: 'Inquiry-based, globally contextualised primary curriculum.' },
  { name: 'International Secondary', level: 'Ages 12–16', description: 'Internationally benchmarked secondary programme leading to global certification.' },
];
</script>

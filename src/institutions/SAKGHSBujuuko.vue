<template>
  <InstitutionLayout
    name="St. Andrew Kaggwa Gombe High School – Bujuuko"
    short-name="SAKGHS Bujuuko"
    type="Secondary School · A-Level & O-Level"
    tagline="Nurturing tomorrow's leaders through academic rigour and moral grounding."
    description="St. Andrew Kaggwa Gombe High School – Bujuuko offers a serene, focused learning environment on the outskirts of Kampala. Our campus blends modern academic facilities with traditional values, delivering outstanding UCE and UACE results year after year."
    logo="/images/Gombe High logo.png"
    email="bujuuko@sakghs.ac.ug"
    :quick-info="quickInfo"
    :highlights="highlights"
    :programmes="programmes"
  />
</template>

<script setup lang="ts">
import InstitutionLayout from '../components/InstitutionLayout.vue';

const quickInfo = [
  { label: 'Location', value: 'Bujuuko, Wakiso', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
  { label: 'Students', value: '600+', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
  { label: 'Established', value: '2003', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' },
  { label: 'Setting', value: 'Day & Boarding', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
];
const highlights = [
  { title: 'Boarding Facilities', description: 'Modern, secure boarding accommodation for students from across Uganda.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>' },
  { title: 'Science Emphasis', description: 'State-of-the-art laboratories supporting STEM education at O and A-Level.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>' },
  { title: 'Pastoral Care', description: 'Dedicated house parents and counsellors ensuring student wellbeing.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
];
const programmes = [
  { name: 'Uganda Certificate of Education', level: 'O-Level (S1–S4)', description: 'Broad secondary curriculum across sciences, humanities, and technical subjects.' },
  { name: 'Uganda Advanced Certificate of Education', level: 'A-Level (S5–S6)', description: 'Specialist subject combinations tailored to university pathway goals.' },
];
</script>

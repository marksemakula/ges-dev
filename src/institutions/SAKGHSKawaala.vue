<template>
  <InstitutionLayout
    name="St. Andrew Kaggwa Gombe High School – Kawaala"
    short-name="SAKGHS Kawaala"
    type="Secondary School · A-Level & O-Level"
    tagline="Building academic excellence and character in every student since 1995."
    description="St. Andrew Kaggwa Gombe High School – Kawaala is one of Uganda's premier secondary schools, offering both O-Level and A-Level education. Our rigorous academic programmes, combined with a nurturing environment, prepare students for national examinations and beyond."
    logo="/images/Gombe High logo.png"
    email="kawaala@sakghs.ac.ug"
    accent="#00C7B7"
    accent-dark="#0A2342"
    :quick-info="quickInfo"
    :highlights="highlights"
    :programmes="programmes"
  />
</template>

<script setup lang="ts">
import InstitutionLayout from '../components/InstitutionLayout.vue';

const quickInfo = [
  { label: 'Location', value: 'Kawaala, Kampala', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
  { label: 'Students', value: '800+', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
  { label: 'Established', value: '1995', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' },
  { label: 'Curriculum', value: 'Uganda National', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
];
const highlights = [
  { title: 'Academic Excellence', description: 'Consistently high UCE and UACE pass rates, with students gaining admissions to top universities.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>' },
  { title: 'Co-Curricular Activities', description: 'Rich programme of sports, music, drama, and debate clubs fostering holistic development.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' },
  { title: 'Experienced Faculty', description: 'Highly qualified and dedicated teachers committed to every student\'s success.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>' },
];
const programmes = [
  { name: 'Uganda Certificate of Education (UCE)', level: 'O-Level (S1–S4)', description: 'Comprehensive four-year secondary education programme leading to national examinations.' },
  { name: 'Uganda Advanced Certificate of Education (UACE)', level: 'A-Level (S5–S6)', description: 'Two-year advanced study programme preparing students for university education.' },
  { name: 'Sciences & Technology', level: 'All Levels', description: 'Specialist science laboratories and technology integration across all subjects.' },
];
</script>

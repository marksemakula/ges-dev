<template>
  <InstitutionLayout
    name="Jimmy Sekasi Business Institute"
    short-name="JSBI"
    type="Higher Education · Business & Entrepreneurship"
    tagline="Equipping Uganda's next generation of entrepreneurs and business leaders."
    description="The Jimmy Sekasi Business Institute (JSBI) is GES's flagship higher education institution, offering professional business and entrepreneurship programmes. Working closely with industry partners, JSBI combines academic rigour with real-world application to produce graduates ready to lead and innovate."
    logo="/images/Jimmy Ssekasi Business Institute Logo.png"
    email="info@jsbi.ac.ug"
    accent="#8B4513"
    accent-dark="#5D2E0C"
    :quick-info="quickInfo"
    :highlights="highlights"
    :programmes="programmes"
  />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'branded' })
import InstitutionLayout from '../../components/InstitutionLayout.vue';

const quickInfo = [
  { label: 'Location', value: 'Kampala, Uganda', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
  { label: 'Level', value: 'Higher Education', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/></svg>' },
  { label: 'Duration', value: '1–3 Years', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
  { label: 'Study Mode', value: 'Full & Part Time', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' },
];
const highlights = [
  { title: 'Industry Partnerships', description: 'Close collaboration with leading Ugandan and international businesses providing internships and placements.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>' },
  { title: 'Entrepreneurship Hub', description: 'Dedicated startup incubator and innovation lab for students to develop business ideas.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' },
  { title: 'Professional Certifications', description: 'Accredited programmes leading to nationally and internationally recognised qualifications.', svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>' },
];
const programmes = [
  { name: 'Diploma in Business Administration', level: '2 Years', description: 'Comprehensive foundation in business management, accounting, and marketing.' },
  { name: 'Certificate in Entrepreneurship', level: '1 Year', description: 'Practical programme for aspiring entrepreneurs and small business owners.' },
  { name: 'Diploma in Human Resource Management', level: '2 Years', description: 'Professional HR qualification recognised by industry leaders across East Africa.' },
  { name: 'Bachelor of Business Administration', level: '3 Years', description: 'Full degree programme in partnership with accredited university partners.' },
  { name: 'Short Courses & Professional Development', level: 'Flexible', description: 'Modular CPD courses in leadership, finance, digital marketing, and more.' },
];
</script>

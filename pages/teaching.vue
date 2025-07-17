<script setup>
import { NButton, NCard, NText, NFlex, NH2, NDivider } from 'naive-ui'
import CourseCard from '/course_card.vue'
</script>

<template>
    <n-h2>Texas Christian University</n-h2>
    <n-flex vertical>
        <CourseCard
            name="Machine Learning and Big Data in Economics"
            number="ECON 40970"
            syllabus="/syllabus_big_data.pdf"
            terms="Spring 2025"
        />
        <CourseCard
            name="Intermediate Macroeconomics"
            number="ECON 30233"
            syllabus="/syllabus_macro.pdf"
            terms="Spring 2025, Fall 2024"
        />
    </n-flex>
    <n-divider />
    
    <n-h2>University of Rochester</n-h2>
    <n-flex vertical>
        <CourseCard
            name="Computational Macroeconomics"
            number=""
            syllabus="/syllabus_computational.pdf"
            terms="Fall 2020, Fall 2019"
        />
        <CourseCard
            name="Intermediate Macroeconomics"
            number="ECO 209"
            syllabus="/syllabus_209.pdf"
            terms="Summer 2020"
        />
    </n-flex>
</template>

<script setup>
import { NButton, NCard, NText, NFlex, NH2, NDivider } from 'naive-ui'
import CourseCard from '/course_card.vue'
</script>

<template>
    <n-flex vertical>
        <CourseCard
            name="Growth Model Simulator"
            number=""
            url="https://sgordeev.com/growth-model-simulator/"
            desc="An interactive dashboard that simulates various models of economic growth that are commonly found in undergraduate macro and growth courses"
        />
    </n-flex>
    <n-divider />

    <n-h2 style="color: #4d1979; font-weight: bold;">Texas Christian University</n-h2>
    <n-flex vertical>
        <CourseCard
            name="Machine Learning and Big Data in Economics"
            number="ECON 40970"
            syllabus="/syllabus_big_data.pdf"
            desc="Spring 2025"
        />
        <CourseCard
            name="Intermediate Macroeconomics"
            number="ECON 30233"
            syllabus="/syllabus_macro.pdf"
            desc="Spring 2025, Fall 2024"
        />
    </n-flex>
    <n-divider />
    
    <n-h2 style="color: #283FAF; font-weight: bold;">University of Rochester</n-h2>
    <n-flex vertical>
        <CourseCard
            name="Computational Macroeconomics"
            number=""
            syllabus="/syllabus_computational.pdf"
            desc="Fall 2020, Fall 2019"
        />
        <CourseCard
            name="Intermediate Macroeconomics"
            number="ECO 209"
            syllabus="/syllabus_209.pdf"
            desc="Summer 2020"
        />
    </n-flex>
</template>

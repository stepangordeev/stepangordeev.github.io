<script setup>
import { NImage, NGrid, NGridItem, NH2, NDivider, NFlex, NCard } from 'naive-ui'
import PaperCard from '/paper_card.vue'
</script>

<template>
    <div style="font-size: 32px; font-weight: bold; margin-bottom: 0.2em;">
        Stepan Gordeev
    </div>
    <div class="profile-container">
        <img
            src="/profile.jpg"
            class="profile-image"
        />
        <div class="profile-text">
            <p style="margin-top: 0;"> I am an Assistant Professor of Economics at Texas Christian University. I completed my Ph.D. in Economics at the University of Rochester in 2022 and served as a Postdoctoral Research Associate at the University of Connecticut in 2022–2024.
            </p>
            <p>
            My research is at the intersection of macroeconomics and development.
            </p>
            <p>I strive to understand the role that the heterogeneous behavior of individual firms and households responding to their unique constraints plays in determining the aggregate development path of the economy.
            </p>
        </div>
    </div>
    <n-divider />
    <div>
        <n-flex vertical>

        <n-h2 style="font-weight: bold;">Working Papers</n-h2>

        <PaperCard
            title="Misallocation and Product Choice"
            authors="Sudhir Singh"
            status=""
            date="updated October 2023"
            abstract="This paper explores the impact of misallocation on product choice in a heterogeneous firm model."
            pdf="/misallocation_and_product_choice.pdf"
        />


        </n-flex>
    </div>
</template>

<style scoped>
.profile-container {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
}

.profile-image {
    width: 30%;
    height: auto;
    object-fit: cover;
	-webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
    border-radius: .25rem;
}

.profile-text {
    width: 70%;
}

/* Responsive design for narrow screens */
@media (max-width: 600px) {
    .profile-container {
        flex-direction: column;
        gap: 1rem;
    }
    
    .profile-image {
        width: 100%;
    }
    
    .profile-text {
        width: 100%;
    }
}
</style>
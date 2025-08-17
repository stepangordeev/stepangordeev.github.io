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
            abstract="We study the costs of misallocation of inputs between multi-product firms that endogenously choose among heterogeneous products. Misallocation of inputs between firms has been shown to be a significant drag on aggregate productivity: it is especially severe between farms in the agricultural sectors of low-income economies. Existing estimates of its costs have relied on models of single-product firms using a single aggregate production function. Using rich farm-crop-level data from India, we estimate product-level production functions and find that they are meaningfully different from one another and from the aggregate one. We build a general equilibrium model of firm-level misallocation in which multi-product firms (or farms) are able to choose the set and mix of heterogeneous products. Misinterpreting product heterogeneity as evidence of distortions and missing the endogenous product choice response to real distortions biases single-product models to overstate misallocation, while ignoring returns-to-scale heterogeneity and within-firm productivity dispersion biases them to understate it. On net, the single-product model understates the aggregate productivity cost of misallocation between Indian farms by 28%."
            pdf="/misallocation_and_product_choice.pdf"
            slides="/misallocation_and_product_choice_slides.pdf"
            working_name="STEG WP"
            working_link="https://steg.cepr.org/publications/misallocation-and-product-choice"
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
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
            <p style="display: flex; align-items: center;">
                <Icon name="fa7-solid:envelope" />
                &nbsp;
                <a class="email-link" href="mailto:s.gordeev@tcu.edu">s.gordeev@tcu.edu</a>
            </p>
        </div>
    </div>
    <n-divider />
    <div>
        <n-flex vertical>

        <n-h2 style="font-weight: bold;">Working Papers</n-h2>


        <PaperCard
            title="Reaching the Novice or Nudging the Expert? Networks, Information, and the Experimental Returns to Migration"
            title_link="/networks_information_migration.pdf"
            authors="Zachary Barnett-Howell, Travis Baseler, Thomas Ginn"
            status=""
            date="updated August 2025"
            abstract="Large differences between rural and urban incomes prevail in almost every low-income country, but it is unclear why these gaps persist and what policies can help migrants take advantage of them. We first document widespread information gaps: in a representative sample across five Kenyan counties, villagers underestimate earnings in the capital city by 30-60% on average. In a randomized trial with 17,000 households, we find that disseminating information through household visits increases migration and improves economic outcomes, especially among households with no past migration history. Providing information together with new social network connections in the capital amplifies economic benefits. However, disseminating information to groups leads households with more migration experience to crowd out higher-return, inexperienced ones, increasing migration but generating no measurable economic gains. We build and estimate a general-equilibrium Roy model that rationalizes our results and predicts settings where they generalize. In the model, the marginal returns to migrating are higher among the inexperienced if and only if migrants are positively selected, as they are in our setting and many others. Model estimates imply that removing information frictions in Kenya would increase the migration rate from 17 to 22% and reduce the rural-urban income gap by 25%. In many settings, the value of migration interventions may depend on whether they can reach less-experienced, novice migrants."
            registry_name="AEA RCT Registry"
            registry_link="https://www.socialscienceregistry.org/trials/10051"
        />

        <PaperCard
            title="Misallocation and Product Choice"
            title_link="/misallocation_and_product_choice.pdf"
            authors="Sudhir Singh"
            status=""
            date="updated October 2023"
            abstract="We study the costs of misallocation of inputs between multi-product firms that endogenously choose among heterogeneous products. Misallocation of inputs between firms has been shown to be a significant drag on aggregate productivity: it is especially severe between farms in the agricultural sectors of low-income economies. Existing estimates of its costs have relied on models of single-product firms using a single aggregate production function. Using rich farm-crop-level data from India, we estimate product-level production functions and find that they are meaningfully different from one another and from the aggregate one. We build a general equilibrium model of firm-level misallocation in which multi-product firms (or farms) are able to choose the set and mix of heterogeneous products. Misinterpreting product heterogeneity as evidence of distortions and missing the endogenous product choice response to real distortions biases single-product models to overstate misallocation, while ignoring returns-to-scale heterogeneity and within-firm productivity dispersion biases them to understate it. On net, the single-product model understates the aggregate productivity cost of misallocation between Indian farms by 28%."
            slides="/misallocation_and_product_choice_slides.pdf"
            working_name="STEG WP"
            working_link="https://steg.cepr.org/publications/misallocation-and-product-choice"
        />

        <PaperCard
            title="Input-Driven Production Technology Heterogeneity and the Allocation of Inputs"
            title_link="/input_heterogeneity_misallocation.pdf"
            authors="Sudhir Singh"
            date="updated October 2023"
            abstract="We study whether heterogeneity in the intrinsic features of production inputs may generate heterogeneity in production technologies optimally chosen by firms, leading existing estimates of misallocation to overstate its costs. Existing estimates of the severity of the misallocation of inputs across firms rely on assuming homogeneous production technology and interpreting deviations from that technology as evidence of misallocative distortions. We use a state-of-the-art clustering algorithm for ordinal data to group Indian agricultural plots into land types by the intrinsic physical features of each plot. We find that production functions are significantly heterogeneous across land types, which we confirm with placebo-like randomization inference. Some types of land are better suited to land-intensive technology, others to labor-intensive technology, etc. We build a model in which heterogeneous farmers face distortions and choose the type of land to rent. We use the model to quantify the cost of misallocation for India’s aggregate agricultural productivity and compare it to conventional models that assume homogeneous production technology."
        />

        <n-h2 style="font-weight: bold;">Publications</n-h2>

        <PaperCard
            title="Nutrition Demand, Subsistence Farming, and Agricultural Productivity"
            title_link="https://doi.org/10.1016/j.jdeveco.2025.103681"
            authors=""
            status=""
            journal="Journal of Development Economics"
            date=", 2026"
            abstract="In many of the poorest countries, agriculture is unproductive and subsistence farming is widespread. I propose nutrition demand as a mechanism that drives the production decisions of subsistence farmers and ultimately contributes to low aggregate agricultural productivity. I explore this mechanism in a model of farm-operating households facing explicit caloric needs and costly domestic trade, and test the model’s predictions on Malawian household-level data. In the model and in the data, the smallest farmers focus their consumption on obtaining calories and specialize their production in unsold staple crops; medium farmers diversify both their diet and their subsistence production; the largest farmers shift consumption to purchased goods by producing and selling marketable farm products. I quantify the aggregate implications of this farm-level product choice using the model. It suggests that lowering trade frictions enough for the average share of output sold by farmers to reach even 50% would make the country’s agricultural sector 42% more productive. Half of this increase is caused by the mechanically reduced erosion of output, and the other half by a better alignment of individual farmers’ product choice with their comparative advantage rather than their family’s nutritional needs or food preferences."
            pdf="/Nutrition Demand, Subsistence Farming, and Agricultural Productivity.pdf"
            slides="/nutrition slides.pdf"
            working_name="STEG WP"
            working_link="https://steg.cepr.org/publications/nutrition-demand-subsistence-farming-and-agricultural-productivity"
            policy_name="STEG Policy Brief"
            policy_link="https://steg.cepr.org/publications/nutrition-demand-subsistence-farming-and-agricultural-productivity-0"
        />

        <PaperCard
            title="What Matters for Agricultural Trade? Assessing the Role of Trade Deal Provisions using Machine Learning"
            title_link="https://doi.org/10.1002/aepp.13525"
            authors="Jeremy Jelliffe, Dongin Kim, Sandro Steinbach"
            status=""
            journal="Applied Economic Perspectives and Policy"
            date=", 2025"
            abstract="This paper employs machine learning to determine which preferential trade agreement (PTA) provisions are relevant to agricultural trade patterns and the factors that may influence their adoption. Utilizing the three-way gravity model, we apply plug-in Lasso regularized regression to pinpoint predictive PTA provisions for agricultural trade. Our findings underscore the importance of competition policies, export taxes, intellectual property rights, capital movement, state enterprises, and technical trade barriers. Subsequently, we use Random Forests to reveal the economic, political, social, and geographic factors associated with the inclusion of those provisions in PTAs. The findings highlight the roles of contagion, governance quality, energy use, and geographic proximity. Our analysis provides new insights that can aid in formulating strategies to support agricultural trade."
            pdf="/what_matters_for_agricultural_trade.pdf"
        />

        <PaperCard
            title="Determinants of PTA Design: Insights from Machine Learning"
            title_link="https://doi.org/10.1016/j.inteco.2024.100504"
            authors="Sandro Steinbach"
            status=""
            journal="International Economics"
            date=", 2024"
            abstract="Preferential Trade Agreements (PTAs) have emerged as the dominant form of international trade governance. Provisions included in PTAs are increasingly numerous, broad in their purview, deep in their scope, and varied between agreements. We study the economic, political, and geographic determinants of PTA design differences. For each of the hundreds of classified PTA provisions, we consider hundreds of country-pair characteristics as potential determinants, covering many individual mechanisms the literature has studied. To deal with this high-dimensionality and complexity, we employ Random Forests, a supervised machine learning technique. We use a robust variable importance measure to identify the most important determinants of the inclusion of each PTA provision. Contagion due to competition for export markets, geographic proximity, and governance quality emerge as the most important determinants of PTA design."
            pdf="/determinants_of_PTA_design.pdf"
            slides="/determinants_of_PTA_design_slides.pdf"
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

a.email-link {
  border-bottom: 1px dashed var(--n-text-color) !important;
  color: var(--n-text-color) !important;
  text-decoration: none;
}
a.email-link:hover {
  border-bottom: 1px solid var(--n-text-color) !important;
}

</style>
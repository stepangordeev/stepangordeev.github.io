<script setup>
import { NImage, NGrid, NGridItem } from 'naive-ui'
</script>

<template>
    <div style="font-size: 40px; font-weight: bold; margin-bottom: 0.2em;">
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
</template>

<style scoped>
.profile-container {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
}

.profile-image {
    width: 40%;
    height: auto;
    object-fit: cover;
	-webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
    border-radius: .25rem;
}

.profile-text {
    width: 60%;
}

/* Responsive design for narrow screens */
@media (max-width: 768px) {
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
<script setup>
import { NImage, NGrid, NGridItem } from 'naive-ui'
</script>

<template>
    <div style="display: flex; justify-content: center;">
        <n-grid :cols="5" layout-shift-disabled>
            <n-gi :span="2">
                <n-image
                    src="profile.jpg"
                    width="100%"
                />
            </n-gi>
            <n-gi :span="3">
                <n-flex vertical>
                    <div>
                    I am an Assistant Professor of Economics at Texas Christian University. I completed my Ph.D. in Economics at the University of Rochester in 2022 and served as a Postdoctoral Research Associate at the University of Connecticut in 2022–2024.
                    </div>
                    <div>
                    My research is at the intersection of macroeconomics and development.
                    </div>
                    <div>
                    I strive to understand the role that the heterogeneous behavior of individual firms and households responding to their unique constraints plays in determining the aggregate development path of the
                    </div>
                </n-flex>
            </n-gi>
        </n-grid>
    </div>
</template>
<template>
    <v-list lines="one">
        <v-list-item v-for="item in items" :key="item.title" :title="item.title"></v-list-item>
    </v-list>
</template>

<script>
export default {
    name: "ReportsList",
    props: {
        items: [],
    }
    // data: () => ({
    //     items: [
    //         {
    //             title: 'Item #1',
    //             value: 1,
    //         },
    //         {
    //             title: 'Item #2',
    //             value: 2,
    //         },
    //         {
    //             title: 'Item #3',
    //             value: 3,
    //         },
    //     ],
    // }),
}
</script>
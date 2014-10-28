new Vue({
    el: '#editor',
    data: {
        input: '# Write MarkDown! '
    },
    filters: {
        marked: marked
    }
})

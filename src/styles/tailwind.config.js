module.exports = {
    content: [
        "./src/index.njk",
        "./src/_includes/*.{html,md,11ty.js,njk}",
        "./src/pages/*.{html,md,11ty.js,njk}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'alice': ['Alice', 'serif'],
                'quicksand': ['Quicksand', 'sans-serif']
            },
            colors: {
                'ice-yellow': '#fff6d3',
                'ice-orange': '#f9a875',
                'ice-red'   : '#7c3f58',
                'ice-bright': '#eb6b6f',
                'bit-black' : '#222323',
                'bit-white' : '#f0f6f0'
            },
            dropShadow: {
                'solid-orange': '25px 25px #f9a875',
                'solid-red' : '-15px -15px #7c3f58'
            }
        },
    },
}

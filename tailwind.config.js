module.exports = {
    content: ["./*.html"],
    theme: {
      extend: {
        colors: {
          'main-color': 'var(--main-color)',
          'btn-color': 'var(--btn-color)',
          'text-color': 'var(--text-color)',
          'bg-color': 'var(--bg-color)',
        },
        fontFamily: {
          crimson: ['var(--font-crimson)'],
          worksans: ['var(--font-worksans)'],
          main: ['var(--font-main)'],
        },
      },
    },
    plugins: [],
  }
  
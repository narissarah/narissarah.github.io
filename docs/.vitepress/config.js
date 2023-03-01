export default {
	themeConfig: {
	  logo: '/logo.png',
	  siteTitle: 'narissara.lol',
	  nav: [
		{ text: 'About', link: '/about' },
		{ text: 'Portfolio', link: '/portfolio' },
	  ],
	  socialLinks: [
		{ icon: 'github', link: 'https://github.com/narissarah/narissarah.github.io' },
	  ]
	},
	configureWebpack: {
		resolve: {
		  // Add support for loading PDF files
		  alias: {
			'pdf': 'file-loader?name=[name].[ext]!./public/pdf/'
		  }
		}
	  }
  }
  
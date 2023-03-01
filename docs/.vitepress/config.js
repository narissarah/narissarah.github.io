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
	chainWebpack: (config) => {
		config.module.rule('images').test(/\.(png|jpe?g|gif|webp)$/i).use('file-loader').end();
	  },
	configureWebpack: {
		module: {
		  rules: [
			{
			  test: /\.(pdf)(\?.*)?$/,
			  use: [
				{
				  loader: 'file-loader',
				  options: {
					name: 'pdf/[name].[hash:8].[ext]',
				  },
				},
			  ],
			},
		  ],
		},
	  },
  };
  
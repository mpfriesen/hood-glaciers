var config = {
	chapters: [
		{
			id: 'glac56',
			alignment: 'right',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-121.69572, 45.37342],
				zoom: 13.49,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'topo62-shade',
					opacity: 1
				},
				{
					layer: 'topo20-shade',
					opacity: 0
				}
				
			],
			onChapterProgress: [
				{
					layer: 'glac_56_fill',
					opacity: .3
				},
				{
					layer: 'glac_56',
					opacity: 1
				}
			],
		},
		{
			id: 'topo20',
			alignment: 'right',
			title: '',
			image: '',
			description: '',
			location: '',
			onChapterProgress: [
				{
					layer: 'topo20-shade',
					opacity: 1
				}
			],
		},
		{
			id: 'glac21',
			alignment: 'right',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-121.69572, 45.37342],
				zoom: 13.49,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterProgress: [
				{
					layer: 'glac_21_fill',
					opacity: .3
				},
				{
					layer: 'glac_21',
					opacity: 1
				},
				{
					layer: 'topo62-shade',
					opacity: 0
				}
			],
		},
		{
			id: 'zigzag',
			alignment: 'right',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-121.71169, 45.36234],
				zoom: 14.37,
				pitch: 78.00,
				bearing: 48.00
			},
			onChapterProgress: [
				{
					layer: 'zigzag-56',
					opacity: 1,
					color: '#2188aa'
				},
				{
					layer: 'zigzag-56_fill',
					opacity: .3,
					color: '#2188aa'
				},
				{
					layer: 'topo20-shade',
					opacity: 0
				},
				{
					layer: 'glac_56',
					opacity: 0
				},
				{
					layer: 'glac_56_fill',
					opacity: 0
				},
				{
					layer: 'glac_21',
					opacity: 0
				},
				{
					layer: 'glac_21_fill',
					opacity: 0
				}
			]
		},
		{
			id: 'zigzag21',
			alignment: 'right',
			title: '',
			image: '',
			description: '',
			location: '',
			onChapterProgress: [
				{
					layer: 'zigzag-21',
					opacity: 1,
					color: '#990000',
					lwidth: 3
				},
				{
					layer: 'zigzag-21_fill',
					opacity: .3,
					color: '#990000'
				}
			]
		},
		{
			id: 'sandy',
			alignment: 'right',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-121.71200, 45.37915],
				zoom: 13.98,
				pitch: 71.50,
				bearing: 119.20
			},
			onChapterProgress: [
				{
					layer: 'zigzag-56',
					opacity: 0
				},
				{
					layer: 'zigzag-56_fill',
					opacity: 0
				},{
					layer: 'zigzag-21',
					opacity: 0
				},
				{
					layer: 'zigzag-21_fill',
					opacity: 0
				},
				{
					layer: 'sandy-56',
					opacity: 1,
					color: '#2188aa',
					lwidth: 3
				},
				{
					layer: 'sandy-56_fill',
					opacity: .3,
					color: '#2188aa'
				}
			]
		},
		{
			id: 'sandy21',
			alignment: 'right',
			title: '',
			image: '',
			description: '',
			location: '',
			onChapterProgress: [
				{
					layer: 'sandy-21',
					opacity: 1,
					color: '#990000',
					lwidth: 3
				},
				{
					layer: 'sandy-21_fill',
					opacity: .3,
					color: '#990000'
				}
			]
		},
		{
			id: 'palmer',
			alignment: 'right',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-121.70498, 45.35307],
				zoom: 14.33,
				pitch: 74.00,
				bearing: 20.80
			},
			onChapterProgress: [
				{
					layer: 'sandy-56',
					opacity: 0
				},
				{
					layer: 'sandy-56_fill',
					opacity: 0
				},{
					layer: 'sandy-21',
					opacity: 0
				},
				{
					layer: 'sandy-21_fill',
					opacity: 0
				},
				{
					layer: 'palmer-56',
					opacity: 1,
					color: '#2188aa',
					lwidth: 3
				},
				{
					layer: 'palmer-56_fill',
					opacity: .3,
					color: '#2188aa'
				}
			]
		},
		{
			id: 'palmer21',
			alignment: 'right',
			title: '',
			image: '',
			description: '',
			location: '',
			onChapterProgress: [
				{
					layer: 'palmer-21',
					opacity: 1,
					color: '#990000',
					lwidth: 3
				},
				{
					layer: 'palmer-21_fill',
					opacity: .3,
					color: '#990000'
				}
			]
		}
	]
};
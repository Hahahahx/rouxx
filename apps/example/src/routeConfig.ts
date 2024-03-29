/* eslint-disable */
// @ts-nocheck
import {lazy} from 'react';
import Page from './pages';
import * as PageHandles from './pages';
import PageDd from './pages/dd';
import * as PageDdHandles from './pages/dd';
import PageLogin from './pages/login!';
import * as PageLoginHandles from './pages/login!';
import PageMain from './pages/main';
import * as PageMainHandles from './pages/main';
import PageOther from './pages/other';
import * as PageOtherHandles from './pages/other';
import PageTest from './pages/test';
import * as PageTestHandles from './pages/test';
import PageMainTomato from './pages/main/tomato';
import * as PageMainTomatoHandles from './pages/main/tomato';
const PageMainPotato = lazy(() => import('./pages/main/~potato'));
import * as PageMainPotatoHandles from './pages/main/~potato';
import PageMainTomatoName from './pages/main/tomato/[name]';
import * as PageMainTomatoNameHandles from './pages/main/tomato/[name]';
import PageMainTomatoNameId from './pages/main/tomato/[name]/[id]';
import * as PageMainTomatoNameIdHandles from './pages/main/tomato/[name]/[id]';
import PageMainPotatoId from './pages/main/~potato/[id]';
import * as PageMainPotatoIdHandles from './pages/main/~potato/[id]';
import PageOtherFsd from './pages/other/fsd';
import * as PageOtherFsdHandles from './pages/other/fsd';



const router=[
	{
		element: Page,
		handles: PageHandles.handles,
		relative: './pages',
		absolute: 'G:/JS/self/roux/apps/example/src/pages',
		path: '/',
		pathName: '',
		index: false,
		lazy: false,
		param: false,
		recursion: true,
		child: [
			{
				element: PageDd,
				handles: PageDdHandles.handles,
				relative: './pages/dd',
				absolute: 'G:/JS/self/roux/apps/example/src/pages/dd.tsx',
				path: '/dd',
				pathName: 'dd',
				index: false,
				lazy: false,
				param: false,
				recursion: false,
				child: null
			},
			{
				element: PageLogin,
				handles: PageLoginHandles.handles,
				relative: './pages/login!',
				absolute: 'G:/JS/self/roux/apps/example/src/pages/login!',
				path: '/login',
				pathName: 'login',
				index: true,
				lazy: false,
				param: false,
				recursion: true,
				child: null
			},
			{
				element: PageMain,
				handles: PageMainHandles.handles,
				relative: './pages/main',
				absolute: 'G:/JS/self/roux/apps/example/src/pages/main',
				path: '/main',
				pathName: 'main',
				index: false,
				lazy: false,
				param: false,
				recursion: true,
				child: [
					{
						element: PageMainTomato,
						handles: PageMainTomatoHandles.handles,
						relative: './pages/main/tomato',
						absolute: 'G:/JS/self/roux/apps/example/src/pages/main/tomato',
						path: '/main/tomato',
						pathName: 'tomato',
						index: false,
						lazy: false,
						param: false,
						recursion: true,
						child: [
							{
								element: PageMainTomatoName,
								handles: PageMainTomatoNameHandles.handles,
								relative: './pages/main/tomato/[name]',
								absolute: 'G:/JS/self/roux/apps/example/src/pages/main/tomato/[name]',
								path: '/main/tomato/:name',
								pathName: ':name',
								index: false,
								lazy: false,
								param: true,
								recursion: true,
								child: [
									{
										element: PageMainTomatoNameId,
										handles: PageMainTomatoNameIdHandles.handles,
										relative: './pages/main/tomato/[name]/[id]',
										absolute: 'G:/JS/self/roux/apps/example/src/pages/main/tomato/[name]/[id].tsx',
										path: '/main/tomato/:name/:id',
										pathName: ':id',
										index: false,
										lazy: false,
										param: true,
										recursion: false,
										child: null
									}
								]
							}
						]
					},
					{
						element: PageMainPotato,
						handles: PageMainPotatoHandles.handles,
						relative: './pages/main/~potato',
						absolute: 'G:/JS/self/roux/apps/example/src/pages/main/~potato',
						path: '/main/potato',
						pathName: 'potato',
						index: false,
						lazy: true,
						param: false,
						recursion: true,
						child: [
							{
								element: PageMainPotatoId,
								handles: PageMainPotatoIdHandles.handles,
								relative: './pages/main/~potato/[id]',
								absolute: 'G:/JS/self/roux/apps/example/src/pages/main/~potato/[id].tsx',
								path: '/main/potato/:id',
								pathName: ':id',
								index: false,
								lazy: false,
								param: true,
								recursion: false,
								child: null
							}
						]
					}
				]
			},
			{
				element: PageOther,
				handles: PageOtherHandles.handles,
				relative: './pages/other',
				absolute: 'G:/JS/self/roux/apps/example/src/pages/other',
				path: '/other',
				pathName: 'other',
				index: false,
				lazy: false,
				param: false,
				recursion: true,
				child: [
					{
						element: PageOtherFsd,
						handles: PageOtherFsdHandles.handles,
						relative: './pages/other/fsd',
						absolute: 'G:/JS/self/roux/apps/example/src/pages/other/fsd',
						path: '/other/fsd',
						pathName: 'fsd',
						index: false,
						lazy: false,
						param: false,
						recursion: true,
						child: null
					}
				]
			},
			{
				element: PageTest,
				handles: PageTestHandles.handles,
				relative: './pages/test',
				absolute: 'G:/JS/self/roux/apps/example/src/pages/test',
				path: '/test',
				pathName: 'test',
				index: false,
				lazy: false,
				param: false,
				recursion: true,
				child: null
			}
		]
	}
]

export default router;
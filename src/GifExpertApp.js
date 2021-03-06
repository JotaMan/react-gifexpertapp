import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {

	const arr = ['one punch']
	const [categories, setCategories] = useState(arr)

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{
					categories.map(category => {
						return (
							<GifGrid
								key={category}
								category={category}
							/>
						)
					})
				}
			</ol> </>)
}



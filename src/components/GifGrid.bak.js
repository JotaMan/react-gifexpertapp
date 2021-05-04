import React, {useState, useEffect} from 'react'
import {GifGridItem} from './GifGridItem'
import {getGifs} from '../helpers/getGifs'

export const GiffGrid = ({category}) => {
	//	const [count, setCount] = useState(0)
	const [images, setImages] = useState([])

	useEffect(() => {
		getGifs(category).then(
			setImages
		)
	}, [category])


	// const handleClick = () => {
	// 	setCount(count + 1)
	// }
	return (
		<>
			<h3>{category}</h3>
			<div className="card-grid">{
				images.map((img) => {
					return (
						<GifGridItem
							key={img.id}
							{...img} />
					)
				})
			}
			</div>

			{/* <h2>{count}</h2> */}
			{/* <button onClick={handleClick}>+1</button> */}
		</>
	)
}

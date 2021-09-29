import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

const products = [
    { id: 1, name: 'Camisa' , description: 'Running shoes.', price: '$5', image: 'https://nineplanets.org/wp-content/uploads/2020/10/Mom-Of-The-Birthday-Astronaut-Boy-And-Girl-Space-Theme-T-Shirt.jpg'},
    { id: 2, name: 'Camisa' , description: 'Apple Mackbook.', price: '$10', image: 'https://i5.walmartimages.com/asr/bf83272c-d369-4cbe-9878-edc577aed016_1.432c904c55ecf210fd041077e54d7556.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'}
]

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
    
}

export default Products
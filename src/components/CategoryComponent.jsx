import React from 'react'
import { Container } from 'react-bootstrap'

const CategoryComponent = () => {
    return (
        <section className="category-component mt-3">
            <Container>
                <div className="category d-flex align-items-center">
                    <div className="fs-3">Popular</div>

                    <div className="category-links d-flex justify-content-between ms-auto">
                        <ul className='d-flex list-unstyled gap-3 mt-3'>
                            <li><a href="" className='text-decoration-none text-white bg rounded p-2'>Category 1</a></li>
                            <li><a href="" className='text-decoration-none text-white  bg rounded p-2'>Category 2</a></li>
                            <li><a href="" className='text-decoration-none text-white  bg rounded p-2'>Category 3</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CategoryComponent
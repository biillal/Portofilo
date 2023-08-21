import React from 'react'
import './projects.css'
function Projects() {
    return (
        <div className='projet-about'>
            <div>
                <div className='header-project d-flex justify-content-between'>
                    <div className='title-priject'>
                        <ul>
                            <li><h5>Personel portfolio Website</h5></li>
                        </ul>
                    </div>
                    <div className='date-priject '>
                        2022-2023
                    </div>
                </div>
                <div className='sub-desc'>
                    Technology used : <span>React js , Bootstrap</span>
                </div>
                <div className='desc-project'>
                    A personel protofilio website
                </div>
            </div>
        </div>
    )
}

export default Projects

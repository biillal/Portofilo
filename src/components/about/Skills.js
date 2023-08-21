import React from 'react'
import './skills.css'
const frontendSkils = [
    {
        title: "html",
        width: "90%",
        percentage: "90%"
    },
    {
        title: "css",
        width: "85%",
        percentage: "85%"
    },
    {
        title: "javaScript",
        width: "80%",
        percentage: "80%"
    },
    {
        title: "react js",
        width: "90%",
        percentage: "90%"
    },
    {
        title: "materiel ui",
        width: "70%",
        percentage: "70%"
    },
]
const backendSkils = [
    {
        title: "php",
        width: "70%",
        percentage: "70%"
    },
    {
        title: "mysql",
        width: "80%",
        percentage: "80%"
    },
    {
        title: "node js",
        width: "85%",
        percentage: "85%"
    },
    {
        title: "express",
        width: "90%",
        percentage: "90%"
    },
    {
        title: "mongoDb",
        width: "80%",
        percentage: "80%"
    },
]
function Skills() {
    return (
        <div className='skills_wrapper d-flex gap-5'>
            <div className='front-end'>
                {
                    frontendSkils.map((item, index) => {
                        return (
                            <div className='skils_data mb-3'>
                                <div className='skills-title d-flex align-items-center justify-content-between'>
                                    <h6>{item.title}</h6>
                                    <span> {item.percentage} </span>
                                </div>
                                <div className='skills_ber'>
                                    <span className='skills__ber-percentage' style={{width: `${item.percentage}`}}></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='back-end'>
                {
                    backendSkils.map((item, index) => {
                        return (
                            <div className='skils_data mb-3'>
                                <div className='skills-title d-flex align-items-center justify-content-between'>
                                    <h6>{item.title}</h6>
                                    <span> {item.percentage} </span>
                                </div>
                                <div className='skills_ber'>
                                    <span className='skills__ber-percentage' style={{width: `${item.percentage}`}}></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills

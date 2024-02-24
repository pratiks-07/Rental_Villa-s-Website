import React from 'react'

const Regions = () => {
    return (
        <>
            <section id='regions'>
                <h1>OUR REGIONS</h1>
                <p>Explore our diverse range of properties across various regions. Each region offers unique landscapes, lifestyles, and property opportunities. Whether you're looking for a mountain retreat, a coastal escape, or a bustling urban center, we've got you covered. Browse through our selection of properties and find perfect home for you.</p>
                <div className="region_container">
                    <div className="card">
                        <img src="/region1.jpg" alt="mountains" />
                        <h2>Mountains</h2>
                        <p><span>80</span> Properties</p>                          
                    </div>  
                    <div className="card">
                        <img src="/region2.jpg" alt="coastline" />
                        <h2>Coastline</h2>
                        <p><span>52</span> Properties</p>
                    </div>
                </div>        

            </section>
        </>
    )
}

export default Regions


// span tag used to styling number where p tah for paragraph
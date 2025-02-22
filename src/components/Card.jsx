import React from 'react'

function Card({ data }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.map((item, index) => (
                <div key={index} className="p-2 border border-gray-500">
                    <div className="h-60 w-48 flex items-center justify-center w-full">
                        <img
                            src={item.category?.image || "https://via.placeholder.com/600"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Title */}
                    <h2 className="text-white text-lg text-center mt-2">{item.title}</h2>
                    <p className='text-white text-sm text-center mt-2'>{item.description}</p>
                </div>
            ))}
        </div>

    )
}

export default Card

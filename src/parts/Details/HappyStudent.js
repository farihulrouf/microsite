import React from 'react'
import Star from 'src/components/Star'
export default function HappyStudent({data}) {
    return (
        <div className="mt-8">
            <Star value={data?.rating ?? 0 } width={26} height={26}></Star>
            <p className="text-gray-600 mt-1">{data?.note ?? "Student's Response"}</p>
            <div className="flex items-center mt-4">
                <div className="w-14 rounded-full overflow-hidden">
                    <img
                    src="https://media.bwamicro.com/images/1593830121922.jpg"
                    alt="pic student"
                    className="object-cover w-14 h-14"
                    />
                </div>

                <div className="ml-4">
                    <h2 className="text-lg text-gray-900">
                        Harry Silver
                    </h2>

                    <h2 className="text-sm text-gray-600">
                        Student
                    </h2>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import Link from 'next/link'
import IconPlay from "public/images/icon-play.svg"

export default function RenderItem( {item} ) {
    //console.log(item)
    return (
        <div className="w-1/4 px-4">
            <div className="item relative">
                <figure className="item-image">
                    <IconPlay></IconPlay>
                    <img src="images/thumb1.jpg" alt=" " />
                </figure>
                <div className="item-meta mt-2">
                    <h4 className="text-lg text-gray-900">
                        {item?.name ?? "Course name" }
                    </h4>

                    <h5 className="text-sm text-gray-600">
                        {item?.level ?? "Course level"}
                    </h5>
                </div>
                <Link href="/courses/[slug]" as={`/courses/${item.id}`}>
                    <a className="link-wrapped"></a>
                </Link>
            </div>
        </div>
    )
}
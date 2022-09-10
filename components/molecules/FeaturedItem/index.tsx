import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface FeaturedProps {
  Thumbnail: string,
  Icon: string,
  Title: string,
  Category: string,
  id: string
}

export default function FeaturedItem(props: FeaturedProps) {
  const { Thumbnail, Icon, Title, Category, id } = props;
  return (
    <div className="featured-game-card position-relative">
        <Link href={`/detail/${id}`}>
            <a>
                <div className="blur-sharp">
                    <Image className='thumbnail' src={`${Thumbnail}`} width={205} height={270} alt="Thumbnail" />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                    <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                        <div className="game-icon mx-auto">
                            <Image src={Icon} width={54} height={36} alt='Icon' />
                        </div>
                        <div>
                            <p className="fw-semibold text-white text-xl m-0">{Title}</p>
                            <p className="fw-light text-white m-0">{Category}</p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    </div>
  )
}

import React from 'react'
import Modal from './Modal'

export default function CardComponent() {
  const posts = [
    {
      id: 1,
      title: 'Cells',
      alt: 'altdxx',
      describe: `The quick brown fox jumps over the lazy dog. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.
                      Nullam consectetur risus vel erat lacinia, a feugiat eros
                      mollis`,
      img: 'https://openseauserdata.com/files/3400767866e725444496284643a42e86.svg',
      content:
        'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content',
      address: ' 123 Main Street, Anytown, USA.',
      link: 'https://opensea.io/collection/cells-xyz',
    },
    {
      id: 2,
      alt: 'altdxx',
      title: 'Cells',
      describe: `The quick brown fox jumps over the lazy dog. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.
                      Nullam consectetur risus vel erat lacinia, a feugiat eros
                      mollis`,
      img: 'https://openseauserdata.com/files/e4c1c1866173f8cf2b48ae078346582c.svg',
      content:
        'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content',
      address: ' 123 Main Street, Anytown, London.',
      link: 'https://opensea.io/assets/ethereum/0x531c24a152060bad20ce77079fcb5bfe56726a4e/882',
    },
    {
      id: 3,
      alt: 'altdxx',
      title: 'This is Noun',
      describe: `WTF is Nouns? That’s the question we sought to answer in this crazy video – packing in more artistic styles than we’ve ever put into a project before, and a sprinkling of humour along the way.`,
      img: 'https://i.seadn.io/gcs/files/a6749ad57d276cd2149eb8bf7fad1dee.png?auto=format&w=1920',
      content:
        'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content',
      address: ' 123 Main Street, Die Hard, Canada.',
      link: 'https://opensea.io/assets/ethereum/0x4f49149ac66129b56996fd0a043a9be63f85e1e2/1319',
    },
    {
      id: 4,
      title: ' goodboiborzoi',
      alt: 'altdxx',
      describe: `The quick brown fox jumps over the lazy dog. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.
                      Nullam consectetur risus vel erat lacinia, a feugiat eros
                      mollis`,
      img: 'https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?auto=format&w=500&h=500',
      content:
        'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content',
      address: ' 123 Main Street, E Be Thing, USA.',
      link: 'https://opensea.io/assets/ethereum/0x894a19ccf5b1137507a45bb981e2c418a73651b6/789',
    },
    {
      id: 5,
      title: 'Owls',
      alt: 'altdxx',
      describe: `The quick brown fox jumps over the lazy dog. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.
                      Nullam consectetur risus vel erat lacinia, a feugiat eros
                      mollis`,
      img: 'https://i.seadn.io/gcs/files/52b51d3618b625808f9d928d36277ce0.png?auto=format&w=500&h=500',
      content:
        'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content',
      address: ' 123 Main Street, Anytown, USA.',
      link: 'https://opensea.io/assets/ethereum/0xe2e27b49e405f6c25796167b2500c195f972ebac/5609',
    },
    {
      id: 6,
      alt: 'altdxx',
      title: '77-bits',
      describe: `The quick brown fox jumps over the lazy dog. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.
                      Nullam consectetur risus vel erat lacinia, a feugiat eros
                      mollis`,
      img: 'https://i.seadn.io/gcs/files/9bd7ce116d309a0cbc1f21c7e6ab9b93.jpg?auto=format&w=500&h=500',
      content:
        'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content',
      address: ' 123 Main Street, Anytown, USA.',
      link: 'https://opensea.io/assets/ethereum/0x497a9a79e82e6fc0ff10a16f6f75e6fcd5ae65a8/836',
    },
    {
      id: 7,
      alt: 'altdxx',
      title: 'Nitro Collection',
      describe: `The quick brown fox jumps over the lazy dog. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.
                      Nullam consectetur risus vel erat lacinia, a feugiat eros
                      mollis`,
      img: 'https://i.seadn.io/s/production/3f8516b0-6b16-461b-b77c-947e4018b382.png?w=500&auto=format',
      content:
        'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content',
      address: ' 123 Main Street, Anytown, Califonia.',
      link: 'https://opensea.io/collection/nitrocollectionpuma',
    },
    {
      id: 8,
      title: 'Healing Hippies',
      alt: 'altdxx',
      describe: `The quick brown fox jumps over the lazy dog. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.
                      Nullam consectetur risus vel erat lacinia, a feugiat eros
                      mollis`,
      img: 'https://i.seadn.io/gcs/files/f43f8b05060b60e22ead8593591796f1.jpg?auto=format&w=500&h=500',
      content:
        'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content',
      address: ' 556 Main Street, Anytown, USA.',
      link: 'https://opensea.io/collection/thehealinghippies/drop',
    },
  ]
  return (
    <>
      <div className="">
        <h1 className='text-5xl font-mono p-2' >NFT Collection</h1>
      </div>
      <div className="grid p-4 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((items, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-48"
              src={items?.img}
              alt={items?.alt}
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">
                {items?.title}
              </h4>
              <p className="mb-2 leading-normal">{items?.content}</p>
              <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                <Modal
                  description={items?.describe}
                  address={items?.address}
                  link={items?.link}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

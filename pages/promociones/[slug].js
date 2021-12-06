import { fetchContent } from '../../utils/contentful'

export const getStaticPaths = async () => {
  const response = await fetchContent(`
    {
      argentinaPromotionCollection(limit: 100) {
          items {
            slug
          }
        }
      }`)

  const paths = response.argentinaPromotionCollection.items.map(item => {
    return {
      params: { slug: item.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  console.log(`where: { slug:"${ params.slug }" }`);
  const response = await fetchContent(`
  {
    argentinaPromotionCollection (
      where: { slug:"${ params.slug }" }
      limit: 1
      )  {
      items {
        title,
        date,
        logo {
          url
        },
        categoriesCollection {
          items {
            slug
          }
        },
        locationsCollection {
          items {
            slug
          }
        },
        description,
        callToAction
        actionText,
        actionUrl,
        conditions,
        featured
      }
    }
  } 
`)

  return {
    props: { promotion: response.argentinaPromotionCollection.items[0] },
    revalidate: 10
  }

}

export default function Details({ promotion }) {
  if (!promotion) return <div>Loading</div>
  return (
    <div>
      {promotion.title}
    </div>
  )
}
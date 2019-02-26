import React from 'react'
import Helmet from 'react-helmet'
import icon from '../img/favicon.ico'

const MetaPost = props => (
  <Helmet
    defaultTitle={`${props.title} ${!props.no ? "| ServCo" : ''} `}
    meta={[
      { name: 'title', content: props.title },

      { name: 'description', content: props.description },
      ,
      {
        property: 'og:title',
        content: props.title,
      },
      {
        property: 'og:url',
        content: props.pathname ? props.url + props.pathname : props.url,
      },

      {
        property: 'og:description',
        content: props.description,
      },

      {
        property: 'og:image:width',
        content: '1200',
      },

      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:locale',
        content: 'en',
      },
      { name: 'twitter:card', content: 'summary_large_image' },

      { name: 'twitter:title', content: props.title },

      {
        name: 'twitter:description',
        content: props.description,
      },
      { property: 'og:type', content: 'website' },


      { name: 'robots', content: 'index, follow' },

      {
        name: 'google-site-verification',
        content: 'naxWqKsZvxQcgyPqmnRDeSY7fGSb3M5L0y4g8ZcQ9H8',
      },
    ]}
  >
    <html lang="en" />
    <link rel="icon" href={icon} />
    {!props.stop && (
      <script type="application/ld+json">
        {`

        [

          {
          "@context": "http://schema.org",
          "@type": "Organization",
          "url": "${props.url}",
          "logo": "${props.url}/img/favicon.ico"
         },
        {
                "@context":"http://schema.org",
            "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                 "position": 1,
              "item": {
              "@id":"${props.url}",
               "name": "Home"
                  }
                },{
                "@type": "ListItem",
                "position": 2,
               "item": {
               "@id": "${props.url + props.pathname}",
               "name": "${props.title}"
               }
           }]
       }
      ]
`}
      </script>
    )}
  </Helmet>
)

export default MetaPost
